//Clase abstracta Persona y va contener los siguientes atributos: nombre, apellido, dirección, teléfono y edad.
export abstract class Persona {
    protected nombre: string;
    protected apellido: string;
    protected direccion: string;
    protected telefono: string;
    protected edad: number;

    constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    verificarEdad(){
        console.log(this.edad >= 18 ? "Es mayor de edad." : "Es menor de edad.");
    }
    // Método abstracto que se implementa en la clase hija
    abstract mostrarDatos(): void;
}
