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

let deadline = `2021-05-01`;

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

/* Плавная прокрутка страницы по якорям (по ссылкам) */
/* Способ №1 */
/* const anchors = document.querySelectorAll(`.scroll-to`);
for (let item of anchors) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = item.getAttribute('href')
    //   scrollIntoView() делает прокрутку в замисимости от параметров behavior и block
        document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        })
    })
} */
/* Способ №2 */
function animate(draw, duration) {
    let start = performance.now();
    requestAnimationFrame(
        function animate(time) {
            let timePassed = time - start;
            if (timePassed > duration) {
                timePassed = duration;
            }

            draw(timePassed);

            if (timePassed < duration) {
                requestAnimationFrame(animate);
            }
        }
    )
}

let menu = document.getElementsByTagName('nav')[0];

menu.addEventListener('click', function(event) {
    event.preventDefault();
    animate(function(timePassed) {
        let target = event.target;
        let section = document.getElementById(target.getAttribute('href').slice(1));
        window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
    }, 1500)
})

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

/* Slider */
let slideIndex = 1,
    slides = document.getElementsByClassName('slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.getElementsByClassName('dot');

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    };

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('dot-active');
    };

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
};

function currentSlide(n) {
    showSlides(slideIndex = n);
};

prev.addEventListener('click', function() {
    plusSlides(-1);
});

next.addEventListener('click', function() {
    plusSlides(1);
});

dotsWrap.addEventListener('click', function(event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        };
    };
});

/* Calc */
let persons = document.getElementsByClassName('counter-block-input')[0],
    restDays = document.getElementsByClassName('counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0;

function totalAnimate() {
    totalValue.classList.add('animFontSize');
    function removeTotalAnimate() {
        totalValue.classList.remove('animFontSize');
    }
    setTimeout(removeTotalAnimate, 2500);
}


persons.addEventListener('change', function() {
    personsSum = +this.value;
    total = (daysSum * personsSum)*4000;
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
        totalAnimate();
    }
});

restDays.addEventListener('change', function() {
    daysSum = +this.value;
    total = (daysSum * personsSum)*4000;
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        totalValue.innerHTML = total;
        totalAnimate();
    }
});

place.addEventListener('change', function() {
    if (restDays.value == '' || persons.value == '') {
        totalValue.innerHTML = 0;
    } else {
        let a = total;
        totalAnimate();
        /* Берём коэффициент value у option */
        totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
});
