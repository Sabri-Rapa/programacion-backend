const accountSid = 'AC1ecd2ad45be5190142b2ff6d4d287b19'; 
const authToken = 'df1deac5a177c7aad24c86332c9f304a'; 
import twilio from 'twilio'; 

const client = twilio(accountSid, authToken)

client.messages 
      .create({ 
         body: 'Your appointment is coming up on July 25 at 8PM', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+5491173614364' 
       }) 
      .then(message => console.log(message.sid)) 
      .done();