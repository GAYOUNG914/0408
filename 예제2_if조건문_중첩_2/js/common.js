/*시간나누기*/
// 변수선언
// let date = new Date();
// let hour = date.getHours();
// console.log(hour);

let hour = 15;

//조건문
// 11이전 아침식사, 15시이전 점심식사
if( hour < 11 ){
  alert('아침 먹을 시간입니다.');
}else{
  if( hour < 15 ){
    alert('점심 먹을 시간입니다.');
  }else{
    alert('저녁 먹을 시간입니다.');
  }
}
