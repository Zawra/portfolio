const hamb = document.querySelector('.header .nev-bar .nav-list .hamb');
const mobile_menu = document.querySelector('.header . container');
humb.addEventListener('click', () => { 
    humb.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'trasparent';
    }
});