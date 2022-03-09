// All crafting recipes related to the mod "Time In A Bottle"

onEvent('recipes', e => {
  e.shaped('tiab:timeinabottle', ['ABC', 'DED', 'FGF'], {
		A: 'botania:rune_sloth',
    B: 'botania:rune_mana',
    C: 'botania:rune_envy',
    D: 'mysticalagriculture:prudentium_gemstone',
    E: 'rftoolsutility:timer',
    F: '#forge:storage_blocks/lapis',
    G: 'botania:mana_bottle'
	}).id(`${_dys}:tiab/timeinabottle`)

  removeRecipeByID(e, 'tiab', [
    'timeinabottle'
    ]
  )
})