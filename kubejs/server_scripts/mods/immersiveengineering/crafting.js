// All crafting recipes related to the mod "immersiveengineering"

onEvent('recipes', e => {
  e.shaped('2x immersiveengineering:alloybrick', ['ABA', 'CCC', 'ABA'], {
		A: '#forge:sandstone',
    B: '#forge:plates/copper',
    C: '#forge:ingots/brick'
	}).id(`${_dys}:immersiveengineering/alloybrick`)

  e.shaped('3x immersiveengineering:cokebrick', ['ABA', 'BCB', 'ABA'], {
		A: 'tconstruct:grout',
    B: '#forge:ingots/brick',
    C: '#forge:plates/tin'
	}).id(`${_dys}:immersiveengineering/cokebrick`)

  e.shaped('3x immersiveengineering:blastbrick', ['ABA', 'BCB', 'ABA'], {
		A: 'tconstruct:nether_grout',
    B: '#forge:ingots/nether_brick',
    C: Item.of('tconstruct:large_plate', '{Material:"tconstruct:tinkers_bronze"}')
	}).id(`${_dys}:immersiveengineering/blastbrick`)

  e.shaped('8x immersiveengineering:conveyor_basic', ['ABA', 'CDC'], {
		A: '#forge:silicon',
    B: '#forge:leather',
    C: '#forge:plates/invar',
    D: '#forge:dusts/redstone'
	}).id(`${_dys}:immersiveengineering/conveyor_basic`)

  removeRecipeByID(e, [
    'immersiveengineering:crafting/alloybrick',
    'immersiveengineering:crafting/cokebrick',
    'immersiveengineering:crafting/blastbrick',
    'immersiveengineering:crafting/conveyor_basic'
  ])

//   removeRecipeByID(e, ['immersiveengineering', 
//     [
//       'crafting/alloybrick',
//       'crafting/cokebrick',
//       'crafting/blastbrick',
//       'crafting/conveyor_basic'
//     ]
//   ])
})