class Carta {
  img;
  fondo;
  valor;
  constructor(img, valor) {
    
    this.img = img;
    this.valor = valor;
    this.fondo = "utils/img/reverso.png";
    
  }
  set setImg(img) {
    this.img = img;
  }
  get getImg() {
    return this.img;
  }
  get getValor() {
    return this.valor;
  }
  get getFondo() {
    return this.img;
  }
}
