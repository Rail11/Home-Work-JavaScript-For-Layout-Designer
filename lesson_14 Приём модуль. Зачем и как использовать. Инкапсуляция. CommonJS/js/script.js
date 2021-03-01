/* DOMContentLoaded прописываем чтобы скрип не начал работать пока не загрузиться дерево DOM (HTML структура) */
window.addEventListener('DOMContentLoaded', function() {
    /* Чтобы таймер после конца срока не ломал другие функции подключаем и объявляем его последним */
    let {tab} = require('./parts/tab.js');
    let {modal} = require('./parts/modal.js');
    let {ajax} = require('./parts/ajax.js');
    let {slider} = require('./parts/slider.js');
    let {calc} = require('./parts/calc.js');
    let {smoothScroll} = require('./parts/smoothScroll.js');
    let {timer} = require('./parts/timer.js');

    tab();
    modal();
    ajax();
    slider();
    calc();
    smoothScroll();
    timer();
});

