// initial Data
const pixel = document.getElementsByClassName('pixel');
const clear = document.getElementById('clear-board')
const input = document.getElementById('board-size')
const vqv = document.getElementById('generate-board')
const firstColor = 'black';

// Events
document.querySelectorAll('#color-palette .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

vqv.addEventListener('click', generateInput)

clear.addEventListener('click', clearBoard);

// functions
window.onload = function initialSelected(){
  const defaultColor = document.getElementsByClassName('color')[0];
  defaultColor.classList.add('selected');
};

function colorClickEvent(e) {
  const color = e.target.getAttribute('data-color');
  document.querySelector('.color.selected').classList.remove('selected');
  e.target.classList.add('selected');
};

function colorPixel(){
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].style.backgroundColor = window
        .getComputedStyle(document.getElementsByClassName('selected')[0])
        .getPropertyValue('background-color');
    });
  };  
};colorPixel()

function clearBoard() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

function generateInput(e){
  input.textContent = e.target.value;
    for (let i = 5; i < input; i += 1) {
      console.log(input[i])
      
      
    }   
    
}
 