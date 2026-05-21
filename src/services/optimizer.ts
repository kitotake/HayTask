// ============================================================
// HAYTASK - Production Optimizer Engine
// Sorts production tasks by: time → demand → expiry → profit
// ============================================================

import { ITEMS, getItem, profitPerHour } from '../data/items';
import type { Order, ProductionRecommendation, GameState } from '../types';
import { nanoid } from './nanoid';

/**
 * Generate an optimized production queue based on:
 * 1. Active orders (what's needed)
 * 2. Player level (what's available)
 * 3. Current stock (what's missing)
 * 4. Production time (fastest first)
 * 5. Profit potential
 */
export function generateRecommendations(state: GameState): ProductionRecommendation[] {
  const { playerLevel, stock, orders } = state;
  const recs: ProductionRecommendation[] = [];

  // Only look at accepted / pending orders
  const activeOrders = orders.filter(o =>
    o.status === 'pending' || o.status === 'accepted' || o.status === 'in_progress'
  );

  for (const order of activeOrders) {
    const timeLeft = order.expiresAt ? order.expiresAt - Date.now() : Infinity;

    for (const orderItem of order.items) {
      const needed = orderItem.quantity - orderItem.fulfilled;
      if (needed <= 0) continue;

      const inStock = stock[orderItem.itemId] ?? 0;
      const toMake = Math.max(0, needed - inStock);
      if (toMake <= 0) continue;

      const item = getItem(orderItem.itemId);
      if (!item || item.levelRequired > playerLevel) continue;

      // Priority: lower = higher priority
      // Base: production time (faster = higher prio)
      // Urgency bonus: orders expiring soon
      const urgencyBonus = timeLeft < 3600000 ? -1000 : timeLeft < 7200000 ? -500 : 0;
      const priority = item.productionTime + urgencyBonus;

      recs.push({
        itemId: item.id,
        quantity: toMake,
        machine: item.machine,
        productionTime: item.productionTime,
        priority,
        orderId: order.id,
        reason: order.type === 'truck'
          ? `🚚 Truck order (${needed} needed)`
          : order.type === 'boat'
          ? `⛵ Boat cargo (${needed} needed)`
          : `👤 Visitor request (${needed} needed)`,
      });
    }
  }

  // Add profitable free-production suggestions (if no order covers them)
  const coveredItems = new Set(recs.map(r => r.itemId));
  const unlockedItems = ITEMS.filter(i => i.levelRequired <= playerLevel);

  // Top 5 most profitable items not already in queue
  const freeItems = unlockedItems
    .filter(i => !coveredItems.has(i.id))
    .sort((a, b) => profitPerHour(b) - profitPerHour(a))
    .slice(0, 5);

  for (const item of freeItems) {
    recs.push({
      itemId: item.id,
      quantity: 3,
      machine: item.machine,
      productionTime: item.productionTime,
      priority: item.productionTime + 10000, // Lower priority than orders
      reason: `💰 High profit (${profitPerHour(item)} coins/hr)`,
    });
  }

  // Sort: priority ascending (lower = faster / more urgent)
  return recs.sort((a, b) => a.priority - b.priority);
}

/**
 * Calculate total estimated production time for a recommendation list
 */
export function calcTotalTime(recs: ProductionRecommendation[]): number {
  return recs.reduce((sum, r) => sum + r.productionTime * r.quantity, 0);
}

/**
 * Calculate estimated total profit for a recommendation list
 */
export function calcTotalProfit(recs: ProductionRecommendation[]): number {
  return recs.reduce((sum, r) => {
    const item = getItem(r.itemId);
    return sum + (item?.sellPrice ?? 0) * r.quantity;
  }, 0);
}

/**
 * Check if an order is fully fulfillable with current stock
 */
export function isOrderFulfillable(order: Order, stock: Record<string, number>): boolean {
  return order.items.every(oi => (stock[oi.itemId] ?? 0) >= oi.quantity - oi.fulfilled);
}

/**
 * Generate a unique task ID
 */
export { nanoid };
