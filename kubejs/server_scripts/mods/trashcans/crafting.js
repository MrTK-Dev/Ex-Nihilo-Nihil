// All crafting recipes related to the mod "Trash Cans"

onEvent('recipes', e => {

  removeRecipeByID(e, 'trashcans', [
    'item_trash_can',
    'liquid_trash_can',
    'energy_trash_can'
    ]
  )
})