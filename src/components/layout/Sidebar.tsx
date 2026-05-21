// ============================================================
// HAYTASK - Sidebar Navigation
// ============================================================

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faLayerGroup, faClipboardList, faIndustry,
  faStar, faMoon, faSun, faChartBar, faLeaf, faMinus, faPlus
} from '@fortawesome/free-solid-svg-icons';
import { useGame } from '../../store/GameStore';
import './Sidebar.scss';

interface NavItem {
  id: string;
  label: string;
  icon: typeof faHouse;
  badge?: number;
}

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  orderCount: number;
}

export function Sidebar({ activePage, onNavigate, orderCount }: SidebarProps) {
  const { state, dispatch } = useGame();
  const inputRef = useRef<HTMLInputElement>(null);

  const navItems: NavItem[] = [
    { id: 'dashboard',  label: 'Dashboard',  icon: faHouse },
    { id: 'production', label: 'Production', icon: faIndustry },
    { id: 'orders',     label: 'Orders',     icon: faClipboardList, badge: orderCount },
    { id: 'stock',      label: 'Stock',      icon: faLayerGroup },
    { id: 'items',      label: 'All Items',  icon: faLeaf },
    { id: 'favorites',  label: 'Favorites',  icon: faStar },
    { id: 'stats',      label: 'Stats',      icon: faChartBar },
  ];

  const setLevel = (val: number) => {
    const clamped = Math.max(1, Math.min(200, val));
    dispatch({ type: 'SET_LEVEL', level: clamped });
  };

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <img src="/assets/seed/HayDay_Wheat.png" alt="" className="sidebar__logo-icon" />
        <div>
          <h1 className="sidebar__logo-title">HayTask</h1>
          <p className="sidebar__logo-sub">Farm Optimizer</p>
        </div>
      </div>

      {/* Level selector */}
      <div className="sidebar__level">
        <label className="sidebar__level-label">
          <FontAwesomeIcon icon={faStar} /> Player Level
        </label>
        <div className="sidebar__level-control">
          <button
            className="sidebar__level-btn"
            onClick={() => setLevel(state.playerLevel - 1)}
            aria-label="Decrease level"
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>

          <input
            ref={inputRef}
            type="number"
            className="sidebar__level-input"
            value={state.playerLevel}
            min={1}
            max={200}
            onChange={e => {
              const v = parseInt(e.target.value);
              if (!isNaN(v)) setLevel(v);
            }}
            onBlur={e => {
              const v = parseInt(e.target.value);
              if (isNaN(v) || v < 1) setLevel(1);
            }}
            aria-label="Player level"
          />

          <button
            className="sidebar__level-btn"
            onClick={() => setLevel(state.playerLevel + 1)}
            aria-label="Increase level"
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            className={`sidebar__nav-item ${activePage === item.id ? 'active' : ''}`}
            onClick={() => onNavigate(item.id)}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.97 }}
          >
            <FontAwesomeIcon icon={item.icon} className="sidebar__nav-icon" />
            <span className="sidebar__nav-label">{item.label}</span>
            {item.badge != null && item.badge > 0 && (
              <span className="sidebar__nav-badge">{item.badge}</span>
            )}
            {activePage === item.id && (
              <motion.div
                className="sidebar__nav-indicator"
                layoutId="nav-indicator"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="sidebar__footer">
        <button
          className="sidebar__theme-btn"
          onClick={() => dispatch({ type: 'TOGGLE_DARK_MODE' })}
          title="Toggle dark mode"
        >
          <FontAwesomeIcon icon={state.darkMode ? faSun : faMoon} />
          <span>{state.darkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <p className="sidebar__version">v1.0.0 — HayTask</p>
      </div>
    </aside>
  );
}
