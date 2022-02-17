let cartasIzq = [];
let cartasDer = [];
let puntuacion = 0;
let cIzq;
let cDer;

$(document).ready(function () {
  $("#start").click(function (e) {
    //Si colocamos aqui el metodo pintar cartas, tenemos que encontrar
    //la forma de bloquar el boton para no generar mas de las necesarias
    $("img").fadeIn();
  });
  $("#end").click(function (e) {
    $("img").fadeOut();
  });
  cargarCartas();
  pintarCartas("Izq");
  pintarCartas("Der");

  $("#Izq img").click(function (e) {
    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr("src", cartasIzq[e.currentTarget.alt].img);
    cIzq = e.currentTarget.alt;
    $(e.currentTarget).fadeIn();

    });
  $("#Der img").click(function (e) {
    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr("src", cartasDer[e.currentTarget.alt].img);
    cDer = e.currentTarget.alt;
    $(e.currentTarget).fadeIn();
  });

  calcularPuntuacion();
});


function cargarCartas() {
  for (let i = 0; i < 18; i++) {
    cartasDer.push(new Carta(`utils/img/${i}.png`, i));
    cartasIzq.push(new Carta(`utils/img/${i}.png`, i));
  }
  //Metodo cartas aleatorias :
}

function pintarCartas(lado) {
  let array;
  if (lado == "Izq") {
    array = cartasIzq;
  } else {
    array = cartasDer;
  }

  $.each(array, function (i, element) {
    $(`#${lado}`).append(
      `<img src='${element.fondo}' style="width: 15%; margin: 4px;" alt='${element.valor}'">`
    );
  });
}
function calcularPuntuacion() {
  $('#puntos').append(`<p>${puntuacion}</p>`);
}
