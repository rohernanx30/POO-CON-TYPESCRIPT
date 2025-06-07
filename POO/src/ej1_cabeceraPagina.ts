/*Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
obtenga el título, color y fuente de la página, el segundo método que indique como desea que
aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.*/

export class CabeceraPagina {
    private titulo: string;
    private color: string;
    private fuente: string;
    private alineacion:string= "";

    constructor(titulo: string, color: string, fuente: string) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    }

    AlineacionTitulo(alineacion: 'centrado' | 'derecha' | 'izquierda'){
        this.alineacion = alineacion;
    }

    imprimirPropiedades(){
        console.log(`Título: ${this.titulo}`);
        console.log(`Color: ${this.color}`);
        console.log(`Fuente: ${this.fuente}`);
        console.log(`Alineación: ${this.alineacion}`);
    }
}