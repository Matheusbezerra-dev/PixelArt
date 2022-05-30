// initial Data
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board');
const input = document.getElementById('board-size');
const loadColor = document.getElementById('changeButton');
const vqv = document.getElementById('generate-board');
let valueInput = 5;

// Events
document.querySelectorAll('#color-palette .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
  
});

vqv.addEventListener('click', conditions);

loadColor.addEventListener('click', changeColor)

clear.addEventListener('click', clearBoard);


// functions
window.onload = function initialSelected() {
  const defaultColor = document.getElementsByClassName('color')[0];
  defaultColor.classList.add('selected');
  defaultColor.style.backgroundColor = 'black'
  const r = document.getElementsByClassName('color')[1].style.backgroundColor = colorAleatory();
  const g = document.getElementsByClassName('color')[2].style.backgroundColor = colorAleatory();
  const b = document.getElementsByClassName('color')[3].style.backgroundColor = colorAleatory();
};

generateBox(valueInput);
function conditions() {
  pixelBoard.innerHTML = '';
  inputValue = input.value;
  if (inputValue === '') {
    alert('Board inválido!');
  } else if (inputValue < 5 && inputValue > 0) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }
  generateBox(inputValue);
}

function generateBox(a) {
  const insideDiv = pixelBoard;
  for (let i = 0; i < a; i += 1) {
    const row = document.createElement('div');
    row.className = 'line';

    for (let index = 0; index < a; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      row.appendChild(pixel);
    }
    insideDiv.appendChild(row);
  }
  colorPixel()
}

function colorClickEvent(e) {
  document.querySelector('.color.selected').classList.remove('selected');
  e.target.classList.add('selected');
};

function colorPixel() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].style.backgroundColor = window
        .getComputedStyle(document.getElementsByClassName('selected')[0])
        .getPropertyValue('background-color');
    });
  };
};

function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function colorAleatory() {
  let r = Math.floor(Math.random() * 255),
    g = Math.floor(Math.random() * 255),
    b = Math.floor(Math.random() * 255);
    return 'rgb('+r+','+g+','+b+')'
}

function changeColor(){
  const r = document.getElementsByClassName('color')[1].style.backgroundColor = colorAleatory()
  const g = document.getElementsByClassName('color')[2].style.backgroundColor = colorAleatory()
  const b = document.getElementsByClassName('color')[3].style.backgroundColor = colorAleatory()
}
