// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
//
const accountSid = 'ACd4d028ee3b3901910f10ce30b1c813d5';
const authToken = '4d66c6d7da8f7a8e45e77815daf40b6c'; // this has changed since being published.
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.calls
  .create({
     machineDetection: 'Enable',
     url: 'http://demo.twilio.com/docs/voice.xml',
     //url: 'https://handler.twilio.com/twiml/EH8ccdbd7f0b8fe34357da8ce87ebe5a16',
     to: '+14165223694',
     from: '+16476969694'
     //to: '+16174190449',
     //from: '+14165223694'
   })
  .then(call => console.log(call.sid))
  .done();
