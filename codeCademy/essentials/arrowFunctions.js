const plantNeedsWater = function (day) {
	if (day === 'Wednesday') {
		return true;
	} else {
		return false;
	}
};

const plantNeedsWaterArrow = (day) => {
	if (day === 'Wednesday') {
		return true;
	} else {
		return false;
	}
};

const plantNeedsWaterTernery = (day) => {
	return day === 'Wednesday' ? true : false;
};

console.log(plantNeedsWaterTernery('Wednesday'));
