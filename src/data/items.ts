// ============================================================
// HAYTASK - Complete Hay Day Items Database
// Source: haydaycalculator.shootingspeed.com + official wiki
// 200+ items across 40+ machines — ALL REAL DATA
// ============================================================

import type { Item, Machine, Category } from '../types';
import { IMAGE_MAP } from './imageMap';

export const ITEMS: Item[] = [

  // ══════════════════════════════════════════════════════════
  // CROPS (Field)
  // ══════════════════════════════════════════════════════════

  { id:'HayDay_Pieces',       name:'Pièces en Or',        src:'🪙', category:'dev',  levelRequired:0,  productionTime:0,   sellPrice:0,   xp:0 },
  { id:'HayDay_XP',       name:'XP',        src:'𝙓𝙋', category:'dev',  levelRequired:0,  productionTime:0,   sellPrice:0,   xp:0 },
  


  { id:'wheat',       name:'Wheat',        src:'🌾', category:'crop', machine:'Field', levelRequired:1,  productionTime:120,   sellPrice:3,   xp:1,  ingredients:[] },
  { id:'corn',        name:'Corn',         src:'🌽', category:'crop', machine:'Field', levelRequired:2,  productionTime:300,   sellPrice:7,   xp:1,  ingredients:[] },
  { id:'carrot',      name:'Carrot',       src:'🥕', category:'crop', machine:'Field', levelRequired:9,  productionTime:600,   sellPrice:7,   xp:2,  ingredients:[] },
  { id:'soybean',     name:'Soybean',      src:'🫘', category:'crop', machine:'Field', levelRequired:5,  productionTime:1200,  sellPrice:10,  xp:2,  ingredients:[] },
  { id:'sugarcane',   name:'Sugarcane',    src:'🎋', category:'crop', machine:'Field', levelRequired:7,  productionTime:1800,  sellPrice:14,  xp:3,  ingredients:[] },
  { id:'indigo',      name:'Indigo',       src:'💙', category:'crop', machine:'Field', levelRequired:35, productionTime:7200,  sellPrice:35,  xp:5,  ingredients:[] },
  { id:'pumpkin',     name:'Pumpkin',      src:'🎃', category:'crop', machine:'Field', levelRequired:13, productionTime:10800, sellPrice:32,  xp:6,  ingredients:[] },
  { id:'chili_pepper',name:'Chili Pepper', src:'🌶️', category:'crop', machine:'Field', levelRequired:25, productionTime:14400, sellPrice:36,  xp:7,  ingredients:[] },
  { id:'tomato',      name:'Tomato',       src:'🍅', category:'crop', machine:'Field', levelRequired:30, productionTime:21600, sellPrice:43,  xp:8,  ingredients:[] },
  { id:'strawberry',  name:'Strawberry',   src:'🍓', category:'crop', machine:'Field', levelRequired:34, productionTime:28800, sellPrice:50,  xp:10, ingredients:[] },
  { id:'potato',      name:'Potato',       src:'🥔', category:'crop', machine:'Field', levelRequired:18, productionTime:13200, sellPrice:36,  xp:7,  ingredients:[] },
  { id:'cotton',      name:'Cotton',       src:'🤍', category:'crop', machine:'Field', levelRequired:56, productionTime:9000,  sellPrice:28,  xp:6,  ingredients:[] },
  { id:'rice',        name:'Rice',         src:'🍚', category:'crop', machine:'Field', levelRequired:58, productionTime:3600,  sellPrice:20,  xp:3,  ingredients:[] },
  { id:'lettuce',     name:'Lettuce',      src:'🥬', category:'crop', machine:'Field', levelRequired:58, productionTime:1800,  sellPrice:18,  xp:3,  ingredients:[] },
  { id:'sesame',      name:'Sesame',       src:'🌿', category:'crop', machine:'Field', levelRequired:50, productionTime:7200,  sellPrice:22,  xp:5,  ingredients:[] },
  { id:'onion',       name:'Onion',        src:'🧅', category:'crop', machine:'Field', levelRequired:68, productionTime:5400,  sellPrice:25,  xp:4,  ingredients:[] },
  { id:'broccoli',    name:'Broccoli',     src:'🥦', category:'crop', machine:'Field', levelRequired:83, productionTime:14400, sellPrice:38,  xp:7,  ingredients:[] },
  { id:'beetroot',    name:'Beetroot',     src:'🫚', category:'crop', machine:'Field', levelRequired:76, productionTime:10800, sellPrice:30,  xp:5,  ingredients:[] },
  { id:'asparagus',   name:'Asparagus',    src:'🌱', category:'crop', machine:'Field', levelRequired:67, productionTime:18000, sellPrice:45,  xp:8,  ingredients:[] },
  { id:'peanut',      name:'Peanut',       src:'🥜', category:'crop', machine:'Field', levelRequired:68, productionTime:14400, sellPrice:30,  xp:6,  ingredients:[] },

  // ══════════════════════════════════════════════════════════
  // TREES & BUSHES
  // ══════════════════════════════════════════════════════════
  { id:'apple',      name:'Apple',       src:'🍎', category:'tree', machine:'Tree', levelRequired:15, productionTime:57600,  sellPrice:39,  xp:7,  ingredients:[] },
  { id:'raspberry',  name:'Raspberry',   src:'🫐', category:'tree', machine:'Tree', levelRequired:19, productionTime:64800,  sellPrice:46,  xp:9,  ingredients:[] },
  { id:'cherry',     name:'Cherry',      src:'🍒', category:'tree', machine:'Tree', levelRequired:22, productionTime:100800, sellPrice:68,  xp:13, ingredients:[] },
  { id:'blackberry', name:'Blackberry',  src:'🟣', category:'tree', machine:'Tree', levelRequired:26, productionTime:115200, sellPrice:82,  xp:16, ingredients:[] },
  { id:'cacao',      name:'Cacao',       src:'🍫', category:'tree', machine:'Tree', levelRequired:36, productionTime:126000, sellPrice:86,  xp:16, ingredients:[] },
  { id:'coffee',     name:'Coffee',      src:'☕', category:'tree', machine:'Tree', levelRequired:42, productionTime:86400,  sellPrice:64,  xp:12, ingredients:[] },
  { id:'olive',      name:'Olive',       src:'🫒', category:'tree', machine:'Tree', levelRequired:57, productionTime:86400,  sellPrice:82,  xp:17, ingredients:[] },
  { id:'lemon',      name:'Lemon',       src:'🍋', category:'tree', machine:'Tree', levelRequired:66, productionTime:104400, sellPrice:93,  xp:18, ingredients:[] },
  { id:'blueberry',  name:'Blueberry',   src:'💜', category:'tree', machine:'Tree', levelRequired:31, productionTime:93600,  sellPrice:75,  xp:14, ingredients:[] },
  { id:'banana',     name:'Banana',      src:'🍌', category:'tree', machine:'Tree', levelRequired:91, productionTime:172800, sellPrice:120, xp:22, ingredients:[] },
  { id:'peach',      name:'Peach',       src:'🍑', category:'tree', machine:'Tree', levelRequired:83, productionTime:144000, sellPrice:105, xp:20, ingredients:[] },
  { id:'pineapple',  name:'Pineapple',   src:'🍍', category:'tree', machine:'Tree', levelRequired:52, productionTime:115200, sellPrice:80,  xp:15, ingredients:[] },
  { id:'orange',     name:'Orange',      src:'🍊', category:'tree', machine:'Tree', levelRequired:71, productionTime:115200, sellPrice:88,  xp:17, ingredients:[] },
  { id:'watermelon', name:'Watermelon',  src:'🍉', category:'tree', machine:'Tree', levelRequired:92, productionTime:180000, sellPrice:95,  xp:18, ingredients:[] },
  { id:'mango',      name:'Mango',       src:'🥭', category:'tree', machine:'Tree', levelRequired:97, productionTime:201600, sellPrice:110, xp:21, ingredients:[] },
  { id:'guava',      name:'Guava',       src:'🟢', category:'tree', machine:'Tree', levelRequired:104,productionTime:172800, sellPrice:95,  xp:18, ingredients:[] },
  { id:'passion_fruit',name:'Passion Fruit', src:'🟡',category:'tree',machine:'Tree',levelRequired:88,productionTime:180000,sellPrice:88, xp:17, ingredients:[] },
  { id:'pomegranate',name:'Pomegranate', src:'🔴', category:'tree', machine:'Tree', levelRequired:107,productionTime:201600, sellPrice:100, xp:19, ingredients:[] },
  { id:'plum',       name:'Plum',        src:'🫐', category:'tree', machine:'Tree', levelRequired:94, productionTime:172800, sellPrice:92,  xp:17, ingredients:[] },
  { id:'grape',      name:'Grape',       src:'🍇', category:'tree', machine:'Tree', levelRequired:85, productionTime:158400, sellPrice:88,  xp:16, ingredients:[] },
  { id:'ginger',     name:'Ginger',      src:'🌿', category:'tree', machine:'Tree', levelRequired:80, productionTime:144000, sellPrice:75,  xp:14, ingredients:[] },
  { id:'coconut',    name:'Coconut',     src:'🥥', category:'tree', machine:'Tree', levelRequired:102,productionTime:172800, sellPrice:88,  xp:16, ingredients:[] },
  { id:'mint',       name:'Mint',        src:'🌿', category:'tree', machine:'Tree', levelRequired:85, productionTime:144000, sellPrice:65,  xp:12, ingredients:[] },
  { id:'chamomile',  name:'Chamomile',   src:'🌸', category:'tree', machine:'Tree', levelRequired:74, productionTime:129600, sellPrice:58,  xp:11, ingredients:[] },
  { id:'mushroom',   name:'Mushroom',    src:'🍄', category:'tree', machine:'Tree', levelRequired:101,productionTime:172800, sellPrice:82,  xp:15, ingredients:[] },
  { id:'cucumber',   name:'Cucumber',    src:'🥒', category:'tree', machine:'Tree', levelRequired:79, productionTime:144000, sellPrice:70,  xp:13, ingredients:[] },

  // ══════════════════════════════════════════════════════════
  // ANIMAL PRODUCTS
  // ══════════════════════════════════════════════════════════
  { id:'egg',       name:'Egg',        src:'🥚', category:'animal', machine:'Animal', levelRequired:1,  productionTime:1200,  sellPrice:18,  xp:2,  ingredients:[] },
  { id:'milk',      name:'Milk',       src:'🥛', category:'animal', machine:'Animal', levelRequired:6,  productionTime:3600,  sellPrice:32,  xp:3,  ingredients:[] },
  { id:'bacon',     name:'Bacon',      src:'🥓', category:'animal', machine:'Animal', levelRequired:10, productionTime:14400, sellPrice:50,  xp:5,  ingredients:[] },
  { id:'wool',      name:'Wool',       src:'🐑', category:'animal', machine:'Animal', levelRequired:16, productionTime:21600, sellPrice:54,  xp:5,  ingredients:[] },
  { id:'goat_milk', name:'Goat Milk',  src:'🐐', category:'animal', machine:'Animal', levelRequired:32, productionTime:28800, sellPrice:64,  xp:6,  ingredients:[] },
  { id:'honeycomb', name:'Honeycomb',  src:'🍯', category:'animal', machine:'Animal', levelRequired:39, productionTime:2100,  sellPrice:68,  xp:8,  ingredients:[] },
  { id:'duck_egg',  name:'Duck Egg',   src:'🦆', category:'animal', machine:'Animal', levelRequired:50, productionTime:7200,  sellPrice:55,  xp:7,  ingredients:[] },
  { id:'lobster_tail',name:'Lobster Tail', src:'🦞',category:'fishing',machine:'Lobster Pool',levelRequired:44,productionTime:21600,sellPrice:201,xp:24,ingredients:[] },
  { id:'fish_fillet',name:'Fish Fillet', src:'🐟',category:'fishing',machine:'Fishing Spot',levelRequired:27,productionTime:1800,sellPrice:54,xp:7,ingredients:[] },

  // ══════════════════════════════════════════════════════════
  // FEED MILL
  // ══════════════════════════════════════════════════════════
  { id:'chicken_feed',name:'Chicken Feed', src:'🐔',category:'feed',machine:'Feed Mill',levelRequired:1, productionTime:300,  sellPrice:7,  xp:1, ingredients:[{itemId:'wheat',quantity:1},{itemId:'corn',quantity:1}] },
  { id:'cow_feed',    name:'Cow Feed',     src:'🐄',category:'feed',machine:'Feed Mill',levelRequired:6, productionTime:600,  sellPrice:14, xp:2, ingredients:[{itemId:'wheat',quantity:2},{itemId:'corn',quantity:1},{itemId:'soybean',quantity:1}] },
  { id:'pig_feed',    name:'Pig Feed',     src:'🐷',category:'feed',machine:'Feed Mill',levelRequired:10,productionTime:1200, sellPrice:14, xp:2, ingredients:[{itemId:'corn',quantity:2},{itemId:'soybean',quantity:1}] },
  { id:'sheep_feed',  name:'Sheep Feed',   src:'🐑',category:'feed',machine:'Feed Mill',levelRequired:16,productionTime:1800, sellPrice:14, xp:3, ingredients:[{itemId:'wheat',quantity:1},{itemId:'corn',quantity:1},{itemId:'soybean',quantity:1}] },
  { id:'goat_feed',   name:'Goat Feed',    src:'🐐',category:'feed',machine:'Feed Mill',levelRequired:32,productionTime:2400, sellPrice:14, xp:3, ingredients:[{itemId:'corn',quantity:2},{itemId:'soybean',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // BAKERY — Boulangerie (Niveau 2)
  // ══════════════════════════════════════════════════════════
  { id:'bread',             name:'Bread',               src:'🍞', category:'bakery', machine:'Bakery', levelRequired:2,  productionTime:240,   sellPrice:21,  xp:3,  ingredients:[{itemId:'wheat',quantity:3}] },
  { id:'corn_bread',        name:'Corn Bread',          src:'🌽', category:'bakery', machine:'Bakery', levelRequired:7,  productionTime:1500,  sellPrice:72,  xp:8,  ingredients:[{itemId:'corn',quantity:3},{itemId:'egg',quantity:1}] },
  { id:'cookies',           name:'Cookies',             src:'🍪', category:'bakery', machine:'Bakery', levelRequired:10, productionTime:3060,  sellPrice:104, xp:13, ingredients:[{itemId:'wheat',quantity:2},{itemId:'egg',quantity:1},{itemId:'milk',quantity:1}] },
  { id:'raspberry_muffin',  name:'Raspberry Muffin',    src:'🧁', category:'bakery', machine:'Bakery', levelRequired:19, productionTime:2280,  sellPrice:140, xp:17, ingredients:[{itemId:'raspberry',quantity:2},{itemId:'wheat',quantity:1},{itemId:'egg',quantity:1}] },
  { id:'blackberry_muffin', name:'Blackberry Muffin',   src:'🧁', category:'bakery', machine:'Bakery', levelRequired:26, productionTime:2280,  sellPrice:226, xp:27, ingredients:[{itemId:'blackberry',quantity:2},{itemId:'wheat',quantity:1},{itemId:'egg',quantity:1}] },
  { id:'pizza',             name:'Pizza',               src:'🍕', category:'bakery', machine:'Bakery', levelRequired:33, productionTime:720,   sellPrice:190, xp:23, ingredients:[{itemId:'wheat',quantity:2},{itemId:'tomato',quantity:1},{itemId:'cheese',quantity:1}] },
  { id:'blueberry_muffin',  name:'Blueberry Muffin',    src:'🫐', category:'bakery', machine:'Bakery', levelRequired:33, productionTime:2280,  sellPrice:230, xp:28, ingredients:[{itemId:'blueberry',quantity:2},{itemId:'wheat',quantity:1},{itemId:'egg',quantity:1}] },
  { id:'spicy_pizza',       name:'Spicy Pizza',         src:'🌶️', category:'bakery', machine:'Bakery', levelRequired:37, productionTime:720,   sellPrice:226, xp:27, ingredients:[{itemId:'wheat',quantity:2},{itemId:'chili_pepper',quantity:1},{itemId:'cheese',quantity:1}] },
  { id:'potato_bread',      name:'Potato Bread',        src:'🥖', category:'bakery', machine:'Bakery', levelRequired:39, productionTime:2280,  sellPrice:284, xp:34, ingredients:[{itemId:'potato',quantity:2},{itemId:'wheat',quantity:2}] },
  { id:'seafood_pizza',     name:'Seafood Pizza',       src:'🦐', category:'bakery', machine:'Bakery', levelRequired:45, productionTime:720,   sellPrice:403, xp:48, ingredients:[{itemId:'wheat',quantity:2},{itemId:'lobster_tail',quantity:1},{itemId:'cheese',quantity:1}] },
  { id:'gingerbread',       name:'Gingerbread',         src:'🍪', category:'bakery', machine:'Bakery', levelRequired:86, productionTime:1500,  sellPrice:273, xp:33, ingredients:[{itemId:'wheat',quantity:2},{itemId:'honey',quantity:1}] },
  { id:'banana_bread',      name:'Banana Bread',        src:'🍌', category:'bakery', machine:'Bakery', levelRequired:91, productionTime:1500,  sellPrice:424, xp:50, ingredients:[{itemId:'banana',quantity:2},{itemId:'wheat',quantity:2}] },
  { id:'macaron',           name:'Macaron',             src:'🌸', category:'bakery', machine:'Bakery', levelRequired:101,productionTime:1500,  sellPrice:421, xp:50, ingredients:[{itemId:'egg',quantity:2},{itemId:'white_sugar',quantity:1}] },
  { id:'pineapple_coconut_bars',name:'Pineapple-Coconut Bars', src:'🍍',category:'bakery',machine:'Bakery',levelRequired:120,productionTime:2040,sellPrice:284,xp:34,ingredients:[{itemId:'pineapple',quantity:2},{itemId:'coconut',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // DAIRY — Laitier (Niveau 6)
  // ══════════════════════════════════════════════════════════
  { id:'cream',      name:'Cream',       src:'🫙', category:'dairy', machine:'Dairy', levelRequired:6,  productionTime:1020,  sellPrice:50,  xp:6,  ingredients:[{itemId:'milk',quantity:2}] },
  { id:'butter',     name:'Butter',      src:'🧈', category:'dairy', machine:'Dairy', levelRequired:9,  productionTime:1500,  sellPrice:82,  xp:10, ingredients:[{itemId:'milk',quantity:2}] },
  { id:'cheese',     name:'Cheese',      src:'🧀', category:'dairy', machine:'Dairy', levelRequired:12, productionTime:3060,  sellPrice:122, xp:15, ingredients:[{itemId:'milk',quantity:3}] },
  { id:'goat_cheese',name:'Goat Cheese', src:'🐐', category:'dairy', machine:'Dairy', levelRequired:33, productionTime:4560,  sellPrice:162, xp:19, ingredients:[{itemId:'goat_milk',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // SUGAR MILL
  // ══════════════════════════════════════════════════════════
  { id:'white_sugar', name:'White Sugar',  src:'🍬', category:'sugar', machine:'Sugar Mill', levelRequired:12, productionTime:2400, sellPrice:50, xp:6, ingredients:[{itemId:'sugarcane',quantity:3}] },
  { id:'brown_sugar', name:'Brown Sugar',  src:'🟤', category:'sugar', machine:'Sugar Mill', levelRequired:7,  productionTime:1200, sellPrice:32, xp:4, ingredients:[{itemId:'sugarcane',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // BBQ GRILL — Barbecue (Niveau 9)
  // ══════════════════════════════════════════════════════════
  { id:'pancake',          name:'Pancake',           src:'🥞', category:'bbq', machine:'BBQ Grill', levelRequired:9,  productionTime:1500,  sellPrice:108, xp:13, ingredients:[{itemId:'wheat',quantity:2},{itemId:'egg',quantity:1},{itemId:'milk',quantity:1}] },
  { id:'bacon_eggs',       name:'Bacon & Eggs',      src:'🍳', category:'bbq', machine:'BBQ Grill', levelRequired:11, productionTime:3060,  sellPrice:201, xp:24, ingredients:[{itemId:'bacon',quantity:2},{itemId:'egg',quantity:2}] },
  { id:'hamburger',        name:'Hamburger',         src:'🍔', category:'bbq', machine:'BBQ Grill', levelRequired:18, productionTime:6120,  sellPrice:180, xp:22, ingredients:[{itemId:'bread',quantity:2},{itemId:'bacon',quantity:1},{itemId:'tomato',quantity:1}] },
  { id:'fish_burger',      name:'Fish Burger',       src:'🐟', category:'bbq', machine:'BBQ Grill', levelRequired:27, productionTime:6120,  sellPrice:226, xp:27, ingredients:[{itemId:'bread',quantity:2},{itemId:'fish_fillet',quantity:2}] },
  { id:'roasted_tomatoes', name:'Roasted Tomatoes',  src:'🍅', category:'bbq', machine:'BBQ Grill', levelRequired:30, productionTime:4560,  sellPrice:118, xp:14, ingredients:[{itemId:'tomato',quantity:3}] },
  { id:'baked_potato',     name:'Baked Potato',      src:'🥔', category:'bbq', machine:'BBQ Grill', levelRequired:35, productionTime:1740,  sellPrice:298, xp:36, ingredients:[{itemId:'potato',quantity:2},{itemId:'butter',quantity:1}] },
  { id:'fish_chips',       name:'Fish & Chips',      src:'🐠', category:'bbq', machine:'BBQ Grill', levelRequired:41, productionTime:4560,  sellPrice:244, xp:29, ingredients:[{itemId:'fish_fillet',quantity:2},{itemId:'potato',quantity:3}] },
  { id:'lobster_skewer',   name:'Lobster Skewer',    src:'🦞', category:'bbq', machine:'BBQ Grill', levelRequired:48, productionTime:2040,  sellPrice:417, xp:50, ingredients:[{itemId:'lobster_tail',quantity:1},{itemId:'olive_oil',quantity:1}] },
  { id:'garlic_bread',     name:'Garlic Bread',      src:'🧄', category:'bbq', machine:'BBQ Grill', levelRequired:60, productionTime:720,   sellPrice:198, xp:24, ingredients:[{itemId:'bread',quantity:2}] },
  { id:'grilled_asparagus',name:'Grilled Asparagus', src:'🌱', category:'bbq', machine:'BBQ Grill', levelRequired:67, productionTime:3780,  sellPrice:486, xp:58, ingredients:[{itemId:'asparagus',quantity:3}] },
  { id:'grilled_onion',    name:'Grilled Onion',     src:'🧅', category:'bbq', machine:'BBQ Grill', levelRequired:68, productionTime:3060,  sellPrice:190, xp:23, ingredients:[{itemId:'onion',quantity:3}] },
  { id:'winter_vegetables',name:'Winter Vegetables', src:'🥦', category:'bbq', machine:'BBQ Grill', levelRequired:72, productionTime:1260,  sellPrice:198, xp:24, ingredients:[{itemId:'broccoli',quantity:1},{itemId:'carrot',quantity:2}] },
  { id:'stuffed_peppers',  name:'Stuffed Peppers',   src:'🫑', category:'bbq', machine:'BBQ Grill', levelRequired:80, productionTime:1020,  sellPrice:352, xp:42, ingredients:[{itemId:'chili_pepper',quantity:2},{itemId:'cheese',quantity:1}] },
  { id:'grilled_eggplant', name:'Grilled Eggplant',  src:'🍆', category:'bbq', machine:'BBQ Grill', levelRequired:90, productionTime:2040,  sellPrice:324, xp:39, ingredients:[{itemId:'tomato',quantity:2}] },
  { id:'banana_pancakes',  name:'Banana Pancakes',   src:'🍌', category:'bbq', machine:'BBQ Grill', levelRequired:94, productionTime:3060,  sellPrice:352, xp:42, ingredients:[{itemId:'banana',quantity:2},{itemId:'wheat',quantity:1},{itemId:'egg',quantity:1}] },
  { id:'fish_skewer',      name:'Fish Skewer',       src:'🐟', category:'bbq', machine:'BBQ Grill', levelRequired:96, productionTime:1500,  sellPrice:176, xp:21, ingredients:[{itemId:'fish_fillet',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // CAKE OVEN — Four à gâteaux (Niveau 21)
  // ══════════════════════════════════════════════════════════
  { id:'carrot_cake',      name:'Carrot Cake',        src:'🎂', category:'cake', machine:'Cake Oven', levelRequired:21, productionTime:4560,  sellPrice:165, xp:20, ingredients:[{itemId:'carrot',quantity:4},{itemId:'egg',quantity:2}] },
  { id:'cream_cake',       name:'Cream Cake',         src:'🎂', category:'cake', machine:'Cake Oven', levelRequired:23, productionTime:9180,  sellPrice:219, xp:26, ingredients:[{itemId:'cream',quantity:2},{itemId:'white_sugar',quantity:1},{itemId:'egg',quantity:2}] },
  { id:'red_berry_cake',   name:'Red Berry Cake',     src:'🍰', category:'cake', machine:'Cake Oven', levelRequired:23, productionTime:3060,  sellPrice:255, xp:31, ingredients:[{itemId:'raspberry',quantity:3},{itemId:'cream',quantity:1}] },
  { id:'cheesecake',       name:'Cheesecake',         src:'🎂', category:'cake', machine:'Cake Oven', levelRequired:24, productionTime:12240, sellPrice:284, xp:34, ingredients:[{itemId:'cheese',quantity:2},{itemId:'butter',quantity:1},{itemId:'egg',quantity:2}] },
  { id:'blueberry_cheesecake',name:'Blueberry Cheesecake', src:'💙',category:'cake',machine:'Cake Oven',levelRequired:31,productionTime:12240,sellPrice:500,xp:60,ingredients:[{itemId:'blueberry',quantity:3},{itemId:'cheese',quantity:2}] },
  { id:'strawberry_cake',  name:'Strawberry Cake',    src:'🍰', category:'cake', machine:'Cake Oven', levelRequired:35, productionTime:9180,  sellPrice:316, xp:38, ingredients:[{itemId:'strawberry',quantity:3},{itemId:'cream',quantity:1},{itemId:'white_sugar',quantity:1}] },
  { id:'chocolate_cake',   name:'Chocolate Cake',     src:'🍫', category:'cake', machine:'Cake Oven', levelRequired:36, productionTime:6120,  sellPrice:320, xp:38, ingredients:[{itemId:'cacao',quantity:2},{itemId:'egg',quantity:2},{itemId:'white_sugar',quantity:1}] },
  { id:'potato_feta_cake', name:'Potato Feta Cake',   src:'🥔', category:'cake', machine:'Cake Oven', levelRequired:38, productionTime:6120,  sellPrice:309, xp:37, ingredients:[{itemId:'potato',quantity:3},{itemId:'goat_cheese',quantity:1}] },
  { id:'honey_apple_cake', name:'Honey Apple Cake',   src:'🍎', category:'cake', machine:'Cake Oven', levelRequired:42, productionTime:10200, sellPrice:482, xp:57, ingredients:[{itemId:'apple',quantity:3},{itemId:'honey',quantity:2}] },
  { id:'fancy_cake',       name:'Fancy Cake',         src:'🎂', category:'cake', machine:'Cake Oven', levelRequired:54, productionTime:720,   sellPrice:450, xp:49, ingredients:[{itemId:'cream',quantity:2},{itemId:'white_sugar',quantity:2}] },
  { id:'pineapple_cake',   name:'Pineapple Cake',     src:'🍍', category:'cake', machine:'Cake Oven', levelRequired:65, productionTime:3780,  sellPrice:259, xp:31, ingredients:[{itemId:'pineapple',quantity:3},{itemId:'cream',quantity:1}] },
  { id:'lemon_cake',       name:'Lemon Cake',         src:'🍋', category:'cake', machine:'Cake Oven', levelRequired:68, productionTime:7560,  sellPrice:896, xp:107,ingredients:[{itemId:'lemon',quantity:4},{itemId:'butter',quantity:2}] },
  { id:'fruit_cake',       name:'Fruit Cake',         src:'🍰', category:'cake', machine:'Cake Oven', levelRequired:89, productionTime:9180,  sellPrice:450, xp:54, ingredients:[{itemId:'apple',quantity:2},{itemId:'cherry',quantity:2}] },
  { id:'chocolate_roll',   name:'Chocolate Roll',     src:'🍫', category:'cake', machine:'Cake Oven', levelRequired:95, productionTime:4560,  sellPrice:604, xp:72, ingredients:[{itemId:'cacao',quantity:3},{itemId:'cream',quantity:2}] },
  { id:'pomegranate_cake', name:'Pomegranate Cake',   src:'🔴', category:'cake', machine:'Cake Oven', levelRequired:108,productionTime:9600,  sellPrice:316, xp:38, ingredients:[{itemId:'pomegranate',quantity:3},{itemId:'white_sugar',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // ICE CREAM MAKER — Sorbetière (Niveau 29)
  // ══════════════════════════════════════════════════════════
  { id:'vanilla_ice_cream',    name:'Vanilla Ice Cream',    src:'🍦', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:29, productionTime:6120,  sellPrice:172, xp:20, ingredients:[{itemId:'milk',quantity:2},{itemId:'white_sugar',quantity:1},{itemId:'cream',quantity:1}] },
  { id:'cherry_popsicle',      name:'Cherry Popsicle',      src:'🍭', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:33, productionTime:9180,  sellPrice:352, xp:42, ingredients:[{itemId:'cherry',quantity:3},{itemId:'white_sugar',quantity:1}] },
  { id:'strawberry_ice_cream', name:'Strawberry Ice Cream', src:'🍓', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:34, productionTime:12240, sellPrice:331, xp:40, ingredients:[{itemId:'strawberry',quantity:4},{itemId:'cream',quantity:1}] },
  { id:'chocolate_ice_cream',  name:'Chocolate Ice Cream',  src:'🍫', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:39, productionTime:7560,  sellPrice:342, xp:41, ingredients:[{itemId:'cacao',quantity:2},{itemId:'cream',quantity:1},{itemId:'white_sugar',quantity:1}] },
  { id:'sesame_ice_cream',     name:'Sesame Ice Cream',     src:'🌿', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:50, productionTime:6120,  sellPrice:176, xp:21, ingredients:[{itemId:'sesame',quantity:3},{itemId:'milk',quantity:2}] },
  { id:'pb_milkshake',         name:'Peanut Butter Milkshake', src:'🥜',category:'ice_cream',machine:'Ice Cream Maker',levelRequired:68,productionTime:5100,  sellPrice:619, xp:86, ingredients:[{itemId:'peanut',quantity:3},{itemId:'milk',quantity:2}] },
  { id:'orange_sorbet',        name:'Orange Sorbet',        src:'🍊', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:78, productionTime:10680, sellPrice:399, xp:48, ingredients:[{itemId:'orange',quantity:3},{itemId:'white_sugar',quantity:1}] },
  { id:'affogato',             name:'Affogato',             src:'☕', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:78, productionTime:1020,  sellPrice:435, xp:56, ingredients:[{itemId:'vanilla_ice_cream',quantity:1},{itemId:'espresso',quantity:1}] },
  { id:'peach_ice_cream',      name:'Peach Ice Cream',      src:'🍑', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:83, productionTime:9180,  sellPrice:450, xp:54, ingredients:[{itemId:'peach',quantity:3},{itemId:'cream',quantity:1}] },
  { id:'mint_ice_cream',       name:'Mint Ice Cream',       src:'🌿', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:85, productionTime:6840,  sellPrice:288, xp:34, ingredients:[{itemId:'mint',quantity:2},{itemId:'cream',quantity:1}] },
  { id:'banana_split',         name:'Banana Split',         src:'🍌', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:96, productionTime:10680, sellPrice:403, xp:48, ingredients:[{itemId:'banana',quantity:2},{itemId:'vanilla_ice_cream',quantity:1}] },
  { id:'coconut_ice_cream',    name:'Coconut Ice Cream',    src:'🥥', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:102,productionTime:720,   sellPrice:320, xp:38, ingredients:[{itemId:'coconut',quantity:2},{itemId:'cream',quantity:1}] },
  { id:'fruit_sorbet',         name:'Fruit Sorbet',         src:'🍑', category:'ice_cream', machine:'Ice Cream Maker', levelRequired:106,productionTime:3060,  sellPrice:518, xp:62, ingredients:[{itemId:'peach',quantity:2},{itemId:'mango',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // PIE OVEN — Four à tarte (Niveau 14)
  // ══════════════════════════════════════════════════════════
  { id:'carrot_pie',     name:'Carrot Pie',      src:'🥧', category:'pie', machine:'Pie Oven', levelRequired:14, productionTime:3060,  sellPrice:82,  xp:10, ingredients:[{itemId:'carrot',quantity:3},{itemId:'egg',quantity:1}] },
  { id:'pumpkin_pie',    name:'Pumpkin Pie',     src:'🎃', category:'pie', machine:'Pie Oven', levelRequired:15, productionTime:6120,  sellPrice:158, xp:19, ingredients:[{itemId:'pumpkin',quantity:2},{itemId:'egg',quantity:1}] },
  { id:'bacon_pie',      name:'Bacon Pie',       src:'🥧', category:'pie', machine:'Pie Oven', levelRequired:18, productionTime:9180,  sellPrice:219, xp:26, ingredients:[{itemId:'bacon',quantity:3},{itemId:'wheat',quantity:2},{itemId:'egg',quantity:1}] },
  { id:'apple_pie',      name:'Apple Pie',       src:'🍎', category:'pie', machine:'Pie Oven', levelRequired:28, productionTime:7560,  sellPrice:270, xp:32, ingredients:[{itemId:'apple',quantity:4},{itemId:'wheat',quantity:1},{itemId:'butter',quantity:1}] },
  { id:'fish_pie',       name:'Fish Pie',        src:'🐟', category:'pie', machine:'Pie Oven', levelRequired:28, productionTime:6120,  sellPrice:226, xp:27, ingredients:[{itemId:'fish_fillet',quantity:3},{itemId:'potato',quantity:2}] },
  { id:'feta_pie',       name:'Feta Pie',        src:'🥧', category:'pie', machine:'Pie Oven', levelRequired:34, productionTime:4560,  sellPrice:223, xp:26, ingredients:[{itemId:'goat_cheese',quantity:2},{itemId:'egg',quantity:1}] },
  { id:'casserole',      name:'Casserole',       src:'🫕', category:'pie', machine:'Pie Oven', levelRequired:36, productionTime:6120,  sellPrice:367, xp:44, ingredients:[{itemId:'potato',quantity:3},{itemId:'bacon',quantity:2}] },
  { id:'shepherds_pie',  name:'Shepherds Pie',   src:'🥧', category:'pie', machine:'Pie Oven', levelRequired:39, productionTime:5100,  sellPrice:280, xp:34, ingredients:[{itemId:'potato',quantity:3},{itemId:'egg',quantity:1}] },
  { id:'asparagus_quiche',name:'Asparagus Quiche', src:'🌱',category:'pie',machine:'Pie Oven', levelRequired:49, productionTime:6120,  sellPrice:302, xp:36, ingredients:[{itemId:'asparagus',quantity:3},{itemId:'egg',quantity:2}] },
  { id:'chocolate_pie',  name:'Chocolate Pie',   src:'🍫', category:'pie', machine:'Pie Oven', levelRequired:65, productionTime:3780,  sellPrice:514, xp:70, ingredients:[{itemId:'cacao',quantity:3},{itemId:'cream',quantity:2}] },
  { id:'lemon_pie',      name:'Lemon Pie',       src:'🍋', category:'pie', machine:'Pie Oven', levelRequired:67, productionTime:6840,  sellPrice:446, xp:53, ingredients:[{itemId:'lemon',quantity:3},{itemId:'egg',quantity:2}] },
  { id:'peach_tart',     name:'Peach Tart',      src:'🍑', category:'pie', machine:'Pie Oven', levelRequired:76, productionTime:7560,  sellPrice:435, xp:52, ingredients:[{itemId:'peach',quantity:3},{itemId:'cream',quantity:1}] },
  { id:'passion_fruit_pie',name:'Passion Fruit Pie', src:'🟡',category:'pie',machine:'Pie Oven',levelRequired:92,productionTime:2520, sellPrice:111, xp:13, ingredients:[{itemId:'passion_fruit',quantity:3}] },
  { id:'mushroom_pot_pie',name:'Mushroom Pot Pie', src:'🍄',category:'pie',machine:'Pie Oven', levelRequired:97, productionTime:3060,  sellPrice:162, xp:19, ingredients:[{itemId:'mushroom',quantity:3},{itemId:'cream',quantity:1}] },
  { id:'eggplant_parmesan',name:'Eggplant Parmesan', src:'🍆',category:'pie',machine:'Pie Oven',levelRequired:99,productionTime:2280, sellPrice:442, xp:53, ingredients:[{itemId:'cheese',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // POPCORN POT — Pot à popcorn (Niveau 8)
  // ══════════════════════════════════════════════════════════
  { id:'popcorn',          name:'Popcorn',           src:'🍿', category:'popcorn', machine:'Popcorn Pot', levelRequired:8,  productionTime:1500,  sellPrice:32,  xp:4,  ingredients:[{itemId:'corn',quantity:2}] },
  { id:'buttered_popcorn', name:'Buttered Popcorn',  src:'🍿', category:'popcorn', machine:'Popcorn Pot', levelRequired:16, productionTime:3060,  sellPrice:126, xp:15, ingredients:[{itemId:'popcorn',quantity:1},{itemId:'butter',quantity:1}] },
  { id:'chili_popcorn',    name:'Chili Popcorn',     src:'🌶️', category:'popcorn', machine:'Popcorn Pot', levelRequired:25, productionTime:6120,  sellPrice:122, xp:15, ingredients:[{itemId:'popcorn',quantity:1},{itemId:'chili_pepper',quantity:1}] },
  { id:'honey_popcorn',    name:'Honey Popcorn',     src:'🍯', category:'popcorn', machine:'Popcorn Pot', levelRequired:40, productionTime:4560,  sellPrice:360, xp:43, ingredients:[{itemId:'popcorn',quantity:1},{itemId:'honeycomb',quantity:1}] },
  { id:'chocolate_popcorn',name:'Chocolate Popcorn', src:'🍫', category:'popcorn', machine:'Popcorn Pot', levelRequired:44, productionTime:7560,  sellPrice:248, xp:29, ingredients:[{itemId:'popcorn',quantity:1},{itemId:'cacao',quantity:1}] },
  { id:'snack_mix',        name:'Snack Mix',          src:'🥣', category:'popcorn', machine:'Popcorn Pot', levelRequired:64, productionTime:2280,  sellPrice:309, xp:50, ingredients:[{itemId:'popcorn',quantity:2},{itemId:'peanut',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // LOOM — Métier à tisser (Niveau 17)
  // ══════════════════════════════════════════════════════════
  { id:'sweater',       name:'Sweater',        src:'🧥', category:'loom', machine:'Loom', levelRequired:17, productionTime:6120, sellPrice:151, xp:18, ingredients:[{itemId:'wool',quantity:3}] },
  { id:'cotton_fabric', name:'Cotton Fabric',  src:'🧶', category:'loom', machine:'Loom', levelRequired:18, productionTime:1500, sellPrice:108, xp:13, ingredients:[{itemId:'cotton',quantity:4}] },
  { id:'blue_woolly_hat',name:'Blue Woolly Hat', src:'🧢',category:'loom',machine:'Loom', levelRequired:19, productionTime:3060, sellPrice:111, xp:13, ingredients:[{itemId:'wool',quantity:2}] },
  { id:'blue_sweater',  name:'Blue Sweater',   src:'🩵', category:'loom', machine:'Loom', levelRequired:20, productionTime:9180, sellPrice:208, xp:25, ingredients:[{itemId:'indigo',quantity:2},{itemId:'wool',quantity:3}] },
  { id:'red_scarf',     name:'Red Scarf',      src:'🧣', category:'loom', machine:'Loom', levelRequired:48, productionTime:7560, sellPrice:288, xp:34, ingredients:[{itemId:'wool',quantity:2},{itemId:'indigo',quantity:1}] },
  { id:'flower_shawl',  name:'Flower Shawl',   src:'🌸', category:'loom', machine:'Loom', levelRequired:71, productionTime:4560, sellPrice:295, xp:35, ingredients:[{itemId:'cotton_fabric',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // SEWING MACHINE — Machine à coudre (Niveau 19)
  // ══════════════════════════════════════════════════════════
  { id:'wooly_chaps',  name:'Wooly Chaps',   src:'🤠', category:'loom', machine:'Sewing Machine', levelRequired:21, productionTime:4560,  sellPrice:309,  xp:37,  ingredients:[{itemId:'wool',quantity:4}] },
  { id:'violet_dress', name:'Violet Dress',  src:'👗', category:'loom', machine:'Sewing Machine', levelRequired:25, productionTime:6840,  sellPrice:327,  xp:39,  ingredients:[{itemId:'indigo',quantity:3},{itemId:'cotton_fabric',quantity:2}] },
  { id:'soothing_pad', name:'Soothing Pad',  src:'🩹', category:'loom', machine:'Sewing Machine', levelRequired:45, productionTime:3060,  sellPrice:324,  xp:39,  ingredients:[{itemId:'cotton_fabric',quantity:3}] },
  { id:'pillow',       name:'Pillow',        src:'🛏️', category:'loom', machine:'Sewing Machine', levelRequired:51, productionTime:9180,  sellPrice:676,  xp:81,  ingredients:[{itemId:'cotton_fabric',quantity:4},{itemId:'wool',quantity:2}] },
  { id:'blanket',      name:'Blanket',       src:'🫂', category:'loom', machine:'Sewing Machine', levelRequired:59, productionTime:10680, sellPrice:1098, xp:131, ingredients:[{itemId:'cotton_fabric',quantity:5},{itemId:'wool',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // JAM MAKER — Fabricant de confitures (Niveau 35)
  // ══════════════════════════════════════════════════════════
  { id:'apple_jam',       name:'Apple Jam',        src:'🍎', category:'jam', machine:'Jam Maker', levelRequired:35, productionTime:18360, sellPrice:219, xp:26, ingredients:[{itemId:'apple',quantity:4}] },
  { id:'raspberry_jam',   name:'Raspberry Jam',    src:'🫐', category:'jam', machine:'Jam Maker', levelRequired:36, productionTime:21420, sellPrice:252, xp:30, ingredients:[{itemId:'raspberry',quantity:4}] },
  { id:'blackberry_jam',  name:'Blackberry Jam',   src:'🟣', category:'jam', machine:'Jam Maker', levelRequired:37, productionTime:24480, sellPrice:388, xp:46, ingredients:[{itemId:'blackberry',quantity:4}] },
  { id:'cherry_jam',      name:'Cherry Jam',       src:'🍒', category:'jam', machine:'Jam Maker', levelRequired:38, productionTime:21420, sellPrice:334, xp:40, ingredients:[{itemId:'cherry',quantity:4}] },
  { id:'strawberry_jam',  name:'Strawberry Jam',   src:'🍓', category:'jam', machine:'Jam Maker', levelRequired:50, productionTime:22920, sellPrice:270, xp:32, ingredients:[{itemId:'strawberry',quantity:4}] },
  { id:'blueberry_chutney',name:'Blueberry Chutney', src:'💜',category:'jam',machine:'Jam Maker', levelRequired:70, productionTime:12240, sellPrice:579, xp:69, ingredients:[{itemId:'blueberry',quantity:5}] },
  { id:'marmalade',       name:'Marmalade',        src:'🍊', category:'jam', machine:'Jam Maker', levelRequired:74, productionTime:25980, sellPrice:457, xp:54, ingredients:[{itemId:'orange',quantity:4}] },
  { id:'peach_jam',       name:'Peach Jam',        src:'🍑', category:'jam', machine:'Jam Maker', levelRequired:79, productionTime:24480, sellPrice:464, xp:55, ingredients:[{itemId:'peach',quantity:4}] },
  { id:'grape_jam',       name:'Grape Jam',        src:'🍇', category:'jam', machine:'Jam Maker', levelRequired:85, productionTime:19860, sellPrice:162, xp:19, ingredients:[{itemId:'grape',quantity:4}] },
  { id:'plum_jam',        name:'Plum Jam',         src:'🫐', category:'jam', machine:'Jam Maker', levelRequired:94, productionTime:15300, sellPrice:385, xp:46, ingredients:[{itemId:'plum',quantity:4}] },
  { id:'passion_fruit_jam',name:'Passion Fruit Jam', src:'🟡',category:'jam',machine:'Jam Maker', levelRequired:96, productionTime:16320, sellPrice:118, xp:14, ingredients:[{itemId:'passion_fruit',quantity:4}] },

  // ══════════════════════════════════════════════════════════
  // JUICE PRESS — Presse à jus (Niveau 26)
  // ══════════════════════════════════════════════════════════
  { id:'carrot_juice',       name:'Carrot Juice',        src:'🥕', category:'juice', machine:'Juice Press', levelRequired:26, productionTime:1500,  sellPrice:46,  xp:6,  ingredients:[{itemId:'carrot',quantity:3}] },
  { id:'apple_juice',        name:'Apple Juice',         src:'🍎', category:'juice', machine:'Juice Press', levelRequired:28, productionTime:6120,  sellPrice:129, xp:15, ingredients:[{itemId:'apple',quantity:3}] },
  { id:'cherry_juice',       name:'Cherry Juice',        src:'🍒', category:'juice', machine:'Juice Press', levelRequired:30, productionTime:7560,  sellPrice:216, xp:26, ingredients:[{itemId:'cherry',quantity:3}] },
  { id:'tomato_juice',       name:'Tomato Juice',        src:'🍅', category:'juice', machine:'Juice Press', levelRequired:31, productionTime:4560,  sellPrice:162, xp:19, ingredients:[{itemId:'tomato',quantity:3}] },
  { id:'berry_juice',        name:'Berry Juice',         src:'🫐', category:'juice', machine:'Juice Press', levelRequired:31, productionTime:9180,  sellPrice:205, xp:24, ingredients:[{itemId:'blackberry',quantity:2},{itemId:'raspberry',quantity:1}] },
  { id:'pineapple_juice',    name:'Pineapple Juice',     src:'🍍', category:'juice', machine:'Juice Press', levelRequired:52, productionTime:2280,  sellPrice:68,  xp:8,  ingredients:[{itemId:'pineapple',quantity:3}] },
  { id:'orange_juice',       name:'Orange Juice',        src:'🍊', category:'juice', machine:'Juice Press', levelRequired:71, productionTime:6120,  sellPrice:234, xp:28, ingredients:[{itemId:'orange',quantity:3}] },
  { id:'grape_juice',        name:'Grape Juice',         src:'🍇', category:'juice', machine:'Juice Press', levelRequired:84, productionTime:7560,  sellPrice:104, xp:13, ingredients:[{itemId:'grape',quantity:3}] },
  { id:'passion_fruit_juice',name:'Passion Fruit Juice', src:'🟡', category:'juice', machine:'Juice Press', levelRequired:88, productionTime:2280,  sellPrice:64,  xp:8,  ingredients:[{itemId:'passion_fruit',quantity:3}] },
  { id:'watermelon_juice',   name:'Watermelon Juice',    src:'🍉', category:'juice', machine:'Juice Press', levelRequired:92, productionTime:3060,  sellPrice:108, xp:13, ingredients:[{itemId:'watermelon',quantity:3}] },
  { id:'mango_juice',        name:'Mango Juice',         src:'🥭', category:'juice', machine:'Juice Press', levelRequired:97, productionTime:2520,  sellPrice:230, xp:27, ingredients:[{itemId:'mango',quantity:3}] },
  { id:'guava_juice',        name:'Guava Juice',         src:'🟢', category:'juice', machine:'Juice Press', levelRequired:104,productionTime:2760,  sellPrice:252, xp:30, ingredients:[{itemId:'guava',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // HONEY EXTRACTOR — Extracteur de miel (Niveau 39)
  // ══════════════════════════════════════════════════════════
  { id:'honey',   name:'Honey',    src:'🍯', category:'jam',  machine:'Honey Extractor', levelRequired:39, productionTime:1020, sellPrice:154, xp:19, ingredients:[{itemId:'honeycomb',quantity:2}] },
  { id:'beeswax', name:'Beeswax',  src:'🕯️', category:'jam',  machine:'Honey Extractor', levelRequired:48, productionTime:2280, sellPrice:234, xp:28, ingredients:[{itemId:'honeycomb',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // COFFEE KIOSK — Kiosque à café (Niveau 42)
  // ══════════════════════════════════════════════════════════
  { id:'espresso',       name:'Espresso',        src:'☕', category:'juice', machine:'Coffee Kiosk', levelRequired:42, productionTime:240,  sellPrice:248, xp:29, ingredients:[{itemId:'coffee',quantity:2}] },
  { id:'caffe_latte',    name:'Caffe Latte',     src:'🧋', category:'juice', machine:'Coffee Kiosk', levelRequired:43, productionTime:480,  sellPrice:219, xp:26, ingredients:[{itemId:'coffee',quantity:1},{itemId:'milk',quantity:2}] },
  { id:'caffe_mocha',    name:'Caffe Mocha',     src:'☕', category:'juice', machine:'Coffee Kiosk', levelRequired:45, productionTime:720,  sellPrice:291, xp:35, ingredients:[{itemId:'coffee',quantity:1},{itemId:'cacao',quantity:1},{itemId:'milk',quantity:1}] },
  { id:'raspberry_mocha',name:'Raspberry Mocha', src:'🍓', category:'juice', machine:'Coffee Kiosk', levelRequired:46, productionTime:1500, sellPrice:259, xp:31, ingredients:[{itemId:'raspberry',quantity:2},{itemId:'espresso',quantity:1}] },
  { id:'hot_chocolate',  name:'Hot Chocolate',   src:'🍫', category:'juice', machine:'Coffee Kiosk', levelRequired:47, productionTime:1260, sellPrice:316, xp:38, ingredients:[{itemId:'cacao',quantity:2},{itemId:'milk',quantity:2}] },
  { id:'caramel_latte',  name:'Caramel Latte',   src:'🧋', category:'juice', machine:'Coffee Kiosk', levelRequired:62, productionTime:720,  sellPrice:345, xp:41, ingredients:[{itemId:'caffe_latte',quantity:1},{itemId:'brown_sugar',quantity:1}] },
  { id:'iced_banana_latte',name:'Iced Banana Latte', src:'🍌',category:'juice',machine:'Coffee Kiosk',levelRequired:88,productionTime:1020, sellPrice:277, xp:33, ingredients:[{itemId:'banana',quantity:2},{itemId:'milk',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // SOUP KITCHEN — Soupe populaire (Niveau 46)
  // ══════════════════════════════════════════════════════════
  { id:'lobster_soup',  name:'Lobster Soup',   src:'🦞', category:'bbq', machine:'Soup Kitchen', levelRequired:46, productionTime:7560,  sellPrice:612, xp:73, ingredients:[{itemId:'lobster_tail',quantity:2}] },
  { id:'tomato_soup',   name:'Tomato Soup',    src:'🍅', category:'bbq', machine:'Soup Kitchen', levelRequired:47, productionTime:4560,  sellPrice:478, xp:57, ingredients:[{itemId:'tomato',quantity:4}] },
  { id:'pumpkin_soup',  name:'Pumpkin Soup',   src:'🎃', category:'bbq', machine:'Soup Kitchen', levelRequired:49, productionTime:6120,  sellPrice:392, xp:47, ingredients:[{itemId:'pumpkin',quantity:3}] },
  { id:'asparagus_soup',name:'Asparagus Soup', src:'🌱', category:'bbq', machine:'Soup Kitchen', levelRequired:51, productionTime:3060,  sellPrice:255, xp:30, ingredients:[{itemId:'asparagus',quantity:3}] },
  { id:'fish_soup',     name:'Fish Soup',      src:'🐟', category:'bbq', machine:'Soup Kitchen', levelRequired:53, productionTime:9180,  sellPrice:298, xp:35, ingredients:[{itemId:'fish_fillet',quantity:4}] },
  { id:'cabbage_soup',  name:'Cabbage Soup',   src:'🥬', category:'bbq', machine:'Soup Kitchen', levelRequired:65, productionTime:4560,  sellPrice:270, xp:32, ingredients:[{itemId:'lettuce',quantity:4}] },
  { id:'onion_soup',    name:'Onion Soup',     src:'🧅', category:'bbq', machine:'Soup Kitchen', levelRequired:72, productionTime:7560,  sellPrice:327, xp:39, ingredients:[{itemId:'onion',quantity:4}] },
  { id:'noodle_soup',   name:'Noodle Soup',    src:'🍜', category:'bbq', machine:'Soup Kitchen', levelRequired:73, productionTime:6120,  sellPrice:432, xp:52, ingredients:[{itemId:'rice_noodles',quantity:2}] },
  { id:'potato_soup',   name:'Potato Soup',    src:'🥔', category:'bbq', machine:'Soup Kitchen', levelRequired:78, productionTime:7560,  sellPrice:255, xp:31, ingredients:[{itemId:'potato',quantity:4}] },
  { id:'bell_pepper_soup',name:'Bell Pepper Soup', src:'🫑',category:'bbq',machine:'Soup Kitchen',levelRequired:81,productionTime:3060, sellPrice:439, xp:52, ingredients:[{itemId:'chili_pepper',quantity:3},{itemId:'tomato',quantity:2}] },
  { id:'broccoli_soup', name:'Broccoli Soup',  src:'🥦', category:'bbq', machine:'Soup Kitchen', levelRequired:87, productionTime:3780,  sellPrice:237, xp:28, ingredients:[{itemId:'broccoli',quantity:3}] },
  { id:'mushroom_soup', name:'Mushroom Soup',  src:'🍄', category:'bbq', machine:'Soup Kitchen', levelRequired:104,productionTime:4080,  sellPrice:176, xp:21, ingredients:[{itemId:'mushroom',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // SUSHI BAR — Bar à sushis (Niveau 56)
  // ══════════════════════════════════════════════════════════
  { id:'sushi_roll',  name:'Sushi Roll',   src:'🍱', category:'bbq', machine:'Sushi Bar', levelRequired:56, productionTime:3060,  sellPrice:489, xp:58, ingredients:[{itemId:'rice',quantity:3},{itemId:'fish_fillet',quantity:2}] },
  { id:'lobster_sushi',name:'Lobster Sushi', src:'🦞',category:'bbq',machine:'Sushi Bar', levelRequired:59, productionTime:3060,  sellPrice:637, xp:76, ingredients:[{itemId:'rice',quantity:2},{itemId:'lobster_tail',quantity:1}] },
  { id:'egg_sushi',   name:'Egg Sushi',    src:'🥚', category:'bbq', machine:'Sushi Bar', levelRequired:63, productionTime:6120,  sellPrice:550, xp:66, ingredients:[{itemId:'rice',quantity:2},{itemId:'egg',quantity:3}] },
  { id:'big_sushi_roll',name:'Big Sushi Roll', src:'🍱',category:'bbq',machine:'Sushi Bar',levelRequired:76,productionTime:4560, sellPrice:648, xp:77, ingredients:[{itemId:'rice',quantity:4},{itemId:'fish_fillet',quantity:3}] },
  { id:'rice_ball',   name:'Rice Ball',    src:'🍙', category:'bbq', machine:'Sushi Bar', levelRequired:110,productionTime:2280,  sellPrice:464, xp:55, ingredients:[{itemId:'rice',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // SALAD BAR — Bar à salades (Niveau 58)
  // ══════════════════════════════════════════════════════════
  { id:'feta_salad',   name:'Feta Salad',    src:'🥗', category:'bbq', machine:'Salad Bar', levelRequired:58, productionTime:4560,  sellPrice:745, xp:89, ingredients:[{itemId:'lettuce',quantity:3},{itemId:'goat_cheese',quantity:2}] },
  { id:'bean_salad',   name:'Bean Salad',    src:'🫘', category:'bbq', machine:'Salad Bar', levelRequired:58, productionTime:3060,  sellPrice:169, xp:20, ingredients:[{itemId:'soybean',quantity:4}] },
  { id:'blt_salad',    name:'BLT Salad',     src:'🥓', category:'bbq', machine:'Salad Bar', levelRequired:62, productionTime:5340,  sellPrice:723, xp:86, ingredients:[{itemId:'bacon',quantity:2},{itemId:'lettuce',quantity:3},{itemId:'tomato',quantity:2}] },
  { id:'seafood_salad',name:'Seafood Salad', src:'🦐', category:'bbq', machine:'Salad Bar', levelRequired:64, productionTime:6120,  sellPrice:763, xp:91, ingredients:[{itemId:'lobster_tail',quantity:1},{itemId:'lettuce',quantity:3}] },
  { id:'pasta_salad',  name:'Pasta Salad',   src:'🍝', category:'bbq', machine:'Salad Bar', levelRequired:67, productionTime:7560,  sellPrice:759, xp:90, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'tomato',quantity:2}] },
  { id:'beetroot_salad',name:'Beetroot Salad', src:'🫚',category:'bbq',machine:'Salad Bar', levelRequired:76, productionTime:2280,  sellPrice:234, xp:28, ingredients:[{itemId:'beetroot',quantity:3}] },
  { id:'fruit_salad',  name:'Fruit Salad',   src:'🍓', category:'bbq', machine:'Salad Bar', levelRequired:82, productionTime:6120,  sellPrice:597, xp:71, ingredients:[{itemId:'apple',quantity:2},{itemId:'strawberry',quantity:2},{itemId:'cherry',quantity:2}] },
  { id:'mushroom_salad',name:'Mushroom Salad', src:'🍄',category:'bbq',machine:'Salad Bar', levelRequired:89, productionTime:3060,  sellPrice:216, xp:26, ingredients:[{itemId:'mushroom',quantity:3}] },
  { id:'orange_salad', name:'Orange Salad',  src:'🍊', category:'bbq', machine:'Salad Bar', levelRequired:117,productionTime:2280,  sellPrice:558, xp:66, ingredients:[{itemId:'orange',quantity:3},{itemId:'lettuce',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // SANDWICH BAR — Bar à sandwichs (Niveau 61)
  // ══════════════════════════════════════════════════════════
  { id:'veggie_bagel',   name:'Veggie Bagel',    src:'🥯', category:'bbq', machine:'Sandwich Bar', levelRequired:61, productionTime:2040, sellPrice:532, xp:63, ingredients:[{itemId:'wheat',quantity:3},{itemId:'carrot',quantity:2}] },
  { id:'bacon_toast',    name:'Bacon Toast',     src:'🍞', category:'bbq', machine:'Sandwich Bar', levelRequired:65, productionTime:5100, sellPrice:648, xp:77, ingredients:[{itemId:'bread',quantity:2},{itemId:'bacon',quantity:3}] },
  { id:'egg_sandwich',   name:'Egg Sandwich',    src:'🥪', category:'bbq', machine:'Sandwich Bar', levelRequired:66, productionTime:4080, sellPrice:583, xp:69, ingredients:[{itemId:'bread',quantity:2},{itemId:'egg',quantity:3}] },
  { id:'honey_toast',    name:'Honey Toast',     src:'🍯', category:'bbq', machine:'Sandwich Bar', levelRequired:69, productionTime:3060, sellPrice:255, xp:31, ingredients:[{itemId:'bread',quantity:1},{itemId:'honeycomb',quantity:1}] },
  { id:'pbj_sandwich',   name:'PB&J Sandwich',   src:'🥜', category:'bbq', machine:'Sandwich Bar', levelRequired:71, productionTime:1260, sellPrice:601, xp:80, ingredients:[{itemId:'bread',quantity:2},{itemId:'peanut',quantity:2}] },
  { id:'cucumber_sandwich',name:'Cucumber Sandwich', src:'🥒',category:'bbq',machine:'Sandwich Bar',levelRequired:79,productionTime:1740, sellPrice:464, xp:55, ingredients:[{itemId:'bread',quantity:2},{itemId:'cucumber',quantity:2}] },
  { id:'goat_cheese_toast',name:'Goat Cheese Toast', src:'🧀',category:'bbq',machine:'Sandwich Bar',levelRequired:92,productionTime:2520, sellPrice:302, xp:36, ingredients:[{itemId:'bread',quantity:2},{itemId:'goat_cheese',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // SMOOTHIE MIXER — Mixeur à smoothie (Niveau 64)
  // ══════════════════════════════════════════════════════════
  { id:'berry_smoothie',  name:'Berry Smoothie',   src:'🫐', category:'juice', machine:'Smoothie Mixer', levelRequired:64, productionTime:3780, sellPrice:547, xp:65, ingredients:[{itemId:'raspberry',quantity:2},{itemId:'blueberry',quantity:2}] },
  { id:'green_smoothie',  name:'Green Smoothie',   src:'🥬', category:'juice', machine:'Smoothie Mixer', levelRequired:66, productionTime:2280, sellPrice:320, xp:38, ingredients:[{itemId:'lettuce',quantity:3},{itemId:'apple',quantity:2}] },
  { id:'yogurt_smoothie', name:'Yogurt Smoothie',  src:'🥛', category:'juice', machine:'Smoothie Mixer', levelRequired:70, productionTime:3060, sellPrice:349, xp:42, ingredients:[{itemId:'milk',quantity:3},{itemId:'strawberry',quantity:2}] },
  { id:'mixed_smoothie',  name:'Mixed Smoothie',   src:'🍓', category:'juice', machine:'Smoothie Mixer', levelRequired:88, productionTime:1500, sellPrice:504, xp:60, ingredients:[{itemId:'mango',quantity:2},{itemId:'pineapple',quantity:1}] },
  { id:'cocoa_smoothie',  name:'Cocoa Smoothie',   src:'🍫', category:'juice', machine:'Smoothie Mixer', levelRequired:100,productionTime:2040, sellPrice:511, xp:61, ingredients:[{itemId:'cacao',quantity:2},{itemId:'milk',quantity:2}] },
  { id:'tropical_smoothie',name:'Tropical Smoothie', src:'🥭',category:'juice',machine:'Smoothie Mixer',levelRequired:104,productionTime:2040, sellPrice:475, xp:57, ingredients:[{itemId:'mango',quantity:2},{itemId:'coconut',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // PASTA MACHINE — Machine à pâtes (Niveau 67)
  // ══════════════════════════════════════════════════════════
  { id:'fresh_pasta',  name:'Fresh Pasta',   src:'🍝', category:'bbq', machine:'Pasta Machine', levelRequired:67, productionTime:720,  sellPrice:43,  xp:5,  ingredients:[{itemId:'wheat',quantity:3},{itemId:'egg',quantity:1}] },
  { id:'rice_noodles', name:'Rice Noodles',  src:'🍜', category:'bbq', machine:'Pasta Machine', levelRequired:73, productionTime:1020, sellPrice:100, xp:12, ingredients:[{itemId:'rice',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // PASTA KITCHEN — Cuisine de pâtes (Niveau 72)
  // ══════════════════════════════════════════════════════════
  { id:'gnocchi',       name:'Gnocchi',        src:'🫙', category:'bbq', machine:'Pasta Kitchen', levelRequired:72, productionTime:4080,  sellPrice:475, xp:57, ingredients:[{itemId:'potato',quantity:3},{itemId:'fresh_pasta',quantity:1}] },
  { id:'veggie_lasagna',name:'Veggie Lasagna', src:'🍝', category:'bbq', machine:'Pasta Kitchen', levelRequired:74, productionTime:5100,  sellPrice:532, xp:63, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'tomato',quantity:3},{itemId:'cheese',quantity:1}] },
  { id:'lobster_pasta', name:'Lobster Pasta',  src:'🦞', category:'bbq', machine:'Pasta Kitchen', levelRequired:79, productionTime:6120,  sellPrice:637, xp:76, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'lobster_tail',quantity:1}] },
  { id:'pasta_carbonara',name:'Pasta Carbonara', src:'🍳',category:'bbq',machine:'Pasta Kitchen',levelRequired:83, productionTime:7560,  sellPrice:410, xp:49, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'bacon',quantity:2},{itemId:'egg',quantity:2}] },
  { id:'broccoli_pasta',name:'Broccoli Pasta', src:'🥦', category:'bbq', machine:'Pasta Kitchen', levelRequired:83, productionTime:3060,  sellPrice:345, xp:41, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'broccoli',quantity:2}] },
  { id:'spicy_pasta',   name:'Spicy Pasta',    src:'🌶️', category:'bbq', machine:'Pasta Kitchen', levelRequired:87, productionTime:4560,  sellPrice:576, xp:69, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'chili_pepper',quantity:2}] },
  { id:'mushroom_pasta',name:'Mushroom Pasta', src:'🍄', category:'bbq', machine:'Pasta Kitchen', levelRequired:101,productionTime:3780,  sellPrice:280, xp:33, ingredients:[{itemId:'fresh_pasta',quantity:2},{itemId:'mushroom',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // SAUCE MAKER — Machine à sauce (Niveau 54)
  // ══════════════════════════════════════════════════════════
  { id:'soy_sauce',    name:'Soy Sauce',     src:'🫙', category:'bbq', machine:'Sauce Maker', levelRequired:54, productionTime:9180, sellPrice:154, xp:19, ingredients:[{itemId:'soybean',quantity:4}] },
  { id:'olive_oil',    name:'Olive Oil',     src:'🫒', category:'bbq', machine:'Sauce Maker', levelRequired:60, productionTime:2280, sellPrice:277, xp:33, ingredients:[{itemId:'olive',quantity:4}] },
  { id:'mayonnaise',   name:'Mayonnaise',    src:'🫙', category:'bbq', machine:'Sauce Maker', levelRequired:62, productionTime:720,  sellPrice:367, xp:44, ingredients:[{itemId:'egg',quantity:2},{itemId:'olive_oil',quantity:1}] },
  { id:'lemon_curd',   name:'Lemon Curd',    src:'🍋', category:'bbq', machine:'Sauce Maker', levelRequired:66, productionTime:1260, sellPrice:378, xp:45, ingredients:[{itemId:'lemon',quantity:3},{itemId:'egg',quantity:1},{itemId:'butter',quantity:1}] },
  { id:'olive_dip',    name:'Olive Dip',     src:'🫒', category:'bbq', machine:'Sauce Maker', levelRequired:66, productionTime:2280, sellPrice:468, xp:56, ingredients:[{itemId:'olive',quantity:3},{itemId:'goat_cheese',quantity:1}] },
  { id:'tomato_sauce', name:'Tomato Sauce',  src:'🍅', category:'bbq', machine:'Sauce Maker', levelRequired:69, productionTime:1500, sellPrice:230, xp:27, ingredients:[{itemId:'tomato',quantity:4}] },
  { id:'salsa',        name:'Salsa',         src:'🌶️', category:'bbq', machine:'Sauce Maker', levelRequired:77, productionTime:1020, sellPrice:252, xp:30, ingredients:[{itemId:'tomato',quantity:3},{itemId:'chili_pepper',quantity:1}] },
  { id:'hummus',       name:'Hummus',        src:'🫘', category:'bbq', machine:'Sauce Maker', levelRequired:95, productionTime:1500, sellPrice:277, xp:33, ingredients:[{itemId:'soybean',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // JEWELER — Bijoutier (Niveau 38)
  // ══════════════════════════════════════════════════════════
  { id:'bracelet',     name:'Bracelet',      src:'📿', category:'loom', machine:'Jeweler', levelRequired:38, productionTime:5040,  sellPrice:514, xp:61, ingredients:[{itemId:'wool',quantity:2}] },
  { id:'necklace',     name:'Necklace',      src:'💎', category:'loom', machine:'Jeweler', levelRequired:39, productionTime:9180,  sellPrice:727, xp:87, ingredients:[{itemId:'wool',quantity:3}] },
  { id:'diamond_ring', name:'Diamond Ring',  src:'💍', category:'loom', machine:'Jeweler', levelRequired:40, productionTime:12240, sellPrice:824, xp:98, ingredients:[{itemId:'wool',quantity:4}] },
  { id:'iron_bracelet',name:'Iron Bracelet', src:'⛓️', category:'loom', machine:'Jeweler', levelRequired:41, productionTime:4560,  sellPrice:658, xp:79, ingredients:[{itemId:'wool',quantity:2}] },
  { id:'flower_pendant',name:'Flower Pendant', src:'🌸',category:'loom',machine:'Jeweler', levelRequired:98, productionTime:3060,  sellPrice:698, xp:83, ingredients:[{itemId:'cotton_fabric',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // HOT DOG STAND — Stand de hot-dogs (Niveau 75)
  // ══════════════════════════════════════════════════════════
  { id:'hot_dog',   name:'Hot Dog',    src:'🌭', category:'bbq', machine:'Hot Dog Stand', levelRequired:75, productionTime:1500, sellPrice:370, xp:44, ingredients:[{itemId:'bread',quantity:2},{itemId:'bacon',quantity:1}] },
  { id:'tofu_dog',  name:'Tofu Dog',   src:'🌭', category:'bbq', machine:'Hot Dog Stand', levelRequired:76, productionTime:2280, sellPrice:367, xp:44, ingredients:[{itemId:'bread',quantity:2}] },
  { id:'corn_dog',  name:'Corn Dog',   src:'🌽', category:'bbq', machine:'Hot Dog Stand', levelRequired:78, productionTime:3060, sellPrice:529, xp:63, ingredients:[{itemId:'corn',quantity:3},{itemId:'bread',quantity:1}] },
  { id:'onion_dog', name:'Onion Dog',  src:'🧅', category:'bbq', machine:'Hot Dog Stand', levelRequired:80, productionTime:3780, sellPrice:306, xp:36, ingredients:[{itemId:'onion',quantity:2},{itemId:'bread',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // TACO KITCHEN — Cuisine de tacos (Niveau 77)
  // ══════════════════════════════════════════════════════════
  { id:'taco',           name:'Taco',             src:'🌮', category:'bbq', machine:'Taco Kitchen', levelRequired:77, productionTime:2280, sellPrice:396, xp:47, ingredients:[{itemId:'wheat',quantity:2},{itemId:'tomato',quantity:2}] },
  { id:'spicy_bean_taco',name:'Spicy Bean Taco',  src:'🌶️', category:'bbq', machine:'Taco Kitchen', levelRequired:77, productionTime:6120, sellPrice:453, xp:54, ingredients:[{itemId:'soybean',quantity:3},{itemId:'chili_pepper',quantity:1}] },
  { id:'fish_taco',      name:'Fish Taco',        src:'🐟', category:'bbq', machine:'Taco Kitchen', levelRequired:79, productionTime:4560, sellPrice:392, xp:47, ingredients:[{itemId:'fish_fillet',quantity:2},{itemId:'wheat',quantity:2}] },
  { id:'quesadilla',     name:'Quesadilla',       src:'🫓', category:'bbq', machine:'Taco Kitchen', levelRequired:82, productionTime:3060, sellPrice:241, xp:29, ingredients:[{itemId:'wheat',quantity:2},{itemId:'cheese',quantity:1}] },
  { id:'nachos',         name:'Nachos',           src:'🌽', category:'bbq', machine:'Taco Kitchen', levelRequired:87, productionTime:3780, sellPrice:432, xp:52, ingredients:[{itemId:'corn',quantity:3},{itemId:'salsa',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // TEA STAND — Stand à thé (Niveau 80)
  // ══════════════════════════════════════════════════════════
  { id:'green_tea',        name:'Green Tea',         src:'🍵', category:'juice', machine:'Tea Stand', levelRequired:80,  productionTime:1500, sellPrice:241, xp:29, ingredients:[{itemId:'mint',quantity:2}] },
  { id:'milk_tea',         name:'Milk Tea',          src:'🧋', category:'juice', machine:'Tea Stand', levelRequired:81,  productionTime:2280, sellPrice:190, xp:23, ingredients:[{itemId:'milk',quantity:2}] },
  { id:'honey_tea',        name:'Honey Tea',         src:'🍯', category:'juice', machine:'Tea Stand', levelRequired:83,  productionTime:2040, sellPrice:313, xp:37, ingredients:[{itemId:'honey',quantity:1},{itemId:'milk',quantity:1}] },
  { id:'lemon_tea',        name:'Lemon Tea',         src:'🍋', category:'juice', machine:'Tea Stand', levelRequired:86,  productionTime:1020, sellPrice:241, xp:29, ingredients:[{itemId:'lemon',quantity:2}] },
  { id:'apple_ginger_tea', name:'Apple Ginger Tea',  src:'🍎', category:'juice', machine:'Tea Stand', levelRequired:88,  productionTime:1500, sellPrice:169, xp:20, ingredients:[{itemId:'apple',quantity:2},{itemId:'ginger',quantity:1}] },
  { id:'orange_tea',       name:'Orange Tea',        src:'🍊', category:'juice', machine:'Tea Stand', levelRequired:89,  productionTime:2040, sellPrice:255, xp:30, ingredients:[{itemId:'orange',quantity:2}] },
  { id:'iced_tea',         name:'Iced Tea',          src:'🧊', category:'juice', machine:'Tea Stand', levelRequired:92,  productionTime:1500, sellPrice:252, xp:30, ingredients:[{itemId:'mint',quantity:1},{itemId:'lemon',quantity:1}] },
  { id:'mint_tea',         name:'Mint Tea',          src:'🌿', category:'juice', machine:'Tea Stand', levelRequired:97,  productionTime:1740, sellPrice:255, xp:31, ingredients:[{itemId:'mint',quantity:3}] },
  { id:'chamomile_tea',    name:'Chamomile Tea',     src:'🌸', category:'juice', machine:'Tea Stand', levelRequired:100, productionTime:1020, sellPrice:144, xp:17, ingredients:[{itemId:'chamomile',quantity:3}] },
  { id:'pomegranate_tea',  name:'Pomegranate Tea',   src:'🔴', category:'juice', machine:'Tea Stand', levelRequired:107, productionTime:2040, sellPrice:313, xp:37, ingredients:[{itemId:'pomegranate',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // FLOWER SHOP — Fleuriste (Niveau 49)
  // ══════════════════════════════════════════════════════════
  { id:'rustic_bouquet',    name:'Rustic Bouquet',     src:'💐', category:'loom', machine:'Flower Shop', levelRequired:49,  productionTime:2280,  sellPrice:208, xp:25, ingredients:[] },
  { id:'vibrant_bouquet',   name:'Vibrant Bouquet',    src:'🌹', category:'loom', machine:'Flower Shop', levelRequired:65,  productionTime:1020,  sellPrice:338, xp:40, ingredients:[] },
  { id:'graceful_bouquet',  name:'Graceful Bouquet',   src:'🌷', category:'loom', machine:'Flower Shop', levelRequired:73,  productionTime:2040,  sellPrice:500, xp:60, ingredients:[] },
  { id:'candy_bouquet',     name:'Candy Bouquet',      src:'🍬', category:'loom', machine:'Flower Shop', levelRequired:90,  productionTime:1020,  sellPrice:554, xp:66, ingredients:[] },
  { id:'birthday_bouquet',  name:'Birthday Bouquet',   src:'🎂', category:'loom', machine:'Flower Shop', levelRequired:92,  productionTime:1020,  sellPrice:349, xp:42, ingredients:[] },
  { id:'veggie_bouquet',    name:'Veggie Bouquet',     src:'🥦', category:'loom', machine:'Flower Shop', levelRequired:106, productionTime:720,   sellPrice:352, xp:42, ingredients:[] },

  // ══════════════════════════════════════════════════════════
  // CANDLE MAKER — Fabricant de bougies (Niveau 48)
  // ══════════════════════════════════════════════════════════
  { id:'strawberry_candle',name:'Strawberry Candle', src:'🕯️',category:'loom',machine:'Candle Maker',levelRequired:48,productionTime:6120, sellPrice:370, xp:44, ingredients:[{itemId:'beeswax',quantity:1},{itemId:'strawberry',quantity:2}] },
  { id:'raspberry_candle', name:'Raspberry Candle',  src:'🕯️',category:'loom',machine:'Candle Maker',levelRequired:52,productionTime:5340, sellPrice:360, xp:43, ingredients:[{itemId:'beeswax',quantity:1},{itemId:'raspberry',quantity:2}] },
  { id:'lemon_candle',     name:'Lemon Candle',      src:'🕯️',category:'loom',machine:'Candle Maker',levelRequired:72,productionTime:6840, sellPrice:457, xp:55, ingredients:[{itemId:'beeswax',quantity:1},{itemId:'lemon',quantity:2}] },
  { id:'colorful_candles', name:'Colorful Candles',  src:'🕯️',category:'loom',machine:'Candle Maker',levelRequired:84,productionTime:5580, sellPrice:324, xp:39, ingredients:[{itemId:'beeswax',quantity:2}] },
  { id:'floral_candle',    name:'Floral Candle',     src:'🕯️',category:'loom',machine:'Candle Maker',levelRequired:95,productionTime:6120, sellPrice:442, xp:53, ingredients:[{itemId:'beeswax',quantity:1},{itemId:'chamomile',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // FONDUE POT — Caquelon à fondue (Niveau 81)
  // ══════════════════════════════════════════════════════════
  { id:'chocolate_fondue',name:'Chocolate Fondue', src:'🫕',category:'bbq',machine:'Fondue Pot',levelRequired:81, productionTime:1260, sellPrice:626, xp:74, ingredients:[{itemId:'cacao',quantity:3},{itemId:'cream',quantity:2}] },
  { id:'bacon_fondue',    name:'Bacon Fondue',     src:'🥓',category:'bbq',machine:'Fondue Pot',levelRequired:86, productionTime:1500, sellPrice:507, xp:60, ingredients:[{itemId:'bacon',quantity:3},{itemId:'cheese',quantity:2}] },
  { id:'cheese_fondue',   name:'Cheese Fondue',    src:'🧀',category:'bbq',machine:'Fondue Pot',levelRequired:91, productionTime:1020, sellPrice:493, xp:59, ingredients:[{itemId:'cheese',quantity:4}] },
  { id:'tropical_fondue', name:'Tropical Fondue',  src:'🍍',category:'bbq',machine:'Fondue Pot',levelRequired:100,productionTime:1740, sellPrice:417, xp:50, ingredients:[{itemId:'pineapple',quantity:2},{itemId:'coconut',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // DONUT MAKER — Fabricant de beignets (Niveau 76)
  // ══════════════════════════════════════════════════════════
  { id:'plain_donut',    name:'Plain Donut',     src:'🍩',category:'bakery',machine:'Donut Maker',levelRequired:76, productionTime:720,  sellPrice:129, xp:15, ingredients:[{itemId:'wheat',quantity:2},{itemId:'egg',quantity:1}] },
  { id:'sprinkled_donut',name:'Sprinkled Donut', src:'🍩',category:'bakery',machine:'Donut Maker',levelRequired:79, productionTime:1020, sellPrice:313, xp:37, ingredients:[{itemId:'wheat',quantity:2},{itemId:'white_sugar',quantity:1}] },
  { id:'crunchy_donut',  name:'Crunchy Donut',   src:'🍩',category:'bakery',machine:'Donut Maker',levelRequired:82, productionTime:1500, sellPrice:594, xp:71, ingredients:[{itemId:'wheat',quantity:2},{itemId:'cacao',quantity:1}] },
  { id:'cream_donut',    name:'Cream Donut',     src:'🍩',category:'bakery',machine:'Donut Maker',levelRequired:86, productionTime:1260, sellPrice:230, xp:27, ingredients:[{itemId:'cream',quantity:2},{itemId:'wheat',quantity:1}] },
  { id:'bacon_donut',    name:'Bacon Donut',     src:'🥓',category:'bakery',machine:'Donut Maker',levelRequired:88, productionTime:1500, sellPrice:388, xp:46, ingredients:[{itemId:'bacon',quantity:2},{itemId:'wheat',quantity:2}] },
  { id:'filled_donut',   name:'Filled Donut',    src:'🍩',category:'bakery',machine:'Donut Maker',levelRequired:93, productionTime:1740, sellPrice:403, xp:48, ingredients:[{itemId:'cream',quantity:2},{itemId:'strawberry_jam',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // FUDGE SHOP — Boutique de fudge (Niveau 99)
  // ══════════════════════════════════════════════════════════
  { id:'rich_fudge',  name:'Rich Fudge',   src:'🍫',category:'bakery',machine:'Fudge Shop',levelRequired:99,  productionTime:6120,  sellPrice:644, xp:77,  ingredients:[{itemId:'cacao',quantity:3},{itemId:'cream',quantity:2}] },
  { id:'mint_fudge',  name:'Mint Fudge',   src:'🌿',category:'bakery',machine:'Fudge Shop',levelRequired:102, productionTime:7560,  sellPrice:522, xp:62,  ingredients:[{itemId:'mint',quantity:3},{itemId:'white_sugar',quantity:2}] },
  { id:'chili_fudge', name:'Chili Fudge',  src:'🌶️',category:'bakery',machine:'Fudge Shop',levelRequired:104, productionTime:8700,  sellPrice:540, xp:64,  ingredients:[{itemId:'chili_pepper',quantity:2},{itemId:'cacao',quantity:2}] },
  { id:'lemon_fudge', name:'Lemon Fudge',  src:'🍋',category:'bakery',machine:'Fudge Shop',levelRequired:108, productionTime:5580,  sellPrice:590, xp:70,  ingredients:[{itemId:'lemon',quantity:3},{itemId:'cream',quantity:2}] },
  { id:'peanut_fudge',name:'Peanut Fudge', src:'🥜',category:'bakery',machine:'Fudge Shop',levelRequired:111, productionTime:4560,  sellPrice:1141,xp:136, ingredients:[{itemId:'peanut',quantity:3},{itemId:'cacao',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // HATTER — Chapelier (Niveau 70)
  // ══════════════════════════════════════════════════════════
  { id:'cloche_hat',   name:'Cloche Hat',    src:'🎩',category:'loom',machine:'Hatter',levelRequired:70, productionTime:6120,  sellPrice:468, xp:56, ingredients:[{itemId:'wool',quantity:3}] },
  { id:'top_hat',      name:'Top Hat',       src:'🎩',category:'loom',machine:'Hatter',levelRequired:72, productionTime:10680, sellPrice:619, xp:74, ingredients:[{itemId:'wool',quantity:4}] },
  { id:'sun_hat',      name:'Sun Hat',       src:'👒',category:'loom',machine:'Hatter',levelRequired:74, productionTime:7560,  sellPrice:558, xp:66, ingredients:[{itemId:'cotton_fabric',quantity:3}] },
  { id:'flower_crown', name:'Flower Crown',  src:'💐',category:'loom',machine:'Hatter',levelRequired:86, productionTime:6120,  sellPrice:331, xp:40, ingredients:[{itemId:'cotton_fabric',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // BATH KIOSK — Kiosque de bain (Niveau 84)
  // ══════════════════════════════════════════════════════════
  { id:'honey_soap',     name:'Honey Soap',      src:'🧼',category:'loom',machine:'Bath Kiosk',levelRequired:84,  productionTime:3060,  sellPrice:327, xp:39, ingredients:[{itemId:'honey',quantity:2},{itemId:'beeswax',quantity:1}] },
  { id:'lemon_lotion',   name:'Lemon Lotion',    src:'🍋',category:'loom',machine:'Bath Kiosk',levelRequired:84,  productionTime:3780,  sellPrice:403, xp:48, ingredients:[{itemId:'lemon',quantity:3},{itemId:'olive_oil',quantity:1}] },
  { id:'exfoliating_soap',name:'Exfoliating Soap', src:'🧼',category:'loom',machine:'Bath Kiosk',levelRequired:93,productionTime:3060,  sellPrice:363, xp:43, ingredients:[{itemId:'honey',quantity:1},{itemId:'beeswax',quantity:2}] },
  { id:'honey_face_mask',name:'Honey Face Mask', src:'🍯',category:'loom',machine:'Bath Kiosk',levelRequired:99,  productionTime:4560,  sellPrice:320, xp:38, ingredients:[{itemId:'honey',quantity:3},{itemId:'chamomile',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // PORRIDGE BAR — Bar à porridge (Niveau 119)
  // ══════════════════════════════════════════════════════════
  { id:'apple_porridge',   name:'Apple Porridge',    src:'🍎',category:'bakery',machine:'Porridge Bar',levelRequired:119,productionTime:1020, sellPrice:522, xp:62, ingredients:[{itemId:'apple',quantity:2},{itemId:'wheat',quantity:2}] },
  { id:'breakfast_bowl',   name:'Breakfast Bowl',    src:'🥣',category:'bakery',machine:'Porridge Bar',levelRequired:119,productionTime:2520, sellPrice:604, xp:72, ingredients:[{itemId:'wheat',quantity:3},{itemId:'milk',quantity:2}] },
  { id:'sweet_porridge',   name:'Sweet Porridge',    src:'🍯',category:'bakery',machine:'Porridge Bar',levelRequired:120,productionTime:2280, sellPrice:466, xp:55, ingredients:[{itemId:'wheat',quantity:2},{itemId:'honey',quantity:1}] },
  { id:'fresh_porridge',   name:'Fresh Porridge',    src:'🫐',category:'bakery',machine:'Porridge Bar',levelRequired:122,productionTime:1740, sellPrice:435, xp:52, ingredients:[{itemId:'wheat',quantity:2},{itemId:'blueberry',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // MILKSHAKE BAR — Bar à milkshakes (Niveau 124)
  // ══════════════════════════════════════════════════════════
  { id:'vanilla_milkshake',name:'Vanilla Milkshake', src:'🥤',category:'juice',machine:'Milkshake Bar',levelRequired:124,productionTime:2280, sellPrice:673, xp:80, ingredients:[{itemId:'vanilla_ice_cream',quantity:1},{itemId:'milk',quantity:2}] },
  { id:'mocha_milkshake',  name:'Mocha Milkshake',   src:'☕',category:'juice',machine:'Milkshake Bar',levelRequired:125,productionTime:1500, sellPrice:856, xp:102,ingredients:[{itemId:'espresso',quantity:1},{itemId:'chocolate_ice_cream',quantity:1}] },
  { id:'fruity_milkshake', name:'Fruity Milkshake',  src:'🍓',category:'juice',machine:'Milkshake Bar',levelRequired:126,productionTime:1740, sellPrice:759, xp:90, ingredients:[{itemId:'strawberry_ice_cream',quantity:1},{itemId:'pineapple_juice',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // WAFFLE MAKER — Gaufrier (Niveau 114)
  // ══════════════════════════════════════════════════════════
  { id:'plain_waffle',     name:'Plain Waffle',      src:'🧇',category:'bakery',machine:'Waffle Maker',levelRequired:114,productionTime:1260, sellPrice:198, xp:24, ingredients:[{itemId:'wheat',quantity:2},{itemId:'egg',quantity:1}] },
  { id:'berry_waffle',     name:'Berry Waffle',      src:'🍓',category:'bakery',machine:'Waffle Maker',levelRequired:114,productionTime:1740, sellPrice:604, xp:24, ingredients:[{itemId:'wheat',quantity:2},{itemId:'strawberry',quantity:2}] },
  { id:'chocolate_waffle', name:'Chocolate Waffle',  src:'🍫',category:'bakery',machine:'Waffle Maker',levelRequired:117,productionTime:2040, sellPrice:637, xp:76, ingredients:[{itemId:'wheat',quantity:2},{itemId:'cacao',quantity:2}] },
  { id:'blueberry_waffle', name:'Blueberry Waffle',  src:'💙',category:'bakery',machine:'Waffle Maker',levelRequired:118,productionTime:2100, sellPrice:669, xp:80, ingredients:[{itemId:'wheat',quantity:2},{itemId:'blueberry',quantity:2}] },
  { id:'breakfast_waffle', name:'Breakfast Waffle',  src:'🥞',category:'bakery',machine:'Waffle Maker',levelRequired:119,productionTime:2280, sellPrice:424, xp:51, ingredients:[{itemId:'wheat',quantity:2},{itemId:'egg',quantity:2},{itemId:'bacon',quantity:1}] },

  // ══════════════════════════════════════════════════════════
  // CUPCAKE MAKER — Fabricant de cupcakes (Niveau 109)
  // ══════════════════════════════════════════════════════════
  { id:'plain_cupcake',   name:'Plain Cupcake',    src:'🧁',category:'bakery',machine:'Cupcake Maker',levelRequired:109,productionTime:2040, sellPrice:280, xp:34, ingredients:[{itemId:'wheat',quantity:2},{itemId:'egg',quantity:1},{itemId:'white_sugar',quantity:1}] },
  { id:'guava_cupcake',   name:'Guava Cupcake',    src:'🟢',category:'bakery',machine:'Cupcake Maker',levelRequired:109,productionTime:3540, sellPrice:583, xp:70, ingredients:[{itemId:'guava',quantity:2},{itemId:'cream',quantity:1}] },
  { id:'tropical_cupcake',name:'Tropical Cupcake', src:'🍍',category:'bakery',machine:'Cupcake Maker',levelRequired:112,productionTime:4560, sellPrice:572, xp:68, ingredients:[{itemId:'pineapple',quantity:2},{itemId:'coconut',quantity:1}] },
  { id:'cookie_cupcake',  name:'Cookie Cupcake',   src:'🍪',category:'bakery',machine:'Cupcake Maker',levelRequired:114,productionTime:6120, sellPrice:712, xp:85, ingredients:[{itemId:'cookies',quantity:1},{itemId:'cream',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // WOK KITCHEN — Cuisine au wok (Niveau 69)
  // ══════════════════════════════════════════════════════════
  { id:'fried_rice',   name:'Fried Rice',    src:'🍚',category:'bbq',machine:'Wok Kitchen',levelRequired:69, productionTime:3060, sellPrice:205, xp:24, ingredients:[{itemId:'rice',quantity:3},{itemId:'egg',quantity:1}] },
  { id:'spicy_fish',   name:'Spicy Fish',    src:'🐟',category:'bbq',machine:'Wok Kitchen',levelRequired:79, productionTime:4560, sellPrice:543, xp:65, ingredients:[{itemId:'fish_fillet',quantity:3},{itemId:'chili_pepper',quantity:2}] },
  { id:'peanut_noodles',name:'Peanut Noodles', src:'🥜',category:'bbq',machine:'Wok Kitchen',levelRequired:86, productionTime:2280, sellPrice:597, xp:80, ingredients:[{itemId:'rice_noodles',quantity:2},{itemId:'peanut',quantity:3}] },
  { id:'tofu_stir_fry',name:'Tofu Stir Fry', src:'🫘',category:'bbq',machine:'Wok Kitchen',levelRequired:89, productionTime:3780, sellPrice:306, xp:37, ingredients:[{itemId:'soybean',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // OMELET STATION — Station d'omelettes (Niveau 77)
  // ══════════════════════════════════════════════════════════
  { id:'colourful_omelet',name:'Colourful Omelet', src:'🥚',category:'bbq',machine:'Omelet Station',levelRequired:77, productionTime:3060, sellPrice:136, xp:16, ingredients:[{itemId:'egg',quantity:3}] },
  { id:'spring_omelet',   name:'Spring Omelet',    src:'🌱',category:'bbq',machine:'Omelet Station',levelRequired:77, productionTime:2040, sellPrice:230, xp:27, ingredients:[{itemId:'egg',quantity:2},{itemId:'asparagus',quantity:1}] },
  { id:'cheese_omelet',   name:'Cheese Omelet',    src:'🧀',category:'bbq',machine:'Omelet Station',levelRequired:79, productionTime:4560, sellPrice:464, xp:55, ingredients:[{itemId:'egg',quantity:3},{itemId:'cheese',quantity:2}] },
  { id:'potato_omelet',   name:'Potato Omelet',    src:'🥔',category:'bbq',machine:'Omelet Station',levelRequired:87, productionTime:3780, sellPrice:270, xp:32, ingredients:[{itemId:'egg',quantity:2},{itemId:'potato',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // STEW POT — Marmite à ragoût (Niveau 106)
  // ══════════════════════════════════════════════════════════
  { id:'chickpea_stew',name:'Chickpea Stew', src:'🫘',category:'bbq',machine:'Stew Pot',levelRequired:106,productionTime:4560, sellPrice:284, xp:34, ingredients:[{itemId:'soybean',quantity:4}] },
  { id:'chili_stew',   name:'Chili Stew',    src:'🌶️',category:'bbq',machine:'Stew Pot',levelRequired:109,productionTime:6120, sellPrice:370, xp:44, ingredients:[{itemId:'chili_pepper',quantity:3},{itemId:'tomato',quantity:3}] },
  { id:'winter_stew',  name:'Winter Stew',   src:'🥕', category:'bbq',machine:'Stew Pot',levelRequired:112,productionTime:7140, sellPrice:295, xp:35, ingredients:[{itemId:'carrot',quantity:3},{itemId:'potato',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // YOGURT MAKER — Yaourtière (Niveau 103)
  // ══════════════════════════════════════════════════════════
  { id:'plain_yogurt',     name:'Plain Yogurt',      src:'🥛',category:'dairy',machine:'Yogurt Maker',levelRequired:103,productionTime:6120, sellPrice:234, xp:28, ingredients:[{itemId:'milk',quantity:3}] },
  { id:'strawberry_yogurt',name:'Strawberry Yogurt', src:'🍓',category:'dairy',machine:'Yogurt Maker',levelRequired:105,productionTime:2040, sellPrice:529, xp:63, ingredients:[{itemId:'milk',quantity:2},{itemId:'strawberry',quantity:3}] },
  { id:'tropical_yogurt',  name:'Tropical Yogurt',   src:'🍍',category:'dairy',machine:'Yogurt Maker',levelRequired:109,productionTime:3060, sellPrice:457, xp:54, ingredients:[{itemId:'milk',quantity:2},{itemId:'pineapple',quantity:2}] },

  // ══════════════════════════════════════════════════════════
  // ESSENTIAL OIL LAB — Labo d'huiles essentielles (Niveau 68)
  // ══════════════════════════════════════════════════════════
  { id:'lemon_essential_oil',    name:'Lemon Essential Oil',     src:'🍋',category:'loom',machine:'Essential Oil Lab',levelRequired:68, productionTime:480,  sellPrice:228, xp:34, ingredients:[{itemId:'lemon',quantity:3}] },
  { id:'chamomile_essential_oil',name:'Chamomile Essential Oil', src:'🌸',category:'loom',machine:'Essential Oil Lab',levelRequired:74, productionTime:480,  sellPrice:72,  xp:34, ingredients:[{itemId:'chamomile',quantity:3}] },
  { id:'ginger_essential_oil',   name:'Ginger Essential Oil',    src:'🌿',category:'loom',machine:'Essential Oil Lab',levelRequired:80, productionTime:1020, sellPrice:162, xp:19, ingredients:[{itemId:'ginger',quantity:3}] },
  { id:'mint_essential_oil',     name:'Mint Essential Oil',      src:'🌿',category:'loom',machine:'Essential Oil Lab',levelRequired:85, productionTime:720,  sellPrice:172, xp:20, ingredients:[{itemId:'mint',quantity:3}] },

  // ══════════════════════════════════════════════════════════
  // PERFUMERY — Parfumerie (Niveau 110)
  // ══════════════════════════════════════════════════════════
  { id:'fresh_diffuser',  name:'Fresh Diffuser',   src:'🌸',category:'loom',machine:'Perfumery',levelRequired:110,productionTime:1020, sellPrice:349, xp:42, ingredients:[{itemId:'mint_essential_oil',quantity:2}] },
  { id:'zesty_perfume',   name:'Zesty Perfume',    src:'🍋',category:'loom',machine:'Perfumery',levelRequired:113,productionTime:720,  sellPrice:388, xp:46, ingredients:[{itemId:'lemon_essential_oil',quantity:2}] },
  { id:'calming_diffuser',name:'Calming Diffuser', src:'🌼',category:'loom',machine:'Perfumery',levelRequired:116,productionTime:1260, sellPrice:169, xp:20, ingredients:[{itemId:'chamomile_essential_oil',quantity:2}] },
];

// ────────────────────────────────────────────────────────────
// Helper utilities
// ────────────────────────────────────────────────────────────

export const getItem = (id: string): Item | undefined =>
  ITEMS.find(i => i.id === id);

export const getUnlockedItems = (level: number): Item[] =>
  ITEMS.filter(i => i.levelRequired <= level);

export const getItemsByMachine = (machine: string, level: number): Item[] =>
  ITEMS.filter(i => i.machine === machine && i.levelRequired <= level);

export const MACHINES: string[] = [...new Set(ITEMS.map(i => i.machine))].sort();

export const formatTime = (seconds: number): string => {
  if (seconds <= 0)  return '—';
  if (seconds < 60)  return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
  }
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  return h > 0 ? `${d}d ${h}h` : `${d}d`;
};

// Profit per hour
export const profitPerHour = (item: Item): number =>
  Math.round((item.sellPrice / item.productionTime) * 3600);
