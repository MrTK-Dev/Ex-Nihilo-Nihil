// All crafting recipes related to the mod "Eidolon"

onEvent('recipes', e => {
  e.shaped('eidolon:worktable', ['AAA', 'BCB', 'CCC'], {
		A: 'minecraft:red_carpet',
    B: '#forge:ingots/pewter',
    C: '#forge:treated_wood'
	}).id(`${_dys}:eidolon/worktable`)

  e.shaped('eidolon:brazier', ['AAA', ' B ', 'C C'], {
		A: '#forge:ingots/pewter',
    B: '#forge:storage_blocks/coal_coke',
    C: '#forge:rods/treated_wood'
	}).id(`${_dys}:eidolon/brazier`)

  removeRecipeByID(e, 'eidolon', [
    'pewter_blend',
    'worktable',
    'crucible',
    'brazier',
    'blast_pewter_blend',
    'smelt_pewter_blend'
    ]
  )

  removeRecipeByID(e, 'materialis', [
    'smeltery/melting/metal/pewter_blend'
    ]
  )
})