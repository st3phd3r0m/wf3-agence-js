//Variables globales
let images = ["images/index-slide01.jpg", "images/index-slide02.jpg", "images/index-slide03.jpg"];

let pointeur = 0;

let interval;

let period;

//On attend que le DOM soit chargé
$(function () {

    //"mise à jour" du nombre de cercle dans le diaporama
    miseAJourCercle();

    //Lancement diaporama
    period = 10000;
    interval = setInterval(defiler, period);

    //Ecouteur d'évenement pour interrompre le diaporama 
    $("header>section").on("mouseover", arretDefile).on("mouseout", repriseDefile);

    //Diaporama manuel : image de droite
    $(".la-chevron-right").on("click", defiler);

    //Diaporama manuel : image de gauche
    $(".la-chevron-left").on("click", defileMoins);

}); // Fin windows.onload


function miseAJourCercle() {
    // Supprimer circles et dot-circles
    let points = $("header>section>div:last-child");
    points.empty();

    //Créer autant de cercles qu'il y a d'images
    for (let compteur = 0; compteur < images.length; compteur++) {
        if (compteur == 0) {
            points.append("<i class='las la-dot-circle'></i>");
        } else {
            points.append("<i class='las la-circle'></i>");
        }
    }
}

/**
 * Fait avancer le diaporama d'une image
 */
function defiler() {

    //Collection des éléments ronds
    let circles = $("section div:nth-of-type(2)>i");


    $("header>section").addClass("diapo-black");
    //fondu sortant
    $("header>section>img").fadeOut(period/10,function(){
        //Avant que ne s'incrémente le pointeur, on remplace le rond plein du slide précédent par un rond vide en manipulant la classe correspondante
        // $(circles[pointeur]).removeClass("la-dot-circle").addClass("la-circle");
        circles[pointeur].classList.replace("la-dot-circle", "la-circle");

        // On incrémente le tableau
        pointeur++;
        // Si le pointeur dépasse le bout du tableau
        if (pointeur == images.length) {
            // on réinitialise le pointeur
            pointeur = 0;
        }

        //Récupération noeud correspondant au diaporama : on va chercher l'image
        $("header>section>img").attr("src", images[pointeur]);
        //Le pointeur étant à jour, on remplace le rond vide du slide présent par un rond plein en manipulant la classe correspondante
        circles[pointeur].classList.replace("la-circle", "la-dot-circle");
        $("header>section>img").fadeIn(period/4); 
        
        $("header>section").removeClass("diapo-black");
    });

   


}

function defileMoins() {

    //Collection des éléments ronds
    let circles = $("section div:nth-of-type(2)>i");

    //Avant que ne décrémente le pointeur, on remplace le rond plein du slide précédent par un rond vide en manipulant la classe correspondante
    $(circles[pointeur]).removeClass("la-dot-circle").addClass("la-circle");

    // On décrémente le tableau
    pointeur--;
    // Si le pointeur dépasse le début du tableau
    if (pointeur < 0) {
        // on réinitialise le pointeur
        pointeur = images.length - 1;
    }
    //Récupération noeud correspondant au diaporama : on va chercher l'image
    $("header>section>img").attr("src", images[pointeur]);

    //Le pointeur étant à jour, on remplace le rond vide du slide présent par un rond plein en manipulant la classe correspondante
    $(circles[pointeur]).removeClass("la-circle").addClass("la-dot-circle");
}

function arretDefile() {
    clearInterval(interval);
}

function repriseDefile() {
    interval = setInterval(defiler, period);
}