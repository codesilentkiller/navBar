document.querySelectorAll('.navLink').forEach(link => {
    if (window.location.href.includes(link.getAttribute('href'))) {
        link.classList.add('open');
    }
})

function toggleMenu() {
    const navLinks = document.querySelector('.navLinks');
    navLinks.classList.toggle('open');
}