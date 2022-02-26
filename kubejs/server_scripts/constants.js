// Constants used globally

// let removeRecipes = (e, entries) => {
//   entries.forEach(item => {
//     e.remove({output: item})
//   })
// }

let _dys = 'dys'

// let removeRecipeByID = (e, recipes) => {
//   recipes.forEach(([mod, ids]) => {
//     ids.forEach(ID => {
//       e.remove({ id: `${mod}:${ID}` })
//     })    
//   })
// }

let removeRecipeByID = (e, ids) => {
  ids.forEach(ID => {
      e.remove({ id: ID })  
  })
}