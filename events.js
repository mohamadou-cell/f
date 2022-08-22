function couleur()
{
    var bloc = document.querySelectorAll(".a");
    var para = document.querySelectorAll(".b");
    for (i = 0; i < bloc.length;i++)
    {
        bloc[i].classList.toggle("changerb");
        para[i].classList.toggle("changer");
    }   
}
function afficher(){
  /*        Récupération des données         */
  if(document.getElementById('prenom').value == "")  {
    alert("Veuillez entrer votre prenom!");
    document.getElementById('prenom').focus();
    return false;
   }
  localStorage.setItem('Prenom', document.getElementById('prenom').value);
  if(document.getElementById('nom').value == "") {
    alert("Veuillez entrer votre nom!");
    document.getElementById('nom').focus();
    return false;
   }
  localStorage.setItem('Nom', document.getElementById('nom').value);
  if(document.getElementById('email').value == "") {
    alert("Veuillez entrer votre email!");
    document.getElementById('email').focus();
    return false;
   }
  if(document.getElementById('email').value.indexOf('@') == -1) {
    alert("Ce n'est pas une adresse électronique!");
    document.getElementById('email').focus();
    return false;
  }
  localStorage.setItem('Email', document.getElementById('email').value);
  if(document.getElementById('com').value == "") {
    alert("Veuillez entrer votre commentaire!");
    document.getElementById('com').focus();
    return false;
   }
  localStorage.setItem('Commentaire', document.getElementById('com').value);
  /*        Affichage des données            */
  document.getElementById('p1').innerHTML = localStorage.getItem('Prenom');
  document.getElementById('p2').innerHTML = localStorage.getItem('Nom');
  document.getElementById('p3').innerHTML = localStorage.getItem('Email');
  document.getElementById('p4').innerHTML = localStorage.getItem('Commentaire');
}





