// andrew.js
// ========

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    return "Connected"
  },
  flipCoin: function () {
  	var rNumber = 0;
  	rNumber = Math.floor(Math.random() * (2));

  	if (rNumber == 0)
  	{
  		return "Heads";
  	}
  	else
  	{
  		return "Tails";
  	}
	},
  rollDice: function() {
  	var dNumber = 0;
  	dNumber = Math.floor(Math.random()*(6));
  	return dNumber;
  }
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE
var zemba = function () {
}