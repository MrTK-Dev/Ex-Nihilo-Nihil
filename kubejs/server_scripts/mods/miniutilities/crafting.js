// All crafting recipes related to the mod "Mini Utilities"

onEvent('recipes', e => {
  // e.shaped(Item.of('miniutilities:redstone_glass', 8), ['AAA', 'ABA', 'AAA'], {
	// 	A: '#forge:glass',
  //   B: '#forge:ingots/redstone'
	// }).id(`${_dys}:miniutilities/redstone_glass`)

  removeRecipeByID(e, [
    'miniutilities:redstone_glass'
    ]
  )
})