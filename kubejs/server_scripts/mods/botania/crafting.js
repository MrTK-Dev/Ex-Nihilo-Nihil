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

  e.shaped('botania:mana_pool', ['ABA', 'CCC'], {
		A: 'botania:diluted_pool',
		B: '#forge:storage_blocks/slimesteel',
    C: 'botania:livingrock_slab'
	}).id(`${_dys}:botania/petal_apothecary`)

  removeRecipeByID(e, 'botania', [
    'apothecary_default',
    'diluted_pool',
    'mana_pool',
    'fabulous_pool'
    ]
  )
})