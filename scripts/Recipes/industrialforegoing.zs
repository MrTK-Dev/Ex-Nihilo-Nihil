/*
    Iter Salis Forsaken Expert
        Crafting Recipes
              for     
    Industrial Foregoing & Gate
                                */

#|=======|Crafting Components|=======|#

craftingTable.removeRecipe(<item:industrialforegoing:machine_frame_pity>);

#|=======|Extreme Reactors|=======|#

craftingTable.removeRecipe(<item:biggerreactors:reactor_casing>);
craftingTable.addShaped("basic_reactorcasing", <item:biggerreactors:reactor_casing> * 4, [
	[<tag:items:forge:plates/steel>, <tag:items:forge:ingots/graphite>, <tag:items:forge:plates/steel>], 
	[<tag:items:forge:ingots/graphite>, <tag:items:industrialforegoing:machine_frame/simple>, <tag:items:forge:ingots/graphite>], 
	[<tag:items:forge:plates/steel>, <tag:items:forge:ingots/graphite>, <tag:items:forge:plates/steel>]
]);