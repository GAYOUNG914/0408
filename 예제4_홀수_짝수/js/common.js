/*변수 및 값 받아오기*/
let inputText = prompt('숫자를 입력해주세요.','숫자');

// if( isNaN(inputText) ){
//   alert('숫자를 입력해주세요.');
//   // inputText = prompt('숫자를 입력해주세요.','숫자');
// }else if( inputText % 2 == 1 ){
//   alert('입력하신 숫자'+inputText+'은 홀수 입니다.');
// }else if( inputText % 2 == 0 ){
//   alert('입력하신 숫자'+inputText+'은 짝수 입니다.');
// }

if ( inputText == '숫자' || inputText == '' ) {
  alert('입력된 값이 없습니다.');
}else {
  if ( isNaN(inputText) ) {
    alert('숫자를 입력해주세요.');
  }else{
    if ( inputText % 2 == 1 ) {
      alert('입력하신 숫자'+inputText+'은 홀수 입니다.');
    }else{
      alert('입력하신 숫자'+inputText+'은 짝수 입니다.');
    }
  }
}
