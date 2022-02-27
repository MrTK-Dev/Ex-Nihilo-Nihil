// All crafting recipes related to the Arc Furnace

onEvent('recipes', e => {
  //#region functions
  // :(
  // function addArc(entries) {
  //   entries.forEach(([id, outputs, input, additives, time, energy]) => {
  //     e.recipes.immersiveengineeringArcFurnace(
  //       outputs,
  //       input,
  //       additives
  //     ).time(time).energy(energy).id(`${_dys}:immersiveengineering/arcfurnace/${id}`)
  //   })
  // }
  //#endregion

  e.recipes.immersiveengineeringArcFurnace(
    ['extendedcrafting:redstone_ingot'],
    '#forge:ingots/steel',
    ['#forge:silicon', '#forge:dusts/redstone']
  ).time(100).energy(51200).id(`${_dys}:immersiveengineering/arcfurnace/redstone_ingot`)

  e.recipes.immersiveengineeringArcFurnace(
    ['mysticalagriculture:inferium_ingot'],
    'mysticalagriculture:prosperity_ingot',
    [Ingredient.of('mysticalagriculture:inferium_essence', 4)]
  ).time(100).energy(51200).id(`${_dys}:immersiveengineering/arcfurnace/inferium_ingot`)
})