class Carta{
    imagenUp;
    imagenReverso;
    valor;

    constructor( imagenUp,valor){
        this.valor = valor;
        this.imagenUp = imagenUp;
        this.imagenReverso = "./utils/img/Reverso_baraja_española_rojo.svg.png";
    }

    get imagenUp(){
        return this.imagenUp;
    }

    set imagenUp(imagenUp){
        this.imagenUp=imagenUp;
    }

    get imagenReverso(){
        return this.imagenReverso;
    }
    get valor(){
        return this.valor;
    }
}