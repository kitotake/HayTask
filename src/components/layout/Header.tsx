// ============================================================
// HAYTASK - Header Component
// ============================================================

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useGame } from '../../store/GameStore';
import './Header.scss';

interface HeaderProps {
  title: string;
  search?: string;
  onSearch?: (v: string) => void;
  onMenuToggle?: () => void;
}

export function Header({ title, search, onSearch, onMenuToggle }: HeaderProps) {
  const { state } = useGame();
  const activeOrders = state.orders.filter(o =>
    ['pending', 'accepted', 'in_progress'].includes(o.status)
  ).length;

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__menu-btn" onClick={onMenuToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h2 className="header__title">{title}</h2>
      </div>

      <div className="header__right">
        {onSearch && (
          <div className="header__search">
            <FontAwesomeIcon icon={faSearch} className="header__search-icon" />
            <input
              className="header__search-input"
              placeholder="Search items…"
              value={search}
              onChange={e => onSearch(e.target.value)}
            />
          </div>
        )}

        <div className="header__level-chip">
          <span>🏅</span>
          <span>Level {state.playerLevel}</span>
        </div>

        <div className="header__notif">
          <FontAwesomeIcon icon={faBell} />
          {activeOrders > 0 && <span className="header__notif-dot">{activeOrders}</span>}
        </div>
      </div>
    </header>
  );
}
