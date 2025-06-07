import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
//Importacion de los ejercicios
import { CabeceraPagina } from "./ej1_cabeceraPagina.ts";
import { Calculadora } from "./ej2_calculadora.ts";
import { Cancion } from "./ej3_cancion.ts";
import { Cuenta } from "./ej4_cuenta.ts";
import { Empleado } from "./ej5_empleado.ts";

console.log("===== EJERCICIO 1 =====");
let pagina = new CabeceraPagina("El Principito", "Azul", "Verdana");
pagina.AlineacionTitulo("centrado");
pagina.imprimirPropiedades();

console.log("\n===== EJERCICIO 2 =====");
let calc = new Calculadora();
console.log("Suma: " + calc.sumar(5, 3));
console.log("Resta: " + calc.restar(10, 4));
console.log("Multiplicación: " + calc.multiplicar(4, 2));
console.log("División: " + calc.dividir(20, 4));
console.log("Potencia: " + calc.potencia(3, 3));
console.log("Factorial: " + calc.factorial(5));

console.log("\n===== EJERCICIO 3 =====");
let cancion = new Cancion("Una Foto Remix", "Trap");
cancion.setAutor("Nicky Nicole, Mesita, Emilia y Thiago");
cancion.mostrarDatos();

console.log("\n===== EJERCICIO 4 =====");
let cuenta = new Cuenta("Rocío Martínez", 12, "Ahorro", "00012345");
cuenta.mostrarDatos();
cuenta.depositar();
cuenta.retirar(10);

console.log("\n===== EJERCICIO 5 =====");
let empleado = new Empleado("Ana", "Hernández", "La Unión", "7788-9900", 25);
empleado.cargarSueldo(1200);
empleado.mostrarDatos();
empleado.verificarEdad();
empleado.imprimirSueldo();


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)