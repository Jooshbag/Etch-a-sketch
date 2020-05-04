

var amount = 16;
var blocks = amount * amount;

createGrid();

function createGrid(){ 
for(x=0; x<blocks; x++) {
    const sketchDiv = document.createElement('div');
    sketchDiv.setAttribute('id', 'sketchDiv');
    sketchDiv.addEventListener('mouseover', changeColor);

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', resetColor);
    
    document.getElementById('sketchGrid').appendChild(sketchDiv);
    console.log('added block');
}
}

//Creating hover over effect

function changeColor(e) {
    const cell = event.target;
    cell.style.background = 'black';
}



function resetColor() {
    var sketchNode = document.querySelectorAll("#sketchDiv");
    var i;
    for (i = 0; i < sketchNode.length; i++) {
      sketchNode[i].style.background = "white";
    }
    amount = prompt('How many blocks?');
    createGrid();
  }
