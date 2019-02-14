class Options {
    constructor(height,width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){

        let main = document.querySelector('.main'),
            div = document.createElement('div');

            div.textContent = 'Элемент';
            div.style.cssText = `height:${this.height};width:${this.width};background-color:${this.bg};font-size:${this.fontSize} text-align:${this.textAlign};`;

            main.appendChild(div);


    };


}

let Option = new Options(400, 800, 'pink', 26, 'center');

Option.createDiv();