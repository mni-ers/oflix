// script.js
function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    if (message) {
        addMessageToChatBox(message, 'user-message');
        userInput.value = '';
        setTimeout(() => {
            addMessageToChatBox("Je suis un chatbot simple. Vous avez dit : " + message, 'bot-message');
        }, 1000);
    }
}

function addMessageToChatBox(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
