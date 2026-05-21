// ============================================================
// HAYTASK - Orders Page
// ============================================================

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTruck, faUser, faShip, faList, faInbox } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/layout/Header';
import { OrderCard } from '../components/orders/OrderCard';
import { AddOrderModal } from '../components/modals/AddOrderModal';
import { useGame } from '../store/GameStore';
import type { OrderType } from '../types';
import './Orders.scss';

const TABS: { id: OrderType | 'all'; label: string; icon: typeof faList }[] = [
  { id: 'all',     label: 'All',     icon: faList  },
  { id: 'truck',   label: 'Truck',   icon: faTruck },
  { id: 'visitor', label: 'Visitor', icon: faUser  },
  { id: 'boat',    label: 'Boat',    icon: faShip  },
];

export function OrdersPage() {
  const { state } = useGame();
  const [activeTab, setActiveTab] = useState<OrderType | 'all'>('all');
  const [showModal, setShowModal] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);

  const orders = state.orders.filter(o => {
    const typeMatch   = activeTab === 'all' || o.type === activeTab;
    const statusMatch = showCompleted
      ? true
      : ['pending', 'accepted', 'in_progress'].includes(o.status);
    return typeMatch && statusMatch;
  });

  const completedCount = state.orders.filter(o => o.status === 'completed').length;

  return (
    <div className="page">
      <Header title="Orders" />

      <div className="page__content">
        {/* Tabs */}
        <div className="orders__tabs">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`orders__tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <FontAwesomeIcon icon={tab.icon} />
              <span>{tab.label}</span>
              <span className="orders__tab-count">
                {state.orders.filter(o =>
                  (tab.id === 'all' || o.type === tab.id) &&
                  ['pending', 'accepted', 'in_progress'].includes(o.status)
                ).length}
              </span>
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="orders__controls">
          <div className="orders__toggle">
            <label className="orders__toggle-label">
              <input
                type="checkbox"
                checked={showCompleted}
                onChange={e => setShowCompleted(e.target.checked)}
              />
              Show completed ({completedCount})
            </label>
          </div>

          <button className="btn btn--primary" onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faPlus} /> New Order
          </button>
        </div>

        {/* Orders grid */}
        {orders.length === 0 ? (
          <motion.div
            className="orders__empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <FontAwesomeIcon icon={faInbox} className="orders__empty-icon" />
            <p>No orders here. Create a new one!</p>
            <button className="btn btn--primary" onClick={() => setShowModal(true)}>
              <FontAwesomeIcon icon={faPlus} /> Add Order
            </button>
          </motion.div>
        ) : (
          <div className="orders__grid">
            <AnimatePresence mode="popLayout">
              {orders.map((order, idx) => (
                <OrderCard key={order.id} order={order} delay={idx} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {showModal && <AddOrderModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
