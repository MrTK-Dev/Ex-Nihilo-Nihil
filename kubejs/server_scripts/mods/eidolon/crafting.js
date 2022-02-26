// All crafting recipes related to the mod "Eidolon"

onEvent('recipes', e => {
  //#region functions
  // function removeByID(entries) {
  //   entries.forEach(ID => {
  //     e.remove({id: `eidolon:${ID}`})
  //   })
  // }
  //#endregion

  // removeByID([
  //   'pewter_blend'
  // ])

  e.shaped('eidolon:worktable', ['AAA', 'BCB', 'CCC'], {
		A: 'minecraft:red_carpet',
    B: '#forge:ingots/pewter',
    C: '#forge:treated_wood'
	}).id(`${_dys}:eidolon/worktable`)

  removeRecipeByID([
    'eidolon', [
      'pewter_blend',
      'worktable',
      'crucible'
    ]
  ])
})