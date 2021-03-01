function ajax() {
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
                    };
                };
                imgLoader.src = '';
            };
            /* Очищаем input'ы формы */
            for (let i = 0; i < input.length; i++) {
                /* '' без пробела */
                input[i].value = '';
            };
        });
    };
    sendingData('.main-form');
    sendingData('#form');
};

module.exports = {ajax};