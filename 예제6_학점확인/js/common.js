/*변수선언*/
let score = prompt('학점을 입력해주세요','숫자');

if( score == '' || score == '숫자' ){
  alert('입력된 숫자가 없습니다.');
}else{
  /*학점 확인 영역*/
  // console.log(typeof(score));
  score = Number(score);
  // console.log(typeof(score));
  if( 4.3 <= score && score <= 4.5 ){
    alert('당신의 학점은 A+ 입니다.');
  }else if( 3.9 <= score && score <= 4.2 ){
    alert('당신의 학점은 A0 입니다.');
  }else if( 3.5 <= score && score <= 3.8 ){
    alert('당신의 학점은 A- 입니다.');
  }else if( 3.2 <= score && score <= 3.4 ){
    alert('당신의 학점은 B+ 입니다.');
  }else if( 2.9 <= score && score <= 3.1 ){
    alert('당신의 학점은 B0 입니다.');
  }else if( 2.5 <= score && score <= 2.8 ){
    alert('당신의 학점은 B- 입니다.');
  }else if( 2.2 <= score && score <= 2.4 ){
    alert('당신의 학점은 C+ 입니다.');
  }else if( 1.9 <= score && score <= 2.1 ){
    alert('당신의 학점은 C0 입니다.');
  }else if( 1.5 <= score && score <= 1.8 ){
    alert('당신의 학점은 C- 입니다.');
  }else if( 1.2 <= score && score <= 1.4 ){
    alert('당신의 학점은 D+ 입니다.');
  }else if( 0.9 <= score && score <= 1.1 ){
    alert('당신의 학점은 D0 입니다.');
  }else if( 0.1 <= score && score <= 0.8 ){
    alert('당신의 학점은 D- 입니다.');
  }else if( score <= 0 ){
    alert('재수강 신청 하세요!!');
  }
}
