const Calc = require('../../src/stringcalculator/calc');
var assert = require('assert');

describe('String calculator', () => {

    it('should return 0 when string is empty', () => {
        assert.equal(new Calc().add(""), 0);
    });

});