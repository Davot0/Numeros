function obtenerValores() {
    let ingresoDatos = document.getElementById('dato').value;
    
    if (ingresoDatos.trim() === "") {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa una lista de números.";
        return;
    }

    let valores = ingresoDatos.split(',').map(Number);

    if (valores.some(isNaN)) {
        document.getElementById('resultado').innerHTML = "Por favor, ingresa solo números separados por comas.";
        return;
    }
    
    let resultado = ordenarNumeros(valores);

    document.getElementById('resultado').innerHTML = resultado.join(', ');
    
}

function ordenarNumeros(valores) {
    let pares = valores.filter(valores => valores %2 === 0);
    let impares = valores.filter(valores => valores %2 !== 0);

    pares.sort((a, b) => a - b);
    impares.sort((a, b) => a - b);

    let resultado = pares.concat(impares);

    return resultado;
}
