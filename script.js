// script.js
const responses = {
    <script async src="https://cse.google.com/cse.js?cx=076a5f70a5c72440d">
</script>
<div class="gcse-search"></div>
};

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim().toLowerCase();
    if (message) {
        addMessageToChatBox(message, 'user-message');
        userInput.value = '';
        setTimeout(() => {
            const response = getResponse(message);
            addMessageToChatBox(response, 'bot-message');
        }, 1000);
    }
}

function getResponse(message) {
    return responses[message] || "Je suis désolé, je ne suis pas en mesure de comprendre cette question.";
}

function addMessageToChatBox(message, className) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.className = 'message ' + className;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
