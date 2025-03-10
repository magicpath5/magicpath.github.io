document.addEventListener('DOMContentLoaded', () => {
    loadMessages();
});

function sendMessage() {
    const messageInput = document.getElementById('message');
    const message = messageInput.value;

    if (message.trim()) {
        // Display the message in the chat window
        const chatWindow = document.getElementById('output');
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);

        // Save the message to localStorage
        saveMessage(message);

        // Clear the input field
        messageInput.value = '';
    }
}

function saveMessage(message) {
    let messages = localStorage.getItem('messages');
    if (!messages) {
        messages = [];
    } else {
        messages = JSON.parse(messages);
    }
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || [];
    const chatWindow = document.getElementById('output');
    messages.forEach(message => {
        const messageElement = document.createElement('p');
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);
    });
}