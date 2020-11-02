function menu(){
    let zmiana = document.getElementById('mnu');
    let przycisk = document.getElementById("menburg");
    if (zmiana.className=="menu"){
        zmiana.className="menuact";
    } else {
        zmiana.className="menu";
    }
    if (przycisk.className=="fas fa-bars"){
        przycisk.className="fas fa-times";
    } else {
        przycisk.className="fas fa-bars";
    }
}
window.addEventListener("scroll",()=>{
    const scrollsiez = window.scrollY;
    let navi = document.getElementById('navbar');
    const zmiana = (0+(scrollsiez/580));
    navi.style.backgroundColor="rgba(45, 58, 58, "+zmiana+")";
});