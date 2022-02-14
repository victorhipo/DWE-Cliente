class Carta {
  img;
  fondo;
  valor;
  constructor(img, valor) {
    
    this.img = img;
    this.valor = valor;
    this.fondo = "./utils/img/Reverso_baraja_española_rojo.svg.png";
  }
  set img(img) {
    this.img = img;
  }
  get img() {
    return this.img;
  }
  get getValor() {
    return this.valor;
  }
  get fondo() {
    return this.fondo;
  }
}
