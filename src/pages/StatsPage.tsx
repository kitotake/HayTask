// ============================================================
// HAYTASK - Stats Page (with real images)
// ============================================================

import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { useGame } from '../store/GameStore';
import { getUnlockedItems, profitPerHour, formatTime } from '../data/items';
import { ItemImage } from '../components/ui/ItemImage';
import './StatsPage.scss';

export function StatsPage() {
  const { state } = useGame();
  const unlockedItems = getUnlockedItems(state.playerLevel);

  const topProfitable = [...unlockedItems]
    .sort((a, b) => profitPerHour(b) - profitPerHour(a))
    .slice(0, 10);

  const fastest = [...unlockedItems]
    .filter(i => i.productionTime > 0)
    .sort((a, b) => a.productionTime - b.productionTime)
    .slice(0, 10);

  const completed    = state.orders.filter(o => o.status === 'completed');
  const totalReward  = completed.reduce((s, o) => s + o.reward, 0);
  const totalXP      = completed.reduce((s, o) => s + o.xp, 0);
  const stockValue   = Object.entries(state.stock).reduce((s, [id, qty]) => {
    const item = unlockedItems.find(i => i.id === id);
    return s + (item?.sellPrice ?? 0) * qty;
  }, 0);

  return (
    <div className="page">
      <Header title="📊 Stats" />
      <div className="page__content">

        {/* Overview */}
        <div className="stats__overview">
          {[
            { emoji: '✅', label: 'Orders Completed', value: completed.length, color: 'green' },
            { emoji: '🪙', label: 'Coins Earned',     value: totalReward.toLocaleString(), color: 'gold' },
            { emoji: '⭐', label: 'Total XP',          value: totalXP.toLocaleString(), color: 'sky' },
            { emoji: '📦', label: 'Stock Value',       value: stockValue.toLocaleString(), color: 'blue' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className={`stats__card stats__card--${stat.color}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
            >
              <span className="stats__card-emoji">{stat.emoji}</span>
              <p className="stats__card-label">{stat.label}</p>
              <p className="stats__card-value">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="stats__grid">
          {/* Most profitable */}
          <div className="stats__section">
            <h2 className="section-title">💰 Most Profitable</h2>
            <div className="stats__table-wrap">
              <table className="stats__table">
                <thead>
                  <tr><th>#</th><th>Item</th><th>Machine</th><th>Price</th><th>Time</th><th>Coins/hr</th></tr>
                </thead>
                <tbody>
                  {topProfitable.map((item, idx) => (
                    <motion.tr key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}>
                      <td className="stats__rank">
                        {idx === 0 ? '🥇' : idx === 1 ? '🥈' : idx === 2 ? '🥉' : idx + 1}
                      </td>
                      <td>
                        <div className="stats__item-name">
                          <ItemImage itemId={item.id} fallback={item.src} size="sm" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="stats__muted">{item.machine}</td>
                      <td className="stats__price">🪙 {item.sellPrice}</td>
                      <td className="stats__muted">{formatTime(item.productionTime)}</td>
                      <td className="stats__profit">💰 {profitPerHour(item)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fastest */}
          <div className="stats__section">
            <h2 className="section-title">⚡ Fastest to Produce</h2>
            <div className="stats__table-wrap">
              <table className="stats__table">
                <thead>
                  <tr><th>#</th><th>Item</th><th>Time</th><th>Price</th><th>XP</th></tr>
                </thead>
                <tbody>
                  {fastest.map((item, idx) => (
                    <motion.tr key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: idx * 0.04 }}>
                      <td className="stats__rank">{idx + 1}</td>
                      <td>
                        <div className="stats__item-name">
                          <ItemImage itemId={item.id} fallback={item.src} size="sm" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="stats__time">⏱ {formatTime(item.productionTime)}</td>
                      <td className="stats__price">🪙 {item.sellPrice}</td>
                      <td className="stats__xp">⭐ {item.xp}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
