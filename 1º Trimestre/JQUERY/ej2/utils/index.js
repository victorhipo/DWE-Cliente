let url = "https://randomuser.me/api/?";
let btn;
let genero;
let numero;

$(document).ready(function () {
    btn = $('#generar-persona');

    $(btn).click((e) => {
        numero = $('#numero-personas').val();
        genero = $('#genero-personas').val();

        url = `https://randomuser.me/api/`;
        console.log(url);

        $.ajax({
            type: "GET",
            url: url,
            data:`{gender='${genero}',results='${numero}'}`,
            dataType: "json",
            success: function (response) {

                response.results.forEach(element => {

                    let codigoCarta = `<div class="card">
                <img src="${element.picture.medium}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${element.name.first}</h5>
                <div>
                    <ul>
                        <li class="list-group-item>"${element.phone}</li>
                        <li class="list-group-item">${element.mail}</li>
                        <li class="list-group-item">${element.id.value}</li>
                    </ul>
                </div>
                </div>
              </div>`;
                    $("#contenedor").append(codigoCarta);
                });

            }
        });
    });
});


// $(btn).click((e)  =>{
//     let numero = document.querySelector('#numero-personas').value;
//     let genero = document.querySelector('#genero-personas').value;

// });

// $.ajax({
//     type: "GET",
//     url: "https://randomuser.me/api/?results=50&gender=female",
//     dataType: "json",
//     success: function (response) {
//         let nodoNuevo =document.createElement('div');

//         nodoNuevo.classList.add("card");
//         nodoNuevo.style.width='15rem';
//         nodoNuevo.innerHTML=`
//         <div class="card-body">
//             <
//         `
//     }
// });
