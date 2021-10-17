

const sketchPadArea = document.querySelector('#sketch-pad-area');

const sketchPad = document.createElement('div');
sketchPad.classList.add('sketch-pad-grid');
//let sketchPadGrid = document.getElementsByClassName('sketch-pad-grid').style.display = 'grid';
sketchPad.style.display = 'grid';
sketchPad.style.gridTemplateColumns = 'repeat(16, 4vh)';
sketchPad.style.gridTemplateRows = 'repeat(16, 4vh)';
sketchPad.style.gridGap = '0em';
sketchPad.style.boxShadow = 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px';

sketchPadArea.appendChild(sketchPad);

let gridDivLength = '10px';

for(let i = 0; i < 256; i++) {
    let padItem = document.createElement('div');
    padItem.classList.add('sketch-pad-grid-item');
    sketchPad.appendChild(padItem);
}

let gridItem = document.getElementsByClassName('sketch-pad-grid-item');
for(let i = 0; i < 256; i++) {

    gridItem[i].style.width = '100%';
    gridItem[i].style.height = '0';
    gridItem[i].style.paddingTop = '100%';
    //gridItem[i].style.padding = '0.5em';
    gridItem[i].innerHTML = '';
    

}

const x = window.matchMedia("(max-width: 640px)")

function mediaQueries(x) {
    if(x.matches) {
        sketchPad.style.gridTemplateColumns = 'repeat(16, 2.5vh)';
        sketchPad.style.gridTemplateRows = 'repeat(16, 2.5vh)';
    } else {
        sketchPad.style.gridTemplateColumns = 'repeat(16, 3vh)';
        sketchPad.style.gridTemplateRows = 'repeat(16, 3vh)';
    }
}

x.addListener(mediaQueries);
mediaQueries(x);
