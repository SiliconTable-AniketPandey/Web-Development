
document.addEventListener('DOMContentLoaded',()=>{
    const container = document.getElementById('container');

    //new <p> element
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a new pargraph added using insertAdjacentEleemnt before the second paragraph';

    //place new <p> tag before #container
    container.insertAdjacentElement('beforeend',newPara);

    let classCollections = document.querySelectorAll('p')
    classCollections.forEach(element => {
        console.log(element.classList,typeof(element.classList))
    });
});