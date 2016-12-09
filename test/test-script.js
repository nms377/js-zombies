/*jshint esversion: 6 */

const chai = require('chai');

chai.should();

const Zombies = require('../zombies.js');

describe('Item', () =>{

	let item = Zombies.item;

	it('should be a class', () => {
		item.should.be.a.function;
	});

});

describe('Weapon', () =>{

	let weapon = Zombies.weapon;

	it('should be a class', () => {
		weapon.should.be.a.function;
	});

	it('should have an argument called damage', () =>{
		weapon.should.have.argument('damage');
	});

	it('should have a damage', () => {
		weapon.should.have.property('damage');
	});

});

describe('Food', () =>{

	let food = Zombies.food;

	it('should be a class', () => {
		food.should.be.a.function;
	});

	it('should have an energy', () =>{
		food.should.have.property('energy');
	});

});

describe('Player', () =>{

	let player = Zombies.player;

	it('should be a class', () =>{
		player.should.be.a.function;
	});

	it('should have a health', () =>{
		player.should.have.property('health');
	});

	it('should have a strength', () =>{
		player.should.have.property('strength');
	});

	it('should have a speed', () =>{
		player.should.have.property('speed');
	});

});