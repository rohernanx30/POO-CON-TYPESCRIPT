//Crear una clase Calculadora que contendrá los siguientes métodos: 
// Sumar, Restar, Multiplicar, Dividir,Potencia, Factorial

export class Calculadora {
    sumar(a: number, b: number){
        return a + b;
    }
    restar(a: number, b: number){
        return a - b;
    }
    multiplicar(a: number, b: number){
        return a * b;
    }
    dividir(a: number, b: number){
        return b !== 0 ? a / b : NaN;
    }
    potencia(base: number, exponente: number){
        return Math.pow(base, exponente);
    }
    factorial(n: number): number {
        if (n <= 1) return 1;
        return n * this.factorial(n - 1);
    }
}