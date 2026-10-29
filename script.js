document.addEventListener('DOMContentLoaded', () => {
    const sobre = document.getElementById('sobreCarta');
    
    sobre.addEventListener('click', () => {
        sobre.classList.toggle('abierto');
    });
});