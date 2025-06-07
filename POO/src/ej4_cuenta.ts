//Cuenta 

export class Cuenta {
    private nombre: string;
    private cantidad: number;
    private tipoCuenta: string;
    private numeroCuenta: string;

    constructor(nombre: string, cantidad: number, tipoCuenta: string, numeroCuenta: string) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar(){
        if (this.cantidad < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            console.log(`Depósito exitoso: $${this.cantidad}`);
        }
    }

    retirar(valor: number){
    if (this.cantidad <= 0) {
        console.log("No hay fondos en la cuenta.");
        } else if (valor < 5) {
        console.log("Solo puedes retirar más de $5.00");
        } else if (valor > this.cantidad) {
        console.log(`No puedes retirar $${valor} porque tu saldo es de $${this.cantidad}`);
        } else {
        this.cantidad -= valor;
        console.log(`Retiro exitoso: $${valor} | Saldo restante: $${this.cantidad}`);
        }
    }
    getCantidad(): number {
        return this.cantidad;
    }

    mostrarDatos(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
    }
}