// All crafting recipes related to Vanilla Minecraft

onEvent('recipes', e => {
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

  removeRecipeByID(e, 'minecraft', [
    'bucket',
    'furnace',
    'chest'
    ]
  )
})