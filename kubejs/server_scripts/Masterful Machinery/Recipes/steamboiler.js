onEvent('recipes', e => {
  let boiler_recipe = (fuel, fuelamount, input, time, amount) => {
    e.custom({
      type: 'masterfulmachinery:machine_process',
      structureId: 'steam_boiler',
      controllerId: 'basic',
      ticks: time,
      inputs: [
        {
          type: 'masterfulmachinery:items',
          data: {
              tag: fuel,
              count: fuelamount
          }
        },
        {
          type: 'masterfulmachinery:fluids',
          data: {
              name: input,
              amount: 250
          }
        },
        {
          type: 'masterfulmachinery:energy',
          data: {
              amount: 1000
          }
      }
      ],
      outputs:[
        {
          type: 'masterfulmachinery:fluids',
          data: {
              name: 'mekanism:steam',
              amount: amount
          }
        }
      ]
    })
  }

  //Test
  boiler_recipe('#forge:charcoal', 8, 'immersiveengineering:creosote', 100, 1000)

})