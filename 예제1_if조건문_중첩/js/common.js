// 변수선언
let num = prompt('숫자를 입력해주세요,','숫자만 입력가능');
// let num2 = prompt('숫자를 입력해주세요,','숫자만 입력가능');

// console.log(typeof(num));
// console.log(typeof(Number(num)));

// let numberNum = num;
//
// if(typeof(num) === typeof(Number(num))){
//   console.log('자료형이 같습니다.');
// }else{
//   console.log('자료형이 같지않습니다.')
// }


if( num < 5 ){
  alert('숫자'+num+'은 5보다 작습니다.');
  if( num == 3 ){
    console.log(typeof(num)+','+typeof(3));
    alert('입력한 숫자는 3과 같지 않습니다.');
  }else{
    alert('당첨되었습니다!!!');
  }
}


/*
= : 할당, 대입
== : 같다
=== : 같다 , 테이터타입(자료형)도 같다.
*/
