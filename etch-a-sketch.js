const root = document.documentElement;
const resetButton = document.getElementById('reset');
const blackButton = document.getElementById('blackAndWhite');
const colorButton = document.getElementById('color');
var dimension = 16;
var cellColor = 'black';


colorButton.addEventListener('click', () => {cellColor = 'rainbow'; console.log(cellColor);});
blackButton.addEventListener('click', () => {cellColor = 'black'; console.log(cellColor);});

function createGrid(){ 
  for(x=0; x<dimension*dimension; x++) {
    root.style.setProperty('--varDimension', dimension);
      const sketchDiv = document.createElement('div');
      sketchDiv.setAttribute('id', 'sketchDiv');
      sketchDiv.addEventListener('mouseover', changeColor);
      resetButton.addEventListener('click', resetColor);
      document.getElementById('sketchGrid').appendChild(sketchDiv);
}
}

//Creating hover over effect
function changeColor() {
    const cell = event.target;
    if (cellColor == 'rainbow' && cell.class != 'used'){
      cell.style.setProperty('background-color', getRandomColor());
      cell.setAttribute('class', 'used');
      console.log(cellColor);
      }
    else {
      cell.style.background = 'black';
      console.log(cellColor);
      }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function resetColor() {

    var sketchNode = document.querySelectorAll("#sketchDiv");
    var i;
    for (i = 0; i < sketchNode.length; i++) {
      sketchNode[i].style.background = "white";
    }
    dimension = prompt('Please enter a grid size between 1 and 100');
    console.log(dimension);
     if (dimension > 100 || dimension < 2) {
        resetColor();
      }
    createGrid();
  }
createGrid();
