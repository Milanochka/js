let menu = document.querySelector('.menu');
    btn = document.querySelectorAll('.menu-item');



//Первое задание
menu.insertBefore(btn[2],btn[1]);
//Второе задание
let btn5 = document.createElement('li');

btn5.classList.add('menu-item');
menu.appendChild(btn5);
btn5.innerHTML = 'Пятый пункт';

//Третье задание

document.body.style.background = "url('img/apple_true.jpg')";

//Четвертое задание

let title = document.querySelector('.title');

title.innerHTML = 'Мы продаем только подлинную технику Apple';

//Пятое задание

let banner = document.querySelector('.adv');

banner.remove();

// Шестое задание
let question = prompt('Как вы относитесь к технике Apple', '');
let answer = document.querySelector('#prompt');

answer.appendChild(document.createTextNode(question));

