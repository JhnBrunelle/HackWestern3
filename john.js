// John.js
// ========

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    // whatever
  },
  help: function() {
  	var helpMenu =  "Here is a list of commands:" +
  		   			"\n---------" +
  		   			"\n coin - Returns heads or tails" +
  		   			"\n doge - To view a doge!" + 
  		   			"\n emoji - Random Emojis" +
  		   			"\n yes or no? - Answers Yes or No Question" +
  		   			"\n wall-e - opens Wall-e Graph" +
  		   			"\n mp3 - To repeat whats said" +
  		   			"\n calc - Followed by expression, will return result"+
					"\n video:'searchKey' to search Youtube"+
					"\n search:'searchKey' to search Google"+
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
