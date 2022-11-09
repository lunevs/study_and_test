function updateImg() {
    let randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6 ) + 1;

    document.getElementById("image1").setAttribute("src", "images/dice"+randomNumber1+".png");
    document.getElementById("image2").setAttribute("src", "images/dice"+randomNumber2+".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}