// All crafting recipes related to the mod "Applied Energistics 2"

onEvent('recipes', e => {
  //#region functions
  function removeByID(entries) {
    entries.forEach(ID => {
      e.remove({id: `appliedenergistics2:${ID}`})
    })
  }
  //#endregion

  e.shaped('appliedenergistics2:wooden_gear', [' A ', 'ABA', ' A '], {
		A: '#forge:rods/wooden',
    B: Item.of('tconstruct:large_plate', '{Material:"tconstruct:wood"}')
	}).id(`${_dys}:appliedenergistics2/wooden_gear`)

  removeByID([
    'misc/grindstone_woodengear'
  ])
})