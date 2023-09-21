// function add(a, b){
//     console.log(a+b);
// }

// new way: Sử dụng 1 biến để tham chiếu tới hàm ẩn danh
// const add = function(a,b){
//     console.log(a+b);
// }

// arrow function (hàm mũi tên) -> Sử dụng cú pháp Lamda expression
const add = (a, b) => console.log(a+b);

add(10, 20);