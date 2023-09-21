const user = {
    'firstname' : 'Dung',
    'lastname': 'Pham Tien',
    'age': 20,
    'email': 'dungpt@fpt.edu.vn',
    'password': '123456'
}
// Object destructuring
// const {firstname, lastname} = user
// console.log(firstname+ " " + lastname);

// {fName, lName, email}
const {
    firstname: fName, // Lấy ra thuộc tính của đối tượng user và đổi tên mới
    lastname: lName,
    email
} = user

console.log(`Fullname: ${fName} ${lName}, Email: ${email}`);


// Array destructuring
const students = [
    {   // element 1
        'classes': [
            {'id': 1, 'name': 'SE1738'},
            {'id': 2, 'name': 'SE1739'},
            {'id': 3, 'name': 'SE1740'}
        ]
    },
    {   // element 2
        'courses': [
            {'id': 1, 'name': 'FER201', 'credit': 3},
            {'id': 2, 'name': 'SDN301', 'credit': 3}
        ]
    }
]

const [listClasses, listCourses] = students

console.log(listClasses);
console.log(listCourses);
// Object destructuring
const {classes} = listClasses
const {courses} = listCourses

console.log("List of classes: ");
for (const c of classes) {
    console.log(`${c.id}, ${c.name}`);
}

console.log("List of courses: ");
for (const c of courses) {
    console.log(`${c.id}, ${c.name}, ${c.credit}`);
}