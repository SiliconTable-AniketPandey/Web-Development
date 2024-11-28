const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')

// When share my profile is clicked 

const openModal = () => {
    console.log("share profile button clicked")
    modal.classList.remove('scale-0')
    modal.classList.add('scale-100')
    overlay.classList.add("overlayactive")
}

// when you click the cross butoon or outside the modal

const closeModal = () => {
    modal.classList.add("scale-0")
    overlay.classList.remove("overlayactive")
}