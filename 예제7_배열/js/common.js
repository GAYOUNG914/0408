/*배열선언*/
// let array = [123,456,789];
// console.log(array.length);
/*
배열의 index 값은 0 부터 시작한다.
첫번째 배열의 값을 가져올때는 arry[0]이고,
arry.length
*/
//
// // let inputText = prompt('과일을 입력해주세요.','과일명');
// let array = ['사과','배','수박','포도'];
// // let addArray = ['귤','망고'];
// // array.push('귤','망고');// push 배열의 뒷쪽에 배열추가
// // array.unshift('귤');//배열 앞쪽추가
// // array.shift();//배열 앞쪽삭제
// // array.pop();//배열 뒷쪽삭제
// // array.splice(2,2,'귤');//첫번째 인자 : index , 두번째 인자 : 갯수, 배열
// // 배열 자르고 반환하고 기존 배열에서 반환한 배열을 삭제된다. 예는 두번째 두개 귤을 뽑는다.라고 해석
// // arry.slice(0,1);// 첫번째 인자 : 시작index, 두번째 인자 : 끝index (미포함);
// // 배열 자르고 반환하고 기존 배열에서 반환한 배열을 삭제하지 않는다.
// let getElem = array.slice(0,2);
// console.log(getElem);

// splice 예제
// let food = ['카레','피자','치킨','크림파스타'];
// food.splice(0,1);
// console.log(food);
// console.log(food.splice(0,1));


let food = ['카레','피자','치킨','크림파스타'];
console.log(food.slice(0,1));
console.log(food);
console.log(food.splice(0,1));
