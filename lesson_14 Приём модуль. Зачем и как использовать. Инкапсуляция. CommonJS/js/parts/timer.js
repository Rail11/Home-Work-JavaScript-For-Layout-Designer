function timer() {
    /* Чтобы таймер после конца срока не ломал другие функции подключаем его последним */
    let deadline = `2021-04-01`;

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
            };
        };
        updateClock();
        let timeInterval = setInterval(updateClock, 1000);
    };
    setClock(`timer`, deadline);
};

module.exports = {timer};