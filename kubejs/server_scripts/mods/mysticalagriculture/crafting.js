// All crafting recipes related to the mod "Mystical Agriculture"

onEvent('recipes', e => {
  e.shaped('mysticalagriculture:inferium_gemstone', ['ABA', 'BCB', 'ABA'], {
		A: '#forge:nuggets/copper',
    B: 'mysticalagriculture:inferium_essence',
    C: 'mysticalagriculture:prosperity_gemstone'
	}).id(`${_dys}:mysticalagriculture/inferium_gemstone`)

  removeRecipeByID(e, [
    'mysticalagriculture:inferium_ingot',
    'mysticalagriculture:inferium_gemstone'
    ]
  )
})