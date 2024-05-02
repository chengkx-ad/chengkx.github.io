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

// flashcardContainer.addEventListener('wheel', function (e) {
//   if (e.target.closest('.flashcard-container') === flashcardContainer) {
//     const deltaY = e.deltaY > 0 ? 1 : -1;
//     index = (index + deltaY + flashcards.length) % flashcards.length;
//     showCard(index);
//     e.preventDefault();
//   }
// });

flashcardContainer.addEventListener('click', function (e) {
  const rect = flashcardContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const containerWidth = rect.width;

  if (clickX < containerWidth / 2) {
    index = (index - 1 + flashcards.length) % flashcards.length;
  } else {
    index = (index + 1) % flashcards.length;
  }

  showCard(index);
});
showCard(index);