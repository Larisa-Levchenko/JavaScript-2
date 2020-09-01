'use strict';

function getZero(n) {
    if (n < 10) {
        n = '0' + n;
    }
    return n;
}

function timeDay(hour){
    if (hour > 6 && hour < 12) {
        return 'Доброе утро';
    } else if (hour > 12 && hour <18) {
        return 'Добрый день';
    } else if (hour > 18) {
        return 'Добрый вечер';
    } else {
        return 'Доброй ночи';
    }
}

function outputTime(hour,minute,sec){
    if(hour<12){
        return `${getZero(hour)}:${getZero(minute)}:${getZero(sec)} AM`;
    }else{
        return `${getZero(hour-12)}:${getZero(minute)}:${getZero(sec)} PM`;
    }
}
function getTimeREmaining() {
    let dateStop = new Date('1 January 2021').getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000/60/60/24;
        return Math.ceil(timeRemaining);
}

function getDay(n){
    if (n % 10 === 1 && Math.trunc(n / 10) !== 1) {
        return `${n} день`;
    } else {
        if (n % 10 > 1 && n % 10 < 5 && Math.trunc(n / 10) !== 1) {
            return `${n} дня`;
        } else {
            return `${n} дней`;
        }
    }
}

function getTime() {
    document.body.textContent ='';
    const date = new Date();

    var timeinterval = setInterval(getTime, 1000);

    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    let dateWeek = date.toLocaleString('ru', {
        weekday: 'long'
    });

    dateWeek = date.toLocaleString('ru', {
        weekday: 'long'
    });

    let greeting = document.createElement('p');
    greeting.textContent = timeDay(hour);
    document.body.append(greeting);

    let today = document.createElement('p');
    today.textContent = `Сегодня: ${dateWeek}`;
    document.body.append(today);


    let time = document.createElement('p');
    time.textContent = outputTime(hour, minute, sec);
    document.body.append(time);


    let newYear = document.createElement('p');
    newYear.textContent = `До нового года осталось ${getDay(getTimeREmaining())}`;
    document.body.append(newYear);
}

getTime();
