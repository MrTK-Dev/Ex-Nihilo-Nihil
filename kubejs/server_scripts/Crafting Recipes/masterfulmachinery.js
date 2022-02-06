// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', e => {
		//Basic Controller
	e.shaped('masterfulmachinery:steam_boiler_controller', ['ABA', 'BDB', 'ACA'], {
		A: 'kubejs:modularium_casing',
		B: '#forge:plates/silver',
		C: 'immersiveengineering:rs_engineering',
		D: 'kubejs:screen'
	})
})