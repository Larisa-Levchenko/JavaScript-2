let lang = prompt('Введите "ru" или "en"');

if (lang ==='ru'){
    console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
}else if(lang ==='en'){
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

switch(lang){
    case 'ru':
        console.log('понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}

let days = {
    ru: ['понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
    en: ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
};

console.log(days[lang]);


let namePerson = prompt('Введите имя');

let result = namePerson==='Артем' ? console.log('директор') 
: namePerson ==='Максим' ? console.log('преподаватель') : console.log('студент');