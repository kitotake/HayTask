// ============================================================
// HAYTASK - Stat Card Component
// ============================================================

import { motion } from 'framer-motion';
import './StatCard.scss';

interface StatCardProps {
  emoji: string;
  label: string;
  value: string | number;
  sub?: string;
  color?: 'gold' | 'green' | 'blue' | 'red' | 'sky';
  delay?: number;
}

export function StatCard({ emoji, label, value, sub, color = 'gold', delay = 0 }: StatCardProps) {
  return (
    <motion.div
      className={`stat-card stat-card--${color}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35, ease: 'easeOut' }}
    >
      <div className="stat-card__icon" aria-hidden="true">{emoji}</div>
      <div className="stat-card__body">
        <p className="stat-card__label">{label}</p>
        <p className="stat-card__value">{value}</p>
        {sub && <p className="stat-card__sub">{sub}</p>}
      </div>
    </motion.div>
  );
}