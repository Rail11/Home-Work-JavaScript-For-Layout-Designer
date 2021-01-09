let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {

    if (week[i] == 'Суббота') {
        week[i] = `<i>${week[i]}</i>`;
    } else if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
        week[i] = `<b>${week[i]}</b>`;
    } else {
        console.log();
    }

    week[i] = week[i] + `<br>`;
    document.write(week[i]);
}

let arr = [`36795623`, `67375904`, `74961412397`, `7874019231`, `11123311`, `3244431`, `852222345`];

for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] == 3 || arr[i][0] == 7) {
        console.log(arr[i]);
    }
}
