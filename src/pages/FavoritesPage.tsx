// ============================================================
// HAYTASK - Favorites Page
// ============================================================

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/layout/Header';
import { ItemCard } from '../components/ui/ItemCard';
import { useGame } from '../store/GameStore';
import { getItem } from '../data/items';
import './FavoritesPage.scss';

export function FavoritesPage() {
  const { state } = useGame();
  const favItems = state.favorites
    .map(id => getItem(id))
    .filter(Boolean) as ReturnType<typeof getItem>[];

  return (
    <div className="page">
      <Header title="Favorites" />
      <div className="page__content">
        {favItems.length === 0 ? (
          <motion.div
            className="favs__empty"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FontAwesomeIcon icon={faStar} className="favs__empty-icon" />
            <h2>No favorites yet</h2>
            <p>Click the star on any item to add it to your favorites.</p>
          </motion.div>
        ) : (
          <>
            <p className="favs__count">{favItems.length} favorite items</p>
            <div className="favs__grid">
              {favItems.map((item, idx) => item && (
                <ItemCard key={item.id} item={item} delay={idx} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
