// Your code goes here
const header = document.querySelector('header')
const nav = document.querySelector('nav');
const firstSec = document.querySelector('content-section');
//nav
const navLink = document.querySelector('.nav-link');
const bus = document.querySelector('.intro img');
const map = document.querySelector('.img-content img')
const title = document.querySelector('.content-section h2')
const footer = document.querySelector('footer')



//Header - change color
header.addEventListener('mouseover', function(event){
    header.style.backgroundColor = "#48dbe0";
    header.style.transition = '2s'
});

header.addEventListener('mouseout', function(event){
    header.style.backgroundColor = "#fff";
    header.style.transition = '2s'
});

//Nav link 
nav.children[0].addEventListener('mouseover', event => {
    nav.children[0].style.fontSize = '2rem';
    nav.children[0].style.transition = '1s'
}); 

nav.children[0].addEventListener('mouseout', event => {
    nav.children[0].style.fontSize= '1.6rem';
    nav.children[0].style.transition = '1s'
}); 
nav.children[1].addEventListener('mouseover', event => {
    nav.children[1].style.fontSize = '2rem';
    nav.children[1].style.transition = '1s'
}); 

nav.children[1].addEventListener('mouseout', event => {
    nav.children[1].style.fontSize= '1.6rem';
    nav.children[1].style.transition = '1s'
});

nav.children[2].addEventListener('mouseover', event => {
    nav.children[2].style.fontSize = '2rem';
    nav.children[2].style.transition = '1s'
}); 

nav.children[2].addEventListener('mouseout', event => {
    nav.children[2].style.fontSize= '1.6rem';
    nav.children[2].style.transition = '1s'
}); 
nav.children[3].addEventListener('mouseover', event => {
    nav.children[3].style.fontSize = '2rem';
    nav.children[3].style.transition = '1s'
}); 

nav.children[3].addEventListener('mouseout', event => {
    nav.children[3].style.fontSize= '1.6rem';
    nav.children[3].style.transition = '1s'
});



//Coping
document.addEventListener('copy', event => {
    alert("What are you doing!?");
})


//making an img into a circle
bus.addEventListener('click', event => {

    bus.style.borderRadius = "50%";
    bus.style.marginTop = "3%";
    bus.style.transition = "2s";
});

window.addEventListener('load', event =>{
    alert("Hello, Im Al the A.I");
})

map.addEventListener('dblclick', event => {
    map.style.opacity = "0.2";
    map.style.transition = "2s";
});

map.addEventListener('transitionend', event => {
    map.style.opacity = "1";
    map.style.transition = "2s";
});

title.addEventListener('mousemove', event => {
    title.style.fontSize = '5rem';
});

footer.addEventListener('mouseenter', event => {
    footer.style.backgroundColor = '#d8f589';
})

footer.addEventListener('mouseleave', event => {
    footer.style.backgroundColor = '';
})







