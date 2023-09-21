// Sử dụng toán tử spread (toán tử Rải) để rải các phần tử của một mảng vào
// một vị trí nào đó trong mảng mới

const users = [
    {'id': 1, 'name': 'David', 'age': 20},
    {'id': 2, 'name': 'Mary', 'age': 19}
]

const listUsers = [
    ...users, // Unpack
    {'id': 3, 'name': 'Hung', 'age': 20}
]

console.log(listUsers);

// Ex:
function getAllUsers(...listUser){ // rest param
    console.log('List of users:');
    for (const u of listUser) {
        console.log(`${u.id}, ${u.name}, ${u.age}`);
    }
}

getAllUsers(...listUsers) // spread operator
// getAllUsers({'id': 1, 'name': 'David', 'age': 20}, {'id': 2, 'name': 'Mary', 'age': 19}, {'id': 3, 'name': 'Hung', 'age': 20})