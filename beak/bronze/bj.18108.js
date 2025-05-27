//백준 제출시에는 경로를 '/dev/stdin'
//로컬 테스트시에는 'input.txt'로
const input = require('fs').readFileSync('/dev/stdin').toString().split(' '); // 한 줄의 입력을 문자열배열로 가져옴
//10926번 문제랑 매우 흡사
console.log(input - 543);
