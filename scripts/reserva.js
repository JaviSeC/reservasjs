function precioAdultoNiño() {

    var juego = document.getElementById('juegos');
    var indiceSeleccionado = juego.selectedIndex;
    var palabraSeleccionada = juego.options[indiceSeleccionado].text;

    if (palabraSeleccionada == "Selecciona un juego") {

        document.getElementById('precio-persona-mayor').textContent = 0;
        document.getElementById('precio-niño').textContent = 0;

    } else if (palabraSeleccionada == "Juego 1") {
        document.getElementById('precio-persona-mayor').textContent = 20;
        document.getElementById('precio-niño').textContent = 10;

    } else if (palabraSeleccionada == "Juego 2") {

        document.getElementById('precio-persona-mayor').textContent = 15;
        document.getElementById('precio-niño').textContent = 5;

    } else if (palabraSeleccionada == "Juego 3") {

        document.getElementById('precio-persona-mayor').textContent = 30;
        document.getElementById('precio-niño').textContent = 25;

    } else if (palabraSeleccionada == "Juego 4") {

        document.getElementById('precio-persona-mayor').textContent = 40;
        document.getElementById('precio-niño').textContent = 20;

    } else if (palabraSeleccionada == "Juego 5") {

        document.getElementById('precio-persona-mayor').textContent = 15;
        document.getElementById('precio-niño').textContent = 9;

    } else if (palabraSeleccionada == "Juego 6") {

        document.getElementById('precio-persona-mayor').textContent = 50;
        document.getElementById('precio-niño').textContent = 30;

    } else if (palabraSeleccionada == "Juego 7") {

        document.getElementById('precio-persona-mayor').textContent = 19;
        document.getElementById('precio-niño').textContent = 13;

    }

}

let contador = 1;
let TotalPriceGlobal = 0;

function addData() {

    let juego = document.getElementById("juegos").value;
    let fecha = document.getElementById("start-date").value;
    let mayoresDeEdad = document.getElementById("personas-mayores-edad").value;
    let precioPMayoresDeEdad = document.getElementById("precio-persona-mayor").innerHTML;
    let niños = document.getElementById("input-niños").value;
    let precioNiños = document.getElementById("precio-niño").innerHTML;

    let precioTotalPersonaMayor = mayoresDeEdad * precioPMayoresDeEdad;
    let precioTotalNiños = niños * precioNiños;
    let precioTotalJuego = precioTotalPersonaMayor + precioTotalNiños;

    if (juego == "") {
        alert("Debes elegir un juego");
    } else if (fecha == "") {
        alert("Debes elegir una fecha");
    } else if (mayoresDeEdad == "") {
        alert("Debes elegir una candidad de personas mayores. 0 = ninguna persona");
    } else if (niños == "") {
        alert("Debes elegir una candidad de niños. 0 = ningun niño");
    } else {
        if (mayoresDeEdad == "0" && niños == "0") {
            alert("Debe elegir como mínimo un mayor de edad o un niño para reservar");
        } else {

            var table = document.getElementById('table-list-play');
            var newRow = table.insertRow(table.rows.length);
            newRow.id = "fila-" + contador;

            var cell1 = newRow.insertCell(0);
            cell1.innerHTML = juego;

            var cell2 = newRow.insertCell(1);
            cell2.innerHTML = fecha;

            var cell3 = newRow.insertCell(2);
            cell3.innerHTML = mayoresDeEdad;

            var cell4 = newRow.insertCell(3);
            cell4.innerHTML = precioTotalPersonaMayor + " €";

            var cell5 = newRow.insertCell(4);
            cell5.innerHTML = niños;

            var cell6 = newRow.insertCell(5);
            cell6.innerHTML = precioTotalNiños;

            var cell7 = newRow.insertCell(6);
            cell7.innerHTML = precioTotalJuego + " €";

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

            TotalPriceGlobal = document.getElementById('total-price').textContent = valores + " €";

            document.getElementById("form").reset();
            document.getElementById("form2").reset();
            document.getElementById('precio-persona-mayor').innerHTML = '0';
            document.getElementById('precio-niño').innerHTML = '0';
            document.getElementById('total-price').innerHTML = valores;


            contador++;
        }
    }

}

function eliminarFila(filaId) {

    var fila = document.getElementById(filaId);


    TotalPriceGlobal = parseFloat(TotalPriceGlobal)  - parseFloat(fila.getElementsByTagName("td")[6].innerText);
    document.getElementById('total-price').innerHTML = TotalPriceGlobal;
    fila.remove();
}