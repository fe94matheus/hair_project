document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navItems = document.querySelectorAll('.nav-itens ul li');
    
    // Add click event listeners to navigation items
    navItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            window.scrollTo({
                top: index * window.innerHeight,
                behavior: 'smooth'
            });
        });
    });
    
    // Optional: Add scroll effects
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        
        // Highlight active nav item based on scroll position
        pages.forEach((page, index) => {
            const pageTop = index * window.innerHeight;
            const pageBottom = pageTop + window.innerHeight;
            
            if (scrollPosition >= pageTop && scrollPosition < pageBottom) {
                navItems.forEach(item => item.classList.remove('active'));
                navItems[index].classList.add('active');
            }
        });
    });
});