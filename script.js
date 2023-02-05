const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); // empêche la soumission du formulaire
// si l'e-mail et le mot de passe sont vides, ajoutez la classe shake, sinon appelez la fonction spécifiée  
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

  setTimeout(()=>{ // supprimer la classe de secousse après 500 ms
    eField.classList.remove("shake");
    pField.classList.remove("shake");
  }, 500);

  eInput.onkeyup = ()=>{checkEmail();} // appel de la fonction checkEmail sur la touche d'entrée d'e-mail
  pInput.onkeyup = ()=>{checkPass();} //appel de la fonction checkPassword sur la touche d'entrée de passe

  function checkEmail(){ //Fonction /checkEmail
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //modèle pour valider l'e-mail
    if(!eInput.value.match(pattern)){ // si le modèle ne correspond pas, ajoutez une erreur et supprimez la classe valide
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      // si la valeur de l'e-mail n'est pas vide, veuillez entrer un e-mail valide, sinon, l'e-mail ne peut pas être vide
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ // si le modèle correspond, supprimez l'erreur et ajoutez une classe valide
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ // fonction checkPass
    if(pInput.value == ""){ // si la passe est vide, ajoutez une erreur et supprimez la classe valide
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ // si pass est vide, supprimez l'erreur et ajoutez une classe valide
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }

  // si eField et pField ne contiennent pas de classe d'erreur, ce qui signifie que l'utilisateur a correctement rempli les détails
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //si le champ et le champ ne contiennent pas de classe d'erreur qui signifie que l'utilisateur a correctement rempli les détails//redirection de l'utilisateur vers l'URL spécifiée qui se trouve dans l'attribut d'action de la balise de formulaire
  }
}
