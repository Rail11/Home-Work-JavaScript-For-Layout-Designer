/* 1) Написать функцию, которая будет спрашивать у пользователя 
сколько массивов включить во внутрь arr
2) Заполняет их несколькими произвольными числами (не больше 5) и 
выводит сумму элементов этого массива
3) Добавить папку с усложненным заданием в свой репозиторий на 
GitHub */

let arr = [];
    sum = 0;
function askUser() {
    let arrNumb = +prompt(`Сколько массивов включить во внутрь arr?`, ``);

    for (let i = 0; i < arrNumb; i++) {
        arr.push([Math.round(Math.random() * 100000)]);
    }

    for (let i = 0; i < arr.length; i++) {
        sum += +arr[i]; 
    }

}

askUser();
console.log(arr);
console.log(sum);