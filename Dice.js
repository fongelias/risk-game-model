const EventEmitter = require('events');

module.exports = class Dice {

	constructor() {
		this.emitter = new EventEmitter();
		this.onRollEvent = 'ROLL';
	}

	roll() {
		const rolled = Math.ceil(Math.random() * 6);
		this.onRoll(rolled);
		return rolled;
	}

	onRoll(roll) {
		this.emitter.emit(this.onRollEvent, roll);
	}
}

