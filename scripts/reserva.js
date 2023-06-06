function adultAndChildPrice() {

    var plays = document.getElementById('play-tb');
    var indiceSeleccionado = plays.selectedIndex;
    var palabraSeleccionada = plays.options[indiceSeleccionado].text;



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

let cont = 1;

let overallTotalPrice = 0;

function addData() {

    let plays = document.getElementById("play-tb").value;
    let date = document.getElementById("start-date").value;
    let oldPeopleAge = document.getElementById("old-people-age").value;
    let priceOldPeopleAge = document.getElementById("label-old-people-age").innerHTML;
    let children = document.getElementById("children").value;
    let priceChildren= document.getElementById("label-children").innerHTML;
    
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

            var table = document.getElementById('table-list-play');
            var newRow = table.insertRow(table.rows.length);
            newRow.id = "fila-" + cont;

            var cell1 = newRow.insertCell(0);
            cell1.innerHTML = plays;

            var cell2 = newRow.insertCell(1);
            cell2.innerHTML = date;

            var cell3 = newRow.insertCell(2);
            cell3.innerHTML = oldPeopleAge;

            var cell4 = newRow.insertCell(3);
            cell4.innerHTML = totalPriceForOlderPerson + " €";

            var cell5 = newRow.insertCell(4);
            cell5.innerHTML = children;

            var cell6 = newRow.insertCell(5);
            cell6.innerHTML = totalPriceForChildren;

            var cell7 = newRow.insertCell(6);
            cell7.innerHTML = totalPricePlays + " €";

            var cell8 = newRow.insertCell(7);

            let colum = 6;
            let valores = 0;

            for (var i = 1; i < table.rows.length; i++) {
                var fila = table.rows[i];

                // Obtener la celda de la columna deseada
                var celda = fila.cells[colum];

                // Obtener el valor de la celda y sumarlo
                var valor = celda.textContent;
                valores += parseFloat(valor);
            }

            let botonEliminar = document.createElement('button');
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', function () {
                eliminarFila(fila.id);
            });

            cell8.appendChild(botonEliminar);

            overallTotalPrice = document.getElementById('total-price').textContent = valores + " €";

            document.getElementById("form").reset();
            document.getElementById("form2").reset();
            document.getElementById('old-people-age').innerHTML = '0';
            document.getElementById('precio-niño').innerHTML = '0';
            document.getElementById('total-price').innerHTML = valores;


            cont++;
        }
    }

}

function eliminarFila(filaId) {

    var fila = document.getElementById(filaId);


    overallTotalPrice = parseFloat(overallTotalPrice) - parseFloat(fila.getElementsByTagName("td")[6].innerText);
    document.getElementById('total-price').innerHTML = overallTotalPrice;
    fila.remove();
}