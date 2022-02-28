// All crafting recipes related to the Alloy Smelter

onEvent('recipes', e => {
  //#region functions
  function addAlloy(entries) {
    entries.forEach(([id, output, inputs]) => {
      e.recipes.immersiveengineeringAlloy(
        output,
        inputs[0],
        inputs[1]
      ).id(`${_dys}:immersiveengineering/alloy/${id}`)
    })
  }
  //#endregion

  addAlloy([
    [
      'pewter_ingot',
      'eidolon:pewter_ingot',
      ['#forge:ingots/iron', '#forge:ingots/lead']
    ],
    [//make cool loop
      'inferium_ingot',
      'mysticalagriculture:inferium_ingot',
      ['mysticalagriculture:prosperity_ingot', Ingredient.of('mysticalagriculture:inferium_essence', 4)]
    ],
    [
      'prudentium_ingot',
      'mysticalagriculture:prudentium_ingot',
      ['mysticalagriculture:inferium_ingot', Ingredient.of('mysticalagriculture:prudentium_essence', 4)]
    ]
  ])
})