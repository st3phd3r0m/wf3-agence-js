
//On attend que le DOM soit chargé
$(function () {

    //Faire "disparaitre" les elements span dans le formulaire
    $("form span").hide();

    // Désactivation du boutton------------------------------------------------------
    let button = $("form button");
    button.disableButton();

    //Vérification saisies utilisateur--------------------------------------------------

    //Désactiver la mise mise en majuscules des inputs si ces derniers sont remplis
    $("form>input").disableUppercase();
    // console.log(document.querySelector("form>textarea"))
    $("form>textarea").disableUppercase();

    //Le pseudo doit faire au moins 5 caractères et prevenir l'utilisateur----------
    //Création message d'erreur
    let message = "Le nom saisi doit comporter au moins 5 caractères";
    $("form span:first-of-type").append(message).css("color", "red");
    //Collection cible et attachement écouteur d'évenement
    $("form input:first-of-type").on("keyup", verifLongueurMot);

    //Le pseudo doit faire au moins 5 caractères et prevenir l'utilisateur----------
    //Création message d'erreur
    message = "Veuillez entrer un numéro de téléphone valide (10 chiffres)";
    $("form span:nth-of-type(2)").append(message).css("color", "red");
    //Collection cible et attachement écouteur d'évenement
    $("form input:nth-of-type(2)").on("keyup", verifTel);

    //L'adresse email doit être valide-----------------------------------------------
    //Création message d'erreur
    message = "Veuillez entrer une adresse courriel valide (X@X.X)";
    $("form span:nth-of-type(3)").append(message).css("color", "red");
    //Collection cible et attachement écouteur d'évenement
    $("form input:nth-of-type(3)").on("keyup", checkEmail);

    //Les deux adresses email doivent être identiques
    message = "Veuillez saisir des adresses email identiques";
    $("form span:nth-of-type(4)").append(message).css("color", "red");
    //Collection cible et attachement écouteur d'évenement
    $("form input:nth-of-type(4)").on("keyup", sameEmail);

    //Le message doit faire au moins 15 caractères
    message = "Votre message doit comporter au moins 15 caractères";
    $("form span:nth-of-type(5)").append(message).css("color", "red");
    //Collection cible et attachement écouteur d'évenement
    $("form textarea").on("keyup", verifLongueurMot);

    //Validation du formulaire (pour reactiver le bouton)
    $("form").on("keyup",valideFormulaire);

}); // fin window.onload


/**
 * Cette fonction vérifie si le pseudo fait au moins 5 caractères
 */
function verifLongueurMot() {
    $(this).disableUppercase();
    let mot = $(this).val();
    let seuil = 5;

    if( $(this).attr("name") == "name" ){
        seuil = 5;
    }else if( $(this).attr("name") == "message"){
        seuil = 15;
    }

    if (mot.length < seuil) {
        $(this).css("border", "3px solid red");
        $(this).next().show();
    } else if (mot.length >= seuil) {
        $(this).css("border", "3px solid green");
        $(this).next().hide();
    }

    return (mot.length < 5);
}


/**
 * Fonction vérifiant la validité du numero de tel
 */
function verifTel() {
    $(this).disableUppercase();
    let tel = $(this).val();
    //Verification numero de tel via une regexp (0000000000)
    let regex = /(0|\+33)[1-9]( *[\d]{2}){4}/;
    if (regex.test(tel)) {
        $(this).css("border", "3px solid green");
        $(this).next().hide();
    } else {
        $(this).css("border", "3px solid red");
        $(this).next().show();
    }

    return (regex.test(tel) && tel.length < 11);
}

function checkEmail() {
    $(this).disableUppercase();
    let emailAdress = $(this).val();
    let regex = /[\w]{2,10}@[a-zA-Z]{2,10}\.[a-zA-Z]{2,3}/; ///A retravailler
    let courrielValide = regex.test(emailAdress);

    if (courrielValide) {
        $(this).css("border", "3px solid green");
        $(this).next().hide();
    } else {
        $(this).css("border", "3px solid red");
        $(this).next().show();
    }

    return courrielValide;
}

function sameEmail() {
    $(this).disableUppercase();

    let email2 = $(this).val();
    let email1 = $("form input:nth-of-type(3)").val();

    if (email1 == email2) {
        $(this).css("border", "3px solid green");
        $(this).next().hide();
    } else {
        $(this).css("border", "3px solid red");
        $(this).next().show();
    }

    return (email1 == email2);
}

$.fn.extend({
    disableUppercase: function () {
        let mot = $(this).val();
        if (mot.length > 0) {
            $(this).css("textTransform", "none");
        } else {
            $(this).css("textTransform", "uppercase");
        }
    },
    disableButton: function(){
        $(this).attr("disabled", true);
        $(this).css("opacity","0.5");
    }
});





// /**
//  * Fontion verifiant la validité du formulaire et active/désactive le bouton de soumission selon
//  */
function valideFormulaire(){
    console.log(verifTel);

}
// function checkForm() {
//     // objet bouton
//     let button = document.querySelector("button");

//     //Longueur du pseudo >= 5 (renvoie true ou false)
//     let longueurPseudo = document.querySelector('input').value.length >= 5;

//     //Extraction chaine de caractère dans l'input email
//     let courriel1 = document.querySelectorAll('input')[1].value;
//     let courriel2 = document.querySelectorAll('input')[2].value;

//     //Verification email valide via un regexp (xx@xx.xx)
//     let regex = /[\w]{2,10}@[a-zA-Z]{2,10}\.[a-zA-Z]{2,3}/;
//     let courrielValide = regex.test(courriel2);

//     //Extraction chaine de caractère dans l'input password
//     let password1 = document.querySelectorAll('input')[3].value;
//     let password2 = document.querySelectorAll('input')[4].value;
//     //Longueur du password > 0 (renvoie true ou false)
//     let longueurPassword = password2.length != 0;

//     //Initialisation compteur (points de validité du formulaire)
//     var compt = 0;

//     //Expressions ternaires
//     //Si longueurPseudo >=5, le compteur s'incrémente
//     longueurPseudo ? compt++ : 0;
//     (courriel1 == courriel2) && (courrielValide) ? compt++ : 0;
//     (password1 == password2) && (longueurPassword) ? compt++ : 0;
//     compt >= 3 ? button.disabled = false : button.disabled = true;
// }