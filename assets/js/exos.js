//EXO 1

//avec un "1" pour la distinguer de la suivante
function changerStyle1 () {
    var x = document.getElementById('parag1');
    x.style.color = "white";
    x.style.backgroundColor = "black";
    x.style.border = "1px dotted black";
    x.style.padding = "5px";
}

//celle qui est appellée dans le html
function changerStyle () {
    document.getElementById("parag1").classList.add("active");
}

//EXO 2

function getAttributes () {
    var lien = document.getElementById("w3r");
    var href = lien.getAttribute("href");
    var hreflang = lien.getAttribute("hreflang");
    var rel = lien.getAttribute("rel");
    var target = lien.getAttribute("target");
    var type = lien.getAttribute("type");
    var x = "HREF: " + href + " - HREFLANG: " + hreflang + " - REL: " + rel + " - TARGET: " + target + " - TYPE: " + type;
    document.getElementById("voirAttrib").innerHTML = x;
}

//EXO 3

function getFormvalue () {
    var form = document.getElementById("form1");
    var prenom = form.fname.value;
    var nom = form.lname.value;
    //alert("PRENOM : " + prenom + " - NOM : " + nom);
    var y = "PRENOM: " + prenom + " - NOM: " + nom;
    document.getElementById("voirPrenomNom").innerHTML = y;
}

//EXO 4
// À un document HTML, ajouter des alertes :
// - Au chargement de la page (attribut onload)
// - Quand on passe sur une image (attribut onmouseover)
// - Quand on clique sur un bouton (attribut onclick)
// Avec des boutons :
// - Changer la couleur de fond quand on clique sur un bouton
// - Changer aussi l'apparence du bouton
// - Ajouter un bouton qui permette de revenir à la normale.
// Sur des images : 
// - Changer une image par une autre quand la souris passe dessus (attribut onmouseover)
// - Remettre l'image d'origine quand la souris quitte l'image (attribut onmouseout)

function changerFond () {
    var z = document.querySelector("body");
    z.style.backgroundColor = "grey";
}

function remettreFond () {
    var z = document.querySelector("body");
    z.style.backgroundColor = "white";
}

function changerImage () {
    var img = document.querySelector("img");
    img.setAttribute("src", "assets/images/montagnes.jfif");
}
 function retourImage () {
    var img = document.querySelector("img");
    img.setAttribute("src", "assets/images/arbre.jfif");
 }

 //EXO 5
//  Un premier controle de formulaire
// 1. Ecrire une page HTML comportant un mini-formulaire composé d'un champ de saisie et d'un
// simple bouton. 
// 2. Creer un fichier exo1.js 
// 3. Rajouter l'instruction precedente par :
// function controler() {
// var zoneSaisie = document.getElementById("zoneSaisie");
// alert("La Zone de saisie contient : " + zoneSaisie.value);
// }
// Decrivez le code de cette fonction. Il faudrait maintenant associer ce code de controle a l'evenement
// click sur le bouton du formulaire. Ecrivez le code correspondant.
// 4. Modifier la fonction de controle pour afficher un message d'erreur lorsque le champ est vide, et
// afficher le contenu du champ lorsqu'il ne l'est pas.
// 5. La fonction eval, prenant en parametre une chaıne de caracteres representant une expression,
// permet d'evaluer cette derniere. Par exemple :
// eval("3+4"); // retourne la valeur 7
// eval("bon"+"jour"); //retourne bonjour
// Ajouter (concatenez) le resultat de l´evaluation de l'expression donn´ee par l'utilisateur dans le
// champ de saisie a votre affichage. Cela donne une page HTML contenant un formulaire permettant d'executer "online" de petites operations.

// cette fonction affiche dans une boîte d'alerte le contenu de la zone de saisie du formulaire
function controler() {
    var zoneSaisie = document.getElementById("zoneSaisie");
    if (zoneSaisie.value == "") {
        alert("Veuillez remplir le champ sacré nom d'une pipe !");
    } else {
        alert("La Zone de saisie contient : " + zoneSaisie.value);
    }
}

function eval (str) {
    var pos = str.search("+");
    var deb = str.slice(0, pos-1);
    var fin = str.slice(pos+1, str.length-1);
    var tot = deb + fin;
    return tot;
//  ...
}
