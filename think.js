
function addRow(){    

let plays = document.getElementById('play-tb').value;
let fecha = document.getElementById('start-date').value;
let old = document.getElementById('old-people-age').value;
let boys = document.getElementById('children').value;

let table = document.getElementById('table-list-play');

let newRow = table.insertRow();
let playsCell = newRow.incertCell();
let fechaCell = newRow.incertCell();
let oldCell = newRow.incerCell();
let boysCell = newRow.incertCell();

playsCell.innerHTML = plays;
fechaCell.innerHTML = fecha;
oldCell.innerHTML = old;
boysCell.innerHTML = boys;

//alert("onclickfuncionando")

}
