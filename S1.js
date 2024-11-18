// Chatbot Toggle
const openChatbot = document.getElementById('openChatbot');
const chatbot = document.querySelector('.chatbot');
const closeChat = document.getElementById('closeChat');

openChatbot.addEventListener('click', () => {
    chatbot.style.display = 'flex';
    openChatbot.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatbot.style.display = 'none';
    openChatbot.style.display = 'block';
});

// Chatbot Interaction
const chatOutput = document.getElementById('chatOutput');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', sendMessage);

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        appendMessage(`You: ${message}`);
        userInput.value = '';

        // Simulated Bot Response
        setTimeout(() => {
            appendMessage(`SPORTIFY Assistant: How can I assist you today?`);
        }, 1000);
    }
}

function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight;
}
