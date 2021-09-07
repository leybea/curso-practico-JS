// //crearemos un array pra trabajar en las pruebas
// const salariosCol = colombia.map(
//     //mandamos una función anónima
//     function(personita){
//         //creando un nuevo array donde aparezca el salario de cada perosna
//         return personita.salary;
//     }
// );
// Helpers 
//son las funciones que no son parte de la lógica de negocio del análisis pero las necesitamos para nuestros calculos ta,bien se las puede llamar utils
function esPar(numerito) {
    return (numerito % 2 === 0);
  }
  
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  // Calculadora de mediana general de salario
  function medianaSalarios(lista) {
      //entrando a la mitad de posicion del array
    const mitad = parseInt(lista.length / 2);
  
    if (esPar(lista.length)) {
        //neesitamos sacar dos personas de la lista
      const personitaMitad1 = lista[mitad - 1];
      const personitaMitad2 = lista[mitad];
  
      const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);//enviamos las dos listas
      return mediana;
    } else {
      const personitaMitad = lista[mitad];
      return personitaMitad;
    }
  }
  
  // Mediana General
  const salariosCol = colombia.map(
    function (personita) {
      return personita.salary;
    }
  );
  
  const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
      return salaryA - salaryB;
    }
  );
  
  const medianaGeneralCol = medianaSalarios(salariosColSorted);
  
  // Mediana del top 10%
  //para sacar una partede un array usamos el método splice
  const spliceStart = (salariosColSorted.length * 90) / 100;
  const spliceCount = salariosColSorted.length - spliceStart;
  
  //para sacar una partede un array usamos el método splice
  const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
  );
  
  const medianaTop10Col = medianaSalarios(salariosColTop10);
  
  console.log({
    medianaGeneralCol,
    medianaTop10Col,
  });