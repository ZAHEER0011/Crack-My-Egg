let count = document.querySelector(".counter")
let highScore = document.querySelector(".highscore");
let currentHighScore = 0;
const backgroundMusic = document.querySelector("#bgmusic")
backgroundMusic.loop = true;
backgroundMusic.play();
backgroundMusic.volume = 0.08;


const increment = () => {

    // Get Value from UI 

    var value = parseInt(count.innerText);

    //Click Sound

    
    let clicksound = document.querySelector("#clicksound")
    clicksound.play();
    clicksound.volume = 1;

    // Update the Value

    value = value + 1;

    //Set Value to UI

    count.innerText = value;

    let coinscount = document.querySelector(".coins")

    if (value % 10 === 0) {
        let coin = parseInt(coinscount.innerText);
        coin = coin+1;
        coinscount.innerText = coin;
    }



}

const reset = () => {


    // Get Value from UI 

    let value = parseInt(count.innerText);

        
    if (value > currentHighScore) {
        currentHighScore = value;
        highScore.innerText = currentHighScore;  // Update the high score display
    }

    // Update the Value

    value = 0;

    //Set Value to UI

    count.innerText = value;
}

