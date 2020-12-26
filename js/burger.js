/*
$(document).ready(function() {
    $('.header-burger').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('header-burger_active');
        $('.menu-block').toggleClass('menu-block_active');
    });
});
*/
window.addEventListener('load', () => {
    let button = document.querySelector('.header-burger');
    let button2 = document.querySelector('.second-nav-menu-btn');

    //Универсальный вариант для кнопки (для любого контейнера)
    //Когда у тебя будет итоговый вариант укажи селектор контейнера,
    //а не кнопки и сотри ".parentElement".

    let buttonContainer = document.querySelector('.header-burger');
    let buttonContainer2 = document.querySelector('.second-nav-menu-btn');
    if (buttonContainer) {
        buttonContainer = buttonContainer.parentElement;
    }
    if (buttonContainer2) {
        buttonContainer2 = buttonContainer2.parentElement;
    }

    //В данном случае вообще это можно переписать как
    //let buttonContainer = button.parentElement;
    document.body.addEventListener('click', e => {
        if (e.target.closest('.header-burger')) {
            buttonContainer.classList.toggle('active');
        } else if (e.target.closest('.second-nav-menu-btn')) {
            buttonContainer2.classList.toggle('active');
        }
    });

});