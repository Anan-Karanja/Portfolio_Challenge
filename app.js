document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navBar = document.getElementById('nav_bar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navBar.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navBar.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            navBar.classList.remove('active');
        }
    });
});