// ============================================================
// HAYTASK - Image Asset Mapping
// Maps item IDs → relative path from /src/assets/
// 
// HOW TO USE:
//   import { getItemImage } from '../data/imageMap';
//   const src = getItemImage('bread'); 
//   // → '/assets/Boulangerie/HayDay_Bread.png'
//
// Place your images in: src/assets/{folder}/
// The app auto-falls-back to emoji if image not found.
// ============================================================

/** Map: itemId → asset path (relative to public/) */
export const IMAGE_MAP: Record<string, string> = {

  // ─── Seeds / Crops ──────────────────────────────────────
  wheat:        '/assets/seed/HayDay_Wheat.png',
  corn:         '/assets/seed/HayDay_Corn.png',
  carrot:       '/assets/seed/HayDay_Carrot.png',
  soybean:      '/assets/seed/HayDay_Soybean.png',
  sugarcane:    '/assets/seed/HayDay_Sugarcane.png',
  indigo:       '/assets/seed/HayDay_Indigo.png',
  pumpkin:      '/assets/seed/HayDay_Pumpkin.png',
  chili_pepper: '/assets/seed/HayDay_Chili.png',
  tomato:       '/assets/seed/HayDay_Tomato.png',
  strawberry:   '/assets/seed/HayDay_Strawberry.png',
  potato:       '/assets/seed/HayDay_Potato.png',
  cotton:       '/assets/seed/HayDay_Cotton.png',
  rice:         '/assets/seed/HayDay_Rice.png',
  lettuce:      '/assets/seed/HayDay_Lettuce.png',
  sesame:       '/assets/seed/HayDay_Tea.png',
  onion:        '/assets/seed/HayDay_Onion.png',
  broccoli:     '/assets/seed/HayDay_Broccoli.png',
  beetroot:     '/assets/seed/HayDay_Bell_Pepper.png',
  asparagus:    '/assets/seed/HayDay_Carrot.png',
  peanut:       '/assets/seed/HayDay_Chickpeas.png',

  // ─── Trees ──────────────────────────────────────────────
  apple:        '/assets/seed/HayDay_Apple.png',
  raspberry:    '/assets/seed/HayDay_Raspberry.png',
  cherry:       '/assets/seed/HayDay_Cherry.png',
  blackberry:   '/assets/seed/HayDay_Blackberry.png',
  cacao:        '/assets/seed/HayDay_Cocoa.png',
  coffee:       '/assets/seed/HayDay_Coffee.png',
  olive:        '/assets/seed/HayDay_Olives.png',
  lemon:        '/assets/seed/HayDay_Lemon.png',
  blueberry:    '/assets/seed/HayDay_Blueberry.png',
  banana:       '/assets/seed/HayDay_Banana.png',
  peach:        '/assets/seed/HayDay_Peach.png',
  pineapple:    '/assets/seed/HayDay_Pineapple.png',
  orange:       '/assets/seed/HayDay_Orange.png',
  watermelon:   '/assets/seed/HayDay_Watermelon.png',
  mango:        '/assets/seed/HayDay_Mango.png',
  guava:        '/assets/seed/HayDay_Guava.png',
  passion_fruit:'/assets/seed/HayDay_Peony.png',
  pomegranate:  '/assets/seed/HayDay_Plum.png',
  plum:         '/assets/seed/HayDay_Plum.png',
  grape:        '/assets/seed/HayDay_Grapes.png',
  ginger:       '/assets/seed/HayDay_Mint.png',
  coconut:      '/assets/seed/HayDay_Coconut.png',
  mint:         '/assets/seed/HayDay_Mint.png',
  chamomile:    '/assets/seed/HayDay_Sunflower.png',
  mushroom:     '/assets/seed/HayDay_Eggplant.png',
  cucumber:     '/assets/seed/HayDay_Cucumber.png',

  // ─── Animal Products ────────────────────────────────────
  egg:          '/assets/seed/HayDay_Egg.png',
  milk:         '/assets/seed/HayDay_Milk.png',
  bacon:        '/assets/seed/HayDay_Bacon.png',
  wool:         '/assets/seed/HayDay_Wool.png',
  goat_milk:    '/assets/seed/HayDay_Goat_Milk.png',
  honeycomb:    '/assets/seed/HayDay_Honey_Comb.png',
  lobster_tail: '/assets/Lobster Pool/HayDay_Lobster_Tail.webp',
  fish_fillet:  '/assets/seed/HayDay_Carrot.png',

  // ─── Feed Mill ──────────────────────────────────────────
  chicken_feed: '/assets/feed/HayDay_Chicken_Feed.png',
  cow_feed:     '/assets/feed/HayDay_Cow_Feed.png',
  pig_feed:     '/assets/feed/HayDay_Pig_Feed.png',
  sheep_feed:   '/assets/feed/HayDay_Sheep_Feed.png',
  goat_feed:    '/assets/feed/HayDay_Goat_Feed.png',

  // ─── Bakery ─────────────────────────────────────────────
  bread:                  '/assets/Boulangerie/HayDay_Bread.png',
  corn_bread:             '/assets/Boulangerie/HayDay_Corn_Bread.png',
  cookies:                '/assets/Boulangerie/HayDay_Cookie.png',
  raspberry_muffin:       '/assets/Boulangerie/HayDay_Raspberry_Muffin.png',
  blackberry_muffin:      '/assets/Boulangerie/HayDay_Blackberry_Muffin.png',
  pizza:                  '/assets/Boulangerie/HayDay_Pizza.png',
  blueberry_muffin:       '/assets/Boulangerie/HayDay_Blueberry_Muffin.png',
  spicy_pizza:            '/assets/Boulangerie/HayDay_Spicy_Pizza.png',
  potato_bread:           '/assets/Boulangerie/HayDay_Potato_Bread.png',
  seafood_pizza:          '/assets/Boulangerie/HayDay_FruttiDiMare_Pizza.png',
  gingerbread:            '/assets/Boulangerie/HayDay_Gingerbread_Cookie.webp',
  banana_bread:           '/assets/Boulangerie/HayDay_Banana_Bread.png',
  macaron:                '/assets/Boulangerie/HayDay_Macaroon.png',
  pineapple_coconut_bars: '/assets/Boulangerie/HayDay_Pineapple_Coconut_Bars.webp',

  // ─── Dairy ──────────────────────────────────────────────
  cream:      '/assets/dairy/HayDay_Cream.png',
  butter:     '/assets/dairy/HayDay_Butter.png',
  cheese:     '/assets/dairy/HayDay_Cheese.png',
  goat_cheese:'/assets/dairy/HayDay_Goat_Cheese.png',

  // ─── Sugar Mill ─────────────────────────────────────────
  white_sugar: '/assets/Sugar Mill/HayDay_White_Sugar.png',
  brown_sugar: '/assets/Sugar Mill/HayDay_Brown_Sugar.png',

  // ─── BBQ Grill ──────────────────────────────────────────
  pancake:           '/assets/Bbq Grill/HayDay_Pancakes.png',
  bacon_eggs:        '/assets/Bbq Grill/HayDay_Bacon_Eggs.png',
  hamburger:         '/assets/Bbq Grill/HayDay_Hamburger.png',
  fish_burger:       '/assets/Bbq Grill/HayDay_Fish_Burger.png',
  roasted_tomatoes:  '/assets/Bbq Grill/HayDay_Roasted_Tomatoes.png',
  baked_potato:      '/assets/Bbq Grill/HayDay_Baked_Potato.png',
  fish_chips:        '/assets/Bbq Grill/HayDay_Fish_Chips.png',
  lobster_skewer:    '/assets/Bbq Grill/HayDay_Lobster_Scewer.png',
  garlic_bread:      '/assets/Bbq Grill/HayDay_Garlic_Bread.webp',
  grilled_asparagus: '/assets/Bbq Grill/HayDay_Grilled_Asparagus.webp',
  grilled_onion:     '/assets/Bbq Grill/HayDay_Grilled_Onion.png',
  winter_vegetables: '/assets/Bbq Grill/HayDay_Winter_Veggies.webp',
  stuffed_peppers:   '/assets/Bbq Grill/HayDay_Stuffed_Peppers.webp',
  grilled_eggplant:  '/assets/Bbq Grill/HayDay_Grilled_Eggplant.png',
  banana_pancakes:   '/assets/Bbq Grill/HayDay_Banana_Pancakes.png',
  fish_skewer:       '/assets/Bbq Grill/HayDay_Fish_Skewer.webp',

  // ─── Cake Oven ──────────────────────────────────────────
  carrot_cake:         '/assets/cake-oven/HayDay_Carrot_Cake.png',
  cream_cake:          '/assets/cake-oven/HayDay_Cream_Cake.png',
  red_berry_cake:      '/assets/cake-oven/HayDay_Berry_Cake.png',
  cheesecake:          '/assets/cake-oven/HayDay_Cheesecake.png',
  blueberry_cheesecake:'/assets/cake-oven/HayDay_Blueberry_Cheesecake.png',
  strawberry_cake:     '/assets/cake-oven/HayDay_Strawberry_Cake.png',
  chocolate_cake:      '/assets/cake-oven/HayDay_Chocolate_Cake.png',
  potato_feta_cake:    '/assets/cake-oven/HayDay_Potato_Feta_Cake.png',
  honey_apple_cake:    '/assets/cake-oven/HayDay_Honey_Apple_Cake.png',
  fancy_cake:          '/assets/cake-oven/HayDay_Fancy_Cake.webp',
  pineapple_cake:      '/assets/cake-oven/HayDay_Pineapple_Cake.png',
  lemon_cake:          '/assets/cake-oven/HayDay_Lemon_Cake.png',
  fruit_cake:          '/assets/cake-oven/HayDay_Fruit_Cake.png',
  chocolate_roll:      '/assets/cake-oven/HayDay_Chocolate_Roll.webp',
  pomegranate_cake:    '/assets/cake-oven/HayDay_Pomegranate_Cake.webp',

  // ─── Ice Cream Maker ────────────────────────────────────
  vanilla_ice_cream:    '/assets/Ice Cream Maker/HayDay_Vanilla_Ice_Cream.png',
  cherry_popsicle:      '/assets/Ice Cream Maker/HayDay_Cherry_Popsicle.png',
  strawberry_ice_cream: '/assets/Ice Cream Maker/HayDay_Strawberry_Ice_Cream.png',
  chocolate_ice_cream:  '/assets/Ice Cream Maker/HayDay_Chocolate_Ice_Cream.png',
  sesame_ice_cream:     '/assets/Ice Cream Maker/HayDay_Sesame_Ice_Cream.webp',
  pb_milkshake:         '/assets/Ice Cream Maker/HayDay_Peanut_Butter_Milkshake.webp',
  orange_sorbet:        '/assets/Ice Cream Maker/HayDay_Orange_Sorbet.png',
  affogato:             '/assets/Ice Cream Maker/HayDay_Affagato_Ice_Cream.png',
  peach_ice_cream:      '/assets/Ice Cream Maker/HayDay_Peach_Ice_Cream.png',
  mint_ice_cream:       '/assets/Ice Cream Maker/HayDay_Mint_Ice_Cream.png',
  banana_split:         '/assets/Ice Cream Maker/HayDay_Banana_Split.png',
  coconut_ice_cream:    '/assets/Ice Cream Maker/HayDay_Coconut_Ice_Cream.png',
  fruit_sorbet:         '/assets/Ice Cream Maker/HayDay_Fruit_Sorbet.png',

  // ─── Pie Oven ───────────────────────────────────────────
  carrot_pie:      '/assets/Pie Oven/HayDay_Carrot_Pie.png',
  pumpkin_pie:     '/assets/Pie Oven/HayDay_Pumpkin_Pie.png',
  bacon_pie:       '/assets/Pie Oven/HayDay_Bacon_Pie.png',
  apple_pie:       '/assets/Pie Oven/HayDay_Apple_Pie.png',
  fish_pie:        '/assets/Pie Oven/HayDay_Fish_Pie.png',
  feta_pie:        '/assets/Pie Oven/HayDay_Feta_Pie.png',
  casserole:       '/assets/Pie Oven/HayDay_Casserole.png',
  shepherds_pie:   '/assets/Pie Oven/HayDay_Shepherds_Pie.png',
  asparagus_quiche:'/assets/Pie Oven/Asparagus_Quiche.webp',
  chocolate_pie:   '/assets/Pie Oven/Chocolate_Pie.webp',
  lemon_pie:       '/assets/Pie Oven/HayDay_Lemon_Pie.png',
  peach_tart:      '/assets/Pie Oven/HayDay_Peach_Tart.png',
  passion_fruit_pie:'/assets/Pie Oven/HayDay_Passion_Fruit_Pie.png',
  mushroom_pot_pie:'/assets/Pie Oven/HayDay_Cabbage_Mushroom_Pie.png',
  eggplant_parmesan:'/assets/Pie Oven/HayDay_Eggplant_Parmesana.png',

  // ─── Popcorn Pot ────────────────────────────────────────
  popcorn:          '/assets/Popcorn Pot/HayDay_Popcorn.png',
  buttered_popcorn: '/assets/Popcorn Pot/HayDay_Buttered_Popcorn.png',
  chili_popcorn:    '/assets/Popcorn Pot/HayDay_Chili_Popcorn.png',
  honey_popcorn:    '/assets/Popcorn Pot/HayDay_Honey_Popcorn.png',
  chocolate_popcorn:'/assets/Popcorn Pot/HayDay_Chocolate_Popcorn.png',
  snack_mix:        '/assets/Popcorn Pot/HayDay_Snack_Mix.webp',

  // ─── Loom ───────────────────────────────────────────────
  sweater:        '/assets/Loom/HayDay_Sweater.png',
  cotton_fabric:  '/assets/Loom/HayDay_Cotton_Fabric.png',
  blue_woolly_hat:'/assets/Loom/HayDay_Blue_Woolly_Hat.png',
  blue_sweater:   '/assets/Loom/HayDay_Blue_Wweater.png',
  red_scarf:      '/assets/Loom/HayDay_Red_Scarf.png',
  flower_shawl:   '/assets/Loom/HayDay_Flower_Shawl.png',

  // ─── Sewing Machine ─────────────────────────────────────
  wooly_chaps:  '/assets/Sewing Machine/HayDay_Wooly_Chaps.png',
  violet_dress: '/assets/Sewing Machine/HayDay_Violet_Dress.png',
  soothing_pad: '/assets/Sewing Machine/HayDay_Soothing_Pad.webp',
  pillow:       '/assets/Sewing Machine/HayDay_Pillow.png',
  blanket:      '/assets/Sewing Machine/HayDay_Blanket.png',

  // ─── Jam Maker ──────────────────────────────────────────
  apple_jam:        '/assets/Jam Maker/HayDay_Apple_Jam.png',
  raspberry_jam:    '/assets/Jam Maker/HayDay_Raspberry_Jam.png',
  blackberry_jam:   '/assets/Jam Maker/HayDay_Blackberry_Jam.png',
  cherry_jam:       '/assets/Jam Maker/HayDay_Cherry_Jam.png',
  strawberry_jam:   '/assets/Jam Maker/HayDay_Strawberry_Jam.png',
  blueberry_chutney:'/assets/Jam Maker/HayDay_Blueberry_Chutney.png',
  marmalade:        '/assets/Jam Maker/HayDay_Marmelade.png',
  peach_jam:        '/assets/Jam Maker/HayDay_Peach_Jam.png',
  grape_jam:        '/assets/Jam Maker/HayDay_Grape_Jam.png',
  plum_jam:         '/assets/Jam Maker/HayDay_Plum_Jam.png',
  passion_fruit_jam:'/assets/Jam Maker/HayDay_Passion_Fruit_Jam.png',

  // ─── Juice Press ────────────────────────────────────────
  carrot_juice:       '/assets/Juice Press/HayDay_Carrot_Juice.png',
  apple_juice:        '/assets/Juice Press/HayDay_Apple_Juice.png',
  cherry_juice:       '/assets/Juice Press/HayDay_Cherry_Juice.png',
  tomato_juice:       '/assets/Juice Press/HayDay_Tomato_Juice.png',
  berry_juice:        '/assets/Juice Press/HayDay_Berry_Juice.png',
  pineapple_juice:    '/assets/Juice Press/HayDay_Pineapple_Juice.png',
  orange_juice:       '/assets/Juice Press/HayDay_Orange_Juice.png',
  grape_juice:        '/assets/Juice Press/HayDay_Grape_Juice.png',
  passion_fruit_juice:'/assets/Juice Press/HayDay_Passion_Fruit_Juice.png',
  watermelon_juice:   '/assets/Juice Press/HayDay_Watermelon_Juice.png',
  mango_juice:        '/assets/Juice Press/HayDay_Mango_Juice.webp',
  guava_juice:        '/assets/Juice Press/HayDay_Guava_Juice.png',

  // ─── Honey Extractor ────────────────────────────────────
  honey:   '/assets/Honey Extractor/HayDay_Honey.png',
  beeswax: '/assets/Honey Extractor/HayDay_Wax.png',

  // ─── Coffee Kiosk ───────────────────────────────────────
  espresso:        '/assets/Coffee Kiosk/HayDay_Espresso.png',
  caffe_latte:     '/assets/Coffee Kiosk/HayDay_Cafe_Latte.png',
  caffe_mocha:     '/assets/Coffee Kiosk/HayDay_Cafe_Mocha.png',
  raspberry_mocha: '/assets/Coffee Kiosk/HayDay_Raspberry_Mocha.png',
  hot_chocolate:   '/assets/Coffee Kiosk/HayDay_Hot_Chocolate.png',
  caramel_latte:   '/assets/Coffee Kiosk/HayDay_Caramel_Latte.png',
  iced_banana_latte:'/assets/Coffee Kiosk/HayDay_Iced_Banana_Latte.png',

  // ─── Soup Kitchen ───────────────────────────────────────
  lobster_soup:   '/assets/Soup Kitchen/HayDay_Lobster_Soup.png',
  tomato_soup:    '/assets/Soup Kitchen/HayDay_Tomato_Soup.png',
  pumpkin_soup:   '/assets/Soup Kitchen/HayDay_Pumpkin_Soup.png',
  asparagus_soup: '/assets/Soup Kitchen/Asparagus_Soup.webp',
  fish_soup:      '/assets/Soup Kitchen/HayDay_Fish_Soup.webp',
  cabbage_soup:   '/assets/Soup Kitchen/HayDay_Cabbage_Soup.png',
  onion_soup:     '/assets/Soup Kitchen/HayDay_Onion_Soup.png',
  noodle_soup:    '/assets/Soup Kitchen/HayDay_Noodle_Soup.png',
  potato_soup:    '/assets/Soup Kitchen/HayDay_Potato_Soup.png',
  bell_pepper_soup:'/assets/Soup Kitchen/HayDay_Bell_Pepper_Soup.png',
  broccoli_soup:  '/assets/Soup Kitchen/HayDay_Broccoli_Soup.png',
  mushroom_soup:  '/assets/Soup Kitchen/Mushroom_Soup.webp',

  // ─── Sushi Bar ──────────────────────────────────────────
  sushi_roll:    '/assets/Sushi Bar/HayDay_Sushi_Roll.png',
  lobster_sushi: '/assets/Sushi Bar/HayDay_Lobster_Sushi.png',
  egg_sushi:     '/assets/Sushi Bar/HayDay_Egg_Sushi.png',
  big_sushi_roll:'/assets/Sushi Bar/HayDay_Big_Sushi_Roll.png',
  rice_ball:     '/assets/Sushi Bar/HayDay_Rice_Ball.webp',

  // ─── Salad Bar ──────────────────────────────────────────
  feta_salad:    '/assets/Salad Bar/HayDay_Feta_Salad.png',
  bean_salad:    '/assets/Salad Bar/HayDay_Bean_Salad.webp',
  blt_salad:     '/assets/Salad Bar/HayDay_BLT_Salad.png',
  seafood_salad: '/assets/Salad Bar/HayDay_Seafood_Salad.png',
  pasta_salad:   '/assets/Salad Bar/HayDay_Pasta_Salad.png',
  beetroot_salad:'/assets/Salad Bar/HayDay_Beetroot_Salad.webp',
  fruit_salad:   '/assets/Salad Bar/HayDay_Fruit_Salad.png',
  mushroom_salad:'/assets/Salad Bar/HayDay_Mushroom_Salad.webp',
  orange_salad:  '/assets/Salad Bar/HayDay_Orange_Salad.webp',

  // ─── Sandwich Bar ───────────────────────────────────────
  veggie_bagel:    '/assets/Sandwich Bar/HayDay_Veggie_Bagel.png',
  bacon_toast:     '/assets/Sandwich Bar/HayDay_Bacon_Toast.png',
  egg_sandwich:    '/assets/Sandwich Bar/HayDay_Egg_Sandwich.png',
  honey_toast:     '/assets/Sandwich Bar/HayDay_Honey_Toast.png',
  pbj_sandwich:    '/assets/Sandwich Bar/HayDay_Peanut_Butter_and_Jelly_Sandwich.webp',
  cucumber_sandwich:'/assets/Sandwich Bar/HayDay_Cucumber_Sandwich.png',
  goat_cheese_toast:'/assets/Sandwich Bar/HayDay_Goat_Cheese_Toast.png',

  // ─── Smoothie Mixer ─────────────────────────────────────
  berry_smoothie:   '/assets/Smoothie Mixer/HayDay_Berry_Smoothie.png',
  green_smoothie:   '/assets/Smoothie Mixer/HayDay_Green_Smoothie.png',
  yogurt_smoothie:  '/assets/Smoothie Mixer/HayDay_Yogurt_Smoothie.webp',
  mixed_smoothie:   '/assets/Smoothie Mixer/HayDay_Mixed_Smoothie.png',
  cocoa_smoothie:   '/assets/Smoothie Mixer/HayDay_Cocoa_Smoothie.png',
  tropical_smoothie:'/assets/Smoothie Mixer/HayDay_Tropical_Smoothie.png',

  // ─── Pasta Machine ──────────────────────────────────────
  fresh_pasta:  '/assets/Pasta Maker/HayDay_Pasta.png',
  rice_noodles: '/assets/Pasta Maker/HayDay_Noodles.png',

  // ─── Pasta Kitchen ──────────────────────────────────────
  gnocchi:        '/assets/Pasta Kitchen/HayDay_Gnocchi.png',
  veggie_lasagna: '/assets/Pasta Kitchen/HayDay_Lasagna.png',
  lobster_pasta:  '/assets/Pasta Kitchen/HayDay_Lobster_Pasta.png',
  pasta_carbonara:'/assets/Pasta Kitchen/HayDay_Carbonara.png',
  broccoli_pasta: '/assets/Pasta Kitchen/HayDay_Broccoli_Mac.png',
  spicy_pasta:    '/assets/Pasta Kitchen/HayDay_Spicy_Pasta.png',
  mushroom_pasta: '/assets/Pasta Kitchen/HayDay_Mushroom_Pasta.webp',

  // ─── Sauce Maker ────────────────────────────────────────
  soy_sauce:   '/assets/Sauce Maker/HayDay_Soy_Sauce.png',
  olive_oil:   '/assets/Sauce Maker/HayDay_Olive_Oil.png',
  mayonnaise:  '/assets/Sauce Maker/HayDay_Mayonnaise.png',
  lemon_curd:  '/assets/Sauce Maker/HayDay_Lemon_Curd.png',
  olive_dip:   '/assets/Sauce Maker/HayDay_Olive_Dip.png',
  tomato_sauce:'/assets/Sauce Maker/HayDay_Tomato_Sauce.png',
  salsa:       '/assets/Sauce Maker/HayDay_Salsa.png',
  hummus:      '/assets/Sauce Maker/HayDay_Hummus.png',

  // ─── Jeweler ────────────────────────────────────────────
  bracelet:      '/assets/Jeweler/HayDay_Bracelet.png',
  necklace:      '/assets/Jeweler/HayDay_Necklace.png',
  diamond_ring:  '/assets/Jeweler/HayDay_Diamond_Ring.png',
  iron_bracelet: '/assets/Jeweler/HayDay_Iron_Bracelet.png',
  flower_pendant:'/assets/Jeweler/HayDay_Flower_Pendant.png',

  // ─── Hot Dog Stand ──────────────────────────────────────
  hot_dog:  '/assets/Hot Dog Stand/HayDay_Hot_Dog.png',
  tofu_dog: '/assets/Hot Dog Stand/HayDay_icon_Tofu_dog.png',
  corn_dog: '/assets/Hot Dog Stand/HayDay_Corn_Dog.png',
  onion_dog:'/assets/Hot Dog Stand/HayDay_Onion_Dog.png',

  // ─── Taco Kitchen ───────────────────────────────────────
  taco:           '/assets/Taco Kitchen/HayDay_Taco.png',
  spicy_bean_taco:'/assets/Taco Kitchen/HayDay_Spicy_Bean_Taco.webp',
  fish_taco:      '/assets/Taco Kitchen/HayDay_Fish_Taco.png',
  quesadilla:     '/assets/Taco Kitchen/HayDay_Quesadilla.png',
  nachos:         '/assets/Taco Kitchen/HayDay_Nachos.png',

  // ─── Tea Stand ──────────────────────────────────────────
  green_tea:       '/assets/Tea Stand/HayDay_Green_Tea.png',
  milk_tea:        '/assets/Tea Stand/HayDay_Milk_Tea.png',
  honey_tea:       '/assets/Tea Stand/HayDay_Honey_Tea.png',
  lemon_tea:       '/assets/Tea Stand/HayDay_Lemon_Tea.png',
  apple_ginger_tea:'/assets/Tea Stand/HayDay_Apple_Ginger_Tea.webp',
  orange_tea:      '/assets/Tea Stand/HayDay_Earl_Grey_Tea.png',
  iced_tea:        '/assets/Tea Stand/HayDay_Iced_Tea.png',
  mint_tea:        '/assets/Tea Stand/HayDay_Mint_Tea.png',
  chamomile_tea:   '/assets/Tea Stand/HayDay_Chamomile_Tea.webp',
  pomegranate_tea: '/assets/Tea Stand/HayDay_Pomegranate_Tea.webp',

  // ─── Flower Shop ────────────────────────────────────────
  rustic_bouquet:  '/assets/Flower_Shop/HayDay_Rustic_Bouquet.png',
  vibrant_bouquet: '/assets/Flower_Shop/HayDay_Bright_Bouquet.png',
  graceful_bouquet:'/assets/Flower_Shop/Gracious_Bouquet.webp',
  candy_bouquet:   '/assets/Flower_Shop/HayDay_Candy_Bouquet.png',
  birthday_bouquet:'/assets/Flower_Shop/HayDay_Birthday_Bouquet.png',
  veggie_bouquet:  '/assets/Flower_Shop/Veggie_Bouquet.webp',

  // ─── Candle Maker ───────────────────────────────────────
  strawberry_candle:'/assets/candle-maker/HayDay_Strawberry_Candle.png',
  raspberry_candle: '/assets/candle-maker/HayDay_Rasberry_Candle.png',
  lemon_candle:     '/assets/candle-maker/HayDay_Lemon_Candle.png',
  colorful_candles: '/assets/candle-maker/HayDay_Party_Candles.png',
  floral_candle:    '/assets/candle-maker/HayDay_Floral_Candle.png',

  // ─── Fondue Pot ─────────────────────────────────────────
  chocolate_fondue:'/assets/fondue_pot/HayDay_Chocolate_Fondue.webp',
  bacon_fondue:    '/assets/fondue_pot/HayDay_Bacon_Fondue.webp',
  cheese_fondue:   '/assets/fondue_pot/HayDay_Cheese_Fondue.webp',
  tropical_fondue: '/assets/fondue_pot/HayDay_Tropical_Fondue.webp',

  // ─── Donut Maker ────────────────────────────────────────
  plain_donut:    '/assets/Donut Maker/HayDay_Plain_Donut.png',
  sprinkled_donut:'/assets/Donut Maker/HayDay_Sprinkles_Donut.png',
  crunchy_donut:  '/assets/Donut Maker/HayDay_Crunchy_Donut.png',
  cream_donut:    '/assets/Donut Maker/HayDay_Cream_Donut.png',
  bacon_donut:    '/assets/Donut Maker/HayDay_Bacon_Donut.png',
  filled_donut:   '/assets/Donut Maker/HayDay_Filled_Donut.png',

  // ─── Fudge Shop ─────────────────────────────────────────
  rich_fudge:  '/assets/Fudge Shop/HayDay_Fudge_Rich.png',
  mint_fudge:  '/assets/Fudge Shop/HayDay_Fudge_Mint.png',
  chili_fudge: '/assets/Fudge Shop/HayDay_Fudge_Chili.png',
  lemon_fudge: '/assets/Fudge Shop/HayDay_Fudge_Lemon.png',
  peanut_fudge:'/assets/Fudge Shop/HayDay_Fudge_Peanut.png',

  // ─── Hat Maker ──────────────────────────────────────────
  cloche_hat:   '/assets/Hat Maker/HayDay_Cloche_Hat.png',
  top_hat:      '/assets/Hat Maker/HayDay_Top_Hat.png',
  sun_hat:      '/assets/Hat Maker/HayDay_Sun_Hat.png',
  flower_crown: '/assets/Hat Maker/HayDay_Flower_Crown.png',

  // ─── Bath Kiosk ─────────────────────────────────────────
  honey_soap:      '/assets/Kiosque de bain/HayDay_Honey_Soap.png',
  lemon_lotion:    '/assets/Kiosque de bain/HayDay_Lemon_Lotion.png',
  exfoliating_soap:'/assets/Kiosque de bain/HayDay_Exfoliating_Soap.png',
  honey_face_mask: '/assets/Kiosque de bain/HayDay_Honey_Mask.png',

  // ─── Porridge Bar ───────────────────────────────────────
  apple_porridge: '/assets/Porridge Bar/HayDay_Apple_Porridge.webp',
  breakfast_bowl: '/assets/Porridge Bar/HayDay_Breakfast_Bowl.webp',
  sweet_porridge: '/assets/Porridge Bar/HayDay_Sweet_Porridge.webp',
  fresh_porridge: '/assets/Porridge Bar/HayDay_Fresh_Porridge.webp',

  // ─── Milkshake Bar ──────────────────────────────────────
  vanilla_milkshake:'/assets/Milkshake Bar/HayDay_Vanilla_Milkshake.webp',
  mocha_milkshake:  '/assets/Milkshake Bar/HayDay_Mocha_Milkshake.webp',
  fruity_milkshake: '/assets/Milkshake Bar/HayDay_Fruity_Milkshake.webp',

  // ─── Waffle Maker ───────────────────────────────────────
  plain_waffle:     '/assets/Waffle Maker/Plain_Waffles.webp',
  berry_waffle:     '/assets/Waffle Maker/HayDay_Berry_Waffles.webp',
  chocolate_waffle: '/assets/Waffle Maker/HayDay_Chocolate_Waffles.webp',
  blueberry_waffle: '/assets/Waffle Maker/HayDay_White_Chocolate_Blueberry_Waffles.png',
  breakfast_waffle: '/assets/Waffle Maker/HayDay_Breakfast_Waffles.webp',

  // ─── Cupcake Maker ──────────────────────────────────────
  plain_cupcake:   '/assets/Cupcake Maker/HayDay_Plain_Cupcake.png',
  guava_cupcake:   '/assets/Cupcake Maker/HayDay_Guava_Cupcake.png',
  tropical_cupcake:'/assets/Cupcake Maker/HayDay_Tropical_Cupcake.png',
  cookie_cupcake:  '/assets/Cupcake Maker/HayDay_Cookie_Cupcake.png',

  // ─── Wok Kitchen ────────────────────────────────────────
  fried_rice:    '/assets/Wok Kitchen/HayDay_Fried_Rice.webp',
  spicy_fish:    '/assets/Wok Kitchen/Spicy_Fish.webp',
  peanut_noodles:'/assets/Wok Kitchen/HayDay_Peanut_Noodles.webp',
  tofu_stir_fry: '/assets/Wok Kitchen/HayDay_Tofu_Stir_Fry.webp',

  // ─── Omelet Station ─────────────────────────────────────
  colourful_omelet:'/assets/Omelet Station/HayDay_Colourful_Omelet.webp',
  spring_omelet:   '/assets/Omelet Station/HayDay_Spring_Omelet.webp',
  cheese_omelet:   '/assets/Omelet Station/HayDay_Cheese_Omelet.webp',
  potato_omelet:   '/assets/Omelet Station/HayDay_Potato_Omelet.webp',

  // ─── Stew Pot ───────────────────────────────────────────
  chickpea_stew:'/assets/Stew Pot/HayDay_Chickpea_Stew.webp',
  chili_stew:   '/assets/Stew Pot/HayDay_Chili_Stew.webp',
  winter_stew:  '/assets/Stew Pot/HayDay_Winter_Stew.webp',

  // ─── Yogurt Maker ───────────────────────────────────────
  plain_yogurt:     '/assets/Yogurt Maker/HayDay_Plain_Yogurt.png',
  strawberry_yogurt:'/assets/Yogurt Maker/HayDay_Strawberry_Yogurt .png',
  tropical_yogurt:  '/assets/Yogurt Maker/HayDay_Tropical_Yogurt.png',

  // ─── Essential Oil Lab ──────────────────────────────────
  lemon_essential_oil:    '/assets/essential-oils-lab/HayDay_Lemon_Essential_Oil.webp',
  chamomile_essential_oil:'/assets/essential-oils-lab/HayDay_Chamomile_Essential_Oil.webp',
  ginger_essential_oil:   '/assets/essential-oils-lab/HayDay_Ginger_Essential_Oil.webp',
  mint_essential_oil:     '/assets/essential-oils-lab/HayDay_Mint_Essential_Oil.webp',

  // ─── Perfumery ──────────────────────────────────────────
  fresh_diffuser:  '/assets/Perfumerie/HayDay_Fresh_Diffuser.webp',
  zesty_perfume:   '/assets/Perfumerie/HayDay_Zesty_Perfume.webp',
  calming_diffuser:'/assets/Perfumerie/HayDay_Calming_Diffuser.webp',

  // ─── Deep Fryer ─────────────────────────────────────────
  bacon_fries:    '/assets/Friteuse/HayDay_Bacon_Fries.webp',
  hand_pies:      '/assets/Friteuse/HayDay_Hand_Pies.webp',
  chili_poppers:  '/assets/Friteuse/HayDay_Chili_Poppers.webp',
  falafel:        '/assets/Friteuse/HayDay_Falafel.png',
  fried_candy_bar:'/assets/Friteuse/HayDay_Fried_Candy_Bar.webp',
  samosa:         '/assets/Friteuse/HayDay_Samosa.png',

  // ─── Candy Machine ──────────────────────────────────────
  lollipop:       '/assets/candy-machine/HayDay_Lollipop.png',
  jelly_beans:    '/assets/candy-machine/HayDay_Jelly_Beans.png',
  toffee:         '/assets/candy-machine/HayDay_Toffee.png',
  candy_floss:    '/assets/candy-machine/HayDay_Candy_Floss.png',
  caramel_apple:  '/assets/candy-machine/HayDay_Caramel_Apple.png',
  chocolate:      '/assets/candy-machine/HayDay_Chocolate.png',

  // ─── Pottery Studio ─────────────────────────────────────
  tea_pot:      '/assets/Pottery Studio/HayDay_Tea_Pot.png',
  potted_plant: '/assets/Pottery Studio/HayDay_Plant_Pot.png',
  clay_mug:     '/assets/Pottery Studio/Hay_Day_Mug.png',

  // ─── Preservation Station ───────────────────────────────
  pickles:      '/assets/Preservation Station/HayDay_Pickles.png',
  canned_fish:  '/assets/Preservation Station/HayDay_Canned_Fish.png',
  kimchi:       '/assets/Preservation Station/HayDay_Kimchi.png',
  dried_fruit:  '/assets/Preservation Station/HayDay_Dried_Fruits.png',
  guava_compote:'/assets/Preservation Station/HayDay_Guava_Compote.png',
};

/**
 * Get the image src for an item.
 * Returns the real asset path if mapped, otherwise returns the fallback (emoji or whatever is in item.src).
 */
export function getItemImage(itemId: string, fallback?: string): string {
  return IMAGE_MAP[itemId] ?? fallback ?? '';
}

/**
 * Check if an item has a real image (not just emoji)
 */
export function hasRealImage(itemId: string): boolean {
  return itemId in IMAGE_MAP;
}
