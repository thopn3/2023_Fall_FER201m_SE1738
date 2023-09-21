// Định nghĩa 1 hàm với tham số rest (phần còn lại)
function funcDemo(a, b, ...list){
    console.log(a);
    console.log(b);
    console.log(list);
}

funcDemo(10, 20, 30, true, 3.5, "hello") // list = [30, true, 3.5, "hello"]
// pack các đối số truyền vào thành một mảng

// Ex:
function sumNumbers(...numbers){
    let total = 0;
    for (const item of numbers) {
        if(typeof item === "number")
            total += item
    }
    console.log("Output: " + total);
}

sumNumbers(20, "hello", 30, true, 3.5) // Output: 53.5
