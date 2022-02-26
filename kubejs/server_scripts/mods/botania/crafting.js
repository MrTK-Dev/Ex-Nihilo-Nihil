// All crafting recipes related to the mod "Botania"

onEvent('recipes', e => {
  e.shaped('botania:apothecary_default', ['ABA', 'CDC', 'EFE'], {
		A: 'minecraft:cobblestone_slab',
		B: '#botania:petals',
    C: 'minecraft:bucket',
    D: 'eidolon:goblet',
    E: '#forge:cobblestone',
    F: 'tconstruct:scorched_fuel_tank'
	}).id(`${_dys}:botania/petal_apothecary`)





  e.remove({output: 'botania:apothecary_default'})
})