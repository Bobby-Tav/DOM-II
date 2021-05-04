// Your code goes here
const header = document.querySelector('header')
const nav = document.querySelector('nav');
const firstSec = document.querySelector('content-section');

//nav
const navLink = document.querySelector('.nav-link');

const home = document.querySelector('.home')

//first section
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

nav.children[4].addEventListener('mouseover', event => {
    nav.children[4].style.fontSize = '2rem';
    nav.children[4].style.transition = '1s'
}); 

nav.children[4].addEventListener('mouseout', event => {
    nav.children[4].style.fontSize= '1.6rem';
    nav.children[4].style.transition = '1s'
});

//container home

home.addEventListener('wheel', event => {
    debugger;
})




