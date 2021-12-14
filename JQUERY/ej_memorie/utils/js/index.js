$(document).ready(function () {
    $('#btn-aparecer').click(function (e) {
        $('img').fadeIn();


    });
    $('#btn-desaparecer').click(function (e) {
        $('img').fadeOut();

    });
    $('#btn-comprobar').click(function (e) {
        if ($('img').css('display') == "none") {
            $('img').fadeIn();
        }
        else {
            $('img').fadeOut();
        }

    });
    $('img').click(function (e) {
        $(e.target).fadeOut();
        $(e.target).attr('src', './utils/img/Bowser.png');
        $(e.target).fadeIn();

    });
    $('img').toggle(
        () => {
            $(e.target).fadeOut();
            $(e.target).attr('src', './utils/img/Bowser.png');
            $(e.target).fadeIn();
        },
        () => {
            $(e.target).fadeOut();
            $(e.target).attr('src', './utils/img/Reverso_baraja_española_rojo.svg.png');
            $(e.target).fadeIn();
        });
});