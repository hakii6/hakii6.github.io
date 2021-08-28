const Constant = {
	frameLength: 1.0 / 15,
	motivationCoef: {
		0: 1.04,
		1: 1.02,
		2: 1,
		3: 0.98,
		4: 0.96
	},
	surfaceModify: {
		1: {
			0: {
				speed: 0,
				power: 0
			},
			1: {
				speed: 0,
				power: -50
			},
			2: {
				speed: 0,
				power: -50
			},
			3: {
				speed: -50,
				power: -50
			}
		},
		2: {
			0: {
				speed: 0,
				power: -100
			},
			1: {
				speed: 0,
				power: -50
			},
			2: {
				speed: 0,
				power: -100
			},
			3: {
				speed: -50,
				power: -100
			}
		}
	},
	surfaceCoef: {
		1: {
			0: {
				sp: 1
			},
			1: {
				sp: 1
			},
			2: {
				sp: 1.02
			},
			3: {
				sp: 1.02
			}
		},
		2: {
			0: {
				sp: 1
			},
			1: {
				sp: 1
			},
			2: {
				sp: 1.01
			},
			3: {
				sp: 1.02
			}
		}
	},
	fitCoef: {
		runningStyle: {
			S: {
				wisdom: 1.1
			},
			A: {
				wisdom: 1
			},
			B: {
				wisdom: 0.85
			},
			C: {
				wisdom: 0.75
			},
			D: {
				wisdom: 0.6
			},
			E: {
				wisdom: 0.4
			},
			F: {
				wisdom: 0.2
			},
			G: {
				wisdom: 0.1
			}
		},
		distance: {
			S: {
				v: 1.05,
				a: 1
			},
			A: {
				v: 1,
				a: 1
			},
			B: {
				v: 0.9,
				a: 1
			},
			C: {
				v: 0.8,
				a: 1
			},
			D: {
				v: 0.6,
				a: 1
			},
			E: {
				v: 0.4,
				a: 0.6
			},
			F: {
				v: 0.2,
				a: 0.5
			},
			G: {
				v: 0.1,
				a: 0.4
			}
		},
		surface: {
			S: {
				a: 1.05
			},
			A: {
				a: 1
			},
			B: {
				a: 0.9
			},
			C: {
				a: 0.8
			},
			D: {
				a: 0.7
			},
			E: {
				a: 0.5
			},
			F: {
				a: 0.3
			},
			G: {
				a: 0.1
			}
		}
	},
	runningStyleCoef: {
		1: {
			sp: 0.95,
			v: {
				0: 1,
				1: 0.98,
				2: 0.962
			},
			a: {
				0: 1,
				1: 1,
				2: 0.996,
				3: 0.996
			}
		},
		2: {
			sp: 0.89,
			v: {
				0: 0.978,
				1: 0.991,
				2: 0.975
			},
			a: {
				0: 0.985,
				1: 1,
				2: 0.996,
				3: 0.996
			}
		},
		3: {
			sp: 1,
			v: {
				0: 0.938,
				1: 0.998,
				2: 0.994
			},
			a: {
				0: 0.975,
				1: 1,
				2: 1,
				3: 1
			}
		},
		4: {
			sp: 0.995,
			v: {
				0: 0.931,
				1: 1,
				2: 1
			},
			a: {
				0: 0.945,
				1: 1,
				2: 0.997,
				3: 0.997
			}
		}
	},
	spConsumeRate: {
		normal: 1,
		temptation: 1.6,
		positionKeep: 0.6,
		descentMode: 0.4,
	},
}

export default Constant