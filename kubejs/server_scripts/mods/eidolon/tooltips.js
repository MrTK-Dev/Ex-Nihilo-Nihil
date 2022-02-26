// All tooltips for items of the mod "Eidolon"

onEvent('item.tooltip', tooltip => {
  function addTooltip(entries) {
    entries.forEach(([item, text]) => {
      tooltip.add(item, text)
    })
  }

  addTooltip([
    ['eidolon:pewter_blend', 'Disabled. Use the Smeltery to alloy Pewter!']
  ])
})