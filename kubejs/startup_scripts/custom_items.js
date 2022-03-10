// priority: 0

onEvent('item.registry', e => { 
  const basic_items = [
    'modularium_ingot',
    'screen',
    'heatproof_brick',
    'string_fluxed',
  ]

  basic_items.forEach((item) => {
    e.create(item).group('KubeJS')
  })

  const infused_crystals = [
    'blazing',
    'niotic',
    'spirited'
  ]

  infused_crystals.forEach((crystal) => {
    e.create(`crystal_${crystal}_infused`).glow(true).rarity('rare')
  })
})