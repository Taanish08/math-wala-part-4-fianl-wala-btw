function np() {
    player1name=document.getElementById("i1").value;
    player2name=document.getElementById("i2").value;

    localStorage.setItem("Player 1 name", player1name);
    localStorage.setItem("Player 2 name", player2name);

    window.location="2.html";
}
