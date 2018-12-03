class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }

  newDiv() {
    let newDiv = document.createElement("DIV");
    newDiv.style.cssText = 
    `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign};`;

    return newDiv;
  }
}

let myEl = new Options(30, 30, 'yellow', 30,'left');

console.log(myEl.newDiv());

let myDiv = myEl.newDiv();

document.body.appendChild(myDiv);
myDiv.innerHTML = "hello";



//document.newDiv().innerHTML = "Hello!";