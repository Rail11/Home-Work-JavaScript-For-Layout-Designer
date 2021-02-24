/* Задание
ОСНОВНОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ):
1) Скачать архив, прикрепленный к уроку
2) Подключить JQuery к проекту
3) Создать js файл и подключить его к странице
4) Написать обработчик события, не позволяющий скриптам 
выполняться до загрузки страницы
5) Написать функцию, что при клике на “Выбрать тур” , “Получить 
консультацию” или “Расписание туров” (все 3 элемента) подложка 
(класс overlay) медленно появлялась на странице (через прозрачность), а 
само модальное окно (класс modal) плавно выезжало сверху
6) Написать функцию, что при клике на крестик всё происходило бы 
наоборот: подложка исчезала, модальное окно уезжало вверх
УСЛОЖНЕННОЕ ЗАДАНИЕ (НЕОБЯЗАТЕЛЬНОЕ):
1) Написать анимацию появления модального окна через animate, 
используя не менее 2х параметров
2) Реализовать асинхронную отправку формы, средствами JQuery
PHP файл можно взять из лэндинга */

$(document).ready(function() {
    /* Основное задание */
    $('.main_btna, .main_btn, [href = "#sheldure"]').on('click', function () {
        console.log('click');
        $('.overlay').fadeIn(1500);
        $('.modal').slideDown(1500);
    });
    
    $('.close').on('click', function() {
        $('.overlay').fadeOut(1500);
        $('.modal').slideUp(1500);
    });
    /* Дополнительное задание */
    /* $('.main_btna, .main_btn, [href = "#sheldure"]').on('click', function () {
        console.log('click');
        $('.overlay, .modal').animate({
            display: 'block',
            opacity: '1',
            height: 'toggle'
        }, 1500);
    }); */

    $('.form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "server.php",
            data: "data",
            dataType: "dataType",
            success: function(response) {
                console.log("Данные успешно отправлены");
            },
            fail: function(response) {
                console.log("Данные не отправлены");
            }
        });
    });

});
