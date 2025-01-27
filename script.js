
//1
let arr = [
    [{ a: { price: 20 } }],
    [{ a: { price: 35 } }],
    [{ a: { price: 44 } }]
  ];
  let total = 0;
  console.log(arr);
  console.log(arr[0][0].a.price + arr[1][0].a.price+ arr[2][0].a.price ); 

//2
    
let arr1 = [1, 2, false, 'hello', 24, 'world', undefined, null, 'error', 22 , 24 , 25 ];

let number = arr1.filter(item => typeof item === 'number').length;
if (number > 5) {
  console.log('Good!');
} 
 else {
    console.log("Ошибка!");
    
}

