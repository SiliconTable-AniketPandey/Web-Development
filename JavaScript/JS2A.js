// let firstName = new String("Aniket")

// let lastName = "Pandey"

// console.log(firstName, typeof (firstName))

// console.log(lastName, typeof (lastName))

// console.log(lastName.length, 
//             lastName[0], 
//             lastName.includes('x'), 
//             lastName.startsWith("p"), 
//             lastName.indexOf('e'), 
//             lastName.endsWith('G'), 
//             lastName.trim(), 
//             lastName.replace('e', 'r'))

// let message = new String("This is my first message")

// console.log(message.split(" "))

// console.log(message.replace('first', 'second'))

// message = `            This is 
//             my  new   
//             message
//             my last name is ${firstName} ${lastName}` //alternative to \n use backticks (`)

//             console.log(message)


// let date1 = new Date('January 26 2005 05:45')

// console.log(date1)

// let date2 = new Date(2005,0,26,5)

// console.log(date2)

myArray = [1,2,4,5,66,77,'Apples','Mangoes']

// myArray.push('Bakwas hain yaar')

// console.log(myArray)

// myArray.unshift('Bakwas hain yaar')

// console.log(myArray)


// myArray.splice(2,0,'Bakwas hain yaar')

//check if a number exist in the array
// console.log(myArray.includes(66))

// console.log(myArray.indexOf(4,7))


// let courses = [
//     {no:1, firstName :'Aniket'},
//     {no:2, secondName: "Pandey"}

// ];

// console.log(courses);


// let person = courses.find

// console.log(person)

// let numbers = [10,20,30,40,50,60,70,80,90,100]

// let sliced = numbers.slice(5)

// console.log(sliced)

// // let combined = numbers.concat(sliced);

// // console.log(combined)

// // or

// let combined = [...numbers,'Hello there' ,...sliced, "I am at the end"]

// console.log(combined)

// let numbers = [30,20,-40,80,-50,60,-90,71,22,33,-6,5]
// console.log(typeof(numbers))


// // numbers.forEach(number=> console.log(number))


// const number = numbers.join('')

// console.log(number)
// console.log(typeof(number))

// numbers.sort((a,b) => a-b);
// console.log(numbers)

// numbers.sort((a,b) => b-a)
// console.log(numbers)

// let shoppingList = ['Apple', 'Mango', 'Spanich', 'Pumpkin', 'Beans', 'Milk', 'Curd']

// let filteredShoppingList = shoppingList.filter(function(wordLength){
//     return wordLength.length >5;
// });

// console.log(filteredShoppingList)

// let filteredNumbers = numbers.filter((negativeValues) => negativeValues < 0)

// console.log(filteredNumbers)


// let numbers = [30,20,-40,80,-50,60,-90,71,22,33,-6,5]

// let asscendingNumbers = numbers.sort(function(a,b){
//     return a - b
// })

// console.log(asscendingNumbers)

// let descendingNumbers = numbers.sort(function(a,b){
//     return b - a
// })

// console.log(descendingNumbers)


// mappedNumbers = numbers.sort((a,b) => a-b)
//     .filter((positiveValues) => positiveValues >0)
//     .map(value => 'Student_no: '+value)

// console.log(mappedNumbers);

// let numbers = [30, 20, -40, 80, -50, 60, -90, 71, 22, 33, -6, 5];

// // Step 1: Filter non-negative numbers
// let filteredNumbers = numbers.filter((value) => value >= 0);

// // Step 2: Map the filtered numbers to an array of objects
// let items = filteredNumbers.map(function(num) {
//     return { value: num };
// });

// console.log(items);

// numbers.length = 0
// console.log(numbers)


// Defining a function 

// function runningFunction(){
//     console.log('This function is running')
// }

// runningFunction();


// // Function assignment

// let idle = function walking(){
//     console.log('Walking')
// }

// idle()


// let idle2 = function(){
//     console.log('Anonymus function assignment')
// }

// idle2()

// function add(a,b){
//     let total = 0
//     for(let value of arguments){
//         total = total + value
//     }

//     return total
// }

// console.log(add(100,200,300,12,63,6,3,85,96,7,48,2,9,3,7,5,7,8,4,85,9,6,))



// function sum(num,...args,num3){
//     console.log(args)
// }

// sum(100,200,300,12,63,6,3,85,96,7,48,2,9,3,7,5,7,8,4,85,9,6)


//default parameters

// function interestCalculator(p=0,r=0,y=0){
//     return (p*r*y)/100
// }

// console.log(interestCalculator(100,10))


// getter -> used to  access properties
// setter -> used to change or update properties

let person = {
    firstName: 'Mukesh',
    lastName: 'Dalle',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(value) {
        if (typeof value !== String) {
            throw new Error('Not a string');
        }
        let parts = value.split(" ");
        if (parts.length !== 2) {
            throw new Error('Enter a valid full name');
        }
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = 1;
} 

catch (e) {
    alert(e); // Output: Not a string
}





