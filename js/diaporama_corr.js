//Variables globales
let images = ["images/index-slide01.jpg", "images/index-slide02.jpg", "images/index-slide03.jpg"];

let pointeur = 0;

//On attend que le DOM soit chargé
window.onload = () => {

    let period = 1000;
    let interVal = setInterval(defiler, period);

    let plus = document.querySelector(".la-chevron-right");
    plus.addEventListener("click", defiler);

    let moins = document.querySelector(".la-chevron-left");
    moins.addEventListener("click", defileMoins);

    // Récupération noeud dot-circle et parent
    let circle = document.querySelector(".la-circle");
    let circlesParent = circle.parentElement;

    //Création élément de classe .la-circle supplémentaire
    let newCircle = document.createElement("i");
    circlesParent.appendChild(newCircle);
    newCircle.classList.add("las");
    newCircle.classList.add("la-circle");

    //Ecouteur d'évenement pour interrompre le diaporama 
    let img = document.querySelector("header>section>img");
    img.addEventListener("mouseover", function () {
        clearInterval(interVal);
    });

    //Ecouteur d'évenement pour relancer le diaporama
    img.addEventListener("mouseout", function () {
        interVal = setInterval(defiler, period);
    });

} // Fin windows.onload

/**
 * Fait avancer le diaporama d'une image
 */
function defiler() {
    //Collection des éléments ronds
    let circles = document.querySelectorAll("section div:nth-of-type(2)>i");
    //Avant que ne s'incrémente le pointeur, on remplace le rond plein du slide précédent par un rond vide en manipulant la classe correspondante
    circles[pointeur].classList.remove("la-dot-circle");
    circles[pointeur].classList.add("la-circle");

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
    circles[pointeur].classList.remove("la-circle");
    circles[pointeur].classList.add("la-dot-circle");
}


/**
 * Faire reculer le diaporama d'une image
 */
function defileMoins() {
    //Collection des éléments ronds
    let circles = document.querySelectorAll("section div:nth-of-type(2)>i");
    //Avant que ne s'incrémente le pointeur, on remplace le rond plein du slide précédent par un rond vide en manipulant la classe correspondante
    circles[pointeur].classList.remove("la-dot-circle");
    circles[pointeur].classList.add("la-circle");

    // On décrémente le tableau
    pointeur--;
    // Si le pointeur dépasse le début du tableau
    if (pointeur == -1) {
        // on réinitialise le pointeur
        pointeur = images.length-1;
    }
    //Récupération noeud correspondant au diaporama : on va chercher l'image
    let diaporama = document.querySelector("header>section>img");
    diaporama.setAttribute("src", images[pointeur]);

    //Le pointeur étant à jour, on remplace le rond vide du slide présent par un rond plein en manipulant la classe correspondante
    circles[pointeur].classList.remove("la-circle");
    circles[pointeur].classList.add("la-dot-circle");
}