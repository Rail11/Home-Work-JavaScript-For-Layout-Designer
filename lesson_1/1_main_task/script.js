let budget = prompt(`Ваш бюджет?`),
    shopName = prompt(`Название вашего магазина?`);

let mainList = {
    budget,
    shopName,
    shopGoods: [],
    employers: {},
    open
}

mainList.shopGoods[0] = prompt(`Какой тип товаров будем продавать?`);
mainList.shopGoods[1] = prompt(`Какой тип товаров будем продавать?`);
mainList.shopGoods[2] = prompt(`Какой тип товаров будем продавать?`);

alert(budget / 30);
console.log(mainList);