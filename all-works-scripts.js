// Add animations to the gallery images and header navigation links
document.addEventListener('DOMContentLoaded', () => {
    // Animate header navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
      });
      link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
      });
    });
  
    // Animate images in the image showcase
    const images = document.querySelectorAll('.image-showcase img');
    images.forEach(image => {
      image.addEventListener('mouseover', () => {
        image.style.filter = 'brightness(1.2)';
      });
      image.addEventListener('mouseout', () => {
        image.style.filter = 'brightness(1)';
      });
    });
  
    // Add smooth scroll behavior for all anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  
    // Simple alert when user clicks on a featured image
    const featuredImage = document.querySelector('.featured-work img');
    if (featuredImage) {
      featuredImage.addEventListener('click', () => {
        alert('You clicked on the featured artwork!');
      });
    }
  });
  