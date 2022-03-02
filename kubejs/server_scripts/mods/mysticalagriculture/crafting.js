// All crafting recipes related to the mod "Mystical Agriculture"

onEvent('recipes', e => {
  e.shaped('mysticalagriculture:prosperity_gemstone', ['ABA', 'BCB', 'ABA'], {
		A: 'eidolon:enchanted_ash',
    B: 'mysticalagriculture:prosperity_shard',
    C: '#forge:gems/diamond'
	}).id(`${_dys}:mysticalagriculture/prosperity_gemstone`)

  e.shaped('mysticalagriculture:inferium_gemstone', ['ABA', 'BCB', 'ABA'], {
		A: '#forge:nuggets/copper',
    B: 'mysticalagriculture:inferium_essence',
    C: 'mysticalagriculture:prosperity_gemstone'
	}).id(`${_dys}:mysticalagriculture/inferium_gemstone`)

  e.shaped('matc:inferium_crystal', ['ABA', 'CDC', 'AEA'], {
		A: 'tconstruct:earth_slime_crystal',
    B: 'immersiveengineering:dust_hop_graphite',
    C: '#forge:gems/quartz',
    D: 'mysticalagriculture:inferium_gemstone',
    E: '#forge:dusts/emerald'
	}).id(`${_dys}:matc/inferium_crystal`)

  e.shapeless('mysticalagriculture:prosperity_ingot',
    ['#forge:ingots/aluminum', '#forge:gems/quartz', 'mysticalagriculture:prosperity_shard', 'mysticalagriculture:prosperity_shard']
  ).id(`${_dys}:mysticalagriculture/prosperity_ingot`)

  removeRecipeByID(e, 'mysticalagriculture', [
    'inferium_ingot',
    'inferium_gemstone',  //add cool loop
    'prudentium_gemstone',
    'tertium_gemstone',
    'imperium_gemstone',
    'supremium_gemstone',
    'prudentium_ingot',
    'prosperity_ingot',
    'prosperity_gemstone'
    ]
  )

  removeRecipeByID(e, 'matc', [
    'crystals/inferium'
    ]
  )
})