// All crafting recipes related to the Sawmill

onEvent('recipes', e => {
  const recipes = [
    {
      input: 'powah:capacitor_basic',
      outputs: [Item.of('powah:capacitor_basic_tiny', 3), Item.of('minecraft:iron_nugget', 2).chance(0.25)],
      energy: 6400,
      id: 'redstone_ingot'
    }
  ];

  recipes.forEach((recipe) => {
    e.recipes.thermal.sawmill(recipe.outputs, recipe.input)
      .energy(recipe.energy).id(`${_dys}:thermal/sawmill/${recipe.id}`);
  });
})