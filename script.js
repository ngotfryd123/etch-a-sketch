function createGrid(x,y){

const container = document.querySelector('#container');
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
let num1=16;
let num2=16;
    createGrid(num1,num2);
