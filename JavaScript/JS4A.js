document.addEventListener('DOMContentLoaded', () => {
    let btnClass = document.getElementById('buttonClass');
    let preventForm = document.getElementById('myForm');

    // Ensure the elements are found before adding event listeners
    if (btnClass) {
        btnClass.addEventListener('click', function () {
            alert('Clicked on button');
        });
    } else {
        console.error('Button element not found');
    }

    if (preventForm) {
        preventForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Form not submitted');
        });

    fakeGoogleLink = document.querySelector('a')

    fakeGoogleLink.addEventListener('click',function(event){
        event.preventDefault();
        window.location.href = 'https://www.bing.com'
    } )

    } else {
        console.error('Form element not found');
    }

    let paradiv = document.createElement('div');

    for (let i = 0; i < 99; i++) {
        let para = document.createElement('p');
        para.textContent = 'This is paragraph ' + i;
        paradiv.appendChild(para);
    }
    
    let hoverStarttime; // Variable to store hover start time
    let hoverDuration = 0; // Variable to store hover duration
    
    // Add event listener for mouseover on paradiv
    paradiv.addEventListener('mouseover', () => {
        hoverStarttime = new Date(); // Capture the time when the hover starts
        console.log('Mouse hover started at: ' + hoverStarttime);
    });
    
    // Add event listener for mouseout on paradiv
    paradiv.addEventListener('mouseout', () => {
        const hoverEndtime = new Date(); // Capture the time when the hover ends
        hoverDuration = (hoverEndtime - hoverStarttime) / 1000; // Calculate hover duration in seconds
        console.log('Mouse hover ended at: ' + hoverEndtime);
        console.log(`Hover duration: ${hoverDuration} seconds`);
    });
    
    // Add event listener for clicks on paradiv
    paradiv.addEventListener('click', (event) => {
        if (event.target.tagName === 'P') { // Check if clicked element is a <p>
            console.log('Clicked on: ' + event.target.textContent);
        }
    });
    
    document.body.appendChild(paradiv);
    
});
