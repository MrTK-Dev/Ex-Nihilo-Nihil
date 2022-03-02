// Constants used globally

let _dys = 'dys'

// let removeRecipeByID = (e, recipes) => {
//   recipes.forEach(([mod, ids]) => {
//     ids.forEach(ID => {
//       e.remove({ id: `${mod}:${ID}` })
//     })    
//   })
// }

let removeRecipeByID = (e, pre, ids) => {
  if (pre.endsWith('/')) {
    ids.forEach(ID => {
      e.remove({ id: `${pre}${ID}` })  
    })
  } else {
    ids.forEach(ID => {
      e.remove({ id: `${pre}:${ID}` })  
    })
  }
}

let removeRecipeByOutput = (e, outputs) => {
  outputs.forEach(ID => {
      e.remove({ output: ID })  
  })
}