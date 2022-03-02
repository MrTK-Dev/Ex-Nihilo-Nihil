// Tooltips

onEvent('item.tooltip', e => {

  const data = [
    {
      items: [
        // 'powah:energy_cell_starter',
        // 'powah:ender_cell_starter',
        // 'powah:energy_cable_starter',
        // 'powah:ender_gate_starter',
        // 'powah:energizing_rod_starter',
        // 'powah:furnator_starter',
        // 'powah:magmator_starter',
        // 'powah:thermo_generator_starter',
        // 'powah:solar_panel_starter',
        // 'powah:reactor_starter',
        // 'powah:player_transmitter_starter',
        // 'powah:energy_hopper_starter',
        // 'powah:energy_discharger_starter',
        // 'powah:battery_starter'

        /powah:\w+_starter/
      ],
      text: ['Starter tier is disabled'].red()
    },
    {
      items: ['eidolon:pewter_blend'],
      text: ['Disabled. Use the Smeltery to alloy Pewter!'].red()
    }
  ]

  data.forEach((data) => {
    e.add(data.items, data.text)
  })

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
})