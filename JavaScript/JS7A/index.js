const countValue = document.getElementById('counter')

const increment = () =>{

    // fetch the value
    let value = parseInt(countValue.innerText)

    //update the value
    value += 1;

    countValue.innerText = value;

}


const decrement = () =>{

    // fetch the value
    let value = parseInt(countValue.innerText)

    //update the value
    value -= 1;

    countValue.innerText = value;

}