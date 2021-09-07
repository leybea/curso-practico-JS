// //definimos las primeras variables 1)el precio original del producto 2)porcentaje de descuento
// const precioOriginal = 100;
// const descuento = 15;
// //se deben crear otras 2 constantes 1)es el % del precio que se debe pgar menos el % del precio original
// const porcentajePrecioDescuento = 100 - descuento;
// //debemos usar la variable de arriba
// const precioConDescuento = precioOriginal*(porcentajePrecioDescuento)/100;
// //hay varias formas de usar el console.log se puede hacer ocncatenación
// //console.log("El precio original es: " + precioOriginal);
// //al console.log se le puede enviar un objeto usando {} dentro de este objeto se le puede enviar todas las variables que quereos imprimir en la consola
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });//esto nos imprime un objeto con 4 atributos
//convirtiendo en funcion nuestras fòrmulas
//esta funcion recibe 2 parámetros precio y el descuento 
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioDescuento)/100;

    return precioConDescuento;
}

function calcularDescuentoProd(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;//del elemento input price saca el valor que se ingresa por teclado

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio condescuento es $" + precioConDescuento;
}