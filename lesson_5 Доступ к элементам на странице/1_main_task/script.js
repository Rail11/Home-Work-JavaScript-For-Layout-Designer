/* ВТОРОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ):
1) Скачать архив, прикрепленный к уроку
2) Задание по проекту
Получить кнопку "Открыть магазин" через id
Получить все поля в левом меню через классы
Получить поля категории товаров через класс
Получить все 3 кнопки через Tag
Получить поля ввода товаров, времени и расчета бюджета через 
querySelector
Получить поля имен сотрудников через querySelectorAll
ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ (НЕОБЯЗАТЕЛЬНОЕ):
Добавить папку с уроком на GitHub */

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

let openBtn = document.getElementById(`open-btn`),
    nameValue = document.getElementsByClassName(`name-value`),
    budgetValue = document.getElementsByClassName(`budget-value`),
    goodsValue = document.getElementsByClassName(`goods-value`),
    itemsValue = document.getElementsByClassName(`items-value`),
    employersValue = document.getElementsByClassName(`employers-value`),
    discountValue = document.getElementsByClassName(`discount-value`),
    isOpenValue = document.getElementsByClassName(`isopen-value`),
    goodsItem = document.getElementsByClassName(`goods-item`),
    mainFunctions = document.getElementsByClassName(`main-functions`),
    btns = mainFunctions[0].getElementsByTagName(`button`),
    chooseItem = document.querySelector(`.choose-item`),
    timeValue = document.querySelector(`.time-value`),
    countBudgetValue = document.querySelector(`.count-budget-value`),
    hireEmployersItems = document.querySelectorAll(`.hire-employers-item`);







