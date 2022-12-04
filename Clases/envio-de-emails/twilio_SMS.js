const accountSid = 'AC1ecd2ad45be5190142b2ff6d4d287b19'; 
const authToken = 'df1deac5a177c7aad24c86332c9f304a'; 
import twilio from 'twilio'; 
 
const client = twilio(accountSid, authToken)

client.messages 
      .create({ 
         body: 'Nueva prueba de envío de SMS a través de twilio',  
         messagingServiceSid: 'MG5be40c298572958d743ba18527db14e0',      
         to: '+541173614364' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();

      