'use strict';

const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const body = document.querySelector('body');

const Random = function(){
    let num = Math.floor(Math.random() * Math.floor(16777215));
    num = '#'+num.toString(16);
    return num;
};

btn.addEventListener('click', function(){
    let color = Random();
    text.textContent=color;
    body.style.backgroundColor = color;
    btn.style.color=color;
});