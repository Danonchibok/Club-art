window.addEventListener('load', () => {
    let scroller = document.querySelector('.scroller');
    let ul = scroller.querySelector('ul');
    let listItems = Array.from(ul.querySelectorAll('li'));


    let stage = 0;
    let count;
    let ind;
    let lastElems = listItems.slice(0, count);
    let delay = +scroller.getAttribute('delay') || 5000;

    let id;
    let isInit = false;
    scroller.init = init;

    document.addEventListener('click', e => {
        if (e.target.closest('.scroller-next-button')) {
            setStage(stage + count);
            clearInterval(id);
            id = setInterval(() => {
                setStage(stage + count);
            }, delay);
        } else if (e.target.closest('.scroller-prev-button')) {
            setStage(stage - 1);
            clearInterval(id);
            id = setInterval(() => {
                setStage(stage + count);
            }, delay);
        }
    });

    function setStage(s) {
        s = s % listItems.length;
        if (s < 0) {
            s = listItems.length + s;
        }
        if (s + count > listItems.length) {
            s = listItems.length - count;
        }

        lastElems.forEach(e => {
            e.style.marginRight = '0';
            e.style.marginLeft = '0';
        });


        let width = 0;
        for (let i = 0; i < s; i++) {
            width -= listItems[i].offsetWidth;
        }
        lastElems = listItems.slice(s, s + count);
        stage = s;
        let indent = (scroller.clientWidth - (count - 1) * ind - lastElems.reduce((sum, cur) => sum + cur.offsetWidth, 0)) / 2;
        lastElems[0].style.marginLeft = indent + 'px';
        lastElems[lastElems.length - 1].style.marginRight = indent + 'px';
        if (count > 1) {
            for (let i = 0; i < lastElems.length - 1; i++) {
                lastElems[i].style.marginRight = ind + 'px';
            }
        }
        ul.style.transform = `translateX(${width}px)`;
    }

    function init(c, i) {
        isInit = true;
        count = c || 1;
        ind = i || 10;
        clearInterval(id);
        id = setInterval(() => {
            setStage(stage + count);
        }, delay);
        setStage(0);
    }
});