// script.js
const responses = {
    "conseil moi un fond d'écran": "Oui voici: https://www.pinterest.fr/unesourisetmoi/fonds-d-ecran/",
    "conseil moi un fond d'ecran": "Oui voici: https://www.pinterest.fr/unesourisetmoi/fonds-d-ecran/",
    "bonjour tu vas bien": "Bonjour ! Oui super et vous ?",
    "ok": "Comment puis-je vous aider ?",
    "d'accord": "Comment puis-je vous aider ?",
    "dit moi les actualités en france": "Guerre en Ukraine : Zelensky fait le plein de soutien international et accable la Russie, pas prête à une « paix juste » La suite avec: https://www.msn.com/fr-fr/actualite",
    "l'été commence quand": "L'été débute le 21 juin. C'est aussi le jour de la fête de la musique. Tu as d'autre question ?",
    "donne moi une playlist": "Oui voila une playlist des années 2023/02024 qui pourrait te plaire: https://open.spotify.com/playlist/37i9dQZEVXbIPWwFssbupI",
    "il est quelle heure": "Voici l'heure avec: dayspedia.com/time",
    "salut": "Salut ! Comment puis-je vous aider ?", 
    "bonjour": "Bonjour ! Comment puis-je vous aider ?", 
    "comment ça va": "Jen'est pas de sentiment, mais merci de demander ! Et vous ?",
    "comment vas-tu": "Je n'est pas de sentiment car je suis fait de ligne de programme, mais merci de demander ! Et vous ?",
    "oui je vais bien": "Tant mieux, en quoi puis-je vous aider ?",
    "oui": "Tant mieux, en quoi puis-je vous aider ?",
    "non": "Ah mince, en quoi puis-je vous aider ?",
    "quel est ton nom": "Je suis Nexus IA créé en 2024 par 720.exe & Blasterjaxx.",
    "comment tu t'appelles": "Je suis Nexus IA créé en 2024 par 720 & Blasterjaxx.",
    "comment t'appelles-tu": "Je suis Nexus IA créé en 2024 par 720 & Blasterjaxx.",
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
