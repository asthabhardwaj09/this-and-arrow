//arrow function

// this keyword ==> current context ko refer karta hai
const user={
    username:'astha',
    price:99,
    welcomemessage: function(){

       console.log(`${this.username} ,wellcome to the website`);
    console.log(this);  
    }
}

user.welcomemessage()
user.username='Mukul'
user.welcomemessage()  
console.log(this);  //empty{} output

// In the Browser:
// Global variables are stored as properties of the window object.
// In Node.js:
// Global variables are attached to the global object instead of window.

//-----------------------------------------------

//arrow function
function chai(){
    let username='astha'
    console.log(this); // jb hum kise function k andar this ko print kartey hai node environment k andar 
    // console.log(this.username); (undefined output)this function k andar kam nhi kar raha hai it works with object
}

chai()
// _________________________ this will also print undefined
const chai= function(){
    let username="astha"
    console.log(this.username)
}

chai()

const one= ()  => {
    let username="astha"
    console.log(this);
    
    console.log(this.username)
}
one()

const add_two_number =(num1,num2) => {
    return num1+num2
}

console.log(addtwonumber(2,3))


const add_two=(num1,num2) => num1 + num2
const addtwo=(num1,num2) => (num1 + num2)

const addtwonumber=(num1 , num2) =>({username:'astha'})
// console.log(this.username);  // undefined
console.log(addtwonumber(2,3));



