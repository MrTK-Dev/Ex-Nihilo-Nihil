onEvent('recipes', e => {
  let steam_generation = (input_coke, input_cokecount, input_fuel, input_fuelamount, time, output, outputamount, recipe_id) => {
    e.custom({
      type: 'masterfulmachinery:machine_process',
      structureId: 'steam_boiler',
      controllerId: 'steam_boiler',
      outputs: [
          {
              type: 'masterfulmachinery:fluids',
              perTick: true,
              data: { fluid: output, amount: outputamount }
          }
      ],
      inputs: [
          {
              type: 'masterfulmachinery:energy',
              perTick: true,
              data: { amount: 1000 }
          },
          {
              type: 'masterfulmachinery:items',
              perTick: true,
              data: { tag: input_coke, count: input_cokecount }
          },
          {
              type: 'masterfulmachinery:fluids',
              perTick: true,
              data: { fluid: 'minecraft:water', amount: outputamount }
          },
          {
              type: 'masterfulmachinery:fluids',
              perTick: true,
              data: { fluid: input_fuel, amount: input_fuelamount }
          }
      ],
      ticks: time,
      id: recipe_id
    })
  }

  steam_generation('forge:coal_coke', 16, 'immersiveengineering:creosote', 250, 400, 'mekanism:steam', 1000, 'coal_coke')
  steam_generation('forge:coal_petcoke', 8, 'immersiveengineering:creosote', 250, 400, 'mekanism:steam', 1000, 'coal_coke')
})