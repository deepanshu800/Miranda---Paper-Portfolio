const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline();

tl.to("#page1", {
    y: "100vh",
    scale: 0.6,
    duration: 0
})

tl.to("#page1", {
    y: "30vh",
    duration: 1,
    delay: 1
})

tl.to("#page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.8
})


// document.querySelector('.cards.a').addEventListener('mouseover', function () {
//     document.querySelector('.cards.b').style.transform = 'translateX(400px)';
//     document.querySelector('.cards.c').style.transform = 'translateX(400px)';
//     document.querySelector('.cards.d').style.transform = 'translateX(400px)';

// });