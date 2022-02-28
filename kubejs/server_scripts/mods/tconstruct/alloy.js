// All crafting recipes related to the tconstruct smeltery alloy

onEvent('recipes', e => {
  //#region functions
  // function addWorktable(entries) {
  //   entries.forEach(([id, pattern, additional, inputs, output]) => {
  //     e.custom({
  //       type: 'eidolon:worktable',
  //       core: pattern,
  //       extras: additional,
  //       key: inputs,
  //       result: {item: output}
  //     }).id(`${_dys}:eidolon/worktable/${id}`)
  //   })
  // }

  function removeAlloy(entries) {
    entries.forEach(recipeID => {
      e.remove({ id: `tconstruct:smeltery/alloys/${recipeID}` })
    })
  }

  //#endregion

  removeAlloy([
    'molten_enderium',
    'molten_lumium',
    'molten_refined_obsidian',
    'molten_signalum'
  ])
})