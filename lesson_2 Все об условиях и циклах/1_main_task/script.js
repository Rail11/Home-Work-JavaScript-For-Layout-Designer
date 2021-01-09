/* Задание

ОСНОВНОЕ ЗАДАНИЕ (ОБЯЗАТЕЛЬНОЕ):

Дописать нашу программу по видео:
1) Переписать наш цикл for еще двумя способами и закомментировать их
2) Проверить на наличие ошибок
3) Добавить папку со вторым уроком в свой репозитарий на GitHub */

let money = prompt(`Ваш бюджет?`),
    name = prompt(`Название вашего магазина?`),
    time = 19;

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}
/* Cпособ 1 */
for (let i = 0; i < 5; i++) {

    let a = prompt(`Какой тип товаров будем продавать?`);

    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log(`Всё верно!`)
        mainList.shopGoods[i] = a;
    } else {
        mainList.shopGoods[i] = a;
    }

}
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

if (time < 0) {
    console.log(`Такого не может быть!`);
} else if (time > 8 && time < 20){
    console.log(`Время работать!`);
} else if (time < 24){
    console.log(`Уже слишком поздно!`);
} else {
    console.log(`В сутках только 25 часа!`);
}

alert(money / 30);

console.log(mainList);
