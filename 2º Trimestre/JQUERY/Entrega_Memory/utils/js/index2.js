let cartasIzquierda = [];
let cartasDerecha = [];
let cartaLectura;

$(document).ready(function () {
  $("#start").click(function (e) {
    $("img").fadeIn();
    //$('img').css('opacity',1);
  });
  $("#end").click(function (e) {
    $("img").fadeOut();
    //$('img').css('opacity',0);
  });
  $("#boton_comprobar").click(function (e) {
    if ($("img").css("display") == "none") {
      $("img").fadeIn();
    } else {
      $("img").fadeOut();
    }
  });

  cargarCargas();
  pintarCartas("izquierda");
  pintarCartas("derecha");

  $("#izq img").click(function (e) {
    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr(
      "src",
      cartasIzquierda[e.currentTarget.alt].imagenUp
    );
    $(e.currentTarget).fadeIn();
  });

  $("#der img").click(function (e) {
    console.log(e.currentTarget.alt);
    

    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr("src", cartasDerecha[e.currentTarget.alt].imagenUp);
    $(e.currentTarget).fadeIn();
  });

});

function darVuelta(params) {
  $(e.currentTarget).fadeOut();
  $(e.currentTarget).attr("src", "./utils/img/Reverso_baraja_española_rojo.svg.png");
  $(e.currentTarget).fadeIn();
}

function cargarCargas() {
  for (let index = 0; index < 10; index++) {
    cartasDerecha.push(new Carta(`utils/img/${index}.png`, index));
    cartasIzquierda.push(new Carta(`utils/img/${index}.png`, index));
  }


  this.cartasDerecha = _.shuffle(cartasDerecha);
  this.cartasIzquierda = _.shuffle(cartasIzquierda);

  console.log(cartasIzquierda);
  console.log(cartasDerecha);
}

function pintarCartas(lado) {
  let array;
  if (lado == "izquierda") {
    array = cartasIzquierda;
  } else {
    array = cartasDerecha;
  }

  $.each(array, function (index, element) {
    $(`#${lado}`).append(
      `<img src='${element.fondo}' style="width: 20%;" alt='${element.valor}'">`
    );
  });
}