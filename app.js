let tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '80%',
        scrub: 1,
    },
});

let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '110%',
        scrub: 1,
    },
});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '100%',
        scrub: 1,
    },
});

let t3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.home',
        start: '0%',
        end: '400%',
        scrub: 1,
        pin: true,
        pinSpacing: false,
    },
});

let tl6 = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        start: '86%',
        end: '96.5%',
        scrub: 1,
    },
});

let tl7 = gsap.timeline({
    scrollTrigger: {
        trigger: '.second-page',
        start: '86%',
        end: '96.5%',
        scrub: 1,
    },
});

tl1.fromTo('.sliding-text', { y:0 }, { y: -400 });
tl2.fromTo('.logo', {color: 'rgb(180, 180, 10)', scale:6 }, { scale:1, top: "2rem", left:"3rem", x:"50%", y:"50%" });
tl4.fromTo('.controller', { left: '70%' }, { left: '85%', opacity: 0, rotation: 360 });
tl5.fromTo('.tv', { right: '70%' }, { left: '85%', opacity: 0, rotation: 360 });
tl2.fromTo('nav', { backgroundColor:'#FFFFFF' }, { backgroundColor: 'rgb(180, 180, 10)' });
tl6.to('nav', { opacity: 0 });
tl7.to('.logo',  { opacity: 0 } );
