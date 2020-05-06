const root = document.documentElement;
const resetButton = document.getElementById('reset');
const blackButton = document.getElementById('blackAndWhite');
const colorButton = document.getElementById('color');
var dimension = 16;


//colorButton.addEventListener('click', cellBlack);
//blackButton.addEventListener('click', cellColorful);

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
function changeColor(e) {
    const cell = event.target;
    if(cellColorful=true && cell.id != 'used'){
      cell.style.setProperty('background-color', getRandomColor());
      cell.setAttribute('id', 'used');
      console.log(cellColorful);
      }
    else {
    cell.style.background = 'black';
    console.log(cellColorful);
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
    dimension = prompt('How many dimension?');
    console.log(dimension);

    if (dimension > 80) {
      dimension = prompt('How many dimension?');
    }
    createGrid();
  }


  createGrid();