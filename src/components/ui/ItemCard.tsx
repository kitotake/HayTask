// ============================================================
// HAYTASK - Item Card Component
// ============================================================

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlus, faMinus, faClock, faCoins, faIndustry } from '@fortawesome/free-solid-svg-icons';
import type { Item } from '../../types';
import { formatTime, profitPerHour } from '../../data/items';
import { useGame } from '../../store/GameStore';
import { useStock } from '../../hooks';
import { ItemImage } from './ItemImage';
import './ItemCard.scss';

interface ItemCardProps {
  item: Item;
  delay?: number;
  compact?: boolean;
}

export function ItemCard({ item, delay = 0, compact = false }: ItemCardProps) {
  const { state, dispatch } = useGame();
  const { qty, add, remove } = useStock(item.id);
  const isFav = state.favorites.includes(item.id);
  const pph   = profitPerHour(item);

  return (
    <motion.div
      className={`item-card ${compact ? 'item-card--compact' : ''}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: Math.min(delay * 0.03, 0.5), duration: 0.3 }}
    >
      {/* Fav button */}
      <button
        className={`item-card__fav ${isFav ? 'active' : ''}`}
        onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', itemId: item.id })}
        title={isFav ? 'Remove from favorites' : 'Add to favorites'}
        aria-label="Toggle favorite"
      >
        <FontAwesomeIcon icon={faStar} />
      </button>

      {/* Level badge */}
      <div className="item-card__level">Lv.{item.levelRequired}</div>

      {/* Image */}
      <ItemImage
        itemId={item.id}
        fallback={item.src}
        size={compact ? 'sm' : 'lg'}
      />

      {/* Info */}
      <div className="item-card__info">
        <h3 className="item-card__name">{item.name}</h3>
        {!compact && (
          <p className="item-card__machine">
            <FontAwesomeIcon icon={faIndustry} /> {item.machine}
          </p>
        )}
        <div className="item-card__meta">
          <span title="Production time">
            <FontAwesomeIcon icon={faClock} /> {formatTime(item.productionTime)}
          </span>
          <span title="Sell price">
            <FontAwesomeIcon icon={faCoins} /> {item.sellPrice}
          </span>
          <span title="XP earned">
            <FontAwesomeIcon icon={faStar} /> {item.xp}
          </span>
        </div>
        {!compact && (
          <div className="item-card__profit">
            <FontAwesomeIcon icon={faCoins} /> {pph} coins/hr
          </div>
        )}
      </div>

      {/* Stock controls */}
      <div className="item-card__stock">
        <button
          className="item-card__stock-btn"
          onClick={() => remove(1)}
          disabled={qty === 0}
          aria-label="Remove one"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="item-card__stock-qty">{qty}</span>
        <button
          className="item-card__stock-btn item-card__stock-btn--add"
          onClick={() => add(1)}
          aria-label="Add one"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </motion.div>
  );
}