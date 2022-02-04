onEvent('recipes', e => { 
  e.custom({
    "type":"immersiveengineering:arc_furnace",
  "results":[
    {"tag":"forge:ingots/steel"}],
    "additives":[
      {"tag":"forge:dusts/coal_coke"}
      ],"input":
      {"tag":"forge:ingots/iron"},
      "slag":{"tag":"forge:slag"},
      "time":400,"energy":204800}
    ),

  e.custom({
    type: 'immersiveengineering:arc_furnace',
    results: ['2x kubejs:modularium_ingot'],
    input: [
      '#forge:ingots/electrum'
    ],
    additives: [
      '#forge:dusts/coal_coke', '#forge:dusts/copper', '#forge:dusts/diamond'
    ],
    slag: {},
    time: 100,
    energy: 10240
  })
})



//recipes.immersiveengineering.crusher({ secondaries: [], result: { base_ingredient: { item: dustItem } }, input: { tag: `forge:ingots/${name}` }, energy: 3000 })


// e.custom({
//   type: 'immersiveengineering:arc_furnace',
//   results: ['2x kubejs:modularium_ingot'],
//   input: [
//     '#forge:ingots/electrum'
//   ],
//   additives: [
//     '#forge:dusts/coal_coke', '#forge:dusts/copper', '#forge:dusts/diamond'
//   ],
//   time: 100,
//   energy: 10240
// })