/*
    Iter Salis Forsaken Expert
        Crafting Recipes
              for     
          Mekanism & Gate
                                */

#|=======|Crafting Components|=======|#

craftingTable.removeRecipe(<item:mekanism:steel_casing>);
craftingTable.addShaped("steel_casing", <item:mekanism:steel_casing>, [
	[<tag:items:forge:ingots/steel>, <tag:items:forge:ingots/osmium>, <tag:items:forge:ingots/steel>], 
	[<tag:items:thermal:glass/hardened>, <item:thermal:machine_frame>, <tag:items:thermal:glass/hardened>], 
	[<tag:items:forge:ingots/steel>, <tag:items:forge:ingots/osmium>, <tag:items:forge:ingots/steel>]
]);

#|=======|Machines|=======|#

craftingTable.removeRecipe(<item:mekanism:metallurgic_infuser>);
craftingTable.addShaped("metallurgic_infuser", <item:mekanism:metallurgic_infuser>, [
	[<tag:items:forge:ingots/osmium>, <item:minecraft:furnace>, <tag:items:forge:ingots/osmium>], 
	[<tag:items:forge:dusts/redstone>, <item:mekanism:steel_casing>, <tag:items:forge:dusts/redstone>], 
	[<tag:items:forge:ingots/osmium>, <item:thermal:rf_coil>, <tag:items:forge:ingots/osmium>]
]);

#|=======|Applied Energistics Phase II|=======|#

craftingTable.removeRecipe(<item:appliedenergistics2:interface>);
craftingTable.addShaped("interface", <item:appliedenergistics2:interface>, [
	[<item:mysticalagriculture:prosperity_ingot>, <tag:items:forge:glass>, <item:mysticalagriculture:prosperity_ingot>], 
	[<item:appliedenergistics2:annihilation_core>, <tag:items:mekanism:alloys/reinforced>, <item:appliedenergistics2:formation_core>], 
	[<item:mysticalagriculture:prosperity_ingot>, <tag:items:forge:glass>, <item:mysticalagriculture:prosperity_ingot>]
]);

craftingTable.removeRecipe(<item:appliedenergistics2:molecular_assembler>);
craftingTable.addShaped("molecular_assembler", <item:appliedenergistics2:molecular_assembler>, [
	[<item:mysticalagriculture:prosperity_ingot>, <tag:items:forge:glass>, <item:mysticalagriculture:prosperity_ingot>], 
	[<item:appliedenergistics2:annihilation_core>, <item:mekanism:formulaic_assemblicator>, <item:appliedenergistics2:formation_core>], 
	[<item:mysticalagriculture:prosperity_ingot>, <tag:items:forge:glass>, <item:mysticalagriculture:prosperity_ingot>]
]);