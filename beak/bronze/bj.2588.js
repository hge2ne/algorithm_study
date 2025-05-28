const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);
// 입력값을 받아서 바로 숫자로 변환

// 두 번째 숫자의 각 자릿수를 수학적 연산으로 분리
const oneNum = input[1] % 10;                    // 일의 자리 구하기 (나머지 연산자 사용)
const tenNum = Math.floor((input[1] % 100) / 10);// 십의 자리 구하기
const hundredNum = Math.floor(input[1] / 100);   // 백의 자리 구하기

// 결과 출력
console.log(input[0] * oneNum);     // 일의 자리 곱셈 결과
console.log(input[0] * tenNum);     // 십의 자리 곱셈 결과
console.log(input[0] * hundredNum); // 백의 자리 곱셈 결과
console.log(input[0] * input[1]);   // 전체 곱셈 결과
//split('\n') : 키보드 엔터 줄바꿈//
//map('Number') : Array 에 쓰는, 문자열 배열을 숫자로 변환하여 재배열해줌
//Math.floor : 나머지 소수점 버림 메서드