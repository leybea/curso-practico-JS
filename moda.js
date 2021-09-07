const lista1 = [
        1,
        2,
        5,
        4,
        3,
        3,
        5,
        6,
        6,
        2,
    ];
//creando nuestro objeto donde se escribirá por medio de un método de los arrays
const lista1Count = {};
//aplicando el método map a la lista1 que ayuda a recorrer el array
lista1.map(
    //recibe una función anónima donde se recibirá el elementos de cada iteración
    function(elemento){
        //verificando si el elemento existe
        if(lista1Count[elemento]){
            //lista1Count[elemento] = lista1Count[elemento] + 1;
            lista1Count[elemento] +=1; //realiza lo mismo que arriba
        }
        else{
            //creamos nuestro elemento
            lista1Count[elemento]=1;//se convierte el elemento dentro del objeto
            //indica que el elemento apareció una sola vez
        }
     }
);
//volver a convertir el obejto en un array
//usamos el Object.entries(); se le mand cómo argumento el objeto que se quiere convertir en array
// const lista1Array = Object.entries(lista1Count).sort(
//     function (valorAcumulado, nuevoValor){
//         valorAcumulado - nuevoValor;
//     }
// );

const lista1Array = Object.entries(lista1Count).sort(
    function(elementoA, elementoB){
        return elementoA[1] - elementoB[1];
    }
);

//moda es la ultima posición del array
const moda = lista1Array[lista1Array.length - 1];
