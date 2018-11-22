let menuItem = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    adv = document.querySelector('.adv'),
    title = document.querySelector('#title'),
    promptBlock = document.querySelector('#prompt');

menu.insertBefore(menuItem[2], menuItem[1]);

title.innerHTML = 'Мы продаем только подлинную технику Apple';


document.body.style.background = "url(./img/apple_true.jpg)";

adv.style.display = 'none';

let answer = prompt('Как вы отностесь к технике Apple?');
promptBlock.innerHTML = answer;

let li = document.createElement('li');
li.className = 'menu-item';
li.innerHTML = 'Пятый пункт';

menu.appendChild(li);








