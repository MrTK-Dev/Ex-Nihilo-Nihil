// All crafting recipes related to the "Bottler"
// currently yoinked from E6

onEvent('recipes', e => {
  const recipes = [
    {
      input: 'minecraft:string',
      fluid: Fluid.of('thermal:redstone', 300),
      output: 'redstonerepository:string_fluxed', //change to custom item
      energy: 4000,
      id: `${_dys}:thermal/bottler`
    }
  ];
  recipes.forEach((recipe) => {
      e.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
  });
})