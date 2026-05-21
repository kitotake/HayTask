// ============================================================
// HAYTASK - Stock Management Page
// ============================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTrash, faBoxOpen, faLayerGroup, faCoins } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../components/layout/Header';
import { useGame } from '../store/GameStore';
import { getUnlockedItems, getItem } from '../data/items';
import { ItemImage } from '../components/ui/ItemImage';
import './StockPage.scss';

export function StockPage() {
  const { state, dispatch } = useGame();
  const [search, setSearch] = useState('');

  const unlockedItems = getUnlockedItems(state.playerLevel);

  const filtered = unlockedItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.machine.toLowerCase().includes(search.toLowerCase())
  );

  const totalStockValue = Object.entries(state.stock).reduce((sum, [id, qty]) => {
    const item = getItem(id);
    return sum + (item?.sellPrice ?? 0) * qty;
  }, 0);

  const totalItems  = Object.values(state.stock).reduce((s, v) => s + v, 0);
  const uniqueTypes = Object.entries(state.stock).filter(([, v]) => v > 0).length;

  const setQty = (itemId: string, qty: number) =>
    dispatch({ type: 'SET_STOCK', itemId, quantity: Math.max(0, qty) });

  const summaryCards = [
    { icon: faBoxOpen,    label: 'Total Items', value: totalItems.toLocaleString(), gold: false },
    { icon: faLayerGroup, label: 'Item Types',  value: uniqueTypes,                gold: false },
    { icon: faCoins,      label: 'Barn Value',  value: `${totalStockValue.toLocaleString()} coins`, gold: true },
  ];

  return (
    <div className="page">
      <Header title="Stock" search={search} onSearch={setSearch} />

      <div className="page__content">
        {/* Summary */}
        <div className="stock__summary">
          {summaryCards.map(card => (
            <div key={card.label} className="stock__summary-card">
              <FontAwesomeIcon icon={card.icon} className={`stock__summary-icon ${card.gold ? 'gold' : ''}`} />
              <div>
                <p className="stock__summary-label">{card.label}</p>
                <p className={`stock__summary-value ${card.gold ? 'gold' : ''}`}>{card.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="stock__table-wrap">
          <table className="stock__table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Machine</th>
                <th>Lv.</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Value</th>
                <th>Adjust</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item, idx) => {
                const qty   = state.stock[item.id] ?? 0;
                const value = qty * item.sellPrice;

                return (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.015 }}
                    className={qty > 0 ? 'has-stock' : ''}
                  >
                    <td>
                      <div className="stock__item-name">
                        <ItemImage itemId={item.id} fallback={item.src} size="sm" />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="stock__machine">{item.machine}</td>
                    <td className="stock__level">{item.levelRequired}</td>
                    <td className="stock__price">{item.sellPrice}</td>
                    <td>
                      <input
                        type="number"
                        className="stock__qty-input"
                        value={qty}
                        min={0}
                        onChange={e => setQty(item.id, parseInt(e.target.value) || 0)}
                      />
                    </td>
                    <td className={`stock__value ${value > 0 ? 'positive' : ''}`}>
                      {value > 0 ? value.toLocaleString() : '—'}
                    </td>
                    <td>
                      <div className="stock__actions">
                        <button
                          className="stock__btn stock__btn--minus"
                          onClick={() => dispatch({ type: 'REMOVE_STOCK', itemId: item.id, amount: 1 })}
                          disabled={qty === 0}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <button
                          className="stock__btn stock__btn--plus"
                          onClick={() => dispatch({ type: 'ADD_STOCK', itemId: item.id, amount: 1 })}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button
                          className="stock__btn stock__btn--add10"
                          onClick={() => dispatch({ type: 'ADD_STOCK', itemId: item.id, amount: 10 })}
                        >
                          +10
                        </button>
                        {qty > 0 && (
                          <button
                            className="stock__btn stock__btn--clear"
                            onClick={() => setQty(item.id, 0)}
                            title="Clear"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="stock__empty">
              <p>No items found for &ldquo;{search}&rdquo;</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
