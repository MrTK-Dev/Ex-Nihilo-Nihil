//

const items = [
  '/appliedenergistics:facade\w/'
]

items.forEach((item) => {
  onEvent('jei.hide.items', e => {
    e.hide(item)
  })
})