//

onEvent('recipes', e => {
  removeRecipeByID(e, 'powah:energizing/', [
    'blazing_crystal',
    'blazing_crystal_2',
    'niotic_crystal',
    'spirited_crystal'
    ]
  )
})