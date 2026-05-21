// ============================================================
// HAYTASK - Production Queue (with real images)
// ============================================================

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faCheckCircle, faClock } from '@fortawesome/free-solid-svg-icons';
import type { ProductionRecommendation } from '../../types';
import { getItem, formatTime } from '../../data/items';
import { useGame } from '../../store/GameStore';
import { nanoid } from '../../services/nanoid';
import { ItemImage } from '../ui/ItemImage';
import './ProductionQueue.scss';

interface ProductionQueueProps {
  recommendations: ProductionRecommendation[];
  totalTime: number;
  totalProfit: number;
}

export function ProductionQueue({ recommendations, totalTime, totalProfit }: ProductionQueueProps) {
  const { state, dispatch } = useGame();

  const startTask = (rec: ProductionRecommendation) => {
    dispatch({
      type: 'ADD_PRODUCTION',
      task: {
        id: nanoid(),
        itemId: rec.itemId,
        quantity: rec.quantity,
        machine: rec.machine,
        startedAt: Date.now(),
        completesAt: Date.now() + rec.productionTime * 1000,
        orderId: rec.orderId,
        status: 'running',
      },
    });
  };

  const completeTask = (taskId: string, itemId: string, quantity: number) => {
    dispatch({ type: 'ADD_STOCK', itemId, amount: quantity });
    dispatch({ type: 'COMPLETE_PRODUCTION', taskId });
    setTimeout(() => dispatch({ type: 'REMOVE_PRODUCTION', taskId }), 1500);
  };

  return (
    <div className="prod-queue">
      {/* Summary */}
      <div className="prod-queue__summary">
        <div className="prod-queue__summary-item">
          <span className="prod-queue__summary-label">Tasks</span>
          <span className="prod-queue__summary-value">{recommendations.length}</span>
        </div>
        <div className="prod-queue__summary-item">
          <span className="prod-queue__summary-label">Total Time</span>
          <span className="prod-queue__summary-value">{formatTime(totalTime)}</span>
        </div>
        <div className="prod-queue__summary-item">
          <span className="prod-queue__summary-label">Est. Profit</span>
          <span className="prod-queue__summary-value gold">🪙 {totalProfit.toLocaleString()}</span>
        </div>
      </div>

      {/* Recommendations */}
      <div className="prod-queue__list">
        <AnimatePresence>
          {recommendations.slice(0, 15).map((rec, idx) => {
            const item = getItem(rec.itemId);
            if (!item) return null;
            const isRunning = state.productionQueue.some(t => t.itemId === rec.itemId && t.status === 'running');

            return (
              <motion.div
                key={`${rec.itemId}-${idx}`}
                className={`prod-queue__item ${isRunning ? 'running' : ''}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 12 }}
                transition={{ delay: idx * 0.03 }}
              >
                <div className="prod-queue__rank">{idx + 1}</div>

                <ItemImage itemId={item.id} fallback={item.src} size="md" />

                <div className="prod-queue__info">
                  <div className="prod-queue__name">{item.name}</div>
                  <div className="prod-queue__meta">
                    <span>×{rec.quantity}</span>
                    <span>⏱ {formatTime(item.productionTime)}</span>
                    <span>🏭 {item.machine}</span>
                  </div>
                  <div className="prod-queue__reason">{rec.reason}</div>
                </div>

                <div className="prod-queue__profit">
                  <span className="prod-queue__profit-total">
                    🪙 {(item.sellPrice * rec.quantity).toLocaleString()}
                  </span>
                </div>

                <div className="prod-queue__actions">
                  {!isRunning ? (
                    <button className="btn btn--green btn--sm btn--icon" onClick={() => startTask(rec)} title="Start">
                      <FontAwesomeIcon icon={faPlay} />
                    </button>
                  ) : (
                    <span className="prod-queue__running-badge">
                      <FontAwesomeIcon icon={faClock} /> Running
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {recommendations.length === 0 && (
          <div className="prod-queue__empty">
            <span>🎉</span>
            <p>All orders fulfilled! Add new orders to get recommendations.</p>
          </div>
        )}
      </div>

      {/* Active tasks */}
      {state.productionQueue.filter(t => t.status !== 'completed').length > 0 && (
        <div className="prod-queue__active">
          <h3 className="prod-queue__active-title">🔄 Active Production</h3>
          <AnimatePresence>
            {state.productionQueue.filter(t => t.status !== 'completed').map(task => {
              const item = getItem(task.itemId);
              if (!item) return null;
              const now      = Date.now();
              const elapsed  = now - task.startedAt;
              const duration = task.completesAt - task.startedAt;
              const progress = Math.min(100, (elapsed / duration) * 100);
              const isDone   = now >= task.completesAt;

              return (
                <motion.div
                  key={task.id}
                  className={`prod-queue__active-item ${isDone ? 'done' : ''}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                >
                  <ItemImage itemId={item.id} fallback={item.src} size="md" />
                  <div className="prod-queue__info">
                    <div className="prod-queue__name">{item.name} ×{task.quantity}</div>
                    <div className="prod-queue__progress-bar">
                      <motion.div
                        className="prod-queue__progress-fill"
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                    {isDone ? (
                      <button className="btn btn--green btn--sm"
                        onClick={() => completeTask(task.id, task.itemId, task.quantity)}>
                        <FontAwesomeIcon icon={faCheckCircle} /> Collect
                      </button>
                    ) : (
                      <span className="prod-queue__running-badge">{Math.round(progress)}%</span>
                    )}
                    <button className="btn btn--ghost btn--sm btn--icon"
                      onClick={() => dispatch({ type: 'REMOVE_PRODUCTION', taskId: task.id })}>
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
