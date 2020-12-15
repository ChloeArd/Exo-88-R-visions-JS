
let tableau = [];

document.getElementById("button1").addEventListener("click", function (){
    let valeur = document.getElementById("input1").value;
    //Boucle??
    tableau.push(valeur);
    console.log(tableau);

    let newDiv = document.createElement("div");
    let newDiv2 = document.createElement("div");

    if (valeur <= 10) {
        tableau = tableau[Math.floor(Math.random() * tableau.length)];
        newDiv.innerHTML = tableau;
        document.body.appendChild(newDiv);

        tableau = tableau[4];
        newDiv2.innerHTML = "La 5è entrer du tableau: " + tableau;
        document.body.appendChild(newDiv2);
    }

    else {
        newDiv.innerHTML = "Entrez au moins 10 valeurs";
        document.body.appendChild(newDiv2);
    }
});

//Bouton pour afficher un élément aléatoire.
document.getElementById("aleatoire").addEventListener("click",function () {
    let newDiv = document.createElement("div");
    tableau = tableau[Math.floor(Math.random() * tableau.length)];
    newDiv.innerHTML = tableau;
    document.body.appendChild(newDiv);
});

//Bouton pour afficher tous les éléments du tableau.
document.getElementById("integrale").addEventListener("click",function () {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = tableau.join(" - ");
    document.body.appendChild(newDiv);
})

//Bouton pour supprimer le dernier élément du tableau
document.getElementById("supprime1").addEventListener("click", function () {

})
