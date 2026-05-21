// ============================================================
// HAYTASK - Order Card Component (with real images)
// ============================================================

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faShip, faTruck, faUser, faClock } from '@fortawesome/free-solid-svg-icons';
import type { Order } from '../../types';
import { getItem, formatTime } from '../../data/items';
import { useGame } from '../../store/GameStore';
import { useCountdown } from '../../hooks';
import { ItemImage } from '../ui/ItemImage';
import './OrderCard.scss';

interface OrderCardProps { order: Order; delay?: number; }

const TYPE_CONFIG = {
  visitor: { icon: faUser,  label: 'Visitor',    color: 'green', emoji: '👤' },
  truck:   { icon: faTruck, label: 'Truck Order', color: 'blue',  emoji: '🚚' },
  boat:    { icon: faShip,  label: 'Boat Cargo',  color: 'sky',   emoji: '⛵' },
};

function CountdownDisplay({ expiresAt }: { expiresAt?: number }) {
  const text = useCountdown(expiresAt ?? Date.now() + 86400000);
  return <span>{text}</span>;
}

export function OrderCard({ order, delay = 0 }: OrderCardProps) {
  const { state, dispatch } = useGame();
  const config = TYPE_CONFIG[order.type];

  const totalItems   = order.items.reduce((s, i) => s + i.quantity, 0);
  const fulfilledItems = order.items.reduce((s, i) => s + i.fulfilled, 0);
  const progress     = totalItems > 0 ? (fulfilledItems / totalItems) * 100 : 0;

  const handleAccept  = () => dispatch({ type: 'UPDATE_ORDER', id: order.id, status: 'accepted' });
  const handleDecline = () => dispatch({ type: 'REMOVE_ORDER', id: order.id });

  const handleFulfillItem = (itemId: string) => {
    const orderItem = order.items.find(i => i.itemId === itemId);
    if (!orderItem) return;
    const inStock  = state.stock[itemId] ?? 0;
    const toFulfill = Math.min(inStock, orderItem.quantity - orderItem.fulfilled);
    if (toFulfill <= 0) return;
    dispatch({ type: 'REMOVE_STOCK', itemId, amount: toFulfill });
    dispatch({ type: 'FULFILL_ORDER_ITEM', orderId: order.id, itemId, amount: toFulfill });
  };

  const isComplete = fulfilledItems >= totalItems && totalItems > 0;

  return (
    <motion.div
      className={`order-card order-card--${config.color} ${isComplete ? 'order-card--complete' : ''}`}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16, scale: 0.95 }}
      transition={{ delay: delay * 0.06, duration: 0.3 }}
      layout
    >
      {/* Header */}
      <div className="order-card__header">
        <div className="order-card__type">
          <span className="order-card__type-emoji">{config.emoji}</span>
          <span className="order-card__type-label">{config.label}</span>
        </div>
        <div className="order-card__rewards">
          <span className="order-card__reward">🪙 {order.reward}</span>
          <span className="order-card__xp">⭐ {order.xp} XP</span>
        </div>
        {order.expiresAt && (
          <div className="order-card__timer">
            <FontAwesomeIcon icon={faClock} />
            <CountdownDisplay expiresAt={order.expiresAt} />
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="order-card__progress">
        <div className="order-card__progress-bar">
          <motion.div
            className="order-card__progress-fill"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="order-card__progress-text">{fulfilledItems}/{totalItems}</span>
      </div>

      {/* Items */}
      <div className="order-card__items">
        {order.items.map(oi => {
          const item    = getItem(oi.itemId);
          const inStock = state.stock[oi.itemId] ?? 0;
          const needed  = oi.quantity - oi.fulfilled;
          const canFulfill = inStock >= needed;

          return (
            <div key={oi.itemId} className={`order-card__item ${oi.fulfilled >= oi.quantity ? 'done' : ''}`}>
              <ItemImage itemId={oi.itemId} fallback={item?.src ?? '❓'} size="sm" />
              <span className="order-card__item-name">{item?.name ?? oi.itemId}</span>
              <span className="order-card__item-qty">{oi.fulfilled}/{oi.quantity}</span>
              <span className="order-card__item-stock" title={`In stock: ${inStock}`}>📦 {inStock}</span>
              {needed > 0 ? (
                <button
                  className={`order-card__fulfill-btn ${canFulfill ? 'can' : 'cant'}`}
                  onClick={() => handleFulfillItem(oi.itemId)}
                  disabled={!canFulfill}
                  title={canFulfill ? 'Fulfill from stock' : `Need ${Math.max(0, needed - inStock)} more`}
                >
                  {canFulfill ? '✓ Fill' : `Need ${Math.max(0, needed - inStock)}`}
                </button>
              ) : (
                <span className="order-card__done-badge">✓</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      {order.status === 'pending' && (
        <div className="order-card__actions">
          <button className="btn btn--green btn--sm" onClick={handleAccept}>
            <FontAwesomeIcon icon={faCheck} /> Accept
          </button>
          <button className="btn btn--ghost btn--sm" onClick={handleDecline}>
            <FontAwesomeIcon icon={faTimes} /> Decline
          </button>
        </div>
      )}
      {isComplete && order.status !== 'completed' && (
        <div className="order-card__actions">
          <button className="btn btn--primary btn--sm"
            onClick={() => dispatch({ type: 'UPDATE_ORDER', id: order.id, status: 'completed' })}>
            🎉 Complete Order
          </button>
        </div>
      )}
    </motion.div>
  );
}
