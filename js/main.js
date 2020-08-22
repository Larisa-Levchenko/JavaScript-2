'use strict';

const content =document.querySelector('.content');

const getMonth = function(n, str){
    if(n!==3 && n!==8){        
      return str.substring(0,str.length-1)+'я';
    }else{
        
        return str+'a';
    }    
};


const getHour = function(n){
    if(n===1 || n===21){
        return `${n} час`;
    }else{
        if (n % 10 > 1 && n % 10 < 5 && Math.trunc(n/10)!==1) {
            return `${n} часа`;
        }
        else{
            return `${n} часов`;
        }
    } 
};
const getMinute = function (n) {
    if (n % 10 === 1 && Math.trunc(n / 10) !== 1) {
        return `${n} минута`;
    } else {
        if (n % 10 > 1 && n % 10 < 5 && Math.trunc(n / 10) !== 1) {
            return `${n} минуты`;
        } else {
            return `${n} минут`;
        }
    }
};
const getSec = function(n){
    if (n % 10 === 1 && Math.trunc(n / 10) !== 1){
        return `${n} секунда`;
    } else {
        if (n % 10 > 1 && n % 10 < 5 && Math.trunc(n / 10) !== 1) {
            return `${n} секунды`;
        }else{
            return `${n} секунд`;
        }    
    }
};

const getZero = function (n) {
    if(n<10){
        return `0${n}`;
    }else{
        return n;
    }

};





setTimeout(function run() {
    const date = new Date();    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let sec = date.getSeconds();

    let dateWeek = date.toLocaleString('ru', {
        weekday: 'long'
    });
    let longMonth = date.toLocaleString('ru', {
        month: 'long'
    });

    let str1 = `Сегодня ${dateWeek}, ${day} ${getMonth(month,longMonth)} ${year} года, ${getHour(hour)} ${getMinute(minute)} ${getSec(sec)}`;
    let str2 = `${getZero(day)}.${getZero(month)}.${year} - ${getZero(hour)}:${getZero(minute)}:${getZero(sec)}`;

    content.textContent='';
    const p1 = document.createElement('p');
    p1.textContent = str1;
    content.append(p1);
    const p2 = document.createElement('p');
    p2.textContent = str2;
    content.append(p2);
    
    setTimeout(run, 1000);
}, 1000);
 
