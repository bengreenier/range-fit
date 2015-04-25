var assert = require('assert');

function ts (v, t, n) {
	assert(typeof(v) === t, "range-fit expects typeof("+n+") to be "+t);
}

function tsn (v, n) {
	ts(v, "number", n);
}

module.exports = function (value, lowerInitial, upperInitial, lowerNew, upperNew) {
	/* Thanks SO! http://stackoverflow.com/questions/929103/convert-a-number-range-to-another-range-maintaining-ratio

		OldRange = (OldMax - OldMin)
		if (OldRange == 0)
		  NewValue = NewMin
		else
		{
		  NewRange = (NewMax - NewMin)  
		  NewValue = (((OldValue - OldMin) * NewRange) / OldRange) + NewMin
		}

	*/

	// check types
	tsn(value, "value");
	tsn(lowerInitial, "lowerInitial");
	tsn(upperInitial, "upperInitial");
	tsn(lowerNew, "lowerNew");
	tsn(upperNew, "upperNew");

	// create old range, and check if it's nonexistent
	var OldRange = upperInitial - lowerInitial;
	if (OldRange === 0) {
		return lowerNew;
	}

	// if we're still here, check lowerInitial<=value<=upperInitial
	assert(lowerInitial<=value, "range-fit expects lowerInitial<=value");
	assert(upperInitial>=value, "range-fit expects upperInitial>=value");

	// if we're still here, do new range mapping
	var NewRange = upperNew - lowerNew;
	return (((value - lowerInitial) * NewRange) / OldRange) + lowerNew;
}