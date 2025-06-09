const fs = require('fs')
const inputData = fs.readFileSync('/dev/stdin').toString();

const num = parseInt(inputData);//inputData를 문자=>숫자로 변환

if(num >=90 && num <= 100){
    console.log('A');
}
else if(num >=80 && num <= 89){
    console.log('B');
} else if(num >=70 && num <= 79){
    console.log('C');
} else if(num >=60 && num <= 69){
    console.log('D');
} else {//else는 범위설정 안해도 됨
    console.log('F');
}