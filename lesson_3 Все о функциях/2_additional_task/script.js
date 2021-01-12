/* УСЛОЖНЕННОЕ ЗАДАНИЕ (НЕОБЯЗАТЕЛЬНОЕ):
Необходимо выполнить в отдельном js файле, подключенному к 
отдельной html странице
1) У вас есть str = “урок-3-был слишком легким”
Сделать так, чтобы строка начиналась с большой буквы
2) Теперь замените все “-” на пробелы
Вывести в консоль
3) Из получившейся строки вырезать слово “легким”, заменить 2 
последние буквы на “о”
Вывести на экран
4) У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
Вывести в консоль квадратный корень из суммы кубов его элементов
5) Добавить папку с усложненным заданием в свой репозиторий на 
GitHub */

let str = `урок-3-был слишком легким`;

str = str[0].toUpperCase() + str.slice(1);
console.log(str);

str = str.replace(/-/g, ` `);
console.log(str);

let word = str.slice(19);
console.log(word);
word = word.replace(`им`, `о`);
console.log(word);

str = str.slice(0, 18);
console.log(str);

str = str + ` ` + word;
console.log(str)

let arr = [20, 33, 1, `Человек`, 2, 3],
    sum = 0;


arr.forEach(e => {
    if(typeof(e) === `string`){
        arr.splice(arr.indexOf(e), 1);
    } else {
        e = e;
    }
});
console.log(arr);

arr.forEach(e => {
    sum += (e ** 3);
});

console.log(sum);
console.log(Math.sqrt(sum));