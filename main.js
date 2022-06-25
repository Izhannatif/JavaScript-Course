console.log('hello')
console.error('Error')
console.warn('Warning')
let age = 20 //through let you can directly change variable's value.
age = 25
const number = 10 //const is a constant and you cannot change its value directly.
const name = 'Izhan';
age=20;
console.log(`My name is ${name} and I ame ${age}`)


//arrays
let numbers = new Array();
numbers = [1,2,3,4,5]
numbers.push(10) //adding value at the end
numbers.unshift(0) // adding value at the beginning
console.log(numbers)

const Student = {
    firstName :'Izhan',
    lastName : 'Atif',
    age: 20,
    field : 'ComputerScience',
    address : {
        apartment: 'Al mustafa homes',
        street : 'Shahani Street'
    },
    skills : ['Html' , 'CSS' , 'Javascript', 'Python'],
}


console.log(Student)

const todos = [
    {
        id : 1,
        text: 'Attend Class',
        isCompleted : true
    },

    {
        id:2,
        text:'Eat Lunch',
        isCompleted:true
    },

    {
        id:3,
        text:'Sleep',
        isCompleted:false
    }

]

console.log(todos)

const JSONconvertedTodos = JSON.stringify(todos); //used to convert the above array into JSON Format. Json in useful in API's and shit.
console.log(JSONconvertedTodos)


//For Loop
for(let i =0 ; i<=10 ;i++){
    console.log(i)
}

let i = 0;
while(i<10){
    console.log(i)
    i++;
}

for(let todo of todos){
console.log(todo.text)
}

//iteration for arrays use for each
todos.forEach(function(todo){
console.log(todo.text)
});

//mapping array
const todoText = todos.map(function(todo){
    return todo.text;
})

console.log(todoText)

//filtering array 

const completedTodo = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
})

console.log(completedTodo)

//creating functions
function multiply(a,b){
    console.log(a*b);
}
//calling function
multiply(10,20);

//class contruction
class Person{
    constructor(firstName,lastName,DoB){
    this.firstName =firstName;
    this.lastName=lastName;
    this.DoB = new Date(DoB);
} 
getFullName() {
    return `${this.firstName} ${this.lastName}`;
}
}
//prototyping
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Instantiate Object
const person1 = new Person('Izhan','Atif', '11-21-2001');
console.log(person1.getFullName());
console.log(person1);



// DOM MANIPULLATION LESGOO

const items =  document.querySelectorAll('.item');
items.forEach((item) =>
    console.log(item)
)

const ul = document.querySelector('.items');
ul.firstElementChild.textContent = 'Ez shit';
ul.children[1].innerText ='Izhan';
ul.lastElementChild.innerHTML = '<b> Hello </b>';

const btn = document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    console.log('hovered')
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark')
    document.querySelector('label').innerText = 'First name'
})

const myform = document.querySelector('#my-form');
const nameInp = document.querySelector('#name');
const emailInp = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myform.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    if (nameInp.value === '' || emailInp.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Invalid Name or Email'
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInp.value}, ${emailInp.value}`));
        userList.appendChild(li);
        nameInp.value = '';
        emailInp.value='';
    }
}

