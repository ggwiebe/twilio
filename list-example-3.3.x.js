
const accountSid = 'ACd4d028ee3b3901910f10ce30b1c813d5';
const authToken = '4d66c6d7da8f7a8e45e77815daf40b6c';
var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var startDate = new Date();
startDate.setDate(startDate.getDate() - 14); // today minus 14 days

client.messages.list( { dateSentAfter: startDate } ).then
(function(msglist){

    console.log("List of sms messages from newest to oldest");
    msglist.forEach( function(msg){
        console.log( msg.dateSent);
    });

    //msglist.reverse();

    //console.log("present list in reverse order - oldest to newest");
    //msglist.forEach( function(msg){
    //    console.log( msg.dateSent);
    //});

});

var lookNumber = '+14168481059';
//client.lookups.phoneNumbers('+14165223694')
client.lookups.phoneNumbers(lookNumber)
              .fetch({type: 'carrier'})
              .then(phone_number => console.log('Phone number lookup for ' + lookNumber + ': ' + phone_number.callerName))
              .done();
