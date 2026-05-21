// ============================================================
// HAYTASK - Production Page
// ============================================================

import { Header } from '../components/layout/Header';
import { ProductionQueue } from '../components/production/ProductionQueue';
import { useGame } from '../store/GameStore';
import { generateRecommendations, calcTotalTime, calcTotalProfit } from '../services/optimizer';
import { getItem, formatTime } from '../data/items';
import './ProductionPage.scss';

export function ProductionPage() {
  const { state } = useGame();
  const recs = generateRecommendations(state);
  const totalTime = calcTotalTime(recs);
  const totalProfit = calcTotalProfit(recs);

  // Group by machine
  const byMachine = recs.reduce<Record<string, typeof recs>>((acc, rec) => {
    const key = rec.machine;
    if (!acc[key]) acc[key] = [];
    acc[key].push(rec);
    return acc;
  }, {});

  return (
    <div className="page">
      <Header title="🏭 Production" />
      <div className="page__content">

        <div className="prod-page__hero">
          <div className="prod-page__hero-card">
            <span>⚡</span>
            <div>
              <p className="prod-page__hero-label">Smart Production Queue</p>
              <p className="prod-page__hero-sub">
                {recs.length} tasks · {formatTime(totalTime)} total ·{' '}
                <span className="gold">🪙 {totalProfit.toLocaleString()} coins</span>
              </p>
            </div>
          </div>

          <div className="prod-page__machines">
            {Object.entries(byMachine).map(([machine, tasks]) => (
              <div key={machine} className="prod-page__machine-chip">
                <span>🏭</span>
                <span>{machine}</span>
                <span className="prod-page__machine-count">{tasks.length}</span>
              </div>
            ))}
          </div>
        </div>

        <ProductionQueue
          recommendations={recs}
          totalTime={totalTime}
          totalProfit={totalProfit}
        />
      </div>
    </div>
  );
}
