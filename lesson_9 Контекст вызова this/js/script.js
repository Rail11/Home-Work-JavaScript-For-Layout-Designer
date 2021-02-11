/* 
Задание
ОСНОВНОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ):
1) Написать функцию вызова модального окна
2) Привязать модальное окно к кнопкам “Узнать подробнее” в табах
3) У вас есть код:
<input id="age" value="30">
let age = document.getElementById('age');
function showUser(surname, name) {
 alert("Пользователь " + surname + " " + name + ", его возраст " + 
this.value);
}
showUser();
Выведите на экран правильное сообщение, которое берет значение из input
Написать скрипт в отдельном js файле
*/

/* DOMContentLoaded прописываем чтобы скрип не начал работать пока не загрузиться дерево DOM (HTML структура) */
window.addEventListener('DOMContentLoaded', function() {

    /* TABS */

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

    /* TIMER */

    let deadline = `2021-03-01`;

    function getTimeRemaining(endtime) {
        /* Date.parse() - получает дату в миллисекундах */
        /* Получаем разницу между конечной датой и сейчас */
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };

        
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
        hours = timer.querySelector(`.hours`),
        minutes = timer.querySelector(`.minutes`),
        seconds = timer.querySelector(`.seconds`);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                hours.innerHTML = `00`;
                minutes.innerHTML = `00`;
                seconds.innerHTML = `00`;
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000);

    };

    setClock(`timer`, deadline);

    /* MODAL */

    let more = document.querySelector(`.more`),
        overlay = document.querySelector(`.overlay`),
        close = document.querySelector(`.popup-close`);

    more.addEventListener(`click`, function() {
        this.classList.add(`more-splash`);
        overlay.style.display = `block`;
        /* Убираем способность прокрутки страницы при открытом overlay */
        document.body.style.overflow = `hidden`;
    });

    close.addEventListener(`click`, function () {
        overlay.style.display = `none`;
        /* Удаляем класс у more чтобы после закрытия снова смогла быть анимация при клике с помощью навешивания класса */
        more.classList.remove(`more-splash`);
        /* Возвращаем способность прокрутки страницы после закрытия overlay*/
        document.body.style.overflow = ``;
    });

    /* ПЛАВНАЯ ПРОКРУТКА */

    const anchors = document.querySelectorAll(`.scroll-to`);

    for (let item of anchors) {
        item.addEventListener(`click`, function (e) {
          e.preventDefault()
          
          const blockID = item.getAttribute(`href`)
          /* scrollIntoView() делает прокрутку в замисимости от параметров behavior и block */
          document.querySelector(blockID).scrollIntoView({
            behavior: `smooth`,
            block: `start`
          })
        })
      }
    
});