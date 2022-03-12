// All crafting recipes related to Tinkers Construct

onEvent('recipes', e => {
  // e.shaped('minecraft:bucket', ['A A', ' A '], {
	// 	A: '#forge:plates/iron'
	// }).id(`${_dys}:minecraft/bucket`)

  removeRecipeByID(e, 'tconstruct', [
    'common/glass/vanilla/end_crystal'
    ]
  )
})