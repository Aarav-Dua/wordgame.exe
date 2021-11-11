function addUser(){
    player1_name = document.getElementById("textinputplyer1WOO").value;
    player2_name = document.getElementById("textinputplyer2WOO").value;

    localStorage.setItem("player1name", player1_name);
    localStorage.setItem("player2name", player2_name);

    window.location = "word.html";
}