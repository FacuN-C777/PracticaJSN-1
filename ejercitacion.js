//1. Ingresar dos valores y sumarlos.
let n1 = 1;
let n2 = 5;
let suma = n1 + n2;
console.log(`la suma de ${n1} y ${n2} es ${suma}
  `);

//2. Ingresar tres valores e indicar cual es el mayor y cual el menor.
var n3 = 1;
var n4 = 5;
var n5 = 7;
function mayor(n3, n4, n5) {
  let mayor = 0;
  if (mayor < n3 && n3 > n4 && n3 > n5) {
    mayor = n3;
  }
  if (mayor < n4 && n4 > n3 && n4 > n5) {
    mayor = n4;
  }
  if (mayor < n5 && n5 > n3 && n5 > n4) {
    mayor = n5;
  }

  return mayor;
}
console.log(
  `El mayor es ${mayor(n3, n4, n5)} y el menor es ${Math.min(n3, n4, n5)}
  `
);

//3. Ingresar una palabra y mostrar: <PALABRA> tiene <n> letras.
let p1 = "hola";
for (let a = 0; a <= p1.length; a++) {
  let b = 0;
  c = b + a;
}
console.log(`la palabra ${p1} tiene ${c} letras
  `);

//4. Ingresar un número e indicar si es par.
let n6 = 3;
if (n6 % 2 === 0) {
  console.log(`el número ${n6} es par
    `);
} else {
  console.log(`el número ${n6} es impar
    `);
}

//5. Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
let p2 = "bien";
let n7 = 3;
for (d = 1; d <= n7; d++) {
  console.log(`${p2}`);
}
console.log(` `);

//6. Ingresar dos valores enteros y enumerar los elementos que los separan.
let n8 = 4;
let n9 = 9;
for (e = 1 + n8; e < n9; e++) {
  console.log(`${e}`);
}
console.log(` `);

//7. Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
let n10 = 18;
let n11 = 27;
for (f = 1 + n10; f < n11; f++) {
  if (f % 3 === 0) {
    console.log(`${f}`);
  }
}
console.log(` `);

//8. Mostrar los multiplos de 2 y 5 menores a 100.
for (g = 1; g < 100; g++) {
  if (g % 2 === 0) {
    console.log(`${g} (2)`);
  }
  if (g % 5 === 0) {
    console.log(`${g} (5)`);
  }
}
console.log(` `);

//9. Obtener la suma de los elementos de un array.
let a1 = [2, 5, 8];
let suma2 = 0;
for (a = 0; a < a1.length; a++) {
  suma2 = suma2 + a1[a];
}
console.log(`la suma de los elementos del array es ${suma2}
  `);

//10.Sumar solo los elementos pares de un array.
let a2 = [6, 1, 4, 9];
let suma3 = 0;
for (a = 0; a < a2.length; a++) {
  if (a2[a] % 2 === 0) {
    suma3 = suma3 + a2[a];
  }
}
console.log(`la suma de los elementos pares del array es ${suma3}
  `);

//11.Ingresar una palabra e identificar la letras distintas y sus repeticiones.
function contarletras(rana) {
  let contador = {};
  for (let l of rana) {
    if (contador[l]) {
      contador[l]++;
    } else {
      contador[l] = 1;
    }
  }
  return contador;
}
console.log(contarletras("rana"));
console.log(` `);

//12.Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. Agregar varios elementos a una lista. Obtener el promedio de edad, el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, el promedio de edad de las mujeres.
let o1 = { nombre: "aleli", sexo: "mujer", edad: 39 };
let o2 = { nombre: "joaquin", sexo: "hombre", edad: 21 };
let o3 = { nombre: "margarita", sexo: "mujer", edad: 60 };
let o4 = { nombre: "rigoberto", sexo: "hombre", edad: 82 };
let lista2 = [o1, o2, o3, o4];
var edadT = 0;
function PromedioEdad() {
  for (a = 0; a < lista2.length; a++) {
    edadT = edadT + lista2[a].edad;
  }
  promedioE = edadT / lista2.length;
  return promedioE;
}
console.log(PromedioEdad(lista2));

function mujerMayorNombre() {
  let mujeres = lista2.filter((lista2) => lista2.sexo === "mujer");
  let mujerMayorEdad = mujeres.reduce((max, mujer) =>
    mujer.edad > max.edad ? mujer : max
  );
  return mujerMayorEdad.nombre;
}
console.log(mujerMayorNombre(lista2));

function hombreMenorNombre() {
  let hombres = lista2.filter((lista2) => lista2.sexo === "hombre");
  let hombreMenorEdad = hombres.reduce((min, hombre) =>
    hombre.edad < min.edad ? hombre : min
  );
  return hombreMenorEdad.nombre;
}
console.log(hombreMenorNombre(lista2));

function promedioEdadMujeres() {
  let mujeres = lista2.filter((lista2) => lista2.sexo === "mujer");
  let sumaEdadesMujeres = mujeres.reduce((suma, mujer) => suma + mujer.edad, 0);
  return sumaEdadesMujeres / mujeres.length;
}
console.log(promedioEdadMujeres(lista2));
console.log(` `);

//13.Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. Devolver una lista con los divisores del numero ingresado.
let minimo = 2;
let maximo = 27;
let divisor = 4;
function encontrarDivisores(minimo, maximo, divisor) {
  let divisibles = [];
  for (let a = minimo; a <= maximo; a++) {
    if (a % divisor === 0) {
      divisibles.push(a);
    }
  }
  return divisibles;
}
console.log(encontrarDivisores(minimo, maximo, divisor));
