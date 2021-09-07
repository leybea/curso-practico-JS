function calcularMediana(lista){
    // const sumaLista = lista.reduce(
    //     function (valorAcumulado = 0, nuevoElemento){//funcion anonima
    //         return valorAcumulado + nuevoElemento;
    //     }
    // );//dentro de este metodo se puede sumare, restar,etc

    //para ordenar la lista
    const listaOr = lista.sort(function(elementoa,elementob){
        return elementoa - elementob;
    });
    

    // const promedioLista = sumaLista / lista.length;
    // return promedioLista

    // const lista1 = [
    //     100,
    //     200,
    //     500,
    //     40000,
    // ];


    const mitadLista = parseInt(listaOr.length / 2);

    // creando varibale mediana
    let mediana;

    if (esPar(listaOr.length)){
        // necesitamos dos elementos 
        const elemento1 = listaOr[mitadLista - 1];
        const elemento2 = listaOr[mitadLista];
        // -> el promedio
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        // -> mediana
        mediana = promedioElemento1y2;
        return mediana;
    } else {
        // posicion mitdLista1 dentro lista1
        // -> mediana
            mediana = listaOr[mitadLista];
            return mediana;
    }

}

function esPar(numero){
    //if (numero es par?){
    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;
    return promedio;
}