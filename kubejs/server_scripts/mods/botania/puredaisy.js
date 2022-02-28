// All crafting recipes related to the Petal Apothecary

onEvent('recipes', e => {
  //#region functions
  function addPureDaisy(entries) {
    entries.forEach(([id, inputItem, outputItem]) => {
      e.custom({
        type: 'botania:pure_daisy',
        input: inputItem,
        output: { item: outputItem }
      }).id(`${_dys}:botania/pure_daisy/${id}`)
    })
  }

  function removePureDaisy(entries) {
    entries.forEach(recipeID => {
      e.remove({ id: `botania:pure_daisy/${recipeID}` })
    })
  }
  //#endregion

  addPureDaisy([
    [
      'livingwood',
      { item: 'eidolon:polished_planks'},
      'botania:livingwood'
    ],
    [
      'livingrock',
      { tag: '#tconstruct:seared_blocks'},
      'botania:livingrock'
    ]
  ])

  removePureDaisy([
    'livingwood',
    'livingrock'
  ])
})