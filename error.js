document.getElementById("envoie").addEventListener("submit", function (e) {
    e.preventDefault();
    var erreur;
    var email = document.getElementById("email");

    if (!email.value) {
        erreur = "Email envoyé !";
        if (erreur) {
            e.preventDefault();
            Document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            
        }
    }
alert('formulaire envoyé !');
    
});
