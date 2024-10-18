 // Gestion du menu
    const menuToggle = document.getElementById('menuToggle');
    const sideMenu = document.getElementById('sideMenu');

    menuToggle.addEventListener('click', () => {
        sideMenu.classList.toggle('open');
    });

    // Gestion des messages
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');

    function addMessage(content, isSent) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.classList.add(isSent ? 'sent' : 'received');
        messageElement.textContent = content;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, true);
            messageInput.value = '';
            
            // Simuler une réponse après un court délai
            setTimeout(() => {
                addMessage("Merci pour votre message ! Un assistant vous répondra bientôt.", false);
            }, 1000);
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });

    // Ajouter l'année actuelle dans le footer
    const currentYear = new Date().getFullYear();
    const footer = document.createElement('footer');
    footer.style.textAlign = 'center';
    footer.style.padding = '1rem';
    footer.style.backgroundColor = 'var(--primary-color)';
    footer.style.color = 'white';
    footer.textContent = `© ${currentYear} QG. Tous droits réservés.`;
    document.body.appendChild(footer);

    // Animation de bienvenue
    window.addEventListener('load', () => {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.textContent = 'Bienvenue sur QG !';
        welcomeMessage.style.position = 'fixed';
        welcomeMessage.style.top = '50%';
        welcomeMessage.style.left = '50%';
        welcomeMessage.style.transform = 'translate(-50%, -50%)';
        welcomeMessage.style.backgroundColor = 'var(--primary-color)';
        welcomeMessage.style.color = 'white';
        welcomeMessage.style.padding = '1rem 2rem';
        welcomeMessage.style.borderRadius = '20px';
        welcomeMessage.style.fontSize = '1.5rem';
        welcomeMessage.style.opacity = '0';
        welcomeMessage.style.transition = 'opacity 0.5s ease-in-out';
        document.body.appendChild(welcomeMessage);

        setTimeout(() => {
            welcomeMessage.style.opacity = '1';
        }, 100);

        setTimeout(() => {
            welcomeMessage.style.opacity = '0';
            setTimeout(() => {
                welcomeMessage.remove();
            }, 500);
        }, 2000);
    });