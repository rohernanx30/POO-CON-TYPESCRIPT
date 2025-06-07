//Crea una clase llamada Canción: que tenga de atributos:
//  título, género de la canción y un atributo privado que se llame autor. y los siguientes métodos:
//• Crear un constructor que reciba como parámetros el título y género de la canción.
//• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
//• Crea un método para mostrar los datos de la canción. 

export class Cancion {
    protected titulo: string;
    protected genero: string;
    private autor: string;

    constructor(titulo: string, genero: string) {
        this.titulo = titulo;
        this.genero = genero;
        this.autor = "";
    }
    getAutor(): string {
        return this.autor;
    }
    setAutor(nombre: string){
        this.autor = nombre;
    }
    mostrarDatos(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Género: ${this.genero}`);
        console.log(`Autor: ${this.autor}`);
    }
}