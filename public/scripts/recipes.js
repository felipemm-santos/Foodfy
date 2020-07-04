const ingredientsButton = document.querySelector('.ingredients .wrapper a');

const preparationButton = document.querySelector('.preparation .wrapper a');

const informationButton = document.querySelector('.informations .wrapper a');

ingredientsButton.addEventListener('click', () => {
  showOrHide(ingredientsButton);

  document.querySelector('.ingredients .content').classList.toggle('hidden');
});

preparationButton.addEventListener('click', () => {
  showOrHide(preparationButton);

  document.querySelector('.preparation .content').classList.toggle('hidden');
});

informationButton.addEventListener('click', () => {
  showOrHide(informationButton);

  document.querySelector('.informations .content').classList.toggle('hidden');
});

function showOrHide(button) {
  if (button.innerHTML == 'Esconder') {
    button.innerHTML = 'Mostrar';
  } else {
    button.innerHTML = 'Esconder';
  }
}
