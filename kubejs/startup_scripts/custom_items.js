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
    e.create(item.registry).group('KubeJS')
  })

  const infused_crystals = [
    'Blazing',
    'Niotic',
    'Spirited'
  ]

  infused_crystals.forEach((crystal) => {
    e.create(`crystal_${crystal.toLowerCase()}_infused`).displayName(`Infused ${crystal} Crystal`).glow(true).rarity('uncommon')
  })
})