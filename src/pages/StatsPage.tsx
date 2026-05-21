// ============================================================
// HAYTASK - Stats Page
// ============================================================

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle, faCoins, faStar, faBoxOpen,
  faTrophy, faBolt
} from '@fortawesome/free-solid-svg-icons';
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

  const completed   = state.orders.filter(o => o.status === 'completed');
  const totalReward = completed.reduce((s, o) => s + o.reward, 0);
  const totalXP     = completed.reduce((s, o) => s + o.xp, 0);
  const stockValue  = Object.entries(state.stock).reduce((s, [id, qty]) => {
    const item = unlockedItems.find(i => i.id === id);
    return s + (item?.sellPrice ?? 0) * qty;
  }, 0);

  const overviewCards = [
    { icon: faCheckCircle, label: 'Orders Completed', value: completed.length,                color: 'green' },
    { icon: faCoins,       label: 'Coins Earned',     value: totalReward.toLocaleString(),    color: 'gold'  },
    { icon: faStar,        label: 'Total XP',          value: totalXP.toLocaleString(),       color: 'sky'   },
    { icon: faBoxOpen,     label: 'Stock Value',       value: stockValue.toLocaleString(),    color: 'blue'  },
  ];

  const rankIcon = (idx: number) => {
    if (idx === 0) return <FontAwesomeIcon icon={faTrophy} style={{ color: '#FFD700' }} />;
    if (idx === 1) return <FontAwesomeIcon icon={faTrophy} style={{ color: '#C0C0C0' }} />;
    if (idx === 2) return <FontAwesomeIcon icon={faTrophy} style={{ color: '#CD7F32' }} />;
    return <span>{idx + 1}</span>;
  };

  return (
    <div className="page">
      <Header title="Stats" />
      <div className="page__content">

        {/* Overview */}
        <div className="stats__overview">
          {overviewCards.map((card, idx) => (
            <motion.div
              key={card.label}
              className={`stats__card stats__card--${card.color}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.07 }}
            >
              <div className="stats__card-icon-wrap">
                <FontAwesomeIcon icon={card.icon} className="stats__card-icon" />
              </div>
              <p className="stats__card-label">{card.label}</p>
              <p className="stats__card-value">{card.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="stats__grid">
          {/* Most profitable */}
          <div className="stats__section">
            <h2 className="section-title">Most Profitable</h2>
            <div className="stats__table-wrap">
              <table className="stats__table">
                <thead>
                  <tr>
                    <th>#</th><th>Item</th><th>Machine</th>
                    <th>Price</th><th>Time</th><th>Coins/hr</th>
                  </tr>
                </thead>
                <tbody>
                  {topProfitable.map((item, idx) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <td className="stats__rank">{rankIcon(idx)}</td>
                      <td>
                        <div className="stats__item-name">
                          <ItemImage itemId={item.id} fallback={item.src} size="sm" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="stats__muted">{item.machine}</td>
                      <td className="stats__price">
                        <FontAwesomeIcon icon={faCoins} /> {item.sellPrice}
                      </td>
                      <td className="stats__muted">{formatTime(item.productionTime)}</td>
                      <td className="stats__profit">
                        <FontAwesomeIcon icon={faCoins} /> {profitPerHour(item)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Fastest */}
          <div className="stats__section">
            <h2 className="section-title">Fastest to Produce</h2>
            <div className="stats__table-wrap">
              <table className="stats__table">
                <thead>
                  <tr>
                    <th>#</th><th>Item</th><th>Time</th><th>Price</th><th>XP</th>
                  </tr>
                </thead>
                <tbody>
                  {fastest.map((item, idx) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      <td className="stats__rank">{idx + 1}</td>
                      <td>
                        <div className="stats__item-name">
                          <ItemImage itemId={item.id} fallback={item.src} size="sm" />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="stats__time">
                        <FontAwesomeIcon icon={faBolt} /> {formatTime(item.productionTime)}
                      </td>
                      <td className="stats__price">
                        <FontAwesomeIcon icon={faCoins} /> {item.sellPrice}
                      </td>
                      <td className="stats__xp">
                        <FontAwesomeIcon icon={faStar} /> {item.xp}
                      </td>
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
