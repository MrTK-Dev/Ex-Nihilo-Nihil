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
  //#endregion

  addPureDaisy([ //does not work
    [
      'livingwood',
      { block: 'eidolon:polished_planks'},
      'botania:livingwood'
    ],
    [
      'livingrock',
      { tag: 'tconstruct:seared_blocks'},
      'botania:livingrock'
    ]
  ])

  removeRecipeByID(e, 'botania:pure_daisy/', [
    'livingwood',
    'livingrock'
    ]
  )
})