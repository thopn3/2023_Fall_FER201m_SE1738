// Khai bao cac thanh phan trong module 'lib.js'
let message = 'Hello World'

let objUser = {'id': 1, 'name': 'David'}

let studentList = [
    {'id': 1, 'fName': 'Dung', 'lName': 'Nguyen Hoang'},
    {'id': 2, 'fName': 'Huyen', 'lName': 'Pham Thanh'}
]

export default function getName(){
    return 'Binh Minh'
}

export {
    message,
    objUser,
    studentList
}