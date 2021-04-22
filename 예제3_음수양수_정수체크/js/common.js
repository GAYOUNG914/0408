/*변수 및 값 받아오기*/
let inputText = prompt('정수를 입력해주세요.');
// console.log(typeof(inputText));
inputText = Number(inputText);
// console.log(typeof(inputText));

if ( inputText < 0 ) {
  alert('입력하신 숫자'+inputText+'은 음수입니다.');
}else if( inputText > 0 ){
  alert('입력하신 숫자'+inputText+'은 양수입니다.');
}else{
  alert('입력하신 숫자'+inputText+'입니다.');
}
