// All crafting recipes related to the "Bottler"
// currently yoinked from E6

onEvent('recipes', e => {
  const recipes = [
    {
      input: 'minecraft:string',
      fluid: Fluid.of('thermal:redstone', 300),
      output: 'redstonerepository:string_fluxed', //change to custom item
      energy: 4000,
      id: 'string_fluxed'
    },
    {
      input: 'mysticalagriculture:fire_agglomeratio',
      fluid: Fluid.of('emendatusenigmatica:molten_coal', 300),
      output: Item.of('powah:dielectric_paste', 4),
      energy: 4000,
      id: 'dielectric_paste'
    }
  ];

  recipes.forEach((recipe) => {
    e.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input])
      .energy(recipe.energy).id(`${_dys}:thermal/bottler/${recipe.id}`);
  });
})