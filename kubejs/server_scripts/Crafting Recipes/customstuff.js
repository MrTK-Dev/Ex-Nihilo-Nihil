onEvent('recipes', event => {
		//Screen
	event.shaped('kubejs:screen', ['ABA', 'CCC', 'DEF'], {
		A: 'minecraft:smooth_stone_slab',
		B: 'bloodmagic:blankslate',
    C: '#forge:glass_panes',
    D: '#forge:dusts/redstone',
    E: '#forge:dyes/green',
    F: '#forge:dusts/lapis'
	}),
    //Basic Modularium Enriched Casing
	event.shaped('4x kubejs:modularium_casing', ['ABA', 'BCB', 'ABA'], {
		A: 'kubejs:modularium_ingot',
		B: '#forge:sheetmetals/steel',
    C: '#forge:storage_blocks/lead'
	}),
    //Modularium Heating Core
	event.shaped('kubejs:modularium_heating_core', ['ABA', 'BCB', 'ABA'], {
		A: 'kubejs:heatproof_brick',
		B: 'kubejs:modularium_casing',
    C: 'minecraft:blast_furnace'
	})
})