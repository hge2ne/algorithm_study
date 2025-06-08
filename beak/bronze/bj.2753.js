const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString()

const year = parseInt(input)

if(year %4 === 0){
    if((year % 100 !==0)||(year % 400 === 0)){
        console.log(1);

        //직역 :
        //yaer 가 4로 나눠떨어지고(나머지 없이), 100으로 나눠떨어지지 않는다면(!==)
        //|| 또는 4로 나뉘어 떨어지고(나머지 없이), year 가 400으로 나누어떨어짐
        //<==와 === 차이 >
        //== : 느슨한(동등)비교. 타입 비교 X ex) '5' == 5 ->true(문자열vs숫자)
        //=== : 엄격(일치)비교. 타입 비교 O ex) 's' === 5 ->false(타입 다름)

    } else {
        console.log(0);
    }
}else {
    console.log(0);
}
/* 문제 잘읽기
조건1. 윤년 : year가 4의 배수 동시에 100의 배수X
조건2. year가 4의 배수. 동시에 400의 배수
4의 배수 ( 100의 배수X OR 400의 배수
이 구조임. if 중첩 가능하다.*/