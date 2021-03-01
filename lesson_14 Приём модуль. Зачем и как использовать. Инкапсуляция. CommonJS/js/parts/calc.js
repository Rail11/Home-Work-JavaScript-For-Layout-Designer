function calc() {
    let persons = document.getElementsByClassName('counter-block-input')[0],
        restDays = document.getElementsByClassName('counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    function totalAnimate() {
        totalValue.classList.add('animFontSize');
        function removeTotalAnimate() {
            totalValue.classList.remove('animFontSize');
        };
        setTimeout(removeTotalAnimate, 2500);
    };

    persons.addEventListener('change', function() {
        personsSum = +this.value;
        total = (daysSum * personsSum)*4000;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            totalAnimate();
        };
    });

    restDays.addEventListener('change', function() {
        daysSum = +this.value;
        total = (daysSum * personsSum)*4000;
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            totalAnimate();
        };
    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalAnimate();
            /* Берём коэффициент value у option */
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        };
    });
};

module.exports = {calc};