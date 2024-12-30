const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const cardContainer = document.querySelector('.card-container');

let scrollIndex = 0;
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth + 20; // Add gap between cards

nextBtn.addEventListener('click', () => {
  if (scrollIndex < cards.length - 3) {
    scrollIndex++;
    cardContainer.scrollBy({
      left: cardWidth, // Scroll one card at a time
      behavior: 'smooth'
    });
  }
});

prevBtn.addEventListener('click', () => {
  if (scrollIndex > 0) {
    scrollIndex--;
    cardContainer.scrollBy({
      left: -cardWidth, // Scroll one card at a time in the reverse direction
      behavior: 'smooth'
    });
  }
});