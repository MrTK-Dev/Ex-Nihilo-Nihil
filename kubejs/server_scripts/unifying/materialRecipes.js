// This script changes all crafting recipes related to materials.
onEvent('recipes', event => {
  let basicRecipes = (ingot, plate, rod) => {
    //event.remove(rod);

    event.shaped(rod, ['A', 'A'], {
      A: plate
    })
  }

  basicRecipes('minecraft:iron_ingot', 'emendatusenigmatica:iron_plate', 'emendatusenigmatica:iron_rod')
});