// forEach, map, filter
// ----------------------------------------------------------------------------------------------------------------------

const toDo = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }
]

// forEach return each item that contain in an array
toDo.forEach(function(item) {
    console.log("forEach method", item.text) //Output: Return text per line
})

// map return an array with the results
const toDoText = toDo.map(function(todo) {
    return todo.text
})

console.log("map method", toDoText) //Output: map method [BUNCH OF TEXT]

// filter create an array filled with all array elements that pass a test (actually a function)
const toDoCompleted = toDo.filter(function(item){
    return item.isCompleted == true
})

console.log("filter method", toDoCompleted) //Output: filter method RETURN OBJECT OF ID 1 AND 2

// Constructor Function // Class in different language
// ----------------------------------------------------------------------------------------------------------------------
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = dob
}

const person1 = new Person('Johnny', 'Bravo', 555);
console.log(person1) //Output: Johnny Bravo 555

// Template literal 
// ----------------------------------------------------------------------------------------------------------------------
var name = 'Champ'
function helloWorld() {
    return `Hello, ${name}`
}

console.log(helloWorld()) //Output: Hello, Champ

// Default parameter 
// ----------------------------------------------------------------------------------------------------------------------
function greeting(greeting = 'Welcome', name = 'Thanapat') {
    return `${greeting} ${name}`
}

console.log(greeting()) //Output: Welcome Thanapat
console.log(greeting('Champ')) //Output: Champ Thanapat
console.log(greeting('Wassup', 'Champy')) //Output: Wassup Champy

// Destructuring 
// ----------------------------------------------------------------------------------------------------------------------
const points = [20, 30, 40]
const [val1, val2, val3] = points
console.log(val1, val2, val3) //Output: 20, 30, 40

const player = ['Raheem Sterling', 'Sergio Aguero', 'John Stones']
const [name1, , name3] = player
console.log(name1, name3) //Output: Raheem and Stones

const car = {
    type: 'Honda',
    color: 'Silver',
    model: '2020'
}

const { type, color, model } = car
console.log(type, color, model) //Output: Honda Silver 2020

// Arrow Function 
// ----------------------------------------------------------------------------------------------------------------------
const stars = (name) => `This is ${name} from Hollywood`
console.log(stars("Emma Stone")) //Output: This is Emma Stone from Hollywood

const album = (name) => {
    let res = name.toUpperCase()
    return `${res} is the best album in the world`
}
console.log(album("Night at the Opera")) //Output: NIGHT AT THE OPERA is the best album in the world

// Spread Operator 
// ----------------------------------------------------------------------------------------------------------------------
const movie = ['The Amazing Spider-Man', 'La La Land', 'Nomad']
console.log(...movie) //Output: elements inside movie

const starring = ['Andrew Garfield', 'Ryan Gosling', 'Jummaidai']
const merge = [...movie, ...starring]
console.log(merge) //Output: movie + starring, just like list addition in Python

// Callback Function
// ----------------------------------------------------------------------------------------------------------------------
function greeting(name) {
    console.log(`Hello, ${name} welcome to Thanapat world`)
}

function introduction(first, last, callback) {
    const fullName = `${first} ${last}`
    callback(fullName)
}

//Firstly, it will create a fulllname by input. Then greeting function will callback fullname const to display and operate under greeting func.
introduction("Thanapat", "Eurboonyanun", greeting) //Output: Hello Thanapat Eurboonyanun welcome to Thanapat world

// Promise
// ----------------------------------------------------------------------------------------------------------------------
var sunny = false
const date = new Promise(function(resolve, reject) {
    if (sunny) {
        const dateDetails = {
            name: 'James One',
            location: 'Ramkhamhaeng 2',
            table: 5
        }

        resolve(dateDetails)
    } else {
        reject(new Error('Bad weather, so no date'))
    }
})

const myDate = function() {
    date
        .then(function(done) {
            console.log("We're going to a dinner")
            console.log(done)
        })
        .catch(function(error){
            console.log(error.message)
        })
}

myDate() //Output: If true, We're going to a dinner \n return resolve which is Obj. Else, it will throw error message which is Bad whether, so no date.

// Async Await API
// ----------------------------------------------------------------------------------------------------------------------
async function fetchUsers(endpoint) {
    const res = await fetch(endpoint)
    if (!res.ok) {
        throw new Error(res.status)
    }

    let data = await res.json()

    return data
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
    .then(data => console.log(data.map(user => user.username)))
    .catch(err => console.log('Opps, there is an error', err.message))


// Frontend
// Design not care 
// React and Style component CSS
// Connect to API COVID 19 
// Display Basic Info of Covid
// Feature Sort and Search Interactive on statuc web example: Search England show england static 
// Optional: TS 
// Deadline: 9 June 2021