function dicestart() {
    if (document.getElementById("onplay").style.display === 'none',
        document.getElementById("starting").style.display === 'block') {
        document.getElementById("onplay").style.display = 'block';
        document.getElementById("starting").style.display = 'none';
    } else {
        document.getElementById("onplay").style.display = 'none';
        document.getElementById("starting").style.display = 'block';
    }
}
var playCount = 0;
var count1 = 0;
var count2 = 0;

function displayDice() {
    //The maximum value is exclusive and the min val is inclusive
    var dicePlayer1 = Math.floor(Math.random() * 6) + 1;
    var dicePlayer2 = Math.floor(Math.random() * 6) + 1;
    var imageP1 = document.querySelectorAll("img")[0];
    var imageP2 = document.querySelectorAll("img")[1];
    imageP1.src = "dice image/dice" + dicePlayer1 + ".png";
    // or use setAttribute imageP1.setAttributes("attribute to be changed(src)", "Value of attribute")
    imageP2.src = "dice image/dice" + dicePlayer2 + ".png";
    var title = document.querySelector("#title");

    if (dicePlayer1 > dicePlayer2) {
        title.textContent = "Player 1 Wins!";
        title.classList.add("#title");
        count1++;
        //document.querySelector("#counterP1").textContent = count1.toString();

    } else if (dicePlayer2 > dicePlayer1) {
        title.textContent = "Player 2 Wins! ‍";
        title.classList.add("#title");
        count2++;
        //document.querySelector("#counterP2").textContent =count2.toString();

    } else {
        title.textContent = "DRAW";
        title.classList.add("#title");
    }
    playCount++;

    if (playCount === 5) {
        if (count1 > count2) {
            title.textContent = "ROUND Player 1 WIN 🏆";
            count1 = 0;
            count2 = 0;
            playCount = 0;
        } else if (count1 < count2) {
            title.textContent = "ROUND Player 2 WIN 🏆";
            count1 = 0;
            count2 = 0;
            playCount = 0;
        } else {
            title.textContent = "Oh Oh! No Winner";
            count1 = 0;
            count2 = 0;
            playCount = 0;
        }
    }
}