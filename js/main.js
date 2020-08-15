'use strict';

let div = document.getElementById('div');
let week = ['понедельник', 'вторник','среда','четверг','пятница','суббота','воскресенье'];

let dateWeek = new Date().toLocaleString('ru', {weekday: 'long'});
let liFirst = document.createElement('p');


for (let i = 0; i < week.length; i++) {
    if (week[i] === dateWeek && (week[i] === 'суббота' || week[i] === 'воскресенье')) {
        div.innerHTML = div.innerHTML + week[i].bold().italics() + '<br>';
    } else if (week[i] === 'суббота' || week[i] === 'воскресенье') {
        div.innerHTML = div.innerHTML + week[i].italics() + '<br>';
    } else if (week[i] === dateWeek) {
        div.innerHTML = div.innerHTML + week[i].bold() + '<br>';
    } else {
        div.innerHTML = div.innerHTML + week[i] + '<br>';
    }
}
