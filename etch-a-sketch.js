var amount = 256;


for(x=0; x<amount; x++) {
    const sketchDiv = document.createElement('div');
    sketchDiv.setAttribute('id', 'sketchDiv');
    sketchDiv.addEventListener('mouseover', changeColor);
    
    document.getElementById('sketchGrid').appendChild(sketchDiv);
    console.log('added block');
}

//Creating hover over effect

function changeColor(e) {
    const cell = event.target;
    cell.style.background = 'black';
}
