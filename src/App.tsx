// ============================================================
// HAYTASK - Main App Component
// ============================================================

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { GameProvider } from './store/GameStore';
import { Sidebar } from './components/layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { OrdersPage } from './pages/Orders';
import { ItemsPage } from './pages/ItemsPage';
import { StockPage } from './pages/StockPage';
import { ProductionPage } from './pages/ProductionPage';
import { FavoritesPage } from './pages/FavoritesPage';
import { StatsPage } from './pages/StatsPage';
import { useDarkMode, useOrderStats } from './hooks';
import './styles/globals.scss';
import './App.scss';

type Page = 'dashboard' | 'production' | 'orders' | 'stock' | 'items' | 'favorites' | 'stats';

function AppInner() {
  const [page, setPage] = useState<Page>('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { total: orderCount } = useOrderStats();

  useDarkMode();

  const renderPage = () => {
    const pageMap: Record<Page, JSX.Element> = {
      dashboard:  <Dashboard />,
      production: <ProductionPage />,
      orders:     <OrdersPage />,
      stock:      <StockPage />,
      items:      <ItemsPage />,
      favorites:  <FavoritesPage />,
      stats:      <StatsPage />,
    };
    return pageMap[page] ?? <Dashboard />;
  };

  return (
    <div className="app">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="app__overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <Sidebar
        activePage={page}
        onNavigate={(p) => {
          setPage(p as Page);
          setSidebarOpen(false);
        }}
        orderCount={orderCount}
      />

      <main className="app__main">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="app__page-wrapper"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppInner />
    </GameProvider>
  );
}
