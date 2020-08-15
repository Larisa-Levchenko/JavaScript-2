'use strict';

let arr =['1526677','2222','46766779','399991113', '24567', '783332456', '2787712'];

for (let i = 0; i < arr.length; i++) {
    let firstElem = arr[i].substring(0,1);   
    if (firstElem === '2' || firstElem === '4') {
        console.log(arr[i]);
    }
}

//функция проверки простое число или нет
const changeSimple = function(n){
    let simple = true;
    for(let i = 2; i<=Math.sqrt(n); i++){
        if(n%i===0){
            simple = false;            
            continue;
        }
    }
    return(simple);
};

for(let i = 2; i<100; i++){
    if(changeSimple(i)){
        console.log(i);
        console.log('Делители этого числа: 1 и ' + i);
    }
    
}
