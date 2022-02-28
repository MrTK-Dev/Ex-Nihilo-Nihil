/*
    Iter Salis Forsaken Expert
              Tags
                                */

import crafttweaker.api.item.IItemStack;

#|=======|Addition|=======|#

var new_pebbles as IItemStack[] = [
	<item:exnihilosequentia:pebble_granite>,
  <item:exnihilosequentia:pebble_diorite>,
  <item:exnihilosequentia:pebble_andesite>,
  <item:exnihilosequentia:pebble_basalt>,
  <item:exnihilosequentia:pebble_blackstone>,
  <item:exnihilosequentia:pebble_stone>
];

for item in new_pebbles {
  <tag:items:crafttweaker:pebbel>.add(item);
}