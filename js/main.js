const navigation = document.querySelector('.nav');
const burgerButtonImg = document.querySelector('.burger-menu-img');
const burgerButton = document.querySelector('.burger-menu');


burgerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if(navigation.classList.toggle('open')){  //toggle возвращает true или false. Если open был добавлен - возвращается true, если убран - false;
        burgerButtonImg.src = './img/icons/close-ico.svg';
    }
    else{
        burgerButtonImg.src = './img/icons/burger-menu.svg';
    }
})



AOS.init({
    once: true,
    disable: 'mobile',
});