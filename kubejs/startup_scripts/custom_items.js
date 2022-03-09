// priority: 0

onEvent('item.registry', e => { 
  const basic_items = [
    {
      registry: 'modularium_ingot',
      display: 'Modularium Ingot'
    },
    {
      registry: 'screen',
      display: 'Screen'
    },
    {
      registry: 'heatproof_brick',
      display: 'Heatproof Brick'
    },
    {
      registry: 'string_fluxed',
      display: 'Fluxed String'
    }
  ]

  basic_items.forEach((item) => {
    e.create(item.registry).displayName(item.display)
  })
})