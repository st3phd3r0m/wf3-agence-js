//Variables globales
let images = ["images/index-slide01.jpg", "images/index-slide02.jpg", "images/index-slide03.jpg"];

let pointeur = 0;

//On attend que le DOM soit chargé
window.onload = () => {

    //"mise à jour" du nombre de cercle dans le diaporama
    miseAJourCercle();

    //Lancement diaporama
    let period = 1000;
    let interVal = setInterval(defiler, period);

    //Ecouteur d'évenement pour interrompre le diaporama 
    let section = document.querySelector("header>section");
    section.addEventListener("mouseover", function () {
        clearInterval(interVal);
    });

    //Ecouteur d'évenement pour relancer le diaporama
    section.addEventListener("mouseout", function () {
        interVal = setInterval(defiler, period);
    });

    //Diaporama manuel : image de droite
    let plus = document.querySelector(".la-chevron-right");
    plus.addEventListener("click", defiler);

    //Diaporama manuel : image de gauche
    let moins = document.querySelector(".la-chevron-left");
    moins.addEventListener("click", defileMoins);

} // Fin windows.onload

function miseAJourCercle() {
    // Supprimer circles et dot-circles
    let circleParent = document.querySelector("section>div:last-child");
    circleParent.innerHTML = "";
    //Créer autant de cercles qu'il y a d'images
    for (let compteur = 0; compteur < images.length; compteur++) {
        let circle = document.createElement("i");
        if (compteur == 0) {
            circle.classList.add("las", "la-dot-circle");
        } else {
            circle.classList.add("las", "la-circle");
        }

        circleParent.appendChild(circle);
    }
}



/**
 * Fait avancer le diaporama d'une image
 */
function defiler() {

    //Collection des éléments ronds
    let circles = document.querySelectorAll("section div:nth-of-type(2)>i");

    //Avant que ne s'incrémente le pointeur, on remplace le rond plein du slide précédent par un rond vide en manipulant la classe correspondante
    circles[pointeur].classList.replace("la-dot-circle", "la-circle");

    // On incrémente le tableau
    pointeur++;
    // Si le pointeur dépasse le bout du tableau
    if (pointeur == images.length) {
        // on réinitialise le pointeur
        pointeur = 0;
    }
    //Récupération noeud correspondant au diaporama : on va chercher l'image
    let diaporama = document.querySelector("header>section>img");
    diaporama.setAttribute("src", images[pointeur]);

    //Le pointeur étant à jour, on remplace le rond vide du slide présent par un rond plein en manipulant la classe correspondante
    circles[pointeur].classList.replace("la-circle", "la-dot-circle");
}


/**
 * Faire reculer le diaporama d'une image
 */
function defileMoins() {

    //Collection des éléments ronds
    let circles = document.querySelectorAll("section div:nth-of-type(2)>i");

    //Avant que ne décrémente le pointeur, on remplace le rond plein du slide précédent par un rond vide en manipulant la classe correspondante
    circles[pointeur].classList.replace("la-dot-circle", "la-circle");

    // On décrémente le tableau
    pointeur--;
    // Si le pointeur dépasse le début du tableau
    if (pointeur == -1) {
        // on réinitialise le pointeur
        pointeur = images.length - 1;
    }
    //Récupération noeud correspondant au diaporama : on va chercher l'image
    let diaporama = document.querySelector("header>section>img");
    diaporama.setAttribute("src", images[pointeur]);

    //Le pointeur étant à jour, on remplace le rond vide du slide présent par un rond plein en manipulant la classe correspondante
    circles[pointeur].classList.replace("la-circle", "la-dot-circle");
}