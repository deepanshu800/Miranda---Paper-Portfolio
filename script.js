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
    duration: 0.3,
    delay: 1
})

tl.to("#page1", {
    y: "0vh",
    rotate: 360,
    scale: 1,
    duration: 0.8
})

const carda = document.querySelector('.a');
const cardb = document.querySelector('.b');
const cardc = document.querySelector('.c');
const cardd = document.querySelector('.d');

carda.addEventListener('mouseover', function () {
    cardb.style.transition = 'all ease 1s'
    cardc.style.transition = 'all ease 1s'
    cardd.style.transition = 'all ease 1s'
    cardb.style.transform = 'translateX(230px)';
    cardc.style.transform = 'translateX(230px)';
    cardd.style.transform = 'translateX(230px)';
});
carda.addEventListener('mouseout', function () {
    cardb.style.transform = 'translateX(0)';
    cardc.style.transform = 'translateX(0)';
    cardd.style.transform = 'translateX(0)';
});
cardb.addEventListener('mouseover', function () {
    // document.querySelector('.cards.b').style.transform = 'translateX(230px)';
    cardc.style.transform = 'translateX(230px)';
    cardd.style.transform = 'translateX(230px)';
});
cardb.addEventListener('mouseout', function () {
    // document.querySelector('.cards.b').style.transform = 'translateX(0)';
    cardc.style.transform = 'translateX(0)';
    cardd.style.transform = 'translateX(0)';
});
cardc.addEventListener('mouseover', function () {
    // document.querySelector('.cards.b').style.transform = 'translateX(230px)';
    // document.querySelector('.cards.c').style.transform = 'translateX(230px)';
    cardd.style.transform = 'translateX(230px)';
});
cardc.addEventListener('mouseout', function () {
    // document.querySelector('.cards.b').style.transform = 'translateX(0)';
    // document.querySelector('.cards.c').style.transform = 'translateX(0)';
    cardd.style.transform = 'translateX(0)';
});
