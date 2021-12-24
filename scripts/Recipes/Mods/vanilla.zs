/*
    Iter Salis Forsaken Expert
        Furnace Recipes
              by     
            Vanilla
                                */

import crafttweaker.api.FurnaceManager;

#|=======|Charcoal|=======|#

furnace.removeRecipe(<item:minecraft:charcoal>);
furnace.addRecipe("charcoal", <item:tinycoal:tinycharcoal> * 2, <tag:items:minecraft:logs>, 1.0, 100);

