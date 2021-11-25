let selectLigas;

window.addEventListener('load',()=>{
    let selectLigas = document.querySelector('#ligas');
    cargarLigas();
    selectLigas.addEventListener('change',(e)=>{
        let id = e.target.value;
    });
})

function cargarLigas() {
    let url_ligas="https://www.thesportsdb.com/api/v1/json/2/all_leagues.php";
    
    fetch(url_ligas).then(
        (res)=>res.json(),
        (rej)=>{console.log('Error' + rej);}
    ).then(
        (res)=>{
            console.log(res.leagues);
            res.leagues.forEach(element => {
                let nodoLiga = document.createElement("option");
                nodoLiga.value =element.idLeague;
                nodoLiga.innerHTML=`${element.strLeague}`;
                selectLigas.append(nodoLiga);
            });
        },
        (rej)=>{}
    )
}
function cargarEquipos(id) {
    let url_equipos=`https://www.thesportsdb.com/api/v1/json/2/lookup_all_teams.php?id=${id}`;    
    
}


