//변수선언
let num = '';
let count = 0;

function repeat(i,j){//i 시작하는 숫자 , j 마직막 숫자
  //실행코드
  //초기실행 시 콤마제거
  if( count == 0 ){
    if( i % 2 == 0 ){//짝수
      num += i;
      count++;
    }
  }else if( i > j ){//최대숫자 제한
    return 0;
  }else{ //초기실행이 아니라면 콤마추가
    if( i % 2 == 0 ){//짝수
      num += ','+ i;
      count++;
    }
    if( i == j ){//마지막 숫자일때
      console.log(num);
      console.log(count+'개수');
    }
  }
  i++;
  repeat(i,j);
}

repeat(50,80);
