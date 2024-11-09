console.log("Hello JS1B");


//variable
let a = 5; // dynamic typed language like python. Does not require you to sepecify the datatype that the variable is going to hold
console.log(a);

let b = true;

console.log(b);

// if (true){
//     var aa = 14;
//     console.log(aa);
// }


// console.log(aa);


//constants

const c = 4;

console.log(c)
let d = null;

console.log(d);

//magic

let name = "Aniket";

console.log(name);

name = "Pandey"

console.log(name)

name = 45;

console.log(name)

//but not 
// let name = 54;

let person = {
    age : 12,
    firstName : "Manoj",
    lastName : "Sinha"
}

console.log(person.firstName, person.age, person.lastName);
console.log(person['firstName'], person['age'], person['lastName']);

let names = ['Aniket', 23, "jackFruit", 44.567]

console.log(names)

names[0] = "Manoj";
console.log(names);

let h = 10;

console.log(--h)
console.log(h--)

let aa = 5;
let bb = 10;

let ans1 = (++aa) * (--bb); console.log(ans1);
let ans2 = (aa++) * (--bb); console.log(ans2);
let ans3 = (aa++) * (bb--); console.log(ans3);
let ans4 = (++aa) * (bb--); console.log(ans4);

console.log(2>3)