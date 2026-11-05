document.addEventListener('DOMContentLoaded', () => {
    // ScrollMagic controller
    const controller = new ScrollMagic.Controller();

    // Move and fade out text overlay for image section 1
    new ScrollMagic.Scene({
        triggerElement: '#section1',
        triggerHook: 0.5,
        duration: '100%'
    })
    .setTween(gsap.to('#section1 .text-overlay', { y: '-100%', opacity: 0, ease: 'power1.inOut', delay: 0 }))
    .addTo(controller);

    // Move the image up after the text has fully moved up
    new ScrollMagic.Scene({
        triggerElement: '#section1',
        triggerHook: 0,
        offset: document.querySelector('#section1 .text-overlay').offsetHeight, // Starts after the text overlay has moved up
        duration: '50%'
    })
    .setTween(gsap.to('#section1 img', { y: '0%', opacity: 1, ease: 'power1.inOut', delay: 0 }))
    .addTo(controller);

    // Fade out text overlay for map section 1
    new ScrollMagic.Scene({
        triggerElement: '#map-section1',
        triggerHook: 0.5,
        duration: '100%'
    })
    .on('enter', () => {
        gsap.to('#map-section1 .text-overlay', { y: '-100%', opacity: 0, duration: 2, ease: 'power1.inOut', delay: 0 });
    })
    .addTo(controller);

    // Fade out text overlay for map section 2
    new ScrollMagic.Scene({
        triggerElement: '#map-section2',
        triggerHook: 0.5,
        duration: '100%'
    })
    .on('enter', () => {
        gsap.to('#map-section2 .text-overlay', { y: '-100%', opacity: 0, duration: 2, ease: 'power1.inOut', delay:0 });
    })
    .addTo(controller);

    // Move and fade out text overlay for image section 2
    new ScrollMagic.Scene({
        triggerElement: '#section2',
        triggerHook: 0.5,
        duration: '100%'
    })
    .setTween(gsap.to('#section2 .text-overlay', { y: '-100%', opacity: 0, ease: 'power2.inOut', delay: 0 }))
    .addTo(controller);

    // Move and fade out text overlay for image section 3
    new ScrollMagic.Scene({
        triggerElement: '#section3',
        triggerHook: 0.5,
        duration: '100%'
    })
    .setTween(gsap.to('#section3 .text-overlay', { y: '-100%', opacity: 0, ease: 'power2.inOut', delay: 0 }))
    .addTo(controller);
});
