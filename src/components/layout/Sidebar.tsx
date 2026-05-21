// ============================================================
// HAYTASK - Sidebar Navigation
// ============================================================

import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse, faLayerGroup, faClipboardList, faIndustry,
  faStar, faMoon, faSun, faChartBar, faLeaf
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

  const navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: faHouse },
    { id: 'production', label: 'Production', icon: faIndustry },
    { id: 'orders', label: 'Orders', icon: faClipboardList, badge: orderCount },
    { id: 'stock', label: 'Stock', icon: faLayerGroup },
    { id: 'items', label: 'All Items', icon: faLeaf },
    { id: 'favorites', label: 'Favorites', icon: faStar },
    { id: 'stats', label: 'Stats', icon: faChartBar },
  ];

  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar__logo">
        <span className="sidebar__logo-icon">🌾</span>
        <div>
          <h1 className="sidebar__logo-title">HayTask</h1>
          <p className="sidebar__logo-sub">Farm Optimizer</p>
        </div>
      </div>

      {/* Level selector */}
      <div className="sidebar__level">
        <label className="sidebar__level-label">
          <span>🏅</span> Player Level
        </label>
        <div className="sidebar__level-control">
          <button
            className="sidebar__level-btn"
            onClick={() => dispatch({ type: 'SET_LEVEL', level: Math.max(1, state.playerLevel - 1) })}
          >−</button>
          <span className="sidebar__level-value">{state.playerLevel}</span>
          <button
            className="sidebar__level-btn"
            onClick={() => dispatch({ type: 'SET_LEVEL', level: Math.min(120, state.playerLevel + 1) })}
          >+</button>
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
