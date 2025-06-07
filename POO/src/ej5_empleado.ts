//Clase extra llamada empleado

import { Persona } from "./ej5_persona";

export class Empleado extends Persona {
    private sueldo: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        super(nombre, apellido, direccion, telefono, edad);
        this.sueldo = 0;
    }

    cargarSueldo(monto: number){
        this.sueldo = monto;
    }

    imprimirSueldo(){
        console.log(`Sueldo: $${this.sueldo}`);
    }

    getSueldo(): number {
        return this.sueldo;
    }

    // Polimorfismo: sobreescritura en el método abstracto
    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre} ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad} años`);
    }
}