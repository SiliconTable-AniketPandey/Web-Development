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