// Efecto visual en el menú cuando hacemos scroll hacia abajo
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.backgroundColor = 'rgba(10, 15, 29, 0.98)';
    } else {
        header.style.padding = '20px 0';
        header.style.backgroundColor = 'rgba(10, 15, 29, 0.95)';
    }
});