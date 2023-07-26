
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