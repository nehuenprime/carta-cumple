const foto = document.getElementById('fotoMama');

function alternarStats() {
    foto.classList.toggle('activo');
}

foto.addEventListener('click', alternarStats);
foto.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alternarStats();
    }
});

const sobre = document.getElementById('sobreCarta');
const pista = document.getElementById('pistaCarta');
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function lluviaDeCorazones() {
    if (sinMovimiento) return;
    const emojis = ['💜', '💖', '💗', '✨'];
    for (let i = 0; i < 24; i++) {
        const c = document.createElement('span');
        c.className = 'corazon';
        c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        c.style.left = Math.random() * 100 + 'vw';
        c.style.fontSize = 1 + Math.random() * 1.2 + 'rem';
        c.style.animationDuration = 3 + Math.random() * 2.5 + 's';
        c.style.animationDelay = Math.random() * 0.8 + 's';
        document.body.appendChild(c);
        c.addEventListener('animationend', () => c.remove());
    }
}

function alternarSobre() {
    const abierto = sobre.classList.toggle('abierto');
    sobre.setAttribute('aria-expanded', abierto);
    sobre.setAttribute('aria-label', abierto ? 'Cerrar la carta' : 'Abrir la carta');
    pista.style.opacity = abierto ? '0' : '1';
    if (abierto) lluviaDeCorazones();
}

sobre.addEventListener('click', alternarSobre);
sobre.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        alternarSobre();
    }
});