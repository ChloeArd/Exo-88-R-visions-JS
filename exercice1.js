let board = [];

function value() {
    let value = document.getElementById("input1").value;
    board.push(value);
    console.log(board);
}

document.getElementById("button1").addEventListener("click", function () {
    value();

    if (board.length === 10) {
        let div1 = document.createElement("div");
        board = board[Math.floor(Math.random() * board.length)]
        div1.innerHTML = "aleatoire directement: " + board;
        document.getElementById("container").appendChild(div1);

        let div2 = document.createElement("div");
        let size = board[4];
        console.log(size);
        div2.innerHTML = "Le 5e mot est: " + size;
        document.getElementById("container").appendChild(div2);
    }

    else {
        let div3 = document.createElement("div");
        div3.innerHTML = "Entrez au moins 10 valeurs";
        document.getElementById("container").appendChild(div3);
    }
})
//Bouton pour afficher un élément aléatoire.
document.getElementById("aleatoire").addEventListener("click", function () {
    value()
    let div4 = document.createElement("div");
    board = board[Math.floor(Math.random() * board.length)]
    div4.innerHTML = "Aleatoire par l'utilisateur: " + board;
    document.getElementById("container").appendChild(div4);
})
//Bouton pour afficher tous les éléments du tableau.
document.getElementById("integrale").addEventListener("click", function () {
    value()
    let div5 = document.createElement("div");
    //let join = board.join(" - ");
    div5.innerHTML = board;
    console.log(board);
    document.getElementById("container").appendChild(div5);
})
//Bouton pour supprimer le dernier élément du tableau.
document.getElementById("supprime1").addEventListener("click", function () {
    value()
    let div6 = document.createElement("div");
    div6.innerHTML = board.pop();
    document.getElementById("container").appendChild(div6);
})
//Bouton pour supprimer tous les éléments du tableau.
document.getElementById("supprime2").addEventListener("click", function () {

})