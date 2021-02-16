/* 
Задание
2) Используя синтаксис ES6:
Создать класс options
Он должен содержать свойства: height, width, bg, fontSize, textAlign
Он должен содержать метод, создающий новый div на странице, 
записывающий в него любой текст и при помощи cssText изменять 
свой стиль из переданных параметров
Создать новый объект через класс
Вызвать его метод и получить элемент на странице */
`use strict`;

class Options {
    constructor(height, width, bg, fontSize, textAlign, someText) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.someText = someText;
    }
    createDiv() {
        let newDiv = document.createElement('div');
        newDiv.classList.add('black');
        document.body.appendChild(newDiv);
        newDiv.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: ${this.bg};
        font-size: ${this.fontSize};
        text-align: ${this.textAlign};
        `;
        newDiv.innerHTML = `${this.someText}`;
    }
}

let exampleDiv1 = new Options(`500px`, `700px`, `green`, `100px`, `center`, `BeatBox`);
let exampleDiv2 = new Options(`500px`, `700px`, `red`, `50px`, `center`, `For Life`);

exampleDiv1.createDiv();
exampleDiv2.createDiv();


