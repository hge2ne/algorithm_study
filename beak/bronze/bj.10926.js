//백준 제출시에는 경로를 '/dev/stdin'
//로컬 테스트시에는 'input.txt'로
const inputData = require('fs').readFileSync('/dev/stdin').toString().trim(); // 한 줄의 입력을 문자열배열로 가져옴


console.log(inputData+ '??!');

//input : 값 입력 시 작동 요청
//inputData : 값 불러오기 요청
// split : 입력 데이터 여러개일때, 띄어쓰기 없앰 + 파싱
//여기선 필요없음
//trim() : 문자열 공백 삭제