// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:

  if(x>y){
    return x;
    el
  }else if(x==y){
    return x||y;
  }else 
    return y;
  
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  switch(idioma){
    case "aleman":
      idioma = "Guten Tag!";
    return idioma;
    breack;

    case "mandarin":
      idioma = "Ni Hao!";
    return idioma;
    breack;

    case "ingles":
      idioma = "Hello!";
      return idioma;
      breack;
    default:
      idioma = "Hola!"
      return idioma;
  }

}

function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    if(numero == 10 || numero == 5){
      esDiezOCinco = true;
      return esDiezOCinco;
    }else 
      esDiezOCinco = false;
      return esDiezOCinco;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if( numero < 50 && numero > 20){
    estaEnRango = true;
    return true;
  }else
    estaEnRango = false;
    return false;
  }

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Math.floor(numero)){
    esEntero = true;
    return esEntero;
  }else if(numero == 0){
    esEntero = true;
    return esEntero;
  }else
    esEntero = false;
    return estaEnRango;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if ( numero % 3 == 0 && numero % 5 == 0 ){
    fizzBuzz = "fizzbuzz";
    return fizzBuzz;
  }else if(numero % 5 == 0){
    fizzBuzz = "buzz";
    return fizzBuzz;
  }else if (numero % 3 == 0){
    fizzBuzz = "fizz"
    return fizzBuzz;
  }else
    fizzBuzz = numero
    return fizzBuzz;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if(numero < 2){
    esPrimo = false;
    return esPrimo;
  }else if(numero == 2){
    esPrimo = true;
    return esPrimo;
  }else if(numero > 2 && numero % 2 == 0){
    esPrimo = false;
    return esPrimo;
  }else  
    for ( var i = 3; i = numero ; i++){
      if(numero % i !== 0);
      esPrimo = true;
      return esPrimo;
    } 
}
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
