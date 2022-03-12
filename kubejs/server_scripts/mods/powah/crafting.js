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

  e.shaped(Item.of('powah:crystal_blazing', 4), ['AAA', 'ABA', 'AAA'], {
		A: 'betterendforge:crystal_shards',
    B: 'tconstruct:blazing_blood_bucket'
	}).id(`${_dys}:powah/crystal_blazing`)

  e.shaped(Item.of('powah:crystal_niotic', 4), ['AAA', 'ABA', 'AAA'], {
		A: 'betterendforge:crystal_shards',
    B: '#forge:buckets/diamond'
	}).id(`${_dys}:powah/crystal_niotic`)

  e.shaped(Item.of('powah:crystal_spirited', 4), ['AAA', 'ABA', 'AAA'], {
		A: 'betterendforge:crystal_shards',
    B: '#forge:buckets/emerald'
	}).id(`${_dys}:powah/crystal_spirited`)

  e.shaped('powah:capacitor_hardened', ['ABA', 'BCB', 'ABA'], {
		A: 'powah:dielectric_paste',
    B: 'powah:steel_energized',
    C: 'powah:capacitor_basic'
	}).id(`${_dys}:powah/capacitor_hardened`)

  removeRecipeByID(e, 'powah:crafting/', [
    'dielectric_paste',
    'dielectric_paste_2',
    'thermoelectric_plate',
    'capacitor_basic',
    'capacitor_basic_tiny',
    'dielectric_casing',
    'energizing_orb',
    'capacitor_hardened'
    ]
  )
})