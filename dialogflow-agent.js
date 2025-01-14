Here is the code for `dialogflow-agent.js`:
```
const dialogflow = require('dialogflow');

class DialogflowAgent {
  constructor() {
    this.sessionClient = new dialogflow.SessionsClient();
  }

  async detectIntent(text, sessionId) {
    const sessionPath = this.sessionClient.sessionPath('your-project-id', sessionId);
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text,
          languageCode: 'en-US',
        },
      },
    };

    const [response] = await this.sessionClient.detectIntent(request);
    const queryResult = response.queryResult;

    return queryResult;
  }
}

module.exports = { DialogflowAgent };
```
This code defines a `DialogflowAgent` class that uses the `dialogflow` library to interact with the Dialogflow API. The `detectIntent` method takes in a text string and a session ID, and returns the detected intent and its associated data.

You'll need to replace `'your-project-id'` with your actual Dialogflow project ID.

Here's an explanation of the code:

1. We create a new instance of the `dialogflow.SessionsClient` class, which allows us to interact with the Dialogflow API.
2. The `detectIntent` method takes in a text string and a session ID, and returns the detected intent and its associated data.
3. We create a new `request` object that contains the text string, language code, and session ID.
4. We call the `detectIntent` method on the `sessionClient` instance, passing in the `request` object.
5. We extract the `queryResult` object from the response, which contains the detected intent and its associated data.
6. We return the `queryResult` object.

