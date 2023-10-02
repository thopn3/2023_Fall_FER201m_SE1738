// Khai bao thu vien su dung trong module nay
import getName, {message, objUser, studentList} from './lib.js'

// Tao 1 element tren cay DOM
const h1Element = document.createElement('h1')
h1Element.id = 'heading1'
h1Element.className = 'Heading1'
h1Element.textContent = message

// Tao doi tuong de mapping toi khoi co id='root'
const root = document.getElementById('root')

// Bo sung h1Element vao root
root.appendChild(h1Element)

