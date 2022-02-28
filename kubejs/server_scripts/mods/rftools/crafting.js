// All crafting recipes related to the mod "RFTools"

onEvent('recipes', e => {
  e.shaped('rftoolsbase:machine_base', ['AAA', 'BBB'], {
		A: 'mysticalagriculture:inferium_nugget',
    B: 'immersiveengineering:slab_storage_steel'
	}).id(`${_dys}:rftools/machine_base`)

  removeRecipeByID(e, [
    'rftoolsbase:machine_base'
  ])
})