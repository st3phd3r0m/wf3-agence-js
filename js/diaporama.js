//On attend que le DOM soit chargé
window.onload = () => {
    //Récupération noeud correspondant au diaporama
    let diaporama = document.querySelector("header>section");
    // console.log(diaporama)
    let divGlobe = document.querySelector("header>section>div");

    // //Récupération noeud dot-circle et parent
    // let dotCircle = document.querySelector(".la-dot-circle");
    // let circlesParent = dotCircle.parentElement;

    //Création de 3 éléments image 

    for (let i = 2; i <= 3; i++) {
        let img = document.createElement("img");
        img.src = "images/index-slide0" + i + ".jpg";
        diaporama.insertBefore(img, divGlobe);
        img.style.display = "none";
    }

    //Initialisation collection éléments img
    let slides = document.querySelectorAll("header>section>img");
    let compt = 0;
    setInterval(defilerSlide, 1000) ;

    function defilerSlide() {
        slides[compt % 3].style.display = "none";
        compt++;
        slides[compt % 3].style.display = "initial";
    }

}// Fin windows.onload

