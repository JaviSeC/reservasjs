
function adultAndChildPrice() {


    let plays = document.getElementById('play-tb');
    let indiceSeleccionado = plays.selectedIndex;
    let palabraSeleccionada = plays.options[indiceSeleccionado].text;

    if (palabraSeleccionada == "Selecciona un juego") {

        document.getElementById('label-old-people-age').textContent = 0;
        document.getElementById('label-children').textContent = 0;

    } else if (palabraSeleccionada == "Juego 1") {
        document.getElementById('label-old-people-age').textContent = 20;
        document.getElementById('label-children').textContent = 10;

    } else if (palabraSeleccionada == "Juego 2") {

        document.getElementById('label-old-people-age').textContent = 15;
        document.getElementById('label-children').textContent = 5;

    } else if (palabraSeleccionada == "Juego 3") {

        document.getElementById('label-old-people-age').textContent = 30;
        document.getElementById('label-children').textContent = 25;

    } else if (palabraSeleccionada == "Juego 4") {

        document.getElementById('label-old-people-age').textContent = 40;
        document.getElementById('label-children').textContent = 20;

    } else if (palabraSeleccionada == "Juego 5") {

        document.getElementById('label-old-people-age').textContent = 15;
        document.getElementById('label-children').textContent = 9;

    } else if (palabraSeleccionada == "Juego 6") {

        document.getElementById('label-old-people-age').textContent = 50;
        document.getElementById('label-children').textContent = 30;

    } else if (palabraSeleccionada == "Juego 7") {

        document.getElementById('label-old-people-age').textContent = 19;
        document.getElementById('label-children').textContent = 13;

    }

}

// let overallTotalPrice = 0;

function addData() {

    let plays = document.getElementById("play-tb").value;
    let date = document.getElementById("start-date").value;
    let oldPeopleAge = document.getElementById("old-people-age").value;
    let priceOldPeopleAge = document.getElementById("label-old-people-age").innerHTML;
    let children = document.getElementById("children").value;
    let priceChildren = document.getElementById("label-children").innerHTML;

    let totalPriceForOlderPerson = oldPeopleAge * priceOldPeopleAge;
    let totalPriceForChildren = children * priceChildren;
    let totalPricePlays = totalPriceForOlderPerson + totalPriceForChildren;

    if (plays == "") {
        alert("Debes elegir un juego");
    } else if (date == "") {
        alert("Debes elegir una fecha");
    } else if (oldPeopleAge == "") {
        alert("Debes elegir una candidad de personas mayores. 0 = ninguna persona");
    } else if (children == "") {
        alert("Debes elegir una candidad de niños. 0 = ningun niño");
    } else {
        if (oldPeopleAge == "0" && children == "0") {
            alert("Debe elegir como mínimo un mayor de edad o un niño para reservar");
        } else {

            let table = document.getElementById('table-list-play');
            var newRow = table.insertRow(table.rows.length);

            let cell1 = newRow.insertCell(0);
            cell1.innerHTML = plays;

            let cell2 = newRow.insertCell(1);
            cell2.innerHTML = date;

            let cell3 = newRow.insertCell(2);
            cell3.innerHTML = oldPeopleAge;

            let cell4 = newRow.insertCell(3);
            cell4.innerHTML = totalPriceForOlderPerson + " €";

            let cell5 = newRow.insertCell(4);
            cell5.innerHTML = children;

            let cell6 = newRow.insertCell(5);
            cell6.innerHTML = totalPriceForChildren;

            let cell7 = newRow.insertCell(6);
            cell7.innerHTML = totalPricePlays + " €";

            let cell8 = newRow.insertCell(7);
            cell8.innerHTML = "<button class='edit-button' onclick='editData(this)'>Editar</button> <br> <button class='delete-button' onclick='deleteData(this)'>Eliminar</button>";

            calcular();

            // let valores = 0;

            // for (let i = 1; i < table.rows.length; i++) {
            //     let fila = table.rows[i];

            //     let celda = fila.cells[6];

            //     let valor = celda.textContent;
            //     valores += parseFloat(valor);

            // }

            // overallTotalPrice = document.getElementById('total-price').textContent = valores + " €";

            document.getElementById("form").reset();
            document.getElementById("form2").reset();
            document.getElementById('old-people-age').innerHTML = '0';
            document.getElementById('precio-niño').innerHTML = '0';
            document.getElementById('total-price').innerHTML = valores;
        }

    }
}

function calcular() {

    let table = document.getElementById('table-list-play');
    let overallTotalPrice = 0;
    let valores = 0;

    for (let i = 1; i < table.rows.length; i++) {
        let fila = table.rows[i];

        let celda = fila.cells[6];

        let valor = celda.textContent;
        valores += parseFloat(valor);

    }

    overallTotalPrice = document.getElementById('total-price').textContent = valores + " €";

}

function editData(button) {
    let row = button.parentNode.parentNode;
    let plays = row.cells[0].innerHTML;
    let date = row.cells[1].innerHTML;
    let oldPeopleAge = row.cells[2].innerHTML;
    let children = row.cells[4].innerHTML;

    document.getElementById("play-tb").value = plays;
    document.getElementById("start-date").value = date;
    document.getElementById("old-people-age").value = oldPeopleAge;
    document.getElementById("children").value = children;

    row.remove();
}

function deleteData(button) {
    let row = button.parentNode.parentNode;
    row.remove();
    calcular();
}


