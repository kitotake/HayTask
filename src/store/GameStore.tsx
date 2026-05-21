// ============================================================
// HAYTASK - Global State Store (Context + useReducer + localStorage)
// ============================================================

import { createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import type { GameState, Order, ProductionTask } from '../types';

const STORAGE_KEY = 'haytask_v2';

// ─── Initial State ───────────────────────────────────────────
const initialState: GameState = {
  playerLevel: 1,
  stock: {
    wheat: 10, corn: 5, egg: 3, milk: 2,
  },
  orders: [
    {
      id: 'demo-truck-1',
      type: 'truck',
      items: [
        { itemId: 'bread', quantity: 3, fulfilled: 0 },
        { itemId: 'cookies', quantity: 2, fulfilled: 0 },
      ],
      reward: 420,
      xp: 35,
      status: 'pending',
      createdAt: Date.now(),
      expiresAt: Date.now() + 14400000,
    },
    {
      id: 'demo-visitor-1',
      type: 'visitor',
      items: [
        { itemId: 'corn_bread', quantity: 1, fulfilled: 0 },
      ],
      reward: 72,
      xp: 8,
      status: 'pending',
      createdAt: Date.now(),
      expiresAt: Date.now() + 7200000,
    },
    {
      id: 'demo-boat-1',
      type: 'boat',
      items: [
        { itemId: 'butter', quantity: 5, fulfilled: 0 },
        { itemId: 'cream', quantity: 3, fulfilled: 0 },
        { itemId: 'cheese', quantity: 2, fulfilled: 0 },
      ],
      reward: 1500,
      xp: 120,
      status: 'accepted',
      createdAt: Date.now(),
      expiresAt: Date.now() + 86400000,
    },
  ],
  productionQueue: [],
  favorites: ['bread', 'cookies', 'bacon_eggs'],
  darkMode: false,
  lastSaved: Date.now(),
};

// ─── Actions ─────────────────────────────────────────────────
type Action =
  | { type: 'SET_LEVEL'; level: number }
  | { type: 'SET_STOCK'; itemId: string; quantity: number }
  | { type: 'ADD_STOCK'; itemId: string; amount: number }
  | { type: 'REMOVE_STOCK'; itemId: string; amount: number }
  | { type: 'ADD_ORDER'; order: Order }
  | { type: 'UPDATE_ORDER'; id: string; status: Order['status'] }
  | { type: 'REMOVE_ORDER'; id: string }
  | { type: 'FULFILL_ORDER_ITEM'; orderId: string; itemId: string; amount: number }
  | { type: 'ADD_PRODUCTION'; task: ProductionTask }
  | { type: 'COMPLETE_PRODUCTION'; taskId: string }
  | { type: 'REMOVE_PRODUCTION'; taskId: string }
  | { type: 'TOGGLE_FAVORITE'; itemId: string }
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'LOAD_STATE'; state: GameState }
  | { type: 'RESET' };

// ─── Reducer ─────────────────────────────────────────────────
function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'SET_LEVEL':
      return { ...state, playerLevel: action.level };

    case 'SET_STOCK':
      return { ...state, stock: { ...state.stock, [action.itemId]: Math.max(0, action.quantity) } };

    case 'ADD_STOCK':
      return {
        ...state,
        stock: {
          ...state.stock,
          [action.itemId]: (state.stock[action.itemId] ?? 0) + action.amount,
        },
      };

    case 'REMOVE_STOCK':
      return {
        ...state,
        stock: {
          ...state.stock,
          [action.itemId]: Math.max(0, (state.stock[action.itemId] ?? 0) - action.amount),
        },
      };

    case 'ADD_ORDER':
      return { ...state, orders: [...state.orders, action.order] };

    case 'UPDATE_ORDER':
      return {
        ...state,
        orders: state.orders.map(o =>
          o.id === action.id ? { ...o, status: action.status } : o
        ),
      };

    case 'REMOVE_ORDER':
      return { ...state, orders: state.orders.filter(o => o.id !== action.id) };

    case 'FULFILL_ORDER_ITEM':
      return {
        ...state,
        orders: state.orders.map(o =>
          o.id === action.orderId
            ? {
                ...o,
                items: o.items.map(i =>
                  i.itemId === action.itemId
                    ? { ...i, fulfilled: Math.min(i.quantity, i.fulfilled + action.amount) }
                    : i
                ),
              }
            : o
        ),
      };

    case 'ADD_PRODUCTION':
      return { ...state, productionQueue: [...state.productionQueue, action.task] };

    case 'COMPLETE_PRODUCTION':
      return {
        ...state,
        productionQueue: state.productionQueue.map(t =>
          t.id === action.taskId ? { ...t, status: 'completed' } : t
        ),
      };

    case 'REMOVE_PRODUCTION':
      return {
        ...state,
        productionQueue: state.productionQueue.filter(t => t.id !== action.taskId),
      };

    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.includes(action.itemId)
          ? state.favorites.filter(f => f !== action.itemId)
          : [...state.favorites, action.itemId],
      };

    case 'TOGGLE_DARK_MODE':
      return { ...state, darkMode: !state.darkMode };

    case 'LOAD_STATE':
      return action.state;

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────
interface GameContextType {
  state: GameState;
  dispatch: React.Dispatch<Action>;
  getStock: (itemId: string) => number;
}

const GameContext = createContext<GameContextType | null>(null);

// ─── Provider ────────────────────────────────────────────────
export function GameProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as GameState;
        // Merge to ensure new fields from updates are included
        return { ...init, ...parsed };
      }
    } catch {
      // ignore parse errors
    }
    return init;
  });

  // Auto-save to localStorage on every state change
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, lastSaved: Date.now() }));
    }, 500);
    return () => clearTimeout(timeout);
  }, [state]);

  const getStock = (itemId: string) => state.stock[itemId] ?? 0;

  return (
    <GameContext.Provider value={{ state, dispatch, getStock }}>
      {children}
    </GameContext.Provider>
  );
}

// ─── Hook ────────────────────────────────────────────────────
export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
