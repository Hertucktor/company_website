document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('.nav-list');
    
    burgerMenu.addEventListener('click', function() {
        navList.classList.toggle('active');
        
        // Animation für Burger-Menü
        if (navList.classList.contains('active')) {
            burgerMenu.children[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
            burgerMenu.children[1].style.opacity = '0';
            burgerMenu.children[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
        } else {
            burgerMenu.children[0].style.transform = 'rotate(0) translate(0)';
            burgerMenu.children[1].style.opacity = '1';
            burgerMenu.children[2].style.transform = 'rotate(0) translate(0)';
        }
    });
    
    // Schließen des Menüs beim Klicken auf einen Link (für Mobile)
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navList.classList.remove('active');
                burgerMenu.children[0].style.transform = 'rotate(0) translate(0)';
                burgerMenu.children[1].style.opacity = '1';
                burgerMenu.children[2].style.transform = 'rotate(0) translate(0)';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
    
    // Button ein-/ausblenden beim Scrollen
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    // Glattes Scrollen nach oben
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});