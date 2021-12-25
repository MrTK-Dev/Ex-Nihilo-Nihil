/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                by     
          Thermal Series
                                */

#|=======|Induction Smelter|=======|#

<recipetype:thermal:smelter>.addRecipe("silicon_press", [<item:appliedenergistics2:silicon_press>],
  [<tag:items:forge:storage_blocks/pig_iron>, <tag:items:forge:plates/signalum> * 2, <tag:items:forge:silicon>], 0.5, 5000
);

<recipetype:thermal:smelter>.addRecipe("logic_processor_press", [<item:appliedenergistics2:logic_processor_press>],
  [<tag:items:forge:storage_blocks/hop_graphite>, <tag:items:forge:plates/signalum> * 2, <tag:items:forge:ingots/gold>], 0.5, 5000
);

<recipetype:thermal:smelter>.addRecipe("engineering_processor_press", [<item:appliedenergistics2:engineering_processor_press>],
  [<tag:items:forge:storage_blocks/cobalt>, <tag:items:forge:plates/signalum> * 2, <tag:items:forge:gems/diamond>], 0.5, 5000
);

<recipetype:thermal:smelter>.addRecipe("calculation_processor_press", [<item:appliedenergistics2:calculation_processor_press>],
  [<tag:items:forge:storage_blocks/zinc>, <tag:items:forge:plates/signalum> * 2, <item:appliedenergistics2:purified_certus_quartz_crystal>], 0.5, 5000
);

<recipetype:thermal:smelter>.addRecipe("prosperity_ingot", [<item:mysticalagriculture:prosperity_ingot> % 100],
  [<tag:items:forge:gems/quartz>, <tag:items:forge:ingots/aluminum>, <item:mysticalagriculture:prosperity_shard> * 2], 0.5, 4000
);
