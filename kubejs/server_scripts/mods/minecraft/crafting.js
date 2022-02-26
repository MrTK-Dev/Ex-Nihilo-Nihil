// All crafting recipes related to Vanilla Minecraft

onEvent('recipes', e => {
  //#region functions
  function removeByID(entries) {
    entries.forEach(ID => {
      e.remove({id: `minecraft:${ID}`})
    })
  }
  //#endregion

  e.shaped('minecraft:bucket', ['A A', ' A '], {
		A: '#forge:plates/iron'
	}).id(`${_dys}:minecraft/bucket`)

  e.shaped('minecraft:furnace', ['AAA', 'BCB', 'AAA'], {
		A: '#forge:cobblestone',
    B: 'minecraft:cobblestone_slab',
    C: 'appliedenergistics2:wooden_gear'
	}).id(`${_dys}:minecraft/furnace`)

  e.shaped('minecraft:chest', ['ABA', 'CDC', 'ABA'], {
		A: '#minecraft:planks',
    B: '#minecraft:logs',
    C: Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood"}'),
    D: '#minecraft:wooden_buttons'
	}).id(`${_dys}:minecraft/chest`)

  removeByID([
    'bucket',
    'furnace',
    'chest'
  ])
})