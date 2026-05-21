// ============================================================
// HAYTASK - Dashboard Page
// ============================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLightbulb, faFire } from '@fortawesome/free-solid-svg-icons';
import { StatCard } from '../components/ui/StatCard';
import { OrderCard } from '../components/orders/OrderCard';
import { ProductionQueue } from '../components/production/ProductionQueue';
import { AddOrderModal } from '../components/modals/AddOrderModal';
import { Header } from '../components/layout/Header';
import { useGame } from '../store/GameStore';
import { generateRecommendations, calcTotalTime, calcTotalProfit } from '../services/optimizer';
import { getUnlockedItems, profitPerHour, formatTime } from '../data/items';
import './Dashboard.scss';

export function Dashboard() {
  const { state } = useGame();
  const [showAddOrder, setShowAddOrder] = useState(false);
  const [search, setSearch] = useState('');

  const activeOrders = state.orders.filter(o =>
    ['pending', 'accepted', 'in_progress'].includes(o.status)
  );

  const recs = generateRecommendations(state);
  const totalTime = calcTotalTime(recs);
  const totalProfit = calcTotalProfit(recs);

  const unlockedItems = getUnlockedItems(state.playerLevel);
  const totalStockValue = Object.entries(state.stock).reduce((sum, [id, qty]) => {
    const item = unlockedItems.find(i => i.id === id);
    return sum + (item?.sellPrice ?? 0) * qty;
  }, 0);

  const topProfitItem = unlockedItems.sort((a, b) => profitPerHour(b) - profitPerHour(a))[0];

  return (
    <div className="page">
      <Header
        title="🏡 Dashboard"
        search={search}
        onSearch={setSearch}
      />

      <div className="page__content">
        {/* Stat cards */}
        <div className="dashboard__stats">
          <StatCard
            emoji="📦"
            label="Active Orders"
            value={activeOrders.length}
            sub={`${activeOrders.filter(o => o.type === 'truck').length} truck · ${activeOrders.filter(o => o.type === 'boat').length} boat`}
            color="blue"
            delay={0}
          />
          <StatCard
            emoji="🌾"
            label="Items Unlocked"
            value={unlockedItems.length}
            sub={`Level ${state.playerLevel} farm`}
            color="green"
            delay={0.05}
          />
          <StatCard
            emoji="🪙"
            label="Stock Value"
            value={`${totalStockValue.toLocaleString()}`}
            sub="Total barn value"
            color="gold"
            delay={0.1}
          />
          <StatCard
            emoji="⏱"
            label="Queue Time"
            value={formatTime(totalTime)}
            sub={`${recs.length} tasks recommended`}
            color="sky"
            delay={0.15}
          />
        </div>

        {/* Main grid */}
        <div className="dashboard__grid">
          {/* Left: Orders */}
          <div className="dashboard__column">
            <div className="dashboard__section-header">
              <h2 className="section-title">📋 Active Orders</h2>
              <button
                className="btn btn--primary btn--sm"
                onClick={() => setShowAddOrder(true)}
              >
                <FontAwesomeIcon icon={faPlus} /> Add Order
              </button>
            </div>

            {activeOrders.length === 0 ? (
              <div className="dashboard__empty">
                <span>📭</span>
                <p>No active orders. Add one to get production recommendations!</p>
                <button className="btn btn--primary" onClick={() => setShowAddOrder(true)}>
                  <FontAwesomeIcon icon={faPlus} /> Add First Order
                </button>
              </div>
            ) : (
              <div className="dashboard__orders">
                {activeOrders.map((order, idx) => (
                  <OrderCard key={order.id} order={order} delay={idx} />
                ))}
              </div>
            )}
          </div>

          {/* Right: Production recommendations */}
          <div className="dashboard__column">
            <div className="dashboard__section-header">
              <h2 className="section-title">
                <FontAwesomeIcon icon={faLightbulb} style={{ color: 'var(--hay-gold)' }} />
                Optimal Queue
              </h2>
            </div>

            <div className="dashboard__tip">
              <FontAwesomeIcon icon={faFire} />
              <span>
                Best item right now: <strong>{topProfitItem?.name}</strong> —{' '}
                {topProfitItem ? profitPerHour(topProfitItem) : 0} coins/hr
              </span>
            </div>

            <ProductionQueue
              recommendations={recs}
              totalTime={totalTime}
              totalProfit={totalProfit}
            />
          </div>
        </div>
      </div>

      {showAddOrder && <AddOrderModal onClose={() => setShowAddOrder(false)} />}
    </div>
  );
}
