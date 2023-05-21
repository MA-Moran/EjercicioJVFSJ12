//Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente.
//


do {
    var nota = prompt("Introduce tu nota");
    if (Number(nota) == nota) {
    if (nota > 0 && nota <= 10) {
        }
        else if (nota < 5) {
            alert("Insuficiete");
        } else if (nota < 6) {
            alert("Suficiente");
        } else if (nota < 8) {
            alert("Bien");
        } else if (nota >= 9) {
            alert("Excelente");
        }
    }
    // SI LA NOTA NO ES ENTRE 0 Y 10
    else {
        alert("Nota erronea");
    }
} while (nota != undefined); 

