/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                for     
      Blood Magic & Gate
                                */

#|=======|Devices|=======|#

craftingTable.removeRecipe(<item:bloodmagic:altar>);
craftingTable.addShaped("blood_altar", <item:bloodmagic:altar>, [
	[<tag:items:forge:stone>, <item:minecraft:air>, <tag:items:forge:stone>], 
	[<tag:items:forge:stone>, <item:minecraft:blast_furnace>, <tag:items:forge:stone>], 
	[<tag:items:forge:ingots/electrum>, <tag:items:forge:ingots/electrum>, <tag:items:forge:ingots/electrum>]
]);