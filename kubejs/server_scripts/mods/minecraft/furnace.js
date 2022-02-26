// All recipes related to the vanilla furnace

onEvent('recipes', event => {
  function disable(entries){
    entries.forEach(([item]) => {
      event.remove({input: item, type: 'minecraft:smelting'})
    })
  }

  disable([
    'eidolon:pewter_blend'
  ])
})