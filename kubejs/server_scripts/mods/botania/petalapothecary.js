// All crafting recipes related to the Petal Apothecary

onEvent('recipes', e => {
  //#region functions
  function addPetalApo(entries) {
    entries.forEach(([id, inputs, outputItem]) => {
      e.custom({
        type: 'botania:petal_apothecary',
        ingredients: inputs,
        output: { item: outputItem }
      }).id(`${_dys}:botania/petal_apothecary/${id}`)
    })
  }
  //#endregion

  addPetalApo([
    [
      'pure_daisy',
      [
        { tag: 'botania:petals/white'},
        { item: 'eidolon:shadow_gem'},
        { tag: 'botania:petals/white'},
        { tag: 'botania:petals/white'},
        { tag: 'forge:gems/emerald'},
        { tag: 'botania:petals/white'}
      ],
      'botania:pure_daisy'
    ]
  ])

  removeRecipeByID(e, 'botania:petal_apothecary/', [
    'pure_daisy'
    ]
  )
})