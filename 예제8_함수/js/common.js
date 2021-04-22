//함수
/*
var,let,const
function(){}
*/

// function arrayCheck(){
//   console.log('나는 함수입니다.');
// }//선언
//
// arrayCheck();//호출

// function add() {
//   let x = 5;
//   return x;
// }
// console.log(add())

let inputText = prompt('과일을 입력해주세요.','과일명');
let array = ['사과','배','수박','포도'];
let count = 0;//전역변수
// array.push(inputText);
// array.shift();
// array.unshift(inputText);
array.splice(2,0,inputText);
console.log(array.length);
//재귀함수
function arrayCheck() {
  // let test = 9;//지역변수
  if( count < array.length ){
    alert(array[count]);
    count++;
    arrayCheck();
  }else{
    alert('더 이상 과일이 없습니다.');
  }
}

arrayCheck();
