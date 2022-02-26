/*
    Iter Salis Forsaken Expert
        Crafting Recipes
                for     
            Early Game
                                */

#|=======|Additions|=======|#

craftingTable.removeRecipe(<item:exnihilosequentia:porcelain_clay>);
craftingTable.removeRecipe(<item:immersiveengineering:hammer>);
craftingTable.removeByName("tconstruct:tables/crafting_station_from_logs");


craftingTable.removeRecipe(<item:tconstruct:grout>);
craftingTable.addShapeless("grout", <item:tconstruct:grout> * 2, [
	<item:exnihilosequentia:porcelain_clay>, <item:exnihilosequentia:dust>, <item:minecraft:gravel>
]);