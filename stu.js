// stu.js
// ========
'use strict'

// These functions CAN be called within index.js
module.exports = {
  foo: function () {
    return "connected"
  },
  sendImage: function (sender, text) {
    let messageData={text:text};
    request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {access_token:token},
      method: 'POST',
      json: {
        recipient: {id:sender},
        message: messageData,
      }
    }, function(error, response, body){
      if(error){
        console.log('Error sending messages: ', error);
      }
      else if(response.body.error){
        console.log('Error: ', response.body.error);
      }
    })
  }
};

// THESE CANNOT, BUT LOGIC CAN BE DONE HERE
var zemba = function () {
}


