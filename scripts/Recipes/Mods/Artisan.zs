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
  .shapeless([<item:minecraft:bone_meal>])
  .output(<item:minecraft:white_dye>)
  .extra(<item:minecraft:white_dye>, 0.25)
  .tool(<tag:items:artisantools:type/mortar>, 3)
  .register("white_dye");

Recipe.type(Type.MASON)
  .shapeless([<tag:items:crafttweaker:pebbel>, <tag:items:crafttweaker:pebbel>, <tag:items:crafttweaker:pebbel>, <tag:items:crafttweaker:pebbel>])
  .output(<item:exnihilosequentia:pebble_stone> * 4)
  .register("pebble_conversion");