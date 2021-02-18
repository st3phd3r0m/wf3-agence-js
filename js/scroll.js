//Attente chargement page web
window.onload = () => {

    let homeArrow = document.getElementById("scroll");
    homeArrow.addEventListener("click", goToHomeSite);

    let navTo = document.querySelectorAll("header>nav>ul a");
    for(let compt = 0; compt<navTo.length; compt++){
        navTo[compt].addEventListener("click", goTo);
    }
    
} // Fin windows.onload

function goTo(event){
    event.preventDefault();
    let targetPosition = event.target.getAttribute("href");
    targetPosition = document.querySelector(targetPosition).offsetTop;
    window.scrollTo({left : 0, top: targetPosition, behavior: 'smooth'});
}

function goToHomeSite(event){
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}