'use strict';

let num = 5;
let str1 = '        hello     ';
let bool = true;
let str2 = '   fghfkfkfkfkkkfkfkkfkfkkfkkfkfkfkfkkffkpooooojj4566t3bbfbvnbjbfjvjbfjbbvfb';

//Функция удаляет все пробелы в начале
const delFirstSpace = function(arg){
    while(arg[0]===' '){
        let len = arg.length;        
        arg = arg.substring(1,len);
    }
    return arg;
};
//Функция удаляет все пробелы в конце
const delLastSpace = function(arg){
    let len = arg.length-1;    
    while(arg[len]===' '){      
      arg = arg.substring(0,len);
      len--;           
    }   
    return arg;
};
//Если более 30 знаков заменяет текст на точки
const delSymbol = function(arg){
    let len = arg.length;
    if (len>30){
        arg = arg.substring(0,30);
        arg +='...';        
    }
    return arg;    
};


const inputData = function(arg){    
    if(typeof(arg)!=='string'){
        return 'В качестве аргумента передана не строка';
    }else{
        arg = delFirstSpace(arg);
        arg = delLastSpace(arg);
        arg = delSymbol(arg);
        return arg;
    }
};

console.log(inputData(num));
console.log(inputData(str1));
console.log(inputData(bool));
console.log(inputData(str2));

