const container = document.querySelector('#container');

function createGrid(x,y){

let grid = document.createElement('table');

    for (let i=0;i<x;i++){   
        container.appendChild(grid);
        let row = grid.insertRow(i);
        
            for (let i=0; i<y; i++){
            let cell = row.insertCell(i);
            let cellDivs = document.createElement('div');
            cellDivs.setAttribute('style', 'background: white;');
            cellDivs.addEventListener("mouseover", (event) => {cellDivs.style.background = "green";});
            cell.appendChild(cellDivs);}
    }
}
function eraseChildren(element){
    element.replaceChildren();
    let ask = prompt("Enter a number up to 100 to set up a new grid: ");
    createGrid(ask,ask);
}

let num1=10;
let num2=10;
    createGrid(num1,num2);
    

