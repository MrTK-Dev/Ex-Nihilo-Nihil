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
      'fluid_trash_can',
      ["ABA", "CDC", "CCC"],
      ["    "],
      {
        A: { tag: 'forge:stone' },
        B: { tag: 'forge:inlays/pewter' },
        C: { tag: 'forge:cobblestone' },
        D: { item: 'minecraft:bucket' }
      },
      'trashcans:fluid_trash_can'
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
        A: { tag: 'forge:stone' },
        B: { tag: 'forge:gems/diamond' },
        C: { tag: 'forge:gems/fluorite' },
        D: { tag: 'forge:gems/niter' },
        E: { tag: 'forge:gems/sulfur' }
      },
      'eidolon:crucible'
    ]
  ])
})