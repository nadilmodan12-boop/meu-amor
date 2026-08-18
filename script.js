// Função para mostrar mensagem de amor
function showLove() {
    const messages = [
        "❤️ Eu te amo muito, Nayara! ❤️",
        "💕 Você é meu tudo! 💕",
        "✨ Você ilumina minha vida! ✨",
        "💫 Cada dia ao seu lado é especial! 💫",
        "🌟 Você é meu sonho realizado! 🌟",
        "💝 Te amo com todo meu coração! 💝"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Criar elemento flutuante
    const floatingMessage = document.createElement('div');
    floatingMessage.textContent = randomMessage;
    floatingMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff1493, #ffd700);
        color: white;
        padding: 30px 50px;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 9999;
        box-shadow: 0 20px 60px rgba(255, 20, 147, 0.8);
        animation: popUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    `;

    document.body.appendChild(floatingMessage);

    // Remover após 3 segundos
    setTimeout(() => {
        floatingMessage.style.animation = 'popDown 0.6s ease-in forwards';
        setTimeout(() => floatingMessage.remove(), 600);
    }, 3000);

    // Criar corações flutuantes
    createFloatingHearts();
}

// Função para criar corações flutuantes
function createFloatingHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.cssText = `
            position: fixed;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            font-size: ${Math.random() * 20 + 20}px;
            z-index: 9998;
            pointer-events: none;
            animation: floatHeart ${Math.random() * 3 + 2}s ease-in forwards;
        `;
        document.body.appendChild(heart);

        // Remover após animação
        setTimeout(() => heart.remove(), (Math.random() * 3 + 2) * 1000);
    }
}

// Adicionar animações CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes popUp {
        from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }

    @keyframes popDown {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0);
        }
    }

    @keyframes floatHeart {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100vh) scale(0.5) rotateZ(360deg);
        }
    }
`;
document.head.appendChild(style);

// Efeito de parallax nas fotos
document.addEventListener('scroll', () => {
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card, index) => {
        const scrollPosition = window.scrollY;
        const offset = scrollPosition * (0.5 - index * 0.1);
        card.style.transform = `translateY(${offset}px)`;
    });
});

// Interatividade dos painéis
document.querySelectorAll('.panel').forEach(panel => {
    panel.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'pulse 0.6s ease-out';
        }, 10);
    });
});

// Adicionar mais animações
const style2 = document.createElement('style');
style2.textContent = `
    @keyframes pulse {
        0% {
            transform: scale(1.05);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1.05);
        }
    }
`;
document.head.appendChild(style2);

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de entrada ao carregar a página
window.addEventListener('load', () => {
    console.log('❤️ Site carregado com amor para Nayara! ❤️');
});

// Detectar movimento do mouse para efeito de brilho
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Atualizar posição do efeito de luz
    const glowElement = document.querySelector('.glow-effect');
    if (glowElement) {
        glowElement.style.left = mouseX + 'px';
        glowElement.style.top = mouseY + 'px';
    }
});

// Adicionar mais interatividade aos cards de fotos
document.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.filter = 'brightness(1.2)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.filter = 'brightness(1)';
    });
});

// Efeito de digitação no poema
const poemTexts = document.querySelectorAll('.poem-text p');
poemTexts.forEach((p, index) => {
    p.style.animationDelay = `${index * 0.2}s`;
});

// Adicionar efeito de brilho ao botão de coração
const heartButton = document.querySelector('.heart-button');
if (heartButton) {
    heartButton.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.2) rotate(5deg)';
    });

    heartButton.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}