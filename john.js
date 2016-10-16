// John.js
// ========

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    // whatever
  },
  bar: function () {
    // whatever
  },
  help: function() {
  	return "Here's a list of commands:
  				\ndoge - To view a doge! 
  				\ntest - To repeat whats said"
  }
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE
var zemba = function () {
}