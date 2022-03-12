//

onEvent('item.modification', e => {
  e.modify('kubejs:charcoal_tiny', item => {
    item.burntime = 200
  })

  e.modify('kubejs:coal_tiny', item => {
    item.burntime = 200
  })
})