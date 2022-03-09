// All crafting recipes related to Mana Infusion

onEvent('recipes', e => {
  //#region functions
  function addInfusion(entries) {
    entries.forEach(([id, inputItem, outputItem, manaCost]) => {
      e.custom({
        type: 'botania:mana_infusion',
        input: inputItem,
        output: { item: outputItem },
        mana: manaCost
      }).id(`${_dys}:botania/mana_infusion/${id}`)
    })
  }

  addInfusion([
    [
      'manasteel_nugget',
      { tag: 'forge:nuggets/arcane_gold' },
      'botania:manasteel_nugget',
      300
    ],
    [
      'manasteel_ingot',
      { tag: 'forge:ingots/arcane_gold' },
      'botania:manasteel_ingot',
      3000
    ],
    [
      'manasteel_block',
      { tag: 'forge:storage_blocks/arcane_gold' },
      'botania:manasteel_block',
      27000
    ],
    [
      'mana_string',
      { item: 'kubejs:string_fluxed' },
      'botania:mana_string',
      5000
    ],
    [
      'mana_diamond',
      { item: 'mysticalagriculture:prudentium_gemstone' },
      'botania:mana_diamond',
      10000
    ],
    [
      'mana_diamond_block',
      { item: 'mysticalagriculture:prudentium_gemstone_block' },
      'botania:mana_diamond_block',
      90000
    ]
  ])

  removeRecipeByID(e, 'botania:mana_infusion/', [
    'manasteel',
    'manasteel_block',
    'mana_string',
    'mana_diamond',
    'mana_diamond_block'
    ]
  )

  const recipes = [
    {
      id: 'uraninite_raw_poor',
      output: 'powah:uraninite_raw_poor',
      input: { item:'exnihilosequentia:chunk_uranium' },
      mana: 50000,
      catalyst: 'botania:alchemy_catalyst'
    }
  ]

  recipes.forEach((recipe) => {
    let newRecipe = {
      type: 'botania:mana_infusion',
      input: recipe.input,
      output: { item: recipe.output },
      mana: recipe.mana
    }

    if (recipe.catalyst) {
      newRecipe.catalyst = {
        type: 'block',
        block: recipe.catalyst
      }
    }

    e.custom(newRecipe).id(`${_dys}:botania/mana_infusion/${recipe.id}`)
  })
})