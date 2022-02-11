$.ajax({
    type: "GET",
    url:  "http://localhost:3000/usuarios/filter",
    data:  {gender:"female", country: "Brazil"},
    dataType: "json",
    success: function (response) {
        console.log(response);
    },
    complete: ()=>{
        console.log("peticion completada");
    },
});