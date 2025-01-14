Here is the code for `twilio.js`:
```
const twilio = require('twilio');

class TwilioClient {
  constructor(accountSid, authToken) {
    this.accountSid = accountSid;
    this.authToken = authToken;
    this.client = new twilio(accountSid, authToken);
  }

  async makeCall(from, to, twiml) {
    try {
      const call = await this.client.calls
        .create({
          from,
          to,
          twiml,
        })
        .then((call) => {
          console.log(`Call created: ${call.sid}`);
        })
        .done();

      return call;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async playAudio(callSid, audioUrl) {
    try {
      const call = await this.client.calls(callSid).update({
        twiml: `<Response><Play>${audioUrl}</Play></Response>`,
      });

      console.log(`Audio played on call: ${callSid}`);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

module.exports = { TwilioClient };
```
This code defines a `TwilioClient` class that uses the `twilio` library to interact with the Twilio API. The class has two methods: `makeCall` and `playAudio`.

