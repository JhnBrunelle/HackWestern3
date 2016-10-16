// stu.js
// ========
'use strict'

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    return "connected"
  },
  yesNoGen: function () {
    //return randomly yes or no
    if(Math.floor(Math.random()*2)=== 0){
      return "No";
    }
    else {
      return "Yes"
    }
  },
  returnMP3: function(){
    return "http://www.youtube-mp3.org/get?video_id=UtF6Jej8yb4&ts_create=1476596132&r=MTI5LjEwMC4yNTMuODg%3D&h2=caf0550a2bfb60b6dcee06c486063514&s=75998";
  },
  gotoWalle: function(){
    return "https://www.desmos.com/calculator/bg38y6pe3i";
  },
  askWhat: function(text){
    return text+"?";
  }
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE




//var vid = getArg(window.location.hash,'v');
//if(vid != null)
//{
 // document.body.innerHTML = '<iframe src="http://www.youtube-mp3.org/privacy" width="100%" height="1450px" scrolling="no" frameborder="0" style="border:0px"></iframe>';
//  _gaq.push(['_trackEvent', 'v-error', vid]);
//}
