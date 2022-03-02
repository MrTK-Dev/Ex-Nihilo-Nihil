// All crafting recipes related to the tconstruct smeltery alloy

onEvent('recipes', e => {

  removeRecipeByID(e, 'tconstruct:smeltery/alloys/', [
    'molten_enderium',
    'molten_lumium',
    'molten_refined_obsidian',
    'molten_signalum'
    ]
  )
})