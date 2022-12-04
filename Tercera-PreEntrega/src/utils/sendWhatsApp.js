const accountSid = process.env.TWILIO_ACOUNTSID;
const authToken = process.env.TWILIO_TOKEN;
const twilio = require("twilio");

const client = twilio(accountSid, authToken);

const sendWhatsApp = (body) => {
  try {
    client.messages
      .create({
        body,
        from: process.env.PHONE_FROM,
        to: process.env.WS_TO,
      })
      .then((message) => console.log(message.sid))
      .done();
  } catch (err) {
    console.log(err);
  }
};

module.exports = sendWhatsApp