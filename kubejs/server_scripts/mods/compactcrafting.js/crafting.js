// All crafting recipes related to the mod "Compact Crafting"

onEvent('recipes', e => {
  e.shaped(Item.of('compactcrafting:base', 2), [' A ', 'BCB', 'DDD'], {
		A: 'minecraft:redstone_torch',
    C: 'eidolon:shadow_gem',
    B: 'minecraft:stone_slab',
    D: '#forge:ingots/hop_graphite'
	}).id(`${_dys}:compactcrafting/base`)

  e.shaped(Item.of('compactcrafting:projector_dish', 4), ['AB ', 'ACD', 'AB '], {
		A: '#forge:glass_panes',
    B: '#forge:ingots/hop_graphite',
    C: 'minecraft:ender_eye',
    D: 'immersiveengineering:electric_lantern'
	}).id(`${_dys}:compactcrafting/projector_dish`)

  removeRecipeByID(e, 'compactcrafting', [
    'base',
    'projector_dish'
    ]
  )
})