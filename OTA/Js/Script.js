// script.js

const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0; // Keeps track of the current active card

// Function to update active card and button
function updateActiveCard(index) {
    // Remove 'active' class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));
    // Add 'active' class to the current tab
    tabs[index].classList.add('active');

    // Update cards
    cards.forEach(card => {
        const cardType = card.getAttribute('data-card');
        const activeTab = tabs[index].getAttribute('data-tab');
        const button = card.querySelector('button');
        
        if (cardType === activeTab) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Handle Previous Button Click
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + tabs.length) % tabs.length; // Loop to the last index if at the first
    updateActiveCard(currentIndex);
});

// Handle Next Button Click
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % tabs.length; // Loop to the first index if at the last
    updateActiveCard(currentIndex);
});
