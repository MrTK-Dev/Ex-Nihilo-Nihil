// All crafting recipes related to the mod "Powah"

onEvent('recipes', e => {
  e.shaped('powah:thermoelectric_plate', ['ABA', 'BCB', 'ABA'], {
		A: 'botania:quartz_blaze',
    B: '#forge:plates/signalum',
    C: 'powah:capacitor_basic_tiny'
	}).id(`${_dys}:powah/thermoelectric_plate`)

  e.shaped(Item.of('powah:capacitor_basic', 4), [' AB', 'ACA', 'BA '], {
		A: '#forge:rods/steel',
    B: 'powah:dielectric_paste',
    C: 'immersiveengineering:capacitor_hv'
	}).id(`${_dys}:powah/capacitor_basic`)

  e.shaped('powah:dielectric_casing', ['ABA', 'CDC', 'ABA'], {
		A: '#forge:plates/tin',
    B: 'powah:dielectric_rod_horizontal',
    C: 'powah:dielectric_rod',
    D: 'thermal:machine_frame'
	}).id(`${_dys}:powah/dielectric_casing`)

  removeRecipeByID(e, 'powah:crafting/', [
    'dielectric_paste',
    'dielectric_paste_2',
    'thermoelectric_plate',
    'capacitor_basic',
    'capacitor_basic_tiny',
    'dielectric_casing',
    'energizing_orb'
    ]
  )
})