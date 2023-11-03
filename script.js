console.log("Welcome to Tic Tac Toe")/*this line prints the string value on console */
let music = new Audio("music.mp3");  /*creates a new object named music and load mmusic.mp3 into it"*/
let audioTurn = new Audio("ting.mp3")  /*creates a new object named audioturn and load ting.mp3 into it"*/
let gameover = new Audio("gameover.mp3.wav")  /*creates a new object named gameover and load gameover.mp3.wav into it"*/
let turn = "X"
let isgameover = false;
let isDraw = false;

// Function to change the turn
const changeTurn = ()=>{                 
    return turn === "X"? "0": "X"                    /* This is a ternary operatorif the current value of the variable 'turn' is equal to "X".
                                                            If true, it returns "0"; otherwise, it returns "X".*/
                                                 
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw";
        }
    })
    if (isAllBoxesFilled() && !isgameover) {
        isDraw = true;
        isgameover = true;
        document.getElementsByClassName("info")[0].innerText = getGameResultMessage();
    }
};


// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            // Check if the game is over (either a winner or a draw).
            if (isgameover) {
                document.getElementsByClassName("info")[0].innerText = getGameResultMessage();
            } else {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});

// Function to check if all boxes are filled.
function isAllBoxesFilled() {
    for (let element of boxes) {
        if (element.querySelector('.boxtext').innerText === '') {
            return false; // If any box is empty, return false.
        }
    }
    return true; // All boxes are filled.
}

// Function to get the game result message (winner or draw).
/*it displays whether the winner is decided or not*/
function getGameResultMessage() {
    if (isDraw) {
        return "It's a draw! No winner.";
    } else  {
        return "Player " + winner + " wins!";
    }
}



// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false;
    isDraw = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";//hide the image when the game is reset
    document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "0px";
})





























const playerImages = {
    "X": "excited.gif",
    "0": "excited2.gif",
};


Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            // Display the respective player's image during gameplay.
            document.querySelector('.imagebox').getElementsByTagName('img')[0].src = playerImages[turn];
            document.querySelector('.image-box').getElementsByTagName('img')[0].src = playerImages[turn];

            // Check if the game is over (either a winner or a draw).
            if (isgameover) {
                document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
                document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "0px";
                document.getElementsByClassName("info")[0].innerText = getGameResultMessage();
            } else {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    });
});






reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    isDraw = false;

    // Hide the images when the game is reset.
    document.querySelector('.imagebox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.image-box').getElementsByTagName('img')[0].style.width = "0px";

    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
});





