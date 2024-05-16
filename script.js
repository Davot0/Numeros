function obtenerValores() {
    let ingresoDatos = document.getElementById('dato').value;

    let valores = ingresoDatos.split(',').map(Number);
    
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
