let cartasIzq = [];
let cartasDer = [];

$(document).ready(function () {
  $("#start").click(function (e) {
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
    $(e.currentTarget).fadeIn();
  });
  $("#Der img").click(function (e) {
    $(e.currentTarget).fadeOut();
    $(e.currentTarget).attr("src", cartasDer[e.currentTarget.alt].img);
    $(e.currentTarget).fadeIn();
  });
});

function cargarCartas() {
  for (let i = 0; i < 18; i++) {
    cartasDer.push(new Carta(`utils/img/${i}.png`, i));
    cartasIzq.push(new Carta(`utils/img/${i}.png`, i));
  }
  this.cartasDer = _.shuffle(cartasDer);
  this.cartasIzq = _.shuffle(cartasIzq);

  console.log(cartasDer);
  console.log(cartasIzq);
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
      `<img src='${element.fondo}' style="width: 15%;" alt='${element.valor}'">`
    );
  });
}
