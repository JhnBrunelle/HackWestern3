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
  	var emojis = [":)",":D",">:(",":poop:",":-(","8-)"];

  	return emojis[genNum]

  },
  calculator: function(num){
  	try{
		function calculator(num) {
			try{
				return new Function('return ' + num)();
			}catch(err){
				return "Not Valid"
			}
		}	
		return calculator(num);
  	}catch(err){
  		return "Not Valid"
  	}
  }
};
