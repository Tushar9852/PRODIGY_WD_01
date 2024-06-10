document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = '#ff0';
        });

        link.addEventListener('mouseout', function() {
            link.style.color = '';
        });
    });
});
