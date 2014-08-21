var assert = require('assert'); // node.js core module
var c = require('../index');

describe('getChange returns an array of coins totalling the change given', function() { 
  it('returns an empty array when price is amount paid (exact amount)', function() { 
	assert.deepEqual(c.getChange(10,10), []);

  });
  
  it('returns an array of 2 penies ', function() { 
	assert.deepEqual(c.getChange(10,8), [2]);

  });

  it('returns the change for 23.71 with 100.00 paid ', function() { 
	assert.deepEqual(c.getChange(10000,2371), [5000,2000,500,100,20,5,2,2]);
  });

});