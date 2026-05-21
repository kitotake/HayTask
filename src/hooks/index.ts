// ============================================================
// HAYTASK - Custom Hooks
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { useGame } from '../store/GameStore';

/**
 * Live countdown timer — updates every second
 */
export function useCountdown(targetMs: number): string {
  const [remaining, setRemaining] = useState(() => Math.max(0, targetMs - Date.now()));

  useEffect(() => {
    const tick = () => setRemaining(Math.max(0, targetMs - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  if (remaining <= 0) return 'Done!';
  const totalSecs = Math.floor(remaining / 1000);
  const h = Math.floor(totalSecs / 3600);
  const m = Math.floor((totalSecs % 3600) / 60);
  const s = totalSecs % 60;
  if (h > 0) return `${h}h ${m}m ${s}s`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

/**
 * Periodically refresh a derived value
 */
export function useInterval(cb: () => void, delay: number) {
  const cbRef = useRef(cb);
  cbRef.current = cb;
  useEffect(() => {
    const id = setInterval(() => cbRef.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

/**
 * Dark mode class applier
 */
export function useDarkMode() {
  const { state } = useGame();
  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.darkMode);
  }, [state.darkMode]);
}

/**
 * Toast notifications
 */
export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

export function useToasts() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: Toast['type'] = 'info') => {
    const id = Math.random().toString(36).slice(2);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
}

/**
 * Stock quick-editor
 */
export function useStock(itemId: string) {
  const { state, dispatch, getStock } = useGame();
  const qty = getStock(itemId);

  const add = useCallback((amount = 1) => {
    dispatch({ type: 'ADD_STOCK', itemId, amount });
  }, [dispatch, itemId]);

  const remove = useCallback((amount = 1) => {
    dispatch({ type: 'REMOVE_STOCK', itemId, amount });
  }, [dispatch, itemId]);

  const set = useCallback((quantity: number) => {
    dispatch({ type: 'SET_STOCK', itemId, quantity });
  }, [dispatch, itemId]);

  return { qty, add, remove, set };
}

/**
 * Orders summary stats
 */
export function useOrderStats() {
  const { state } = useGame();
  const active = state.orders.filter(o => ['pending', 'accepted', 'in_progress'].includes(o.status));
  const truck = active.filter(o => o.type === 'truck').length;
  const boat = active.filter(o => o.type === 'boat').length;
  const visitor = active.filter(o => o.type === 'visitor').length;
  return { total: active.length, truck, boat, visitor };
}

/**
 * Local search filter
 */
export function useSearch<T>(items: T[], searchKey: (item: T) => string) {
  const [query, setQuery] = useState('');
  const filtered = query
    ? items.filter(i => searchKey(i).toLowerCase().includes(query.toLowerCase()))
    : items;
  return { query, setQuery, filtered };
}
