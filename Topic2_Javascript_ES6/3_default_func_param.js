// Định nghĩa 1 hàm với các tham số có giá trị mặc định
function sumTwoNumbers(a=10, b=20){
    return a + b
}

console.log(sumTwoNumbers());
console.log(sumTwoNumbers(5,7));
console.log(sumTwoNumbers(6));
console.log(sumTwoNumbers(undefined, 8));
console.log(sumTwoNumbers(undefined, undefined));
