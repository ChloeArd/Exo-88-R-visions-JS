let board = [];

document.getElementById("button1").addEventListener("click", function () {
    let value = document.getElementById("input1").value;
    board.push(value);

    if (board.length === 10) {
        let div1 = document.createElement("div");
        let random = board[Math.floor(Math.random() * board.length)];
        div1.innerHTML = "aleatoire directement: " + random;
        document.getElementById("container").appendChild(div1);

        let div2 = document.createElement("div");
        let size = board[4];
        div2.innerHTML = "Le 5e mot est: " + size;
        document.getElementById("container").appendChild(div2);
    }

    else {
        let div3 = document.createElement("div");
        div3.innerHTML = "Entrez au moins 10 valeurs";
        document.getElementById("container").appendChild(div3);
    }
});
//Bouton pour afficher un élément aléatoire.
document.getElementById("aleatoire").addEventListener("click", function () {
    let div4 = document.createElement("div");
    let random2 = board[Math.floor(Math.random() * board.length)];
    div4.innerHTML = "Aleatoire par l'utilisateur: " + random2;
    document.getElementById("container").appendChild(div4);
});

let div5 = document.createElement("div");
//Bouton pour afficher tous les éléments du tableau.
document.getElementById("integrale").addEventListener("click", function () {
    let join = board.join(" - ");
    div5.innerHTML = join;
    document.getElementById("container").appendChild(div5);
});
//Bouton pour supprimer le dernier élément du tableau.
document.getElementById("supprime1").addEventListener("click", function () {
    board.pop();
    div5.innerHTML = board.join(" - ");
});
//Bouton pour supprimer tous les éléments du tableau.
document.getElementById("supprime2").addEventListener("click", function () {
    div5.innerHTML = " ";
});