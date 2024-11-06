const carousel = document.getElementById("carousel");
const totalImages = carousel.children.length; // Total number of images
let index = 0;

function moveToNextSlide() {
    index++;
    if (index >= totalImages) {
        index = 0; // Reset to the first image
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0)';
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s'; // Re-enable transition
        }, 50);
    } else {
        const offset = -index * 100; // Calculate the offset for sliding
        carousel.style.transform = `translateX(${offset}%)`;
    }
}

setInterval(moveToNextSlide, 3000);


// Scroll-Card effect

const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.cards')
const cards = document.querySelectorAll('.card')
cardsContainer.style.setProperty('--cards-count', cards.length)
cardsContainer.style.setProperty(
    '--card-height',
    `${cards[0].clientHeight}px`
)
Array.from(cards).forEach((card, index) => {
    const offsetTop = 20 + index * 20
    card.style.paddingTop = `${offsetTop}px`
    if (index === cards.length - 1) {
        return
    }
    const toScale = 1 - (cards.length - 1 - index) * 0.1
    const nextCard = cards[index + 1]
    const cardInner = card.querySelector('.card__inner')
    ScrollObserver.Element(nextCard, {
        offsetTop,
        offsetBottom: window.innerHeight - card.clientHeight
    }).onScroll(({ percentageY }) => {
        cardInner.style.scale = valueAtPercentage({
            from: 1,
            to: toScale,
            percentage: percentageY
        })
        cardInner.style.filter = `brightness(${valueAtPercentage({
            from: 1,
            to: 0.6,
            percentage: percentageY
        })})`
    })
})

// //Third Page
// // Click scroll effect

const carouselTrack = document.getElementById('carousel-track');
const cards_click = Array.from(document.querySelectorAll('.carousel-card'));

// Clone first and last elements for seamless transition
const firstClone = cards_click[0].cloneNode(true);
const lastClone = cards_click[cards_click.length - 1].cloneNode(true);
carouselTrack.appendChild(firstClone);
carouselTrack.insertBefore(lastClone, cards_click[0]);

// Update variables
let currentIndex = 1; // Start at the first original card (after the last clone)
const totalCards = cards_click.length + 2; // Include the cloned cards
const cardWidth = carouselTrack.clientWidth; // Set width for each card

// Initial positioning
carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

// Navigation functions
document.getElementById('next').addEventListener('click', () => {
    currentIndex++;
    updateCarouselPosition();
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;
    updateCarouselPosition();
});

function updateCarouselPosition() {
    carouselTrack.style.transition = 'transform 0.5s ease';
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Loop to the start or end based on position
    if (currentIndex >= totalCards - 1) {
        // Jump to first original card from the last clone
        setTimeout(() => {
            carouselTrack.style.transition = 'none';
            currentIndex = 1; // Reset to the first original card
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }, 500); // Wait for transition to complete
    } else if (currentIndex <= 0) {
        // Jump to last original card from the first clone
        setTimeout(() => {
            carouselTrack.style.transition = 'none';
            currentIndex = totalCards - 2; // Reset to the last original card
            carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }, 500);
    }
}

// First Carousel Setup
function setupCarousel1() {
    const carouselTrack = document.getElementById('carousel-track');
    const cards_click = Array.from(document.querySelectorAll('.carousel-card'));

    // Clone first and last elements for seamless transition
    const firstClone = cards_click[0].cloneNode(true);
    const lastClone = cards_click[cards_click.length - 1].cloneNode(true);
    carouselTrack.appendChild(firstClone);
    carouselTrack.insertBefore(lastClone, cards_click[0]);

    // Update variables
    let currentIndex = 1; // Start at the first original card (after the last clone)
    const totalCards = cards_click.length + 2; // Include the cloned cards
    const cardWidth = carouselTrack.clientWidth; // Set width for each card

    // Initial positioning
    carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

    // Navigation functions
    document.getElementById('next').addEventListener('click', () => {
        currentIndex++;
        updateCarouselPosition();
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentIndex--;
        updateCarouselPosition();
    });

    function updateCarouselPosition() {
        carouselTrack.style.transition = 'transform 0.5s ease';
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

        // Loop to the start or end based on position
        if (currentIndex >= totalCards - 1) {
            // Jump to first original card from the last clone
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = 1; // Reset to the first original card
                carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }, 500); // Wait for transition to complete
        } else if (currentIndex <= 0) {
            // Jump to last original card from the first clone
            setTimeout(() => {
                carouselTrack.style.transition = 'none';
                currentIndex = totalCards - 2; // Reset to the last original card
                carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            }, 500);
        }
    }
}

// Second Carousel Setup
function setupCarousel2() {
    const carouselTrack = document.getElementById('carousel-track2');
    const cards_click = Array.from(document.querySelectorAll('.carousel-card2'));

    // Define the initial number of visible cards and total number of cards
    const visibleCards = 3;
    let currentIndex = 0;
    const cardWidth = carouselTrack.clientWidth / visibleCards; // Width per card
    const maxIndex = cards_click.length - visibleCards; // Max index based on total cards and visible set

    // Adjust each card to match width for 3 visible cards
    cards_click.forEach(card => {
        card.style.minWidth = `${cardWidth}px`;
    });

    // Initial positioning
    carouselTrack.style.transform = `translateX(0px)`;

    // Navigation functions
    document.getElementById('next2').addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarouselPosition();
        }
    });

    document.getElementById('prev2').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });

    function updateCarouselPosition() {
        carouselTrack.style.transition = 'transform 0.5s ease';
        carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
}





// Initialize both carousels
setupCarousel1();
setupCarousel2();







