const carLib = {
	car: {
		manufacturer: 'VW',
		model: 'e-golf',
		year: 2016,
	},
	exterior: {
		length: 427 + 'cm',
		width: 180 + 'cm',
		height: 145 + 'cm',
		wheelbase: 263 + 'cm',
		weight: 1537 + 'kg',
		chassis: 'hatchback',
	},
	engine: {
		type: 'electric',
		power: 115 + 'hp',
		range: 160 + 'km WLTP',
		battery: '24KW',
	},
	interior: {
		seats: 5,
		glass: 'double insulated',
		trim: 'foe leather',
		material: 'fabric',
	},
	entertainment: {
		sat_nav: true,
		cd_player: true,
		sound_system: 'composition media',
		infotainment: 'composition system',
		connectivity: {
			bluetooth: true,
			wifi: false,
		},
		radio: 'AM/FM',
		auxiliary: ['usb', 'aux'],
		app_integration: ['Apple Car Play', 'Android Auto'],
	},
	extras: {
		camera: false,
		screen: '12 inch touch',
		climate: 'ac, preheat',
		park_assist: 'sensor',
		lane_assist: false,
	},
	safety: {
		airbags: ['front', 'sides'],
		cruise_control: 'adaptive',
		ir_cam: false,
		abs: true,
		esp: true,
	},
};

export default carLib;
