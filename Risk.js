const ARMY_CONFIG = {
	INITIAL_ARMY_SIZE: {
		THREE_PLAYER: 35,
		FOUR_PLAYER: 30,
		FIVE_PLAYER: 25,
		SIX_PLAYER: 20
	},
	ARMY_GROWTH_FUNCTION: (numTerritories) => Math.floor(numTerritories / 3),
	CONTINENT_GROWTH: {
		AFRICA: 3,
		ASIA: 7,
		AUSTRALIA: 2,
		NORTH_AMERICA: 5,
		SOUTH_AMERICA: 2,
		EUROPE: 5
	}
}

const COMBAT_CONFIG = {
	MAX_ARMIES_ATTACKING: 3,
	MAX_ARMIES_DEFENDING: 2,
	MIN_ARMIES_PER_COUNTRY: 1
}



const CONTINENTS = {
	AFRICA: 'Africa',
	ASIA: 'Asia',
	AUSTRALIA: 'Australia',
	NORTH_AMERICA: 'North America',
	SOUTH_AMERICA: 'South America',
	EUROPE: 'Europe'
}

const COUNTRIES = {

}

// Setup: a random player starts first, taking turns to place infantry
// Should we just decide on a specific starting state?

// Each turn consists of: getting armies, placing armies, attacking, moving

class Dice {
	roll() {
		return Math.ceil(Math.random() * 6);
	}
}

class Country {
	constructor() {
		this.continent = 
	}
}

const ACTIONS = {

}

class Actions {

}