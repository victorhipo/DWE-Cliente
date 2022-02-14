let cartas = [];

$(document).ready(function () {
  cargarCartas();
  pintarCartas("izquierda");
  pintarCartas("derecha");

  $("#btn-aparecer").click(function (e) {
    $("img").fadeIn();
  });  

  $("#btn-desaparecer").click(function (e) {
    $("img").fadeOut();
  });

  $("#btn-comprobar").click(function (e) {
    if ($("img").css("display") == "none") {
      $("img").fadeIn();
    } else {
      $("img").fadeOut();
    }
  });

  $("#izquierda img").click(function (e) {
    // carta = cartas[e.currentTarget.alt];

    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr(
      "src",
      cartasIzquierda[e.currentTarget.alt].imagenUp
    );
    $(e.currentTarget).fadeIn();
    // setTimeout(() => {
    //     $(e.currentTarget).fadeOut();
    // $(e.currentTarget).attr('src', './utils/img/Reverso_baraja_española_rojo.svg.png');
    // $(e.currentTarget).fadeIn();
    // }, 4000);
  });
  $("#derecha img").click(function (e) {
    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr("src", cartasDerecha[e.currentTarget.alt].imagenUp);
    $(e.currentTarget).fadeIn();
    // setTimeout(() => {
    //     $(e.currentTarget).fadeOut();
    // $(e.currentTarget).attr('src', './utils/img/Reverso_baraja_española_rojo.svg.png');
    // $(e.currentTarget).fadeIn();
    // }, 4000);
  });

  function darVuelta() {}

  function cargarCartas() {
    for (let i = 0; i < 8; i++) {
      cartasIzquierda.push(new Carta(`./utils/img/${i}.png`, i));
      cartasDerecha.push(new Carta(`./utils/img/${i}.png`, i));
    }
    console.log(cartasIzquierda);
    console.log(cartasDerecha);
  }

  function pintarCartas(lado) {    
    if (lado == "izquierda") {
      array = cartasIzquierda;
    } else {
      array = cartasDerecha;
    }
    $.each(cartas, function (index, element) {
      $(`#${lado}`).append(
        `<img src='${element.imagenReverso}' style="width: 20%;" alt='${element.valor}'>`
      );
    });
  }
});
