// andrew.js
// ========

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    return "Connected"
  },
  flipCoin: function () {
  	let rNumber = 0;
  	rNumber = Math.floor(Math.random() * (2));

  	if (rNumber == 0)
  	{
  		return "Heads";
  	}
  	else
  	{
  		return "Tails";
  	}
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE
var zemba = function () {
}