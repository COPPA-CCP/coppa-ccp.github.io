// This file is intentionally blank
// Use this file to add JavaScript to your project
AOS.init({
    duration: 600,
    easing: 'ease-in-sine',
    // disable AOS on mobile completly
    //disable: 'mobile'
});

/**
   * Preloader
   */
let preloader = document.querySelector('#preloader');
if (preloader) {
    window.addEventListener('load', () => {
        preloader.remove()
    });
}