Here is the code for `text-to-speech.js`:
```
const textToSpeech = require('@google-cloud/text-to-speech');

class TextToSpeechEngine {
  constructor() {
    this.client = new textToSpeech.TextToSpeechClient();
  }

  async generateResponse(text) {
    const request = {
      input: { text },
      voice: {
        languageCode: 'en-US',
        name: 'en-US-Wavenet-A',
        ssmlGender: 'NEUTRAL',
      },
      audioConfig: {
        audioEncoding: 'LINEAR16',
        sampleRateHertz: 24000,
      },
    };

    const [response] = await this.client.synthesizeSpeech(request);
    const audioContent = response.audioContent;

    return audioContent;
  }
}

module.exports = { TextToSpeechEngine };
```
This code defines a `TextToSpeechEngine` class that uses the `@google-cloud/text-to-speech` library to generate audio responses from text inputs. The `generateResponse` method takes in a text string and returns the generated audio response as a binary buffer.



