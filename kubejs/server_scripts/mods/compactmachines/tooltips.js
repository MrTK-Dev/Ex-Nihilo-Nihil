// All tooltips for items of the mod "Compact Machines"

onEvent('item.tooltip', e => {
  const machines = [
    'tiny',
    'small',
    'normal',
    'large',
    'giant',
    'maximum'
  ]

  machines.forEach(([tier], index) => {
    e.add(
      [Item.of(`compactmachines:machine_${tier}`)],
      Text.of(`Tier: ${index + 1}`).aqua()
      )
  })

  e.add(['minecraft:chest'], 'hello world')
})