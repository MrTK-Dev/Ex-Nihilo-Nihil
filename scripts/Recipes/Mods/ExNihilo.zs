/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                by     
        Artisan Worktables
                                */

import mods.exnihilosequentia.ZenSieveRecipe;

#|=======|Sieve|=======|#

//<recipetype:exnihilosequentia:sieve>.create("extra_pebbles").setInput(<item:minecraft:dirt>).addDrop(<item:exnihilosequentia:pebble_stone>).addRoll("string", 0.5);
<recipetype:exnihilosequentia:sieve>.create("hemp_seeds")
    .setInput(<item:minecraft:dirt>)
    .addDrop(<item:immersiveengineering:seed>)
    .addRoll("string", 0.05);

<recipetype:exnihilosequentia:sieve>.create("prosperity_shard")
    .setInput(<item:minecraft:soul_sand>)
    .addDrop(<item:mysticalagriculture:prosperity_shard>)
    .addRoll("iron", 0.15)
    .addRoll("diamond", 0.10)//;
    .addDrop(<item:mysticalagriculture:soulium_dust>)
    .addRoll("iron", 0.25);

// <recipetype:exnihilosequentia:sieve>.create("soulium_dust")
//     .setInput(<item:minecraft:soul_sand>)
//     .addDrop(<item:mysticalagriculture:soulium_dust>)
//     .addRoll("iron", 0.25);