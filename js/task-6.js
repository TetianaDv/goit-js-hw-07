function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(box);
      size += 10;
    }
  }

  function destroyBoxes() {
    const boxesDiv = document.getElementById('boxes');
    boxesDiv.innerHTML = '';
  }

  document.addEventListener('DOMContentLoaded', function() {
    const createBtn = document.getElementById('createBtn');
    const destroyBtn = document.getElementById('destroyBtn');
    const inputAmount = document.getElementById('inputAmount');

    createBtn.addEventListener('click', function() {
      const amount = parseInt(inputAmount.value);
      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        inputAmount.value = ''; 
      } else {
        alert('Please enter a number between 1 and 100.');
      }
    });

    destroyBtn.addEventListener('click', function() {
      destroyBoxes();
    });
  });