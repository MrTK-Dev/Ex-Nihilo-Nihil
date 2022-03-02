// All crafting recipes related to the mod "Eidolon"

onEvent('recipes', e => {
  e.shaped('farmersdelight:cutting_board', ['ABB', 'ABB'], {
		A: '#forge:rods/constantan',
    B: 'eidolon:polished_planks'
	}).id(`${_dys}:farmersdelight/cutting_board`)

  removeRecipeByID(e, 'farmersdelight', [
    'cutting_board'
    ]
  )
})