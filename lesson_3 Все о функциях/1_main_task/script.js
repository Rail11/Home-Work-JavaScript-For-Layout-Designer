/* Задание
ОСНОВНОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ):
Дополнить нашу программу по видео:
1) Оформить расчет дневного бюджета как функцию
2) Создать функцию дисконтной системы
Если у нас параметр discount = true, то от значения переменной price 
необходимо оставить 80%
3) Создать функцию найма сотрудников (employers)
4) Необходимо 4 раза спросить у пользователя имя сотрудника и 
записать в объект employers в формате Номер - Имя
Вызывать функции не обязательно
5) Проверить на наличие ошибок
6) Добавить папку с третьим уроком на GitHub
7) Ознакомиться с методами Math – КЛИК */

let money,
    name,
    time,
    price;

function start() {
    money = prompt(`Ваш бюджет?`);
    /* Проверка числа, проверяет вводим ли мы число, а не вводим буквы или нечисло  или пустую строку или не нажали отмена */
    while (isNaN(money) || money == `` || money == null) {
        money = prompt(`Ваш бюджет?`);
    }

    name = prompt(`Название вашего магазина?`).toUpperCase();
    time = 18;
}

start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
}

function chooseGoods() {
    /* Cпособ 1 */
    for (let i = 0; i < 5; i++) {
        let a = prompt(`Какой тип товаров будем продавать?`);

        if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
            console.log(`Всё верно!`)
            mainList.shopGoods[i] = a;
        } else {
            i = i - 1
        }
    }
}

chooseGoods();

function workTime(time) {
    if (time < 0) {
        console.log(`Такого не может быть!`);
    } else if (time > 8 && time < 20){
        console.log(`Время работать!`);
    } else if (time < 24){
        console.log(`Уже слишком поздно!`);
    } else {
        console.log(`В сутках только 25 часа!`);
    }
}

workTime(time);

function showDayBudget() {
    alert(money / 30);
}

showDayBudget();

function makeDiscount(price) {
    if (mainList.discount == true) {
        price *= 0,8;
    }
}

makeDiscount(price);

function addEmployee() {
    for (let i = 0; i < 4; i++) {
        a = prompt(`Введите имя сотрудника`);
        mainList.employers[i] = (i + 1 + `- `) + a; 
    }
}
addEmployee();

console.log(mainList);
