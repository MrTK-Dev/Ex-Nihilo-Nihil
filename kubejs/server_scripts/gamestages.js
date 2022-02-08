
// Player joined world
onEvent('player.logged_in', (e) => {
  const startingItemsGameStage = 'starting_items'

  if (!e.hasGameStage(startingItemsGameStage)) {
      e.player.give('minecraft:stone') // Change to filled Akashic Tome

      e.addGameStage(startingItemsGameStage)
  } else {
    e.player.tell('Welcome back!')
  }

  e.player.tell('You are playing ' + packname + ' - ' + packversion)
})