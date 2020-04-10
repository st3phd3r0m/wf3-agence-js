//Attente chargement page web
window.onload = () => {

    // Aller dans 
    // if (document.getElementById("contactEntrance") != null) {
    //     let navToContact = document.getElementById("contactEntrance");
    //     navToContact.addEventListener("click", goToContact);
    // }


    let homeArrow = document.getElementById("scroll");
    homeArrow.addEventListener("click", goToHomeSite);



} // Fin windows.onload

// function goToContact() {
//     let contactPosition = document.getElementById("contact");
//     console.log(contactPosition);
//     contactPosition = contactPosition.offsetTop;
//     console.log(contactPosition);
//     window.scrollTo({left : 0, top: contactPosition, behavior: 'smooth'});
// }

function goToHomeSite(event) {
    
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}