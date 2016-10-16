// John.js
// ========

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    // whatever
  },
  help: function() {
  	var helpMenu =  "Here is a list of commands:" +
  		   			"\n------" +
  		   			"\n coin- Returns heads or tails" +
  		   			"\ndoge - To view a doge!" + 
  		   			"\ntest - To repeat whats said"
   return helpMenu
  },
  emoji: function(){
  	var genNum = Math.floor(Math.random() * (6));
  	var emojis = [":)",":D",":putnam:",":poop:",":-(",":|]"];

  	return emojis[genNum]

  }
};
