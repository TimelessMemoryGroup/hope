/**
 * Script used specifically for presentation logic
 * adding dynamic styling, entrance animations, and interactivity.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Add fade-in animation for main container body
    const container = document.querySelector('.container.fade-in');
    if (container) {
        // Use timeout to ensure styles are applied prior to triggering class change
        setTimeout(() => {
            container.classList.add('visible');
        }, 100);
    }

    // 2. Add staggered fade-in animations for the social links
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach((link, index) => {
        // Base styling prior to animating
        link.style.opacity = '0';
        link.style.transform = 'translateY(15px)';
        
        // Setup transition delays
        link.style.transition = `opacity 0.5s ease ${0.3 + index * 0.15}s, transform 0.5s ease ${0.3 + index * 0.15}s, box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), border-color 0.3s ease`;
        
        // Execute animation state
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateY(0)';
        }, 150);
    });
});
