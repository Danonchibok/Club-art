window.addEventListener('click', e => {
    if (e.target.closest('.footer-title')) {
        e.target.closest('.footer-content').classList.toggle('close');

    }

});