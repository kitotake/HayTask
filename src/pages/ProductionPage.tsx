// ============================================================
// HAYTASK - Production Page
// ============================================================

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faIndustry, faCoins } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/layout/Header';
import { ProductionQueue } from '../components/production/ProductionQueue';
import { useGame } from '../store/GameStore';
import { generateRecommendations, calcTotalTime, calcTotalProfit } from '../services/optimizer';
import { formatTime } from '../data/items';
import './ProductionPage.scss';

export function ProductionPage() {
  const { state } = useGame();
  const recs        = generateRecommendations(state);
  const totalTime   = calcTotalTime(recs);
  const totalProfit = calcTotalProfit(recs);

  const byMachine = recs.reduce<Record<string, typeof recs>>((acc, rec) => {
    if (!acc[rec.machine]) acc[rec.machine] = [];
    acc[rec.machine].push(rec);
    return acc;
  }, {});

  return (
    <div className="page">
      <Header title="Production" />
      <div className="page__content">

        <div className="prod-page__hero">
          <div className="prod-page__hero-card">
            <FontAwesomeIcon icon={faBolt} className="prod-page__hero-bolt" />
            <div>
              <p className="prod-page__hero-label">Smart Production Queue</p>
              <p className="prod-page__hero-sub">
                {recs.length} tasks · {formatTime(totalTime)} total ·{' '}
                <span className="gold">
                  <FontAwesomeIcon icon={faCoins} /> {totalProfit.toLocaleString()} coins
                </span>
              </p>
            </div>
          </div>

          <div className="prod-page__machines">
            {Object.entries(byMachine).map(([machine, tasks]) => (
              <div key={machine} className="prod-page__machine-chip">
                <FontAwesomeIcon icon={faIndustry} />
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
