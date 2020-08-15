'use strict';

let week = ['понедельник', 'вторник','среда','четверг','пятница','суббота','воскресенье'];


let dateWeek = new Date().toLocaleString('ru', {weekday: 'long'});

for (let i = 0; i < week.length; i++) {
    if (week[i] === dateWeek) {
        console.log('%c%s', 'font-weight: bold;', week[i]);
    } else if (week[i] === 'суббота' || week[i] === 'воскресенье') {
        console.log('%c%s', 'font-style: italic;', week[i]);
    } else {
        console.log(week[i]);
    }
}

