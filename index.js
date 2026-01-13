document.getElementById("btn").addEventListener("click", rollDice);
document.getElementById("btn-song").addEventListener("click", songPlay)
var btnClickAudio = new Audio ("audio/buttonClick.mp3");
var backgroundSong = new Audio ("audio/backgroundMusic.mp3");

function songPlay() {
backgroundSong.play();
backgroundSong.loop = true;
backgroundSong.volume = 0.4;
}

function rollDice() {
    btnClickAudio.currentTime = 0
    btnClickAudio.play();
    btnClickAudio.volume = 1;
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var stringDicee1 = "dice" + randomNumber1 + ".png";
    var changeImageDicee = "images/" +  stringDicee1;
    
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", changeImageDicee);
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // output = 1-6
    var stringDicee2 = "dice" + randomNumber2 + ".png"; //dice1.png - dice6.png
    var changeImageDicee2 = "images/" + stringDicee2;
    
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", changeImageDicee2);
    
    if (randomNumber1 > randomNumber2) {
        var changeHeader = document.querySelector("h1");    
        changeHeader.innerHTML = "Player 1 is Won!"
        
    } else if (randomNumber1 < randomNumber2){
        var changeHeader = document.querySelector("h1");
        changeHeader.innerHTML = "Player 2 is Won!"
    
    } else {
        var changeHeader = document.querySelector("h1");
        changeHeader.innerHTML = "Draw!"
    
    }
    
}

