// All crafting recipes related to the mod "Thermal Series"

onEvent('recipes', e => {
  e.shaped('thermal:machine_frame', ['ABA', 'CDC', 'ABA'], {
		A: '#forge:plates/invar',
    B: '#forge:wires/steel',
    C: 'miniutilities:redstone_glass',
    D: 'immersiveengineering:light_engineering'
	}).id(`${_dys}:thermal/machine_frame`)

  e.shaped('thermal:rf_coil', [' AB', 'ACA', 'BA '], {
		A: 'immersiveengineering:wirecoil_redstone',
    B: '#forge:ingots/redstone',
    C: '#forge:gears/gold'
	}).id(`${_dys}:thermal/rf_coil`)

  e.shaped('thermal:redstone_servo', ['ABA', ' C ', 'ABA'], {
		A: '#forge:ingots/redstone',
    B: '#forge:rods/iron',
    C: '#immersiveengineering:circuits/logic'
	}).id(`${_dys}:thermal/redstone_servo`)

  removeRecipeByID(e, 'thermal', [
    'machine_frame',
    'rf_coil',
    'redstone_servo',
    /fire_charge\w+/ // no workerino
    ]
  )
})