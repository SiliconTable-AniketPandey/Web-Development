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
console.log(myArray.includes(66))

console.log(myArray.indexOf(4,7))


let courses = [
    {no:1, firstName :'Aniket'},
    {no:2, secondName: "Pandey"}

];

console.log(courses);


let person =  courses.find(function(person){
    return person.firstName == "Aniket";

})

console.log(person)