/* Задание
ПЕРВОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ):
1) Скачать архив, прикрепленный к уроку. Внутри папки с 5м уроком создать еще одну, где и выполнить это задание
2) Используя только файл скрипта выполнить такие действия:
Восстановить порядок в меню, добавить пятый пункт
Заменить картинку заднего фона на другую из папки img
Поменять заголовок, добавить слово "подлинную"
Удалить рекламу со страницы
Спросить у пользователя отношение к технике apple и записать ответ в поле "prompt" */
let menu = document.querySelector(`.menu`),
    menuItem = document.querySelectorAll(`.menu-item`),
    fifthItem = document.createElement(`li`),
    body = document.querySelector(`body`),
    title = document.querySelector(`#title`),
    adv = document.querySelector(`.adv`),
    column = document.querySelectorAll(`.column`),
    answer = document.querySelector(`.prompt`);

menu.insertBefore(menuItem[2], menuItem[1]);

menu.appendChild(fifthItem);
fifthItem.textContent = `Пятый Пункт`;
fifthItem.classList.add(`menu-item`);

body.style.background = `url(img/apple_true.jpg)`;

title.textContent = `Мы продаем только подлинную технику Apple`;

column[1].removeChild(adv);

answer.textContent = prompt(`Какое отношение у вас к технике apple?`);





