// Obtener los elementos de la clase .close

let links = document.querySelectorAll(".close");

//Recorrerlos

links.forEach(function(link){

    //Agregar un evento click a cada uno de ellos
    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');


        //Quitarle las clases de animacion que tiene
        content.classList.remove("backInDown");
        content.classList.remove("animated");



        //Agregar clases para animar su salida fadeOutUp
        content.classList.add("fadeOutUp");
        content.classList.add("animated");

        setTimeout(function() {
            location.href = "/";
        },1000);
        // setInterval
        

        return false;
    });
});
