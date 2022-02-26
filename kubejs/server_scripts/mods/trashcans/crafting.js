// All crafting recipes related to the mod "Trash Cans"

onEvent('recipes', e => {
  //#region functions
  function removeByID(entries) {
    entries.forEach(ID => {
      e.remove({id: `trashcans:${ID}`})
    })
  }
  //#endregion

  removeByID([
    'item_trash_can',
    'liquid_trash_can',
    'energy_trash_can'
  ])
})