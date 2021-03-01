function modal() {
    function showAndHideModal(classname) {
        let more = document.querySelectorAll(classname),
            overlay = document.querySelector(`.overlay`),
            close = document.querySelector(`.popup-close`);
        
        more.forEach(element => {
            element.addEventListener(`click`, function() {
                this.classList.add(`more-splash`);
                overlay.style.display = `block`;
                /* Убираем способность прокрутки страницы при открытом overlay */
                document.body.style.overflow = `hidden`;
            });
        });
    
        close.addEventListener(`click`, function () {
            overlay.style.display = `none`;
            more.forEach(element => {
                /* Удаляем класс у more чтобы после закрытия снова смогла быть анимация при клике с помощью навешивания класса */
                element.classList.remove(`more-splash`);
            });
            /* Возвращаем способность прокрутки страницы после закрытия overlay*/
            document.body.style.overflow = ``;
        });
    };
    showAndHideModal(`.more`);
    showAndHideModal(`.description-btn`);
};

module.exports = {modal};