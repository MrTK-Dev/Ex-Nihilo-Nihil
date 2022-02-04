// priority: 0

onEvent('item.registry', e => { 
  let item_basic = (registry, display) => {
    e.create(registry).displayName(display)
  }

  //Modularium Ingots are the main ingredient for custom multiblocks
  item_basic('modularium_ingot', 'Modularium Ingot')
  //
  item_basic('screen', 'Screen')
  //
  item_basic('heatproof_brick', 'Heatproof Brick')
})