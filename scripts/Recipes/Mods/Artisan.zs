/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                by     
        Artisan Worktables
                                */

import mods.artisanworktables.Recipe;
import mods.artisanworktables.Type;

#|=======|Mason|=======|#

Recipe.type(Type.MASON)
  .shapeless([<tag:items:forge:gravel>, <tag:items:forge:gravel>])
  .output(<item:minecraft:flint>)
  .tool(<tag:items:artisantools:type/sifter>, 5)
  .register("sifting_gravel");

Recipe.type(Type.MASON) // look for different table
  .shapeless([<item:minecraft:bone_meal>, <item:minecraft:bone_meal>])
  .output(<item:minecraft:white_dye> * 3)
  .tool(<tag:items:artisantools:type/mortar>, 5)
  .register("white_dye");

Recipe.type(Type.MASON)
  .shapeless([<tag:items:crafttweaker:pebbel>, <tag:items:crafttweaker:pebbel>, <tag:items:crafttweaker:pebbel>, <tag:items:crafttweaker:pebbel>])
  .output(<item:exnihilosequentia:pebble_stone> * 4)
  .register("pebble_conversion");

#|=======|Potter|=======|#

Recipe.type(Type.POTTER)
  .shapeless([<item:minecraft:clay_ball>, <item:minecraft:clay_ball>, <tag:items:forge:dyes/white>])
  .output(<item:exnihilosequentia:porcelain_clay> * 2)
  .fluid(<fluid:exnihilosequentia:sea_water> * 250)
  .tool(<tag:items:artisantools:type/trowel>, 5)
  .register("porcelain_clay");

#|=======|Blacksmith|=======|#
