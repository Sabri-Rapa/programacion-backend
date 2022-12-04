const accountSid = process.env.TWILIO_ACOUNTSID;
const authToken = process.env.TWILIO_TOKEN;
const twilio = require("twilio");

const client = twilio(accountSid, authToken);

const sendSMS = (body) => {
  try {
    client.messages
      .create({
        body,
        messagingServiceSid: process.env.messagingServiceSid,
        to: process.env.SMS_TO,
      })
      .done();
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendSMS;
