const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const moblie_menu = document.querySelector('.header .nav-bar .nav-list ul');
const moblie_item= document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    moblie_menu.classList.toggle('active');
});

document.activeElement('scroll', ()=>{
    var scroll_position = window.scroolY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = "transparent";
    }
});

menu_item.array.forEach(item => {
    item.activeElement('click',()=>{
        hamburger.classList.toggle('active');
        moblie_menu.classList.toggle('active');
    })
});