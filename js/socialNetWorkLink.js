//On attend que le DOM soit chargé
$(function () {
    $("footer a").on("click",askGoTOSocialNetwork);
}); // Fin windows.onload

function askGoTOSocialNetwork(event){

    event.preventDefault();
    let url = $(this).attr("href");
    let text = $(this).data("titre");
    // console.log(event);

    if(confirm("Voulez-vous aller sur le site de "+text+" ?")){
        window.location.href = url;
    }
}


//On attend que le DOM soit chargé
// $(function () {

//     $(".la-facebook").on("click",askGoTOSocialNetwork);
//     $(".la-twitter").on("click",askGoTOSocialNetwork);

// }); // Fin windows.onload

// function askGoTOSocialNetwork(event){
//     event.preventDefault();
//     let url = this.className.slice(6); 
//     if(confirm("Voulez-vous aller sur le site de "+url+" ?")){
//         url = "https://www."+url+".com/";
//         // window.location.replace(url);
//         window.location.href = url;
//     }
// }