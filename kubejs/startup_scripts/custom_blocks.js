// priority: 0

onEvent('block.registry', e => {
	//Modularium Enriched Casing are used for custom multiblocks
  e.create('modularium_casing').displayName('Basic Modularium Enriched Casing').material('metal')
  //
  e.create('modularium_heating_core').displayName('Modularium Heating Core').material('metal')
})