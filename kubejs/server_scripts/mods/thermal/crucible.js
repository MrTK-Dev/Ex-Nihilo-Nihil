// All crafting recipes related to the "Magma Crucible"
// currently yoinked from E6

onEvent('recipes', e => {
  const recipes = [
    {
      input: '#forge:dusts/coal',
      output: Fluid.of('emendatusenigmatica:molten_coal', 100),
      energy: 8000,
      id: 'coal_from_coal'
    },
    {
      input: 'minecraft:coal',
      output: Fluid.of('emendatusenigmatica:molten_coal', 100),
      energy: 8000,
      id: 'coal_from_coal'
    },
    {
      input: '#forge:storage_blocks/coal',
      output: Fluid.of('emendatusenigmatica:molten_coal', 900),
      energy: 60000, //change redstone block to this value to make it more efficient
      id: 'coal_from_coal_block'
    }
  ];

  recipes.forEach((recipe) => {
    e.recipes.thermal.crucible(recipe.output, recipe.input)
      .energy(recipe.energy).id(`${_dys}:thermal/crucible/${recipe.id}`);
  });
})