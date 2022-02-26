// All recipes related to the tconstruct smeltery


onEvent('recipes', e => {
  //#region functions
  function tcBasinCasting(entries) {
    entries.forEach(([id, input, output]) => {
      e.custom({
        type: 'tconstruct:casting_basin',
        cast: { item: input },
        cast_consumed: true,
        fluid: { name: 'tconstruct:magma', amount: 1000 },
        result: output,
        cooling_time: 90
      }).id(`${_dys}:tc/casting_basin/${id}`)
    })
  }
  
  function tcAlloying(entries) {
    entries.forEach(([id, inputFluids, output, temp]) => {
      e.custom({
        type: 'tconstruct:alloy',
        inputs: inputFluids,
        result: output,
        temperature: temp
      }).id(`${_dys}:tc/alloy/${id}`)
    })
  }

  //#endregion

  // tcAlloying([
  //   [
  //     'test'
  //     [
  //     { 'tag': 'tconstruct:molten_debris', 'amount': 64 },
  //     { 'tag': 'forge:molten_gold', 'amount': 32 }
  //     ],
  //     { 'tag': 'tconstruct:molten_debris', 'amount': 64 },
  //     600
  //   ]
  // ])
  
})