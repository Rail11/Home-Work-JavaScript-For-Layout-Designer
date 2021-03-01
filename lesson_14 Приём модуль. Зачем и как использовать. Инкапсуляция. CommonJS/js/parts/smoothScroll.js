function smoothScroll() {
    /* Плавная прокрутка страницы по якорям (по ссылкам) */
    /* Способ №1 */
    /* const anchors = document.querySelectorAll(`.scroll-to`);
    for (let item of anchors) {
        item.addEventListener('click', function (e) {
          e.preventDefault()
          
          const blockID = item.getAttribute('href')
        //   scrollIntoView() делает прокрутку в замисимости от параметров behavior и block
          document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        })
    } */
    /* Способ №2 */
    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(
            function animate(time) {
                let timePassed = time - start;
                if (timePassed > duration) {
                    timePassed = duration;
                };

                draw(timePassed);

                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                };
            }
        );
    };

    let menu = document.getElementsByTagName('nav')[0];

    menu.addEventListener('click', function(event) {
        event.preventDefault();
        animate(function(timePassed) {
            let target = event.target;
            let section = document.getElementById(target.getAttribute('href').slice(1));
            window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
        }, 1500)
    });
};

module.exports = {smoothScroll};