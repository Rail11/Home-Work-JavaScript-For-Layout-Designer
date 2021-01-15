/* Задание
ОСНОВНОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ)
Дополнить свою программу по видео
1) Написать проверку, что пользователь может:
Ввести в типах товара только строку
Не может оставить строку пустой
Не может отменить вопрос
2) При помощи метода перебора массива(forEach) вывести на экран 
сообщение "У нас вы можете купить: " и полученные товары
Товары должны начинаться с 1, а не с 0. Этот пункт - часть 
одноименной функции
3) Используя цикл for in для объекта вывести в консоль сообщение 
"Наш магазин включает в себя: "
4) Проверить на наличие ошибок.
5) Добавить папку с уроком на свой GitHub. */

let money,
    name,
    time,
    price;

function start() {
    money = prompt(`Ваш бюджет?`, ``);
    /* Проверка числа, проверяет вводим ли мы число, а не вводим буквы или нечисло  или пустую строку или не нажали отмена */
    while (isNaN(money) || money == `` || money == null) {
        money = prompt(`Ваш бюджет?`, ``);
    }

    name = prompt(`Название вашего магазина?`, ``).toUpperCase();
    time = 21;
}

start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    /* Методы объекта это функции */
    chooseGoods: function chooseGoods() {
        /* Cпособ 1 */
        for (let i = 0; i < 5; i++) {
            let a = prompt(`Какой тип товаров будем продавать?`, ``);
    
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 && isNaN(a)) {
                console.log(`Всё верно!`)
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log(`Такого не может быть!`);
        } else if (time > 8 && time < 20){
            console.log(`Время работать!`);
            mainList.open = true;
        } else if (time < 24){
            console.log(`Уже слишком поздно!`);
        } else {
            console.log(`В сутках только 25 часа!`);
        }
    },
    dayBudget: function dayBudget() {
        alert(`Ежедневный бюджет ` + mainList.budget / 30);
    },
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price *= 0,8;
        }
    },
    hireEmployers: function hireEmployers() {
        for (let i = 0; i < 4; i++) {
            emplrsName = prompt(`Введите имя сотрудника`, ``);
            mainList.employers[i] = (i + 1 + `- `) + emplrsName; 
        }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt(`Перечислите через запятую товары`, ``),
            arrCheckNum;

        if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '' && isNaN(items)) {
            console.log(`Всё верно!`)
            mainList.shopItems = items.split(`,`);
            mainList.shopItems.push(prompt(`Подождите, ещё `, ``));
            mainList.shopItems.sort();
        } else {
            console.log(`Ввведите корректные данные!`)
            mainList.chooseShopItems();
        }

        mainList.shopItems.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                if ((typeof(element[i])) === 'string' && (typeof(element[i])) != null && (element[i]) != '' && isNaN(element[i])) {
                    console.log(`Всё хорошо!`);
                } else if (element.length < 1 && !isNaN(element[i])) {
                    console.log(`В товаре найдено число!`);
                    mainList.shopItems = [];
                    return arrCheckNum = true;
                }

            }
            
            if (element.length > 1) {
                console.log(`Есть элементы длинной больше 1`);
            } else {
                return arrCheckNum = true;
            }
        });

        if (arrCheckNum === true) {
            alert(`Вы ввели число или слишком короткое название, введите полное название`);
            mainList.chooseShopItems();
        }

        mainList.shopItems.forEach((element, i) => {
            alert((i + 1) + ` У нас вы можете купить ` + element);
        });

    }
}

for (const key in mainList) {
    console.log(`Наш магазин включает в себя: ` + key);
}

/* Способ 2 */
/* let i = 0;
while (i < 5) {

    let a = prompt(`Какой тип товаров будем продавать?`, ``);

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
//     let a = prompt(`Какой тип товаров будем продавать?`, ``);

//     if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
//         console.log(`Всё верно!`)
//         mainList.shopGoods[i] = a;
//     } else {
//         mainList.shopGoods[i] = a;
//     }

//     i++;
// } while (i < 5);

