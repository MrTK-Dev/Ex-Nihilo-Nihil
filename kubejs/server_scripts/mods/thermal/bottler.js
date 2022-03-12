// All crafting recipes related to the "Bottler"
// currently yoinked from E6

onEvent('recipes', e => {
  const recipes = [
    {
      input: 'minecraft:string',
      fluid: Fluid.of('thermal:redstone', 300),
      output: 'kubejs:string_fluxed',
      energy: 4000,
      id: 'string_fluxed'
    },
    {
      input: 'mysticalagriculture:fire_agglomeratio',
      fluid: Fluid.of('emendatusenigmatica:molten_coal', 300),
      output: Item.of('powah:dielectric_paste', 4),
      energy: 4000,
      id: 'dielectric_paste'
    },
    {
      input: '#thermal:glass/hardened',
      fluid: Fluid.of('thermal:redstone', 100),
      output: 'miniutilities:redstone_glass',
      energy: 4000,
      id: 'redstone_glass'
    },
    {
      input: Item.of('betterendforge:crystal_shards', 2),
      fluid: Fluid.of('tconstruct:blazing_blood', 250),
      output: 'powah:crystal_blazing',
      energy: 6000,
      id: 'crystal_blazing'
    },
    {
      input: Item.of('betterendforge:crystal_shards', 2),
      fluid: Fluid.of('emendatusenigmatica:molten_diamond', 250),
      output: 'powah:crystal_niotic',
      energy: 6000,
      id: 'crystal_niotic'
    },
    {
      input: Item.of('betterendforge:crystal_shards', 2),
      fluid: Fluid.of('emendatusenigmatica:molten_emerald', 250),
      output: 'powah:crystal_spirited',
      energy: 6000,
      id: 'crystal_spirited'
    }
  ];

  recipes.forEach((recipe) => {
    e.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input])
      .energy(recipe.energy).id(`${_dys}:thermal/bottler/${recipe.id}`);
  });
})