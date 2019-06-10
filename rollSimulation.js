// Possible Events
const OUTCOMES = {
	ATTACKERS_KILLED_2: '2 Attackers Killed',
	ATTACKERS_KILLED_1: '1 Attacker Killed',
	ATTACKERS_AND_DEFENDERS_KILLED_1: '1 Attacker Killed, 1 Defender Killed',
	DEFENDERS_KILLED_1: '1 Defender Killed',
	DEFENDERS_KILLED_2: '2 Defender Killed'
}

// imports
const Dice = require('./Dice');
const dice = new Dice();


// args
const numSimulations = process.argv.length >= 3 ? process.argv[2] : 1000;
console.log('rolling ' + numSimulations + ' times per fight');

const numAttackers = process.argv.length >= 4 ? process.argv[3] : 1;
console.log('number of attacking die: ' + numAttackers);

const numDefenders = process.argv.length >= 5 ? process.argv[4] : 1;
console.log('number of defending die: ' + numDefenders);


// Store for results
const rolled = {
	1: 0,
	2: 0,
	3: 0,
	4: 0,
	5: 0,
	6: 0
};

const fightOutcomes = {
	[OUTCOMES.ATTACKERS_KILLED_2]: 0,
	[OUTCOMES.ATTACKERS_KILLED_1]: 0,
	[OUTCOMES.ATTACKERS_AND_DEFENDERS_KILLED_1]: 0,
	[OUTCOMES.DEFENDERS_KILLED_1]: 0,
	[OUTCOMES.DEFENDERS_KILLED_2]: 0
}

// Event emitter registration
// record rolls
dice.emitter.on(dice.onRollEvent, (roll) => {
	rolled[roll] = rolled[roll] + 1;
});


// Helper Functions
function generateSortedDiceRolls(numRolls) {
	const rolls = [];

	for (let i = 0; i < numRolls; i++) {
		rolls.push(dice.roll());
	}

	return rolls.sort();
}

function calculateResultsFromRolls(attackerRolls, defenderRolls) {
	const minRolls = attackerRolls.length < defenderRolls.length ? attackerRolls.length : defenderRolls.length;
	let idx = 0;
	const results = {
		attackersKilled: 0,
		defendersKilled: 0
	};

	while(idx < minRolls) {
		const attackerRoll = attackerRolls[idx];
		const defenderRoll = defenderRolls[idx];

		if (attackerRoll > defenderRoll) {
			results.defendersKilled++;
		} else {
			results.attackersKilled++;
		}

		idx++;
	}

	return results;
}

function logResults(results) {
	switch (results.attackersKilled + '-' + results.defendersKilled) {
		case '1-1':
			fightOutcomes[OUTCOMES.ATTACKERS_AND_DEFENDERS_KILLED_1]++;
			break;
		case '1-0':
			fightOutcomes[OUTCOMES.ATTACKERS_KILLED_1]++;
			break;
		case '2-0':
			fightOutcomes[OUTCOMES.ATTACKERS_KILLED_2]++;
			break;
		case '0-1':
			fightOutcomes[OUTCOMES.DEFENDERS_KILLED_1]++;
			break;
		case '0-2':
			fightOutcomes[OUTCOMES.DEFENDERS_KILLED_2]++;
			break;
		default:
			break;
	}
}

function simulateFight() {
	const results = calculateResultsFromRolls(
		generateSortedDiceRolls(numAttackers),
		generateSortedDiceRolls(numDefenders)
	);
	logResults(results);
}

for (let i = 0; i < numSimulations; i++) {
	simulateFight();
}


console.log(rolled, fightOutcomes);






