let box = document.querySelector('.box'),
    button = document.querySelector('button');

/* let width = box.clientWidth,
    height = box.clientHeight; */

/*   let width = box.offsetWidth,
      height = box.offsetHeight; */


/* let width = box.scrollWidth,
    height = box.scrollHeight; */

let width = box.clientWidth,
    height = box.clientHeight;


console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
/* console.log(document.documentElement.scrollTop); */

button.addEventListener('click', function () {
   // box.style.height = box.scrollHeight + 'px';
   //console.log(box.scrollTop);
   box.scrollTop = 0;
});

/* scrollBy(x, y) */

/* scrollTo(x, y)  перемещает на определенные координаты на странице*/