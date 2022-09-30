/* JS File */
const container = document.querySelector('.container');
const sizegrid = document.getElementById('range-slider');
const DEFAULT_SIZE = 16;
let color = 'black'

function deleteGrid(){
    container.textContent= "";
}

function createGrid (size){
    for(let r = 0; r < size ; r++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let c = 0; c < size; c++){
            const column = document.createElement('div');
            column.classList.add('column');
            row.appendChild(column);
        }
    }
    const columns = document.querySelectorAll('.column');
    colorGrid(columns)
}

function colorGrid(columns){
    columns.forEach((column) => {
        column.addEventListener('mouseover', function (e){
            if (color == 'rainbow'){
                column.style.cssText = `background-color: hsl(${Math.random()*360}, 100%, 50%)`
            }
            else{
                column.style.cssText = `background-color: ${color}`
            }
        })
    });
}

function changeColor(value){
    if( value == 'rainbow'){
        color= 'rainbow';
    }
    else if ( value == 'color-picker' ){
        const colorPicker = document.getElementById('color-picker');
        color= colorPicker.value;
    }
}



// set all the columns color back to white.
function erase(){
    const columns = document.querySelectorAll('.column');
    columns.forEach((column) => {
        column.style.cssText = 'brackground-color: white';
    })
}

// delete the last grid and create a new one
function reloadGrid(){
    deleteGrid();
    createGrid(sizegrid.value);
}

createGrid(DEFAULT_SIZE)