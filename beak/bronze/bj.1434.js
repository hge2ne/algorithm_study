//백준 제출시에는 경로를 '/dev/stdin'
//로컬 테스트시에는 'input.txt'로
const input = require('fs').readFileSync('/dev/stdin').toString().split(' '); // 한 줄의 입력을 문자열배열로 가져옴

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

console.log((a+b)%c);
console.log((((a%c)+(b%c))%c));
console.log((a*b)%c);
console.log(((a%c)*(b%c))%c);
/* Number 대신 parseInt 사용하기도하는데 A,B,C가 정수인 경우 가능
Number() : 타입을 숫자로 바꾸기 가능
String() : 문자열로 정렬인줄 알았는데 숫자를 문자열로 변환 가능하다고 함
const [A,B,C] = input; 으로도 대체가능*/