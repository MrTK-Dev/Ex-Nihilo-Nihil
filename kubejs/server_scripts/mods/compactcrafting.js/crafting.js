// All crafting recipes related to the mod "Compact Crafting"

onEvent('recipes', e => {
  e.shaped('compactcrafting:base', [' A ', 'BCB', 'DDD'], {
		A: 'minecraft:redstone_torch',
    B: 'eidolon:shadow_gem',
    C: 'minecraft:stone_slab',
    D: '#forge:ingots/hop_graphite'
	}).id(`${_dys}:compactcrafting/base`)

  e.shaped('compactcrafting:projector_dish', ['AB ', 'ACD', 'AB '], {
		A: '#forge:glass_panes',
    B: '#forge:ingots/hop_graphite',
    C: 'minecraft:ender_eye',
    C: 'immersiveengineering:electric_lantern'
	}).id(`${_dys}:compactcrafting/projector_dish`)

  removeRecipeByID(e, [
    'compactcrafting:base',
    'compactcrafting:projector_dish'
    ]
  )
})