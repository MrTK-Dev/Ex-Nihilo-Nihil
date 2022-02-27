/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                by     
          Thermal Series
                                */

#|=======|Induction Smelter|=======|#
<recipetype:thermal:smelter>.addRecipe("prosperity_ingot", [<item:mysticalagriculture:prosperity_ingot>],
  [<tag:items:forge:gems/quartz>, <tag:items:forge:ingots/aluminum>, <item:mysticalagriculture:prosperity_shard> * 2], 0.5, 4000
);

<recipetype:thermal:smelter>.addRecipe("redstone_ingot", [<item:extendedcrafting:redstone_ingot>],
  [<tag:items:forge:ingots/steel>, <tag:items:forge:silicon>, <tag:items:forge:dusts/redstone>], 0.5, 4000
);

<recipetype:thermal:smelter>.addRecipe("machine_frame_pity", [<item:industrialforegoing:machine_frame_pity>],
  [<item:thermal:machine_frame>, <tag:items:forge:treated_wood> * 4, <tag:items:forge:ingots/manasteel> * 2], 0.5, 20000
);

#|=======|Pulverizer|=======|#

// <recipetype:thermal:pulverizer>.addRecipe(String name, MCWeightedItemStack[] outputs,
//   IIngredient ingredient, float experience, int energy
// );

#|=======|Centrifugal Separator|=======|#

<recipetype:thermal:centrifuge>.addRecipe("soul_dust", [<item:mysticalagriculture:soul_dust> % 50, <item:mysticalagriculture:soulstone_cobble> % 25, <item:minecraft:sand> % 10],
  <fluid:minecraft:empty>, <item:mysticalagriculture:soul_glass>, 4000
);