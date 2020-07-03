const cards = document.querySelectorAll('.card');

const modalOverlay = document.querySelector('.modal-overlay');

const modalContent = modalOverlay.querySelector('.modal-content');

for (const card of cards) {
  card.addEventListener('click', () => {
    modalOverlay.classList.remove('hidden');
    modalContent.innerHTML = card.innerHTML;
  });
}

// Close modal

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.add('hidden');
  modalContent = ''
});
