/*
    Iter Salis Forsaken Expert
        Processing Recipes
              by     
      Immersive Engineering
                                */

#|=======|Coke Oven|=======|#

<recipetype:immersiveengineering:coke_oven>.removeRecipe(<item:minecraft:charcoal>);
<recipetype:immersiveengineering:coke_oven>.addRecipe("tiny_charcoal", <tag:items:minecraft:logs>, 200, <item:tinycoal:tinycharcoal> * 4, 100);

#|=======|Arc Furnace|=======|#

<recipetype:immersiveengineering:arc_furnace>.addRecipe("redstone_ingot", <tag:items:forge:ingots/steel>, [<tag:items:forge:silicon>, <tag:items:forge:dusts/redstone>], 100, 51200, [<item:extendedcrafting:redstone_ingot>]);    