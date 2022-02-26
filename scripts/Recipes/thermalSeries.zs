/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                for     
      Thermal Series & Gate
                                */

#|=======|Materials|=======|#

craftingTable.removeByName("extendedcrafting:redstone_ingot");
craftingTable.removeByName("mysticalagriculture:prosperity_ingot");

#|=======|Crafting Components|=======|#

craftingTable.removeRecipe(<item:minecraft:piston>);
craftingTable.addShaped("piston", <item:minecraft:piston>, [
	[<tag:items:forge:treated_wood>, <tag:items:forge:treated_wood>, <tag:items:forge:treated_wood>], 
	[<tag:items:forge:cobblestone>, <tag:items:forge:plates/iron>, <tag:items:forge:cobblestone>], 
	[<tag:items:forge:cobblestone>, <tag:items:forge:dusts/redstone>, <tag:items:forge:cobblestone>]
]);

craftingTable.removeRecipe(<item:glassential:glass_redstone>);
craftingTable.addShaped("glass_redstone", <item:glassential:glass_redstone> * 8, [
	[<tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>], 
	[<tag:items:forge:glass/colorless>, <tag:items:forge:ingots/redstone>, <tag:items:forge:glass/colorless>], 
	[<tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>, <tag:items:forge:glass/colorless>]
]);

craftingTable.removeRecipe(<item:thermal:machine_frame>);
craftingTable.addShaped("machine_frame", <item:thermal:machine_frame>, [
	[<item:tconstruct:seared_brick>, <item:glassential:glass_redstone>, <item:tconstruct:seared_brick>], 
	[<item:glassential:glass_redstone>, <tag:items:forge:gears/tin>, <item:glassential:glass_redstone>], 
	[<item:tconstruct:seared_brick>, <tag:items:forge:plates/iron>, <item:tconstruct:seared_brick>]
]);

craftingTable.removeRecipe(<item:thermal:redstone_servo>);
craftingTable.addShaped("redstone_servo", <item:thermal:redstone_servo>, [
	[<tag:items:forge:ingots/redstone>, <tag:items:forge:rods/iron>, <tag:items:forge:ingots/redstone>], 
	[<item:minecraft:air>, <tag:items:forge:rods/iron>, <item:minecraft:air>], 
	[<tag:items:forge:ingots/redstone>, <tag:items:forge:rods/iron>, <tag:items:forge:ingots/redstone>]
]);

craftingTable.removeRecipe(<item:thermal:rf_coil>);
craftingTable.addShaped("rf_coil", <item:thermal:rf_coil>, [
	[<item:minecraft:air>, <item:minecraft:air>, <tag:items:forge:ingots/redstone>], 
	[<item:minecraft:air>, <tag:items:forge:gears/gold>, <item:minecraft:air>], 
	[<tag:items:forge:ingots/redstone>, <item:minecraft:air>, <item:minecraft:air>]
]);