const container = document.querySelector('#container');

function createGrid(x,y,){

let grid = document.createElement('table');
container.appendChild(grid);

    for (let i=0;i<x;i++){   
        
        let row = grid.insertRow(i);
        
            for (let i=0; i<y; i++){
            let cell = row.insertCell(i);
            let cellDivs = document.createElement('div');
            cellDivs.setAttribute('style', 'background: white;');
            cellDivs.addEventListener("mouseover", changeColor);
            cell.appendChild(cellDivs);}}}
            
function clearGrid(element){
    element.replaceChildren();
    ask = prompt("Enter a number (1-100) to set up a new grid: ");
    while (ask <=0 || ask >100){
        ask=prompt("Enter a number (1-100): ");}
    createGrid(ask,ask);}

function randomRGB() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let RGBColor = "rgb(" + x + "," + y + "," + z + ")";
    return RGBColor}
 
function changeColor(){
    if (color==="random"){
        this.style.background=randomRGB();}
    else if (color==="opaque"){
        this.style.backgroundColor="black";
        this.style.opacity =(parseFloat(this.style.opacity) || 0) + 0.1;}
    else this.style.backgroundColor = color;}

function userChoice(choice){
    color = choice;}

let ask=10;
let color="black";

createGrid(ask,ask);
    

