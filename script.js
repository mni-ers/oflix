// script.js
const responses = {
    "donne moi une playlist": "Oui vvoila une playlist des années 2023/02024 qui pourrait te plaire: https://open.spotify.com/playlist/37i9dQZEVXbIPWwFssbupI",
    "il est quelle heure": "Voici l'heure avec: dayspedia.com/time",
    "salut": "Salut ! Comment puis-je vous aider ?", 
    "bonjour": "Bonjour ! Comment puis-je vous aider ?", 
    "comment ça va": "Jen'est pas de sentiment, mais merci de demander!",
    "comment vas-tu": "Je n'est pas de sentiment car je suis fait de ligne de programme, mais merci de demander ! Et vous ?",
    "oui je vais bien": "Tant mieux, en quoi puis-je vous aider ?",
    "oui": "Tant mieux, en quoi puis-je vous aider ?",
    "non": "Ah mince, en quoi puis-je vous aider ?",
    "quel est ton nom": "Je suis Nexus IA créé en 2024 par 720.exe & Blasterjaxx.",
    "comment tu t'appelles": "Je suis Nexus IA créé en 2024 par 720 & Blasterjaxx.",
    "que fais tu": "Je réponds aux questions que vous me posez.", 
    "quelle est la capitale de la france": "La capitale de la France est Paris.",
    "quel temps fait-il": "Voici la météo avec: www.msn.com/fr-fr/meteo"
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
