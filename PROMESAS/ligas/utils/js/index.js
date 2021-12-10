let selectLigas;
let selectEquipos;

window.addEventListener('load',()=>{
    selectLigas =document.querySelector("#select-ligas");
    selectEquipos =document.querySelector("#select-equipos");
    //selectEquipos.removeChild() --- elimina los hijos del select.
    //selectLigas.remove();
    cargarLisgas();
    selectLigas.addEventListener('change',(e)=>{
        let id =  e.target.value;
        //cargarEquipos(id);
    })


});

function cargarLisgas() {
    let ligas = "https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    fetch(ligas).then(
        (res)=>res.json(),
        (rej)=>{console.log('ERROR' + rej);}
    ).then(
        (res)=>{
            res.leagues.forEach(element => {
                let nodo = document.createElement('option');
                nodo.value= element.idLeague;
                nodo.innerHTML=`${element.strLeague}`;
                selectLigas.append(nodo);
            
            });
        
        },
        (rej)=>{}
    )
    ;
}
function cargarEquipos(){
    //let equipos = `https://www.thesportsdb.com/api/v1/json/2/lookup_all_teams.php?id=${id}`;
    let equipos ="https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?s=Soccer&c=Spain";
    fetch(equipos).then(
        (res)=>res.json(),
        (rej)=>{console.log('ERROR' + rej);}
    ).then(
        (res)=>{
            res.teams.forEach(e =>{
                let nodo = document.createElement('option');
                nodo.value= e.idTeam;
                nodo.innerHTML=`e.${strTeam}`;
                selectEquipos.append(nodo);
            })
        },
        (rej)=>{}
    );
    
    

}

