$(document).ready((e)=>{
    console.log("documento cargado correctamente");
});
$(document).ready(() => {
     let elementos =$('li');

     $.each(elementos,(index,element)=> {
        console.log(element);
     });
     
     $('#button_accion').click((e) => {

        $('li').addClass("list-group-item");        
     });
});
