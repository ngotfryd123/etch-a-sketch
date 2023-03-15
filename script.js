function createGrid(x,y){

const container = document.querySelector('#container');
let grid = document.createElement('table');

    for (let i=0;i<x;i++){
        let rowDivs = document.createElement('div');
        rowDivs.textContent="x";
        rowDivs.setAttribute('style', 'color: blue; background: red;');    
        container.appendChild(grid);
        let row = grid.insertRow(i);
        row.appendChild(rowDivs);

            for (let i=0; i<y; i++){
            if (i===(y-1)){break;}
            let cell = row.insertCell(i);
            let cellDivs = document.createElement('div');
            cellDivs.textContent="y";
            cellDivs.setAttribute('style', 'color: blue; background: red;'); 
            cell.appendChild(cellDivs);}
    }
}

let num1=16;
let num2=16;
    createGrid(num1,num2);