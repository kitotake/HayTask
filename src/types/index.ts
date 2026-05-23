// ============================================================
// HAYTASK - Complete Type Definitions
// ============================================================

export type Category =
  | 'crop' | 'tree' | 'animal' | 'bakery' | 'dairy' | 'feed'
  | 'sugar' | 'popcorn' | 'bbq' | 'loom' | 'jam' | 'juice'
  | 'pie' | 'cake' | 'ice_cream' | 'fishing' | 'candy' | 'coffee'
  | 'soup' | 'sushi' | 'salad' | 'sandwich' | 'smoothie' | 'pasta'
  | 'sauce' | 'jewelry' | 'hot_dog' | 'taco' | 'tea' | 'flower'
  | 'candle' | 'fondue' | 'donut' | 'fudge' | 'hatter' | 'bath'
  | 'porridge' | 'milkshake' | 'waffle' | 'cupcake' | 'wok' | 'omelet'
  | 'stew' | 'yogurt' | 'essential_oil' | 'perfume' | 'honey' | 'deep_fry'
  | 'mine' | 'smelter' | 'net_maker' | 'lure_workbench' | 'duck_salon'
  | 'hat_maker' | 'pottery_studio' | 'preservation_station' | 'dev';

export type Machine =
  | 'Field' | 'Tree' | 'Animal' | 'Bakery' | 'Dairy' | 'Feed Mill'
  | 'Sugar Mill' | 'Popcorn Pot' | 'BBQ Grill' | 'Loom' | 'Sewing Machine'
  | 'Jam Maker' | 'Juice Press' | 'Pie Oven' | 'Cake Oven' | 'Ice Cream Maker'
  | 'Fishing Spot' | 'Lobster Pool' | 'Coffee Kiosk' | 'Soup Kitchen'
  | 'Sushi Bar' | 'Salad Bar' | 'Sandwich Bar' | 'Smoothie Mixer'
  | 'Pasta Machine' | 'Pasta Kitchen' | 'Sauce Maker' | 'Jeweler'
  | 'Hot Dog Stand' | 'Taco Kitchen' | 'Tea Stand' | 'Flower Shop'
  | 'Candle Maker' | 'Fondue Pot' | 'Donut Maker' | 'Fudge Shop'
  | 'Hatter' | 'Bath Kiosk' | 'Porridge Bar' | 'Milkshake Bar'
  | 'Waffle Maker' | 'Cupcake Maker' | 'Wok Kitchen' | 'Omelet Station'
  | 'Stew Pot' | 'Yogurt Maker' | 'Essential Oil Lab' | 'Perfumery'
  | 'Honey Extractor' | 'Candy Machine' | 'Deep Fryer' | 'Mine'
  | 'Smelter' | 'Net Maker' | 'Lure Workbench' | 'Duck Salon'
  | 'Hat Maker' | 'Pottery Studio' | 'Preservation Station' | 'Dev';

export interface Ingredient {
  itemId: string;
  quantity: number;
}

export interface Item {
  id: string;
  name: string;
  /** image path relative to /assets/  OR  emoji fallback */
  src: string;
  category: Category;
  machine: Machine;
  levelRequired: number;
  productionTime: number; // seconds
  sellPrice: number;      // coins
  xp: number;
  ingredients: Ingredient[];
}

export type OrderType = 'visitor' | 'truck' | 'boat';
export type OrderStatus = 'pending' | 'accepted' | 'in_progress' | 'completed' | 'expired';

export interface OrderItem {
  itemId: string;
  quantity: number;
  fulfilled: number;
}

export interface Order {
  id: string;
  type: OrderType;
  items: OrderItem[];
  reward: number;
  xp: number;
  status: OrderStatus;
  createdAt: number;
  expiresAt?: number;
  acceptedAt?: number;
}

export interface ProductionTask {
  id: string;
  itemId: string;
  quantity: number;
  machine: Machine;
  startedAt: number;
  completesAt: number;
  orderId?: string;
  status: 'queued' | 'running' | 'completed';
}

export interface GameState {
  playerLevel: number;
  stock: Record<string, number>;
  orders: Order[];
  productionQueue: ProductionTask[];
  favorites: string[];
  darkMode: boolean;
  lastSaved: number;
}

export interface ProductionRecommendation {
  itemId: string;
  quantity: number;
  machine: Machine;
  productionTime: number;
  priority: number;
  reason: string;
  orderId?: string;
}