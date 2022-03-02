// All crafting recipes related to the mod "Thermal Series"

onEvent('recipes', e => {
  e.shaped('energymeter:meter', ['ABA', 'CDC', 'AEA'], {
		A: 'mysticalagriculture:prudentium_ingot',
    B: 'minecraft:comparator',
    C: '#forge:ingots/redstone',
    D: 'immersiveengineering:voltmeter',
    E: 'minecraft:observer'
	}).id(`${_dys}:energymeter/meter`)

  removeRecipeByID(e, 'energymeter', [
    'meter'
    ]
  )
})