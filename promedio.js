//creamos una lista de elementos es decir un array
// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ]; //calcular la media aritmética
// let sumaLista1 = 0;
// for (let i = 0; i < lista1.length; i++){
    //se llama a la variable sumaLista1
//     sumaLista1 = sumaLista1 + lista1[i];
// }
//promedio
//const promedioLista1 = sumaLista1 / lista1.length;
//funcion donde mandamos la lista que queremos mandar la media areitmeticqa
function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){//funcion anonima
            return valorAcumulado + nuevoElemento;
        }
    );//dentro de este metodo se puede sumare, restar,etc


    const promedioLista = sumaLista / lista.length;
    return promedioLista
}
