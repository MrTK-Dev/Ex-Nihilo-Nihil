// All crafting recipes related to the mod "Applied Energistics 2"

onEvent('recipes', e => {
  e.shaped('appliedenergistics2:wooden_gear', [' A ', 'ABA', ' A '], {
		A: '#forge:rods/wooden',
    B: Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood"}')
	}).id(`${_dys}:appliedenergistics2/wooden_gear`)
 
  removeRecipeByID(e, 'appliedenergistics2', [
    'misc/grindstone_woodengear'
    ]
  )
})