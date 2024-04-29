const flashcardContainer = document.querySelector('.flashcard-container');
const flashcards = document.querySelectorAll('.flashcard');
let index = 0;
let startY;

function showCard(index) {
  flashcards.forEach((card, idx) => {
    if (idx === index) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

flashcardContainer.addEventListener('wheel', function (e) {
  if (e.target.closest('.flashcard-container') === flashcardContainer) {
    const deltaY = e.deltaY > 0 ? 1 : -1;
    index = (index + deltaY + flashcards.length) % flashcards.length;
    showCard(index);
    e.preventDefault();
  }
});

flashcardContainer.addEventListener('touchstart', function(e) {
  startY = e.touches[0].clientY;
});

flashcardContainer.addEventListener('touchmove', function(e) {
  const deltaY = e.touches[0].clientY - startY;
  if (deltaY > 50) {
    index = (index - 1 + flashcards.length) % flashcards.length;
    showCard(index);
    startY = e.touches[0].clientY;
  } else if (deltaY < -50) {
    index = (index + 1) % flashcards.length;
    showCard(index);
    startY = e.touches[0].clientY;
  }
});

showCard(index);