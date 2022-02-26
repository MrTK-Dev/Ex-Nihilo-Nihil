// All crafting recipes related to the mod "More Red"

onEvent('recipes', e => {
  e.shaped('4x morered:stone_plate', ['A', 'B', 'B'], {
		A: '#artisantools:type/handsaw',
    B: '#forge:slabs/smooth_stone'
	}).id(`${_dys}:morered/stone_plate`)

  removeRecipeByID(e, [
    'morered:stone_plate',
    'morered:stone_plate_from_smooth_stone_slab_stonecutting',
    'morered:stone_plate_from_smooth_stone_slab_stonecutting'
  ])
})