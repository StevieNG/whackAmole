const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const next = document.getElementById("next");
let bumpPic= document.getElementsByClassName("bumpPic")
let bumpPicBottom= document.getElementsByClassName("bumpPicBottom")
let bump2click= document.getElementById("bump2")
let fieldPic=document.getElementsByClassName("fieldPic")
let startGamebtn=document.getElementById("startGame")
let timeUp =false;
let checkPrevious=0;
let highScore=[1,2,4,3,6]
var firstPlace = document.getElementById("firstPlace")
var secondPlace = document.getElementById("secondPlace")
var thirdPlace = document.getElementById("thirdPlace")
var forthPlace = document.getElementById("forthPlace")
var fifthPlace = document.getElementById("fifthPlace")
var firstPlaceName = document.getElementById("firstPlaceName")
var secondPlaceName = document.getElementById("secondPlaceName")
var thirdPlaceName = document.getElementById("thirdPlaceName")
var forthPlaceName = document.getElementById("forthPlaceName")
var fifthPlaceName = document.getElementById("fifthPlaceName")
var highScoreName =["Ali","Ben","Charlie","Dan","Ed"];
var submit = document.getElementById("submit");
var nameField = document.getElementById("nameField");
 

highScore.sort();
updateScore();
updateName();
startGamebtn.style.display="none";

console.log(highScore)

Array.prototype.insert = function ( index, item ) {
    this.splice( index, 0, item );
};

var totalScore =0;

submit.addEventListener('click',()=>{

    playerName = document.getElementById("input").value;
console.log(playerName);
startGamebtn.style.display="inline";



})

function allDisapper() {
    bumpPic[0].style.display="none";
    bumpPic[1].style.display="none";
    bumpPic[2].style.display="none";
    bumpPicBottom[0].style.display="none";
    bumpPicBottom[1].style.display="none";
    bumpPicBottom[2].style.display="none";

    
}

console.log(scoreBoard)


function hit() {
        totalScore++;
        console.log(totalScore)
    };


function mainGame(){
   
    counter = setInterval(func=>{
        allDisapper();
        num = Math.ceil(Math.random()*6);
 
        if(num!=checkPrevious){        
        var temp="bump" +num;
        checkPrevious=num;}

        else if (num==checkPrevious && num==6){ var temp="bump" +(num-1);
        console.log("switch 6")
        checkPrevious=num-1;}

        else { var temp="bump" +(num+1);
        console.log("switch")
        checkPrevious=num+1;}

    


    console.log(temp)

    var whichapper = document.getElementById(temp)
    whichapper.style.display="inline";
    scoreBoard.innerHTML= totalScore;

        

        

        console.log("check="+checkPrevious)


    },1000)

}
startGamebtn.addEventListener('click',()=>{
    // var playerName =prompt("Enter Player's name", " ")
    nameField.style.display="none";
    startGamebtn.style.display="none";


    clearScore();
    setTimeout(() => {
        
        clearInterval(counter);
        allDisapper();
        checkHighScore();
        updateScore();
        updateName()
        window.alert(`game over, you scored ${totalScore} points \n 1st Place ${highScore[4]}  
        \n 2nd Place ${highScore[3]}  
        \n 3rd Place ${highScore[2]}        `)
        nameField.style.display="inline";
        
        console.log(highScore);
    }, 10000); 

   mainGame()
    // setTimeout(func =>{ window.alert("game over")} ,10000)


 
})


function clearScore() {
    totalScore=0;
    scoreBoard.innerHTML= totalScore;


}

function checkHighScore(){
    for (i=0;i<5;i++) {
        if (totalScore>highScore[i]&&totalScore<=highScore[i+1]&&totalScore<highScore[highScore.length-1]){
            highScore.insert(i+1, totalScore)
            highScore.shift();
            highScoreName.insert(i+1,playerName )
            highScoreName.shift();

        }

        else if(totalScore>highScore[highScore.length-1] && i==0){
            highScore.push(totalScore);
            highScore.shift();
            highScoreName.push(playerName);
            highScoreName.shift();
            window.alert("New high Score!!!")

        }

        else if(totalScore==highScore[highScore.length-1]&& i==0){
            highScore.push(totalScore);
            highScore.shift();
            highScoreName.push(playerName);
            highScoreName.shift();
            window.alert("Shared high Score!!!")

        }

        // else{
        //     highScore.push(totalScore);
        // }



    }


}

function updateScore(){
    firstPlace.innerHTML = highScore[4];
    secondPlace.innerHTML = highScore[3];
    thirdPlace.innerHTML = highScore[2];
    forthPlace.innerHTML = highScore[1];
    fifthPlace.innerHTML = highScore[0];


}


function updateName(){
    
    firstPlaceName.innerHTML = highScoreName[4];
    secondPlaceName.innerHTML = highScoreName[3];
    thirdPlaceName.innerHTML = highScoreName[2];
    forthPlaceName.innerHTML = highScoreName[1];
    fifthPlaceName.innerHTML = highScoreName[0];


}
// next.addEventListener('click',()=>{
//     allDisapper();
//     num = Math.ceil(Math.random()*3);
//     console.log(num);
//     var temp="bump" +num;

//     console.log(temp)

//     var whichapper = document.getElementById(temp)
//     whichapper.style.display="inline";
//  })





