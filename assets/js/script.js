let defaultColor = document.getElementsByClassName('color')[0];
defaultColor.classList.add('selected');

let firstColor = 'black'
document.querySelectorAll('#color-palette .color').forEach(item => {
  item.addEventListener('click', colorClickEvent);
});

function colorClickEvent(e) {
  let color = e.target.getAttribute('data-color');
    firstColor = color;
  document.querySelector('.color.selected').classList.remove('selected');
  e.target.classList.add('selected');
};