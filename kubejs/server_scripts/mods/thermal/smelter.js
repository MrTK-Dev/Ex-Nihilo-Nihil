// All crafting recipes related to the Induction Smelter

onEvent('recipes', e => {
  const recipes = [
    {
      inputs: [['#forge:ingots/steel', '#forge:dusts/steel'], '#forge:gems/silicon', '#forge:dusts/redstone'],
      outputs: ['extendedcrafting:redstone_ingot'],
      energy: 6400,
      id: 'redstone_ingot'
    },
    {
      inputs: ['#forge:glass', ['#forge:dusts/quartz', '#forge:gems/quartz'], 'extendedcrafting:redstone_nugget'],
      outputs: [Item.of('miniutilities:redstone_glass', 2)],
      energy: 4800,
      id: 'redstone_glass'
    }
  ];

  recipes.forEach((recipe) => {
    e.recipes.thermal.smelter(recipe.outputs, recipe.inputs)
      .energy(recipe.energy).id(`${_dys}:thermal/smelter/${recipe.id}`);
  });
})