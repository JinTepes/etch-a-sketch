const gridArea = document.querySelector('#gridsContainer'),
btnRst = document.querySelector('#btn-reset'),
btnSize = document.querySelector('#btn-size');

//initials
console.log("Script Launched!")
gridMaker(4);
//end initials

//buton event listeners
btnRst.addEventListener('click',resetGrid);
btnSize.addEventListener('click', changeSize);




//functions
function gridMaker(gridSize){
    gridArea.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gridArea.innerHTML = ""; //para ma delete ang mga child kung naa
    //pag himo sa mga smol na boxes
    
    for (let i=0; i< gridSize*gridSize; i++){
        let gridItem = document.createElement('div');
        gridItem.classList = "grid-item";
        gridItem.addEventListener("mouseover", colorChange);
        gridArea.appendChild(gridItem);
        }
    }
    

function resetGrid(){
    let gridItem = gridArea.children;
    for (i=0; i<gridArea.children.length; i++){
        gridItem[i].style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

function colorChange(event){
    let R = colorRng(), G = colorRng(), B = colorRng();
    event.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

function colorRng(){
    const argebi = Math.floor(Math.random() * 256);
    return argebi;
}

function changeSize(){
    let newGridsize = prompt("Enter Size:");

    if(newGridsize !== null && isNaN(newGridsize) == false){
        newGridsize = parseInt(newGridsize);
        if(newGridsize==0 || newGridsize>64){
            alert("Please Enter a Number Between 1 and 64!");
        }
        else{
            gridMaker(newGridsize);
        }
    }
    else{
        alert("Please Enter a Number Between 1 and 64!");
    }
}