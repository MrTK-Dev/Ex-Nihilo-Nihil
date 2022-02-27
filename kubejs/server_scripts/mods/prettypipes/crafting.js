// All crafting recipes related to the mod "Pretty (Fluid) Pipes"

onEvent('recipes', e => {
  e.shaped(Item.of('prettypipes:pipe', 4), ['ADA', 'BCB'], {
		A: '#forge:dusts/redstone',
    B: 'minecraft:iron_bars',
    C: 'immersiveengineering:conveyor_basic',
    D: '#immersiveengineering:circuits/logic'
	}).id(`${_dys}:prettypipes/pipe`)

  e.shaped(Item.of('ppfluids:fluid_pipe', 4), ['ADA', 'BCB'], {
		A: '#forge:dusts/redstone',
    B: 'minecraft:iron_bars',
    C: 'immersiveengineering:fluid_pipe',
    D: '#immersiveengineering:circuits/logic'
	}).id(`${_dys}:ppfluids/fluid_pipe`)

  e.shaped('prettypipes:item_terminal', ['ABC', 'DEF', 'CBA'], {
		A: '#forge:gears/diamond',
    B: 'minecraft:ender_eye',
    C: 'mysticalagriculture:inferium_ingot_block',
    D: 'prettypipes:high_retrieval_module',
    E: 'appliedenergistics2:sky_stone_chest',
    F: 'prettypipes:high_extraction_module'
	}).id(`${_dys}:prettypipes/item_terminal`)

  e.shaped('prettypipes:blank_module', ['ABA', 'CDC', 'AEA'], {
		A: '#forge:gems/quartz',
    B: '#forge:dusts/redstone',
    C: 'minecraft:stone_slab',
    D: 'prettypipes:pipe',
    E: '#immersiveengineering:circuits/pcb'
	}).id(`${_dys}:prettypipes/blank_module`)

  removeRecipeByID(e, [
    'prettypipes:pipe',
    'ppfluids:fluid_pipe_to_pipe',
    'ppfluids:fluid_pipe',
    'prettypipes:item_terminal',
    'prettypipes:crafting_terminal',
    'prettypipes:blank_module'
    ]
  )
})