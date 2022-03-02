// All crafting recipes related to the Magic Worktable

onEvent('recipes', e => {
  //#region functions
  function addWorktable(entries) {
    entries.forEach(([id, pattern, additional, inputs, output]) => {
      e.custom({
        type: 'eidolon:worktable',
        core: pattern,
        extras: additional,
        key: inputs,
        result: {item: output}
      }).id(`${_dys}:eidolon/worktable/${id}`)
    })
  }

  //#endregion

  addWorktable([
    [
      'item_trash_can',
      ["ABA", "CDC", "CCC"],
      ["    "],
      {
        A: { tag: 'forge:stone' },
        B: { tag: 'forge:inlays/pewter' },
        C: { tag: 'forge:cobblestone' },
        D: { item: 'minecraft:chest' }
      },
      'trashcans:item_trash_can'
    ],
    [
      'liquid_trash_can',
      ["ABA", "CDC", "CCC"],
      ["    "],
      {
        A: { tag: 'forge:stone' },
        B: { tag: 'forge:inlays/pewter' },
        C: { tag: 'forge:cobblestone' },
        D: { item: 'minecraft:bucket' }
      },
      'trashcans:liquid_trash_can'
    ],
    [
      'energy_trash_can',
      ["ABA", "CDC", "CCC"],
      ["    "],
      {
        A: { tag: 'forge:stone' },
        B: { tag: 'forge:inlays/pewter' },
        C: { tag: 'forge:cobblestone' },
        D: { item: 'immersiveengineering:wirecoil_redstone' }
      },
      'trashcans:energy_trash_can'
    ],
    [
      'crucible',
      ["A A", "A A", "AAA"],
      ["BCDE"],
      {
        A: { tag: 'forge:ingots/pewter'},
        B: { tag: 'forge:gems/diamond' },
        C: { tag: 'forge:gems/fluorite' },
        D: { tag: 'forge:gems/niter' },
        E: { tag: 'forge:gems/sulfur' }
      },
      'eidolon:crucible'
    ],
    [
      'stove',
      ["AAA", "B B", "BCB"],
      ["DDDD"],
      {
        A: { tag: 'forge:ingots/arcane_gold'},
        B: { item: 'minecraft:bricks' },
        C: { item: 'minecraft:campfire' },
        D: { item: 'eidolon:enchanted_ash' }
      },
      'farmersdelight:stove'
    ],
    [
      'blackstone_stove',
      ["AAA", "B B", "BCB"],
      ["DDDD"],
      {
        A: { tag: 'forge:ingots/arcane_gold'},
        B: { item: 'minecraft:polished_blackstone_bricks' },
        C: { item: 'minecraft:campfire' },
        D: { item: 'eidolon:enchanted_ash' }
      },
      'nethers_delight:blackstone_stove'
    ],
    [
      'cooking_pot',
      ["ABA", "CDC", "CCC"],
      ["EEEE"],
      {
        A: { tag: 'forge:ingots/brick'},
        B: { item: 'minecraft:cauldron' },
        C: { tag: 'forge:ingots/pewter' },
        D: { item: 'minecraft:water_bucket' },
        E: { item: 'eidolon:enchanted_ash' }
      },
      'farmersdelight:cooking_pot'
    ],
    [
      'skillet',
      [" AB", " AA", "C  "],
      ["DDDD"],
      {
        A: { tag: 'forge:ingots/pewter' },
        B: { item: 'artisantools:pan_flint' },
        C: { tag: 'forge:ingots/brick'},
        D: { item: 'eidolon:enchanted_ash' }
      },
      'farmersdelight:skillet'
    ],
    [
      'crafting_terminal',
      ["ABA", "CDC", "ACA"],
      ["EEEE"],
      {
        A: { item: 'extendedcrafting:redstone_nugget' },
        B: { item: 'sophisticatedbackpacks:crafting_upgrade' },
        C: { tag: 'forge:gears/silver'},
        D: { item: 'prettypipes:item_terminal' },
        E: { tag: 'forge:inlays/arcane_gold'}
      },
      'prettypipes:crafting_terminal'
    ],
    [
      'diluted_pool',
      ["   ", "ABA", "AAA"],
      ["CDDD"],
      {
        A: { item: 'botania:livingrock_slab' },
        B: { item: 'eidolon:lesser_soul_gem' },
        C: { item: 'mysticalagriculture:prudentium_ingot'},
        D: { tag: 'forge:plates/silver' }
      },
      'botania:diluted_pool'
    ]
  ])
})