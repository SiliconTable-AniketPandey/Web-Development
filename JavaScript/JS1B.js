// console.log("Hello JS1B");


// //variable
// let a = 5; // dynamic typed language like python. Does not require you to sepecify the datatype that the variable is going to hold
// console.log(a);

// let b = true;

// console.log(b);

// // if (true){
// //     var aa = 14;
// //     console.log(aa);
// // }


// // console.log(aa);


// //constants

// const c = 4;

// console.log(c)
// let d = null;

// console.log(d);

// //magic

// let name = "Aniket";

// console.log(name);

// name = "Pandey"

// console.log(name)

// name = 45;

// console.log(name)

// //but not 
// // let name = 54;

// // let person = {
// //     age : 12,
// //     firstName : "Manoj",
// //     lastName : "Sinha"
// // }

// // console.log(person.firstName, person.age, person.lastName);
// // console.log(person['firstName'], person['age'], person['lastName']);

// // let names = ['Aniket', 23, "jackFruit", 44.567]

// // console.log(names)

// // names[0] = "Manoj";
// // console.log(names);

// // let h = 10;

// // console.log(--h)
// // console.log(h--)

// // let aa = 5;
// // let bb = 10;

// // let ans1 = (++aa) * (--bb); console.log(ans1);
// // let ans2 = (aa++) * (--bb); console.log(ans2);
// // let ans3 = (aa++) * (bb--); console.log(ans3);
// // let ans4 = (++aa) * (bb--); console.log(ans4);

// // console.log(2>3)

// // let age = 17;

// // let eligibility = (age>=18)? "Yes vote" : "No vote";

// // console.log(eligibility);

// // value1 = false || false;
// // console.log(value1);

// // value2 = true || false;
// // console.log(value2);

// // value3 = 'Aniket' || false;
// // console.log(value3);


// // value4 = 44 || 55;
// // console.log(value4);

// // value5 = true && false;
// // console.log(value5)

// // value6 = 'Aniket' && true;
// // console.log(value6);

// // value7 = 66 && 77;
// // console.log(value7);

// // value8 = true || 'Aniket';
// // console.log(value8)

// let marks = 100;
// if(marks>=90){
//     console.log('A');
// }

// else if (marks>=80){
//     console.log('B');
// }

// else if (marks>=70){
//     marks.log('C');
// }

// else{
//     console.log('FAIL');
// }

// let value = 2;

// switch(value){
//     case 1 : console.log("A");
//     break;
//     case 2 :console.log("B");
//     break;
//     case 3 :console.log("C")
//     break;
//     default: console.log("FAIL")
// }

// for ( i = 0; i <= 5 ; i++){
//     console.log(i);
// }

// // creating an object and function
// // A function inside an object is called a method

// // let rectangle = {
// //     length: 1,
// //     breadth: 2,
// //     draw :  function(){
// //         console.log("hello method");
// //     }
// // };

// // console.log(rectangle)

// // rectangle.draw()


//factory function

// function createRectangle() {
//     let rectangle = {
//         length: 1,
//         breadth: 2,

//         draw: function() {
//             console.log("draw method called")
//         }
//     };
//     return rectangle;
// }

// console.log(createRectangle());

// let rectangleObject1 = createRectangle();

// console.log(rectangleObject1);

// rectangleObject1.length = 4;

// console.log(rectangleObject1);

// rectangleObject1.draw = "Draw method changed"

// console.log(rectangleObject1)

// rectangleObject1.draw = 44;
 
// console.log(rectangleObject1)


// let a = 10;
// let b = a;

// a++ 
// console.log(a)
// console.log(b)



//constructor with parameters or passing arguments
// function Circle(rad ,cir){
//     this.radius = rad;
//     this.circumference = cir;
//     this.draw =  function(){
//         console.log('Drawing a Circle')
//     }
// }

// let circleObject = new Circle(14, 41);

// console.log(circleObject, circleObject.draw);

// circleObject.draw();

// circleObject.area = 213;

// console.log(circleObject);


// delete circleObject.radius

// console.log(circleObject);

// console.log(circleObject.constructor);

// console.log(Circle.constructor);



// // Creating object of circle1
// let Circle1 = new Function("rad","cir",
//     `    this.radius = rad;
//     this.circumference = cir;
//     this.draw =  function(){
//         console.log('Drawing a Circle')
//     }`

// );


// let Cle = new Circle1(100,256);

// console.log(Cle)

// let number = 10

// function numberIncrease(number){
//     number++;
// }

// numberIncrease(number);

// console.log(number);


// let triangle = {
//     height : 4,
//     base : 7,
//     hypotenous : 8,
//     equilateral : false
// };

// //for-in loop

// for(let key in triangle){
//     //keys are reflected through key variable
//     //values are refelected through triangle[key]
//     console.log(key,triangle[key])
// }


// for (let key of Object.entries(triangle)){
//     console.log(key);
// }


// if("color" in triangle){
//     console.log("Present")
// }

// else{
//     console.log('Absent')
// }

let triangle = {
    height : 4,
    base : 7,
    hypotenous : 8,
    equilateral : false
};

let emptyObject = {}

for(let key in triangle){
    emptyObject[key] = triangle[key];
}

console.log(emptyObject)

function createRectangle() {
    let rectangle = {
        length: 1,
        breadth: 2,

        draw: function() {
            console.log("draw method called")
        }
    };
    return rectangle;
}



let targetObject = Object.assign({},triangle,createRectangle());

console.log(targetObject);