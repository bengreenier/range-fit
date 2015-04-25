var assert = require("assert");
var rangeFit = require("../index");

describe('range-fit', function() {
  
  it("should return lowerNew if initial range is zero", function() {
  	assert(4 === rangeFit(10, 5, 5, 4, 3), "should return 4");
  });

  it("should fit 10 (in 0-100) to 20 (in 0-200)", function() {
  	assert(20 === rangeFit(10, 0, 100, 0, 200), "should return 20");
  });

  describe('#(value,...)', function() {
    it("should throw if !Number", function() {
    	
    	assert.throws(function() {
    		rangeFit("", 0, 0, 0, 0);
    	}, function(err) {
    		if ((err instanceof Error) && /to be number/.test(err)) {
    			return true;
    		}
    	});
    });
  });

  describe('#(...,lowerInitial,...)', function() {
    it("should throw if !Number", function() {
    	
    	assert.throws(function() {
    		rangeFit(0, "", 0, 0, 0);
    	}, function(err) {
    		if ((err instanceof Error) && /to be number/.test(err)) {
    			return true;
    		}
    	});
    });
  });

  describe('#(...,upperInitial,...)', function() {
    it("should throw if !Number", function() {
    	
    	assert.throws(function() {
    		rangeFit(0, 0, "", 0, 0);
    	}, function(err) {
    		if ((err instanceof Error) && /to be number/.test(err)) {
    			return true;
    		}
    	});
    });
  });

  describe('#(...,lowerNew,...)', function() {
    it("should throw if !Number", function() {
    	
    	assert.throws(function() {
    		rangeFit(0, 0, 0, "", 0);
    	}, function(err) {
    		if ((err instanceof Error) && /to be number/.test(err)) {
    			return true;
    		}
    	});
    });
  });

  describe('#(...,upperNew)', function() {
    it("should throw if !Number", function() {
    	
    	assert.throws(function() {
    		rangeFit(0, 0, 0, 0, "");
    	}, function(err) {
    		if ((err instanceof Error) && /to be number/.test(err)) {
    			return true;
    		}
    	});
    });
  });
});
