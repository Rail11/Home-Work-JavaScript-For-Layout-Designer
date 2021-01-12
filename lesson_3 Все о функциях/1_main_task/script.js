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

/* Способ 2 */
/* let i = 0;
while (i < 5) {

    let a = prompt(`Какой тип товаров будем продавать?`);

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log(`Всё верно!`)
        mainList.shopGoods[i] = a;
    } else {
        mainList.shopGoods[i] = a;
    }

    i++;
} */
/* Способ 3 */
// let i = 0;
// do {
//     let a = prompt(`Какой тип товаров будем продавать?`);

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
//         console.log(`Всё верно!`)
//         mainList.shopGoods[i] = a;
//     } else {
//         mainList.shopGoods[i] = a;
//     }

//     i++;
// } while (i < 5);


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
