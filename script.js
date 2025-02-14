document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('header.navbar .logo');
    const logoImages = Array.from(document.querySelectorAll('header.navbar .logo img'));
    
    if (!logoContainer || logoImages.length === 0) {
        console.error('Logo elements not found!');
        return;
    }

    let currentIndex = 0;
    
    // Initialize visibility
    logoImages.forEach((img, index) => {
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.zIndex = index === 0 ? '1' : '0';
    });

    logoContainer.addEventListener('click', () => {
        // Fade out current
        logoImages[currentIndex].style.opacity = '0';
        logoImages[currentIndex].style.zIndex = '0';
        
        // Update index
        currentIndex = (currentIndex + 1) % logoImages.length;
        
        // Fade in next
        logoImages[currentIndex].style.opacity = '1';
        logoImages[currentIndex].style.zIndex = '1';
    });
});