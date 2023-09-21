// Sử dụng 'const' - Constant để khai báo biến

// #1. Primative data type
const PI = 3.14
// PI = 3.15 - Vi phạm, vì không thể thay đổi giá trị đối với constant
console.log(PI)

// #2. Constant vs Object
const student = Object.freeze( {
    "id": 1,
    "name": "David",
    "age": 20,
    "address": {
        "street": "Cau Coc",
        "state": "Nam Tu Liem"
    }
}) // Anonymous object - Initial object

student.name = "David Beckham"
student.age = 21
student.address.street = "Nguyen Huu Hung"

console.log(`ID: ${student.id}, Name: ${student.name}, Age: ${student.age}, Street: ${student.address.street}`)
console.log(student);

// #3. Constant vs Array
const students = [
    {"id": 1, "name": "John", "email":"john@gmail.com"},
    {"id": 2, "name": "Mary", "email":"mary@gmail.com"},
    {"id": 3, "name": "Tom", "email":"tom@gmail.com"},
    {"id": 4, "name": "John", "email": "john1@gmail.com"}
]

// Thêm 1 phần tử vào mảng
students.push({
    id: 4,
    name: "John",
    email: "joe@gmail.com"
})

console.log(students);

// List danh sách các student trong mảng students, phân tách giữa các thuộc tính bởi dấu ','
for (let i = 0; i < students.length; i++) {
    const e = students[i];
    console.log(`${e.id}, ${e.name}, ${e.email}`);
}

for (const e of students) {
    console.log(`${e.id}, ${e.name}, ${e.email}`);
}

// Bài tập: Javascript ES6
/*
    Cho 1 mảng có cấu trúc sau:
    const students = [
        {"id": 1, "name": "John", "email":"john@gmail.com"},
        {"id": 2, "name": "Mary", "email":"mary@gmail.com"},
        {"id": 3, "name": "Tom", "email":"tom@gmail.com"},
        {"id": 4, "name": "John", "email": "john1@gmail.com"}
    ]

    Viết các hàm thực hiện các chức năng trên mảng 'students':
    - Thêm 1 sinh viên vào mảng và Hiển thị
    - In danh sách các sinh viên 
    - Tìm và in ra danh sách các sinh viên có tên bắt đầu bởi từ khóa cần tìm
    - Sửa đổi email của sinh viên theo id được cung cấp và in danh sách sau các sinh viên
    - Sắp xếp và hiển thị danh sách sinh viên theo thứ tự tăng dần theo tên, và giảm dần theo id
      (nếu trùng tên)
    - Loại bỏ sinh viên theo id
*/
