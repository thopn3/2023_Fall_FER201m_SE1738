// ES5: Sử dụng từ khóa var để khai báo các biến: primative, array, object, maps, sets
// Scope: Global
// Primative
// var x = 10

// // Array
// var numbers = [10, 5, 7]

// // JSON object
// var user = {
//     "email" : "david@gmail.com",
//     "password": "123456"
// }

// console.log(x);
// console.log(numbers);
// console.log(user);

// Hạn chế của từ khóa var
// for(var i=0; i<4; i++){
//     console.log("Element: "+i);
// }
// console.log("Element outside: " + i);

// ES6: Sử dụng từ khóa 'let' để tường minh trong hoạt động khai báo biến
//      Chỉ định phạm vi hoạt động (Block scope) rõ ràng hơn
for(let j=0; j<4; j++){
    console.log("Element: "+ j);
}
// console.log("Element outside: " + j); 

// Kết luận: Sử dụng let để khai báo thì chỉ có phạm vi sử dụng là trong khối (Block scope)