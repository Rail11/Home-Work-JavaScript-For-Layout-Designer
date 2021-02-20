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
    }
    showAndHideModal(`.more`);
    showAndHideModal(`.description-btn`);

    /* ПЛАВНАЯ ПРОКРУТКА */

    const anchors = document.querySelectorAll(`.scroll-to`);

    for (let item of anchors) {
        item.addEventListener(`click`, function (e) {
          e.preventDefault()
          
          const blockID = item.getAttribute(`href`)
          /* scrollIntoView() делает прокрутку в зависимости от параметров behavior и block */
          document.querySelector(blockID).scrollIntoView({
            behavior: `smooth`,
            block: `start`
          })
        })
    }

    /* FORM */
    /* Работает на элементах c тегом form */
    let message = new Object();
    message.loading = 'Загрузка...';
    message.success = 'Спасибо! Скоро мы с вами свяжемся';
    message.failure = 'Что-то пошло не так...';
    
    function sendingData(formSelect) {

        let form = document.querySelector(formSelect),
            input = form.getElementsByTagName('input'),
            statusMessage = document.createElement('div');
            imgLoader = document.createElement('img');
            imgLoader.src = 'icons/loader.gif';

        statusMessage.classList.add('status');

        form.addEventListener('submit', function(event) {

            event.preventDefault();
            form.appendChild(statusMessage);
            form.appendChild(imgLoader);
            /* AJAX */
    
            let request = new XMLHttpRequest();
            /* Указываем путь по отношению к index.html */
            request.open('POST', 'server.php')
            /* Указываем кодировку данных */
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            /* Получаем данные с инпутов с помощью объекта FormData*/
            let formData = new FormData(form);
            /* Отправляем данные */
            request.send(formData);
            /* onreadystatechange отслеживает статус готовности запросов в данный момент по readyState */
            request.onreadystatechange = function() {
                /* Цифра 4 это цифра статуса readyState, в интернете можно посмотреть */
                if (request.readyState < 4) {
                    statusMessage.innerHTML = message.loading;

                } else if (request.readyState === 4) {
                    if(request.status == 200 && request.status < 300) {
                        statusMessage.innerHTML = message.success;
                    }
                    else {
                        statusMessage.innerHTML = message.failure;
                    }

                }
                imgLoader.src = '';
                
            }
            /* Очищаем input'ы формы */
            for (let i = 0; i < input.length; i++) {
                /* '' без пробела */
                input[i].value = '';
            }

        })

    }

    sendingData('.main-form');
    sendingData('#form');

})