// ============================================================
// HAYTASK - Items Browser Page
// ============================================================

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { ItemCard } from '../components/ui/ItemCard';
import { useGame } from '../store/GameStore';
import { ITEMS, MACHINES, getUnlockedItems } from '../data/items';
import type { Machine } from '../types';
import './ItemsPage.scss';

type SortKey = 'level' | 'time' | 'price' | 'profit' | 'name';

export function ItemsPage() {
  const { state } = useGame();
  const [search, setSearch] = useState('');
  const [machine, setMachine] = useState<Machine | 'all'>('all');
  const [sort, setSort] = useState<SortKey>('level');
  const [showLocked, setShowLocked] = useState(false);

  const items = useMemo(() => {
    let list = showLocked ? ITEMS : getUnlockedItems(state.playerLevel);

    if (machine !== 'all') list = list.filter(i => i.machine === machine);
    if (search) list = list.filter(i =>
      i.name.toLowerCase().includes(search.toLowerCase()) ||
      i.machine.toLowerCase().includes(search.toLowerCase())
    );

    return list.sort((a, b) => {
      switch (sort) {
        case 'level':  return a.levelRequired - b.levelRequired;
        case 'time':   return a.productionTime - b.productionTime;
        case 'price':  return b.sellPrice - a.sellPrice;
        case 'profit': return (b.sellPrice / b.productionTime) - (a.sellPrice / a.productionTime);
        case 'name':   return a.name.localeCompare(b.name);
        default:       return 0;
      }
    });
  }, [state.playerLevel, machine, search, sort, showLocked]);

  return (
    <div className="page">
      <Header title="🌿 All Items" search={search} onSearch={setSearch} />

      <div className="page__content">
        {/* Filters bar */}
        <div className="items-page__filters">
          {/* Machine filter */}
          <div className="items-page__filter-group">
            <label className="items-page__filter-label">Machine</label>
            <div className="items-page__pills">
              <button
                className={`items-page__pill ${machine === 'all' ? 'active' : ''}`}
                onClick={() => setMachine('all')}
              >All</button>
              {MACHINES.map(m => (
                <button
                  key={m}
                  className={`items-page__pill ${machine === m ? 'active' : ''}`}
                  onClick={() => setMachine(m as Machine)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Sort */}
          <div className="items-page__filter-group">
            <label className="items-page__filter-label">Sort by</label>
            <div className="items-page__pills">
              {(['level', 'time', 'price', 'profit', 'name'] as SortKey[]).map(s => (
                <button
                  key={s}
                  className={`items-page__pill ${sort === s ? 'active' : ''}`}
                  onClick={() => setSort(s)}
                >
                  {s === 'level'  ? '🏅 Level' :
                   s === 'time'   ? '⏱ Time' :
                   s === 'price'  ? '🪙 Price' :
                   s === 'profit' ? '💰 Profit/hr' : '🔤 Name'}
                </button>
              ))}
            </div>
          </div>

          {/* Toggle locked */}
          <label className="items-page__toggle">
            <input
              type="checkbox"
              checked={showLocked}
              onChange={e => setShowLocked(e.target.checked)}
            />
            Show locked items
          </label>
        </div>

        {/* Count */}
        <p className="items-page__count">
          Showing <strong>{items.length}</strong> items
          {machine !== 'all' && ` in ${machine}`}
          {search && ` matching "${search}"`}
        </p>

        {/* Grid */}
        <div className="items-page__grid">
          {items.map((item, idx) => (
            <ItemCard
              key={item.id}
              item={item}
              delay={idx}
              compact={false}
            />
          ))}

          {items.length === 0 && (
            <motion.div className="items-page__empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span>🔍</span>
              <p>No items found. Try adjusting your filters.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
