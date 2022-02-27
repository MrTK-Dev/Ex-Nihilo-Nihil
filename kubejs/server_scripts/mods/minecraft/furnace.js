// All recipes related to the vanilla furnace

onEvent('recipes', e => {
  function disable(entries){
    entries.forEach(([item]) => {
      e.remove({output: item, type: 'minecraft:smelting'})
    })
  }

  disable([
    'eidolon:pewter_ingot'
  ])
})