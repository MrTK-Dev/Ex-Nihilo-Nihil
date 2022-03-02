// All crafting recipes related to the mod "Storage Drawers"

onEvent('recipes', e => {
  e.shaped('storagedrawers:controller', ['AAA', 'BCB', 'DED'], {
		A: '#botania:livingrock',
    B: 'minecraft:comparator',
    C: '#storagedrawers:drawers',
    D: 'immersiveengineering:reinforced_crate',
    E: '#forge:gears/enderium'
	}).id(`${_dys}:storagedrawers/controller`)

  removeRecipeByID(e, 'storagedrawers', [
    'controller'
  ])
})