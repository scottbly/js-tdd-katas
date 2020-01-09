const Calc = require('../src/calc');
var assert = require('assert');

describe('String calculator', () => {

    it('should return 0 when string is empty', () => {
        assert.equal(new Calc().add(""), 0);
    });

});