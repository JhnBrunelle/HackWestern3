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
  },
  toDoList: function(text) {
  	if (text == "todolist") {
  		var list = document.cookie;
  		var string = NULL:
  		for (int i = 0; i < list.length; i++)
  		{
  			
  			if (list.substring(i,i+1) == ";")
  			{
  				string = "\n" + string;

  			}
  			else {
  				string = list[i] + string;
  			}
  		}
  		return string;
  	}
  	else {
  	document.cookie = text + ";";
  	return 0;
  }
  }
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE
var zemba = function () {
}