// ============================================================
// HAYTASK - Add Order Modal
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faPlus, faTrash,
  faTruck, faUser, faShip,
  faCoins, faStar, faClock
} from '@fortawesome/free-solid-svg-icons';
import type { Order, OrderType } from '../../types';
import { getUnlockedItems } from '../../data/items';
import { useGame } from '../../store/GameStore';
import { nanoid } from '../../services/nanoid';
import './AddOrderModal.scss';

interface AddOrderModalProps {
  onClose: () => void;
}

interface ItemEntry {
  itemId: string;
  quantity: number;
}

export function AddOrderModal({ onClose }: AddOrderModalProps) {
  const { state, dispatch } = useGame();
  const [orderType, setOrderType]   = useState<OrderType>('truck');
  const [items, setItems]           = useState<ItemEntry[]>([{ itemId: '', quantity: 1 }]);
  const [reward, setReward]         = useState(100);
  const [xp, setXp]                 = useState(10);
  const [expiresIn, setExpiresIn]   = useState(4);

  const unlockedItems = getUnlockedItems(state.playerLevel);

  const addItem    = () => setItems(prev => [...prev, { itemId: '', quantity: 1 }]);
  const removeItem = (idx: number) => setItems(prev => prev.filter((_, i) => i !== idx));
  const updateItem = (idx: number, field: keyof ItemEntry, value: string | number) =>
    setItems(prev => prev.map((it, i) => i === idx ? { ...it, [field]: value } : it));

  const handleSubmit = () => {
    const validItems = items.filter(i => i.itemId && i.quantity > 0);
    if (validItems.length === 0) return;

    const order: Order = {
      id: nanoid(),
      type: orderType,
      items: validItems.map(i => ({ ...i, fulfilled: 0 })),
      reward,
      xp,
      status: 'pending',
      createdAt: Date.now(),
      expiresAt: Date.now() + expiresIn * 3600000,
    };

    dispatch({ type: 'ADD_ORDER', order });
    onClose();
  };

  const TYPE_OPTIONS: { value: OrderType; label: string; icon: typeof faTruck }[] = [
    { value: 'visitor', label: 'Visitor',     icon: faUser  },
    { value: 'truck',   label: 'Truck Order', icon: faTruck },
    { value: 'boat',    label: 'Boat Cargo',  icon: faShip  },
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal__header">
            <h2 className="modal__title">Add Order</h2>
            <button className="modal__close" onClick={onClose} aria-label="Close">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Order type */}
          <div className="modal__section">
            <label className="modal__label">Order Type</label>
            <div className="modal__type-grid">
              {TYPE_OPTIONS.map(opt => (
                <button
                  key={opt.value}
                  className={`modal__type-btn ${orderType === opt.value ? 'active' : ''}`}
                  onClick={() => setOrderType(opt.value)}
                >
                  <FontAwesomeIcon icon={opt.icon} className="modal__type-icon" />
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Items */}
          <div className="modal__section">
            <label className="modal__label">Items Required</label>
            <div className="modal__items">
              {items.map((entry, idx) => (
                <div key={idx} className="modal__item-row">
                  <select
                    className="modal__select"
                    value={entry.itemId}
                    onChange={e => updateItem(idx, 'itemId', e.target.value)}
                  >
                    <option value="">Select item…</option>
                    {unlockedItems.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>

                  <input
                    type="number"
                    className="modal__qty-input"
                    value={entry.quantity}
                    min={1}
                    max={99}
                    onChange={e => updateItem(idx, 'quantity', parseInt(e.target.value) || 1)}
                  />

                  <button
                    className="btn btn--ghost btn--sm btn--icon"
                    onClick={() => removeItem(idx)}
                    disabled={items.length === 1}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))}
            </div>

            <button className="btn btn--secondary btn--sm" onClick={addItem}>
              <FontAwesomeIcon icon={faPlus} /> Add Item
            </button>
          </div>

          {/* Rewards */}
          <div className="modal__section">
            <label className="modal__label">Reward &amp; Timer</label>
            <div className="modal__reward-grid">
              <div className="modal__field">
                <label>
                  <FontAwesomeIcon icon={faCoins} /> Coins Reward
                </label>
                <input
                  type="number"
                  className="input"
                  value={reward}
                  min={0}
                  onChange={e => setReward(parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="modal__field">
                <label>
                  <FontAwesomeIcon icon={faStar} /> XP Reward
                </label>
                <input
                  type="number"
                  className="input"
                  value={xp}
                  min={0}
                  onChange={e => setXp(parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="modal__field">
                <label>
                  <FontAwesomeIcon icon={faClock} /> Expires In (hours)
                </label>
                <input
                  type="number"
                  className="input"
                  value={expiresIn}
                  min={1}
                  max={72}
                  onChange={e => setExpiresIn(parseInt(e.target.value) || 1)}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="modal__footer">
            <button className="btn btn--secondary" onClick={onClose}>Cancel</button>
            <button
              className="btn btn--primary"
              onClick={handleSubmit}
              disabled={items.every(i => !i.itemId)}
            >
              <FontAwesomeIcon icon={faPlus} /> Create Order
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
