const flashcardContainer = document.querySelector('.flashcard-container');
const flashcards = document.querySelectorAll('.flashcard');
let index = 0;

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

showCard(index);