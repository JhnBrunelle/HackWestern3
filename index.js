/**
 * Created by john on 2016-10-15.
 */

'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const stu = require('./stu');
const john = require('./john');
const andrew = require('./andrew');

app.set('port', (process.env.PORT || 5000))

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// Process application/json
app.use(bodyParser.json())

// Index route
app.get('/', function (req, res) {
    res.send('1902432201')
})

// for Facebook verification
app.post('/webhook/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
        let event = req.body.entry[0].messaging[i]
        let sender = event.sender.id

        //functions
        if(event.message && event.message.text.toLowerCase === "doge"){
            sendImage(sender, "https://pbs.twimg.com/profile_images/378800000822867536/3f5a00acf72df93528b6bb7cd0a4fd0c.jpeg")
        }
        else if(event.message && event.message.text.toLowerCase() ==="help"){
            let text = john.help();
            sendTextMessage(sender, text);
        }
        else if (event.message && event.message.text.toLowerCase() ==="coin flip") {
            let text = andrew.flipCoin();
            sendTextMessage(sender, text);
        }
        else if (event.message && event.message.text.toLowerCase() ==="emoji") {
            sendTextMessage(sender, john.emoji());
        }
        else if(event.message && (event.message.text.toLowerCase() === "yes or no?")){
            let text = stu.yesNoGen();
            sendTextMessage(sender, text);
        }
        else if(event.message && event.message.text.toLowerCase() === "wall-e"){
            let text =stu.gotoWalle();
            sendTextMessage(sender, text);
        }
        else if(event.message && event.message.text.toLowerCase() === "mp3"){
            let text =stu.returnMP3();
            sendTextMessage(sender, text);
        }
        else if(event.message && event.message.text.substring(0, 3) === 'calc'){
            console.log("Message Received" + event.message.text.substring(0, 3));
            sendTextMessage(sender, john.calculator(event.message.text.splice(0,4)));
        }
        else if (event.message && event.message.text) {
            let text = stu.foo();
            sendTextMessage(sender, "Not a Command, echo: " + text)
        }

    }
    res.sendStatus(200)
})


// Spin up the server
app.listen(app.get('port'), function() {
    console.log('running on port', app.get('port'))
})

const token = process.env.PAGE_ACCESS_TOKEN

function sendTextMessage(sender, text) {
    let messageData = { text:text }
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            message: messageData,
        }
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error)
        } else if (response.body.error) {
            console.log('Error: ', response.body.error)
        }
    })
}

function sendImage(sender, imgURL) {
    //let messageData={text:text};
    request({
        url: 'https://graph.facebook.com/v2.6/me/messages',
        qs: {access_token:token},
        method: 'POST',
        json: {
            recipient: {id:sender},
            "message":{
            "attachment":{
                "type":"image",
                    "payload":{
                        "url":imgURL,
                        "is_reusable":true
                    }
            }
         }   
    }, function(error, response, body) {
        if (error) {
            console.log('Error sending messages: ', error);
        }
        else if (response.body.error) {
            console.log('Error: ', response.body.error);
        }
    }
    })
}