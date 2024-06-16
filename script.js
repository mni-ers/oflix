document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === '') return;

    displayMessage(userInput, 'user');
    document.getElementById('user-input').value = '';

    processCommand(userInput);
}

function displayMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function processCommand(command) {
    let response = '';

    // Ajoutez ici votre logique de traitement des commandes
    switch (command.toLowerCase()) {
        case 'bonjour':
            response = 'Bonjour ! Comment puis-je vous aider aujourd\'hui ?';
            break;
        case 'aide':
            response = 'Voici quelques commandes que vous pouvez essayer : bonjour, aide, heure, date.';
            break;
        case 'heure':
            response = `Il est actuellement ${new Date().toLocaleTimeString()}.`;
            break;
        case 'date':
            response = `Nous sommes le ${new Date().toLocaleDateString()}.`;
            break;
        default:
            response = 'Commande non reconnue. Essayez "aide" pour voir les commandes disponibles.';
            break;
    }

    displayMessage(response, 'bot');
}
