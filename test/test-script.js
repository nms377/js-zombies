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