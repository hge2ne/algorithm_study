const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number);

const answer = input.reduce((a,b)=> a+b);

console.log(answer)
