// All crafting recipes related to the "Runic Altar"
// currently yoinked from E6

onEvent('recipes', e => {
  const recipes = [
    {
      inputs: [
        { item: 'thermal:lumium_glass' },
        { item: 'thermal:lumium_glass' },
        { item: 'thermal:lumium_glass' },
        { item: 'powah:dielectric_casing' },
        { item: 'powah:dielectric_rod_horizontal' }, //SUbject to change
        { item: 'powah:dielectric_rod_horizontal' },
        { item: 'powah:dielectric_rod_horizontal' }
      ],
      output: 'powah:energizing_orb',
      mana: 10400,
      id: 'energizing_orb'
    }
  ];

  recipes.forEach((recipe) => {
    e.custom({
      type: 'botania:runic_altar',
      output: { item: recipe.output },
      mana: recipe.mana,
      ingredients: recipe.inputs
    }).id(`${_dys}:botania/runic_altar/${recipe.id}`);
  });
})