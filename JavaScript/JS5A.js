// //first code
// const t1 = performance.now()

// let newDiv = document.createElement('div')
// for(let i = 0;i<100000;i++){
//     let newParagraph = document.createElement('p')
//     newParagraph.textContent = 'This is para number '+i;
//     newDiv.appendChild(newParagraph)
// }

// document.body.appendChild(newDiv)

// const t2 = performance.now()
// console.log("Code took "+(t2-t1)+"ms")

// //second code
// const t_1 = performance.now()

// for(i = 0 ;i<100000;i++){
//     let para = document.createElement('p')
//     para.textContent = 'This is par number '+i
//     document.body.appendChild(para)
// }

// const t_2 = performance.now()

// console.log("Code took "+(t_2-t_1)+"ms")

// //third code
// const t3 = performance.now();

// let newDiv2 = document.createElement('div');
// let fragment = document.createDocumentFragment(); // Create a DocumentFragment

// for (let i = 0; i < 1000; i++) {
//     let newParagraph = document.createElement('p');
//     newParagraph.textContent = 'This is para number ' + i;
//     fragment.appendChild(newParagraph); // Append paragraphs to the fragment
// }

// newDiv2.appendChild(fragment); // Append the fragment to the newDiv once
// document.body.appendChild(newDiv2); // Append the newDiv to the DOM

// const t4 = performance.now();
// console.log("Code took " + (t3 - t4)/1000 + "ms");


function greet() {
    console.log("Hello!");
  }
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  function start() {
    greet();
    sayGoodbye();
  }
  start();


  console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);
console.log("End");

console.log("Start");
setTimeout(() => {
  console.log("Inside setTimeout");
}, 1000);
console.log("End");



  

