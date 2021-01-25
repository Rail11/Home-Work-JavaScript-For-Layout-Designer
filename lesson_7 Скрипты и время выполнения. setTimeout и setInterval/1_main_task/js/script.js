/* DOMContentLoaded прописываем чтобы скрип не начал работать пока не загрузиться дерево DOM (HTML структура) */
window.addEventListener('DOMContentLoaded', function() {

    let tab = document.getElementsByClassName(`info-header-tab`),
        tabContent = document.getElementsByClassName(`info-tabcontent`),
        info = document.getElementsByClassName(`info-header`)[0];

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove(`show`);
            tabContent[i].classList.add(`hide`);
        }
    }
    /* Оставляем первый tabContent[0] не скрытым и цикл начинает работать со втрого элемента tabContent[1] */
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains(`hide`)) {
            hideTabContent(0);

            tabContent[b].classList.remove(`hide`);
            tabContent[b].classList.add(`show`);
        }
    }
    /* Вешаем на info, делегирование событий */
    info.addEventListener(`click`, function(event) {
        let target = event.target;

        if(target.className == `info-header-tab`) {
            for (let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    showTabContent(i);
                    break;
                }
            }
        }
    })

})