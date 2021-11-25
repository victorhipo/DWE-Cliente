class Carta {

    numero = "";
    valor = 0;
    img = "";

    constructor(numero) {
        this.numero = numero;
        this.setValor();
        this.setImg();

    }

    set setNumero(numero) {
        this.numero = numero;
    }

    get getNumero() {
        return this.numero;
    }


    setValor() {

         let valorNumero = this.getNumero.substring(0, this.getNumero.length - 1);

        if (isNaN(valorNumero)) {
            if (valorNumero == 'J') {
                this.valor == 11;
            }
            else if (valorNumero == 'Q') {
                this.valor == 12;
            }
            else if (valorNumero == 'K') {
                this.valor = 13;
            }
        }
        else{
            this.valor = parseInt(valorNumero);
        }
    }
    get getValor(){
        return this.valor
    }

    setImg(){
        this.img = `./utils/img/${this.numero}.png`;
    }

    get getImg(){
        return this.img
    }
}

