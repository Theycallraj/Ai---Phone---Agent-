# Ai---Phone---Agent- TEAM REBEL
The AI Phone Agent is  advanced  designed to handle cold calls, engage customers in meaningful interactions, and close sales efficiently. Built with state-of-the-art Natural Language Processing (NLP) and Speech-to-Text/Text-to-Speech (STT/TTS) technologies, this agent simulates human-like conversations, offering a seamless experience for users.

# AI Phone Agent

The **AI Phone Agent** is an innovative conversational system designed to make cold calls, engage customers, and close sales with natural, human-like voice interactions. Leveraging state-of-the-art NLP and Speech-to-Text/Text-to-Speech technologies, the agent is ideal for businesses looking to enhance their customer engagement process.

---

## Key Features

1. **Natural Voice Interactions**
   - Professional, human-like voice conversations.
   - Converts customer speech into text in real-time and responds with Text-to-Speech.

2. **Dynamic Conversation Flow**
   - Adapts intelligently to customer inputs.
   - Capable of answering questions, handling objections, and making recommendations.

3. **API Integrations**
   - Connects to CRM systems (e.g., Salesforce, HubSpot) for customer data retrieval and updates.
   - Supports real-time function calls and data lookups.

4. **Multi-Call Management**
   - Scalable architecture to handle multiple calls simultaneously without performance degradation.

5. **Web and Phone Interaction**
   - **Phone Integration**: Powered by Twilio for call handling.
   - **Web Agent**: Browser-based audio interaction using WebRTC.

6. **Easy Deployment**
   - Containerized with Docker for quick setup.
   - Kubernetes support for cloud scalability.

---

## Use Cases

- **Sales Calls**: Engage leads, handle objections, and close deals.
- **Customer Support**: Automate common queries while maintaining a personalized touch.
- **Market Research**: Collect feedback and insights directly from customers.
- **Appointment Scheduling**: Schedule meetings or follow-ups with ease.

---

## Technical Overview

### Backend
- **Framework**: FastAPI.
- **Technologies**: GPT-based NLP, Speech-to-Text (e.g., Whisper), Text-to-Speech (e.g., Google Cloud or ElevenLabs).
- **CRM Integration**: Retrieve and update customer data dynamically.

### Frontend
- **Framework**: React.js.
- **Functionality**: WebRTC integration for live audio interactions, optional text-based chat interface.

### Deployment
- **Dockerized**: Pre-configured for containerized environments.
- **Kubernetes Ready**: Scalable deployment for cloud environments (AWS, GCP, Azure).

---

## Getting Started

### Prerequisites
- **Backend**: Python 3.9+, FastAPI, Twilio, and OpenAI API keys.
- **Frontend**: Node.js and npm.
- **Deployment**: Docker and/or Kubernetes.

### Installation

#### Backend
1. Clone the repository:
   ```bash
   git clone https://github.com/<theycallraj>/ai-phone-agent.git
   cd ai-phone-agent/backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```bash
   uvicorn api:app --host 0.0.0.0 --port 8000
   ```

#### Frontend
1. Navigate to the frontend directory:
   ```bash
   cd ai-phone-agent/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### Deployment
- Use `docker-compose` for local deployment:
   ```bash
   docker-compose up --build
   ```
- For Kubernetes, apply the configuration file:
   ```bash
   kubectl apply -f deployment/kubernetes.yaml
   ```

---

## Testing

- Run unit and integration tests:
  ```bash
  pytest
  ```

- End-to-end testing for conversation flows is available under the `tests` folder.

---

## Contributing

Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature"`.
4. Push to branch: `git push origin feature-name`.
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

For questions or support, please contact:
- **Name**: Pruthviraj and Raghupriya
- **Email**: pruthvirajchawan558@gmail.com  
- **For Queries**: raghupriyajoshi@gmail.com  
