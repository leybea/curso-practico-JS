//calcular el perímetro de un cuadrado
//creamos la variable y agrupamos los mensajes
console.group("Cuadrado");
// const ladoCuadrado = 5;
//imprimiendo texto en la consola del navegador
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

//creando el perímetro
function perimetroCuadrado (lado) { //lado es el parametro cualquier numero
    return lado * 4;
} 
perimetroCuadrado()//llamamos a la funcion y darle cualquier nro
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

//creando el área
function areaCuadrado(lado) {
    return lado * lado;
} //area = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//////////////////////////////////////////////////////////////

console.group("Triangulo");
//Código del triángulo
// console.group("Triángulo")
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm")
//convertimoa esta en funcion
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2")
function areaTriangulo(base, altura){
    return (base * altura)/2;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

console.groupEnd();

//código del circulo
console.group("Círculo");

//radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm")

//diámetro
// const diametroCirculo = radioCirculo * 2; 
// console.log("El diámetro del círculo es: " + diametroCirculo + "cm")
function diametroCirculo (radio){
    return radio * 2;
}

//pi
const PI = Math.PI;
console.log("PI es: " + PI);

//circulo
//cirvunferencia
// const perimetroCirculo = diametroCirculo * PI;
// console.log("El perímetro del círculo es: " + perimetroCirculo + "cm")
function perimetroCirculo (radio){
    //ya que el usuario solo sabe el tamaño del diametro le ponemos radio
    const diametro = diametroCirculo(radio);//llamamos a la funcion diametroCirculo con la que retornamos el valor de nuestro preimetro
    return diametro * PI; //la variable diametro solo se la ejecuta dentro de esta funcion
}

//area
// const areaCirculo =  (radioCirculo * radioCirculo) *PI;
// console.log("El área del círculo es: " + areaCirculo + "cm^2")
function areaCirculo (radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//Triángulo isósceles
/*function alturaTrianguloIsoseles(lado1,lado2,base){
    if(lado1===lado2 && lado1!=base){
        return Math.sqrt((lado1**2)-(base**2/4));
    } 
    else{alert ('No es Isosceles');}
}*/


//funciones para mostrar en el HTML
//funcion para que al dar click desde html se llame a esta función
//interactuando con HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    //esto nos permite obtener el obejto de html en js
    const value = input.value;//obetenemos el valor que ingresa el usuario
    //mostrando alerta
    //llamando a la funcion qu calcula el perimetro
    const perimetro = perimetroCuadrado(value);
    //usamos el alert par que los usuarios no vean la consola
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    //usamos el alert par que los usuarios no vean la consola
    alert(area);
}
//triangulo
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value);
    alert(area);
}
//circulo
function calcularDiametroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}
//altura isosceles
function alturaTrianguloIscoceles(lado1, lado2, base){
    return Math.sqrt((lado1*lado2)-((base*base)/4));
}

function calcularAlturaIsos(){
    const input = document.getElementById("InputTriIsos1");
    const value = parseInt(input.value);
    const input2 = document.getElementById("InputTriIsos2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("InputTriIsos3");
    const value3 = parseInt(input3.value);
    if(value==value2 && value!=value3 && value2!=value3){
        const altura = alturaTrianguloIscoceles(value, value2, value3);
        alert("El calculo de la altura es: "+ altura);
    }else{
        alert("Los lados A y B no son iguales, no es un triangulo Iscoceles");
    }
}