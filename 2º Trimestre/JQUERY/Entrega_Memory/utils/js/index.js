let cartasIzq = [];
let cartasDer = [];

$(document).ready(function () {
  console.log("los log funcionana");
  cargarCartas();
  pintarCartas("der");
  pintarCartas("izq");

  $("#start").click(function (e) {
    console.log("ha pulsado boton empezar");
    // en el ejercicio de borja si pintarCarta se coloca aqui no le da la vuelta.
    //$("img").fadeIn();
  });
  $("#end").click(function (e) {
    console.log("ha pulsado boton terminar");
    //$("img").fadeOut();
  });

  function cargarCartas() {
    for (let i = 0; i < 15; i++) {
      cartasIzq.push(new Carta(`.utils/img/${i}.png`, i));
      cartasDer.push(new Carta(`.utils/img/${i}.png`, i));
    }
    this.cartasIzq = _.shuffle(cartasDer);
    this.cartasIzq = _.shuffle(cartasIzq);

    console.log(cartasIzq);
    console.log(cartasDer);
  }
  function pintarCartas(lado) {

    console.log("funciona");
    let array;
    if (lado == "izq") {
      array = cartasIzq;
    } else {
      array = cartasDer;
    }

    $.each(array, function (i, element) {
      $(`#${lado}`).append(
        `<img src'${element.fondo}' style="width: 20%;" alt='${element.valor}'>`
      );
    });
  }
});
