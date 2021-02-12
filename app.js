
/////// Items to finish/////


//Bugs

//1. When a random product is picked, remove from array.   When game "restarts" or page is refreshed add the items
//       back into the products array.


//Strech Goals/others: 

//1. Finish creating class for itemsxxxxx
//2. Add 15-20 more items to the product array
//3. Create start page as a full Page Model of sorts
//4. Create "skip" button to choose new items
//5. Delete "Weight" guess functionality
//6. Add multiple images to each item. 




// State Variables 


let realPrice = null;
let realrating = null;
let realWeight = null;
let userGuessPrice = null;
let userGuessRating = null;
let userGuessWeight = null;
let playerScore = 0;
let compGuessPrice = null;
let compGuessRating = null;
let compGuessWeight = null;
let computerScore = 0;
let currentRound = 1;
// let userGuessPercent = null;
let compGuessPercent = null;
let randomProductIndex = null;
let displayMessageComp = null;
let displayMessageUser = null;
let products = [...ALL_PRODUCTS];
let products3 = Array.from(ALL_PRODUCTS);





// Point System (based on guesses)  Written as Conditional Statements
// guess value === real value ---> 55pts
// 5% or less distance to real value ---> 35 pts
// > 5.1% || < 10% distance to real value ---> 20 pts
// > 10.1% || < 20% distance to real value ---> 10 pts
// > 20.1% || < 30% distance to real value ---> 5 pts
// > 30.1% || < 45% distance to real value ---> 1 pt
// < 45.1% distance to real value ---> 0pts




// DOM Variables
const prodImgEl = document.querySelector("#prod-img");
const prodTitleEl = document.querySelector(".prod-title");
const prodDescEl = document.querySelector(".prod-description");
const prodCategoryEl = document.querySelector(".prod-category")
const computerScoreEl = document.querySelector("#comp-score")
const playerScoreEl = document.querySelector("#player-score")
const gameRoundEl = document.querySelector("#game-round")
const guessPriceEl = document.querySelector("#guess-price-txt")
const guessRatingEl = document.querySelector("#guess-rating-txt")
const guessWeightEl = document.querySelector("#guess-weight-txt")
const priceInputDiv = document.querySelector(".price-input-div")    
const guessPriceButtonEl = document.querySelector("#price-guess-button")
const ratingInputDiv = document.querySelector(".rating-input-div")
const guessRatingButtonEl = document.querySelector("#rating-guess-button")    
const guessWeightButtonEl = document.querySelector("#weight-guess-button") 
const weightInputDiv = document.querySelector(".weight-input-div")   
const userWinEl = document.querySelector("#user-win-msg")
const compWinEl = document.querySelector("comp-win-msg")
const resetButtonEl = document.querySelector(".reset-btn")
const documentBody = document.querySelector(".body")

documentBody.addEventListener("click", eventFunction)
   
    function eventFunction (event) {
        console.dir(event)
        console.log(event)
    }

//////Modal DOMs///// 
const modalDivEl = document.querySelector("#myModal");
const modalSpan = document.querySelector(".close");
const modalUserScore =document.querySelector("#modal-user-score");
const modalCompScore =document.querySelector("#modal-comp-score");
const modalActualValue =document.querySelector("#modal-actual-value");
const modalUserGuess =document.querySelector("#modal-user-guess");
const modalCompGuess =document.querySelector("#modal-comp-guess");
const modalNextRound =document.querySelector("#modal-next-round");
const modalCloseBtn = document.querySelector(".close-btn");




////NOTE:  Should create a class for the new product Objects///////


        


// Event Listeners

document.addEventListener('DOMContentLoaded', initializeGame);
resetButtonEl.addEventListener('click', resetGame);
// test = loadSound("music/background.mp3")

// Button on page that only becomes active after all three fields are satisfied
// Price Guess Input Text Field 
// Rating Guess Input Text Field
// Weight Guess Input Text Field



// Game Initialization 
function initializeGame () {
    //Step 1: Selecting a random product from the Array and DOM into page
    //random index generator
    randomProductIndex = Math.floor(Math.random() * products.length) 
    prodImgEl.src = products[randomProductIndex].image
    //Insert Product Title
    prodTitleEl.innerText = products[randomProductIndex].title
    //Insert Product Description
    prodDescEl.innerText = products[randomProductIndex].description
    //Insert Product Category
    prodCategoryEl.innerText= products[randomProductIndex].category
    //Background music
    // backgroundMusic = new sound("music/game-background-music.mp3")
    //     backgroundMusic.play();

          
    realPrice = products[randomProductIndex].price;
    console.log("This is the actual price " + realPrice)
    realRating = products[randomProductIndex].rating
    console.log("This is the actual rating " + realRating)
    realWeight = products[randomProductIndex].weight
    console.log("This is the actual weight " + realWeight)

       
    weightInputDiv.setAttribute("id", "weight-hidden");
    guessWeightButtonEl.setAttribute("id", "weight-guess-button");
    
    priceInputDiv.removeAttribute("id");
    guessPriceButtonEl.removeAttribute("id");
    guessPriceButtonEl.addEventListener('click', userPriceGuess);
        

    // Step 3: 
    // Inputting the game score values onto the page. 
    computerScoreEl.innerText = computerScore
    playerScoreEl.innerText = playerScore
            
    //Step 4: Inputting what game round it is (Further rounds strech goal)
    gameRoundEl.innerText = currentRound
            
};  /////END intializeGame Func Here////


console.log("TEST TEST " + randomProductIndex + ", " +  products[randomProductIndex])
//////////////////////////////////////GUESS PRICE FUNCTIONALITY AND CONDITIONALS HERE////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        
function userPriceGuess () {
    

    userGuessPrice = guessPriceEl.value;
    realPrice = products[randomProductIndex].price;
    let userPriceGuessPercent = Math.floor((((realPrice - userGuessPrice) / realPrice) * 100))

        if(userGuessPrice > realPrice) {
            displayMessageUser = "You over bid!  Negative Points!!!"
            playerScore -=20;
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice, displayMessageUser);
        }
        if (userPriceGuessPercent >.001  &&  userPriceGuessPercent <= 5) {
            playerScore += 35;
            playerScoreEl.innerText = playerScore;
            displayMessageUser = "Your price guess was $" + userGuessPrice + ". You got 35 points!"
            compPriceGuess(realPrice, displayMessageUser);
        }
        if (userPriceGuessPercent >5  &&  userPriceGuessPercent <= 10) {
            playerScore += 20;
            displayMessageUser = "Your price guess was $" + userGuessPrice + ". You got 20 points!"
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice, displayMessageUser);
        }
        if (userPriceGuessPercent >10  &&  userPriceGuessPercent <= 20) {
            playerScore += 10;
            displayMessageUser = "Your price guess was $" + userGuessPrice + ". You got 10 points!"
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice, displayMessageUser); 
        }
        if (userPriceGuessPercent >20  &&  userPriceGuessPercent <= 30) {
            playerScore += 5;
            displayMessageUser = "Your price guess was $" + userGuessPrice + ". You got 5 points!"
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice, displayMessageUser);
        }
        if (userPriceGuessPercent >30  &&  userPriceGuessPercent <= 45) {
            playerScore += 1;
            displayMessageUser = "Your price guess was $" + userGuessPrice + ". You got 1 point!"
            playerScoreEl.innerText = playerScore; 
            compPriceGuess(realPrice, displayMessageUser);
        }
        if (userPriceGuessPercent > 45) {
            playerScore += 0;
            displayMessageUser = "Your price guess was $" + userGuessPrice + ". Sorry, 0pts!  Guess Better next time!"
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice, displayMessageUser); 
        }
            else if (userGuessPrice == realPrice) {
                playerScore += 55;
                displayMessageUser = "Your price guess was spot on at $" + userGuessPrice + "!!  Nice work, you got 55 points!!!"
                playerScoreEl.innerText = playerScore;
                compPriceGuess(realPrice, displayMessageUser);
            }

} /////END evalPlayerPriceGuess Func here



function compPriceGuess (realPrice) {


    let adjustedRealPrice =  realPrice * 1.10
        compGuessPrice = Math.floor(Math.random() * (adjustedRealPrice/2) + (realPrice / 2))
              
    let compPriceGuessPercent = Math.floor((((realPrice - compGuessPrice) / realPrice) * 100))
    
    
                                            //////////CONDITIONALS FOR COMP PRICE GUESS//////////////
                                    //////////////////////////////////////////////////////////////////

        if(compGuessPrice > realPrice) {
            displayMessageComp = "The Computer over bid!  Negative Points!!!"
            computerScore -=20
            computerScoreEl.innerText = computerScore
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
        }
        if (compPriceGuessPercent >.001  &&  compPriceGuessPercent <= 5) {
            computerScore += 35
            computerScoreEl.innerText = computerScore 
            displayMessageComp = "The computer price guess was $" + compGuessPrice + ".  The computer recieved 35 points!"
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
        }
        
        if (compPriceGuessPercent >5  &&  compPriceGuessPercent <= 10) {
            computerScore += 20
            displayMessageComp = "The computer price guess was $" + compGuessPrice + ". The computer recieved 20 points!"
            computerScoreEl.innerText = computerScore 
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
        }
        if (compPriceGuessPercent >10  &&  compPriceGuessPercent <= 20) {
            computerScore += 10
            displayMessageComp = "The computer price guess was $" + compGuessPrice + ". The computer recieved 10 points!"
            computerScoreEl.innerText = computerScore 
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
        }
        if (compPriceGuessPercent >20  &&  compPriceGuessPercent <= 30) {
            computerScore += 5
            displayMessageComp = "The computer price guess was $" + compGuessPrice + ". The computer recieved 5 points!"
            computerScoreEl.innerText = computerScore 
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
        }
        if (compPriceGuessPercent >30  &&  compPriceGuessPercent <= 45) {
            computerScore += 1
            displayMessageComp = "The computer price guess was $" + compGuessPrice + ". the computer recieved 1 point!"
            computerScoreEl.innerText = computerScore 
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
        }
        if (compPriceGuessPercent > 45) {
            computerScore += 0
            displayMessageComp = "The computer price guess was $" + compGuessPrice + ". Good news 4U, they get 0 pts!"
            computerScoreEl.innerText = computerScore 
            displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
            
        }
            else if (compGuessPrice == realPrice) {
                computerScore += 55
                displayMessageComp = "The computer price guess was spot on at $" + compGuessPrice + ". The computer recieved 55 points!  Yowza!!"
                computerScoreEl.innerText = computerScore 
                displayScoresPrice(realPrice, displayMessageUser, displayMessageComp);
            }

} /////END compPriceGuess

function displayScoresPrice(realPrice, displayMessageUser, displayMessageComp) {
    modalDivEl.style.display = "block";
    modalUserScore.innerText = "Your Score: " + playerScore;
    modalCompScore.innerText = "Computer Score: " + computerScore;
    modalActualValue.innerText = "The Actual Price of this item is: $" + realPrice + ".";
    modalUserGuess.innerText = displayMessageUser;
    modalCompGuess.innerText = displayMessageComp;
    modalNextRound.innerText = "Ready to Guess the Rating on the " + products[randomProductIndex].title +"?"
    modalCloseBtn.innerText = "GO TO RATING GUESS"
    modalSpan.onclick = () => {
        modalDivEl.style.display = "none";
        userRatingGuess();
    }

}



//////////////////////////////////////GUESS RATING FUNCTIONALITY AND CONDITIONALS HERE////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function userRatingGuess() {

priceInputDiv.setAttribute("id", "price-hidden");
guessPriceButtonEl.setAttribute("id", "price-guess-button");

ratingInputDiv.removeAttribute("id");
guessRatingButtonEl.removeAttribute("id")

guessRatingButtonEl.addEventListener('click', () => {

    userGuessRating = guessRatingEl.value;
    realRating = products[randomProductIndex].rating;

    let userRatingGuessPercent = (((realRating - userGuessRating) / realRating) * 100)
    
    if(userGuessRating > realRating) {
        displayMessageUser = "You over shot your rating guess!!!  Negative Points!!!"
        playerScore -=5;
        playerScoreEl.innerText = playerScore;
        compRatingGuess(realRating, displayMessageUser);
    }
    if (userRatingGuessPercent >.001  &&  userRatingGuessPercent <= 3) {
        playerScore += 20;
        playerScoreEl.innerText = playerScore;
        displayMessageUser = "Your rating guess was " + userGuessRating + "/5. You got 20 points!"
        compRatingGuess(realRating, displayMessageUser);
    }
    if (userRatingGuessPercent >3  &&  userRatingGuessPercent <= 5) {
        playerScore += 15;
        displayMessageUser = "Your rating guess was " + userGuessRating + "/5. You got 15 points!"
        playerScoreEl.innerText = playerScore;
        compRatingGuess(realRating, displayMessageUser);
    }
    if (userRatingGuessPercent >5  &&  userRatingGuessPercent <= 7) {
        playerScore += 5;
        displayMessageUser = "Your rating guess was " + userGuessRating + "/5. You got 15 points!"
        playerScoreEl.innerText = playerScore;
        compRatingGuess(realRating, displayMessageUser)
    }
    if (userRatingGuessPercent >7  &&  userRatingGuessPercent <= 10) {
        playerScore += 1;
        displayMessageUser = "Your rating guess was " + userGuessRating + "/5. You got 1 point!"
        playerScoreEl.innerText = playerScore;
        compRatingGuess(realRating, displayMessageUser);
    }
    if (userRatingGuessPercent > 11) {
        playerScore += 0;
        displayMessageUser = "Your rating guess was " + userGuessRating + "/5. Sorry! Not close Enough!  0 Points!"
        playerScoreEl.innerText = playerScore;
        compRatingGuess(realRating, displayMessageUser); 
    }
    else if (userGuessRating == realRating) {
        playerScore += 35;
        displayMessageUser = "Your rating guess was " + userGuessRating + "/5. Nice!! You got 35 points!"
        playerScoreEl.innerText = playerScore;
        compRatingGuess(realRating, displayMessageUser);
    }
})/// End Button click Callback func
        
        
}/////END beginRatingGuess func
    

                                            //////////CONDITIONALS FOR COMP RATING GUESS//////////////
                                    //////////////////////////////////////////////////////////////////////////


function compRatingGuess (realRating, displayMessageUser) {
        
    let adjustedRealRating =  realRating * 1.10

    compGuessRating = Math.floor(Math.random() * (adjustedRealRating/2) + (realRating - 2))
        
    let compRatingGuessPercent = Math.floor((((realRating - compGuessRating) / realRating) * 100))

    console.log("this is the real rating " + realRating)
    console.log("this is the computers rating Guess " + compGuessRating)
    console.log("this is the computers guess rating percent from real " + compRatingGuessPercent)


        if(compGuessRating > realRating) {
            displayMessageComp = "The computer over shot their rating guess!!!  Negative Points!!!"
            computerScore -=5;
            computerScoreEl.innerText = computerScore;
            displayScoresRating(realRating, displayMessageUser, displayMessageComp);
        }
        if (compRatingGuessPercent >.001  &&  compRatingGuessPercent <= 3) {
            computerScore += 20;
            computerScoreEl.innerText = computerScore;
            displayMessageComp = "the computer's rating guess was " + compGuessRating + "/5. They got 20 points!"
            displayScoresRating(realRating, displayMessageUser, displayMessageComp);
        }
        if (compRatingGuessPercent >3  &&  compRatingGuessPercent <= 5) {
            computerScore += 15;
            displayMessageComp = "the computer's rating guess was " + compGuessRating + "/5. They got 15 points!"
            computerScoreEl.innerText = computerScore;
            displayScoresRating(realRating, displayMessageUser, displayMessageComp);
        }
        if (compRatingGuessPercent >5  &&  compRatingGuessPercent <= 7) {
            computerScore += 5;
            displayMessageComp = "the computer's rating guess was " + compGuessRating + "/5. They got 5 points!"
            computerScoreEl.innerText = computerScore;
            displayScoresRating(realRating, displayMessageUser, displayMessageComp); 
        }
        if (compRatingGuessPercent >7  &&  compRatingGuessPercent <= 10) {
            computerScore += 1;
            displayMessageComp = "the computer's rating guess was " + compGuessRating + "/5. They got 1 point!"
            computerScoreEl.innerText = computerScore;
            displayScoresRating(realRating, displayMessageUser, displayMessageComp);
        }
        if (compRatingGuessPercent > 11) {
            computerScore += 0;
            displayMessageComp = "The Computer's rating guess was " + compGuessRating + "/5.  Ain't close enough! They get a Big fat doughnut!"
            computerScoreEl.innerText = computerScore;
            displayScoresRating(realRating, displayMessageUser, displayMessageComp); 
        }
            else if (compGuessRating == realRating) {
                computerScore += 35;
                displayMessageComp = "the computer's rating guess was " + compGuessRating + "/5. Ouuu they guessed good, they got 35 points!"
                computerScoreEl.innerText = computerScore;
                displayScoresRating(realRating, displayMessageUser, displayMessageComp);
            }

}//////END compRatingGuess Func//////



function displayScoresRating(realRating, displayMessageUser, displayMessageComp) {
    modalDivEl.style.display = "block";
    modalUserScore.innerText = "Your Score: " + playerScore;
    modalCompScore.innerText = "Computer Score: " + computerScore;
    modalActualValue.innerText = "The Actual Rating of this item is: " + realRating + "/5.";
    modalUserGuess.innerText = displayMessageUser;
    modalCompGuess.innerText = displayMessageComp;
    modalNextRound.innerText = "Guessing the weight is next on the " + products[randomProductIndex].title +"!"
    modalCloseBtn.innerText = "GO TO WEIGHT GUESS"
    modalSpan.onclick = () => {
        modalDivEl.style.display = "none";
        userWeightGuess();
    }

}


//////////////////////////////////////GUESS WEIGHT FUNCTIONALITY AND CONDITIONALS HERE////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function userWeightGuess() {
    

    ratingInputDiv.setAttribute("id", "rating-hidden");
    guessRatingButtonEl.setAttribute("id", "rating-guess-button");

    weightInputDiv.removeAttribute("id");
    guessWeightButtonEl.removeAttribute("id")
    
    guessWeightButtonEl.addEventListener('click', () => {

        userGuessWeight = guessWeightEl.value;
        realWeight = products[randomProductIndex].weight;

        let userWeightGuessPercent = (((realWeight - userGuessWeight) / realWeight) * 100)

        if(userGuessWeight > realWeight) {
            displayMessageUser = "You over guessed the Weight!  Negative Points!!!"
            playerScore -=20;
            playerScoreEl.innerText = playerScore;
            compWeightGuess(realWeight, displayMessageUser);
        }
        if (userWeightGuessPercent >.001  &&  userWeightGuessPercent <= 5) {
            playerScore += 35;
            playerScoreEl.innerText = playerScore;
            displayMessageUser = "Your weight guess was " + userGuessWeight + "lbs. You got 35 points!"
            compWeightGuess(realWeight, displayMessageUser);
        }
        if (userWeightGuessPercent >5  &&  userWeightGuessPercent <= 10) {
            playerScore += 20;
            displayMessageUser = "Your weight guess was " + userGuessWeight + "lbs. You got 20 points!"
            playerScoreEl.innerText = playerScore;
            compWeightGuess(realWeight, displayMessageUser);
        }
        if (userWeightGuessPercent >10  &&  userWeightGuessPercent <= 20) {
            playerScore += 10;
            displayMessageUser = "Your weight guess was " + userGuessWeight + "lbs. You got 10 points!"
            playerScoreEl.innerText = playerScore;
            compWeightGuess(realWeight, displayMessageUser); 
        }
        if (userWeightGuessPercent >20  &&  userWeightGuessPercent <= 30) {
            playerScore += 5;
            displayMessageUser = "Your weight guess was " + userGuessWeight + "lbs. You got 5 points!"
            playerScoreEl.innerText = playerScore;
            compWeightGuess(realWeight, displayMessageUser);
        }
        if (userWeightGuessPercent >30  &&  userWeightGuessPercent <= 45) {
            playerScore += 1;
            displayMessageUser = "Your weight guess was " + userGuessWeight + "lbs. You got 1 point!"
            playerScoreEl.innerText = playerScore; 
            compWeightGuess(realWeight, displayMessageUser);
        }
        if (userWeightGuessPercent > 45) {
            playerScore += 0;
            displayMessageUser = "Your weight guess was " + userGuessWeight + "lbs. I award you 0 points."
            playerScoreEl.innerText = playerScore;
            compWeightGuess(realWeight, displayMessageUser); 
        }
        else if (userGuessWeight == realWeight) {
            playerScore += 55;
            displayMessageUser = "Your weight guess was spot on at" + userGuessWeight + "lbs.  Nice work!!! you got 55 points!!!"
            playerScoreEl.innerText = playerScore;
            compWeightGuess(realWeight, displayMessageUser);
        }


    });/////END Weight guess button Click Call back Function 




};//////END userWeight Guess



function compWeightGuess(realWeight) {

    let adjustedRealWeight =  realWeight * 1.10
        compGuessWeight= Math.floor(Math.random() * (adjustedRealWeight/2)) + (realWeight / 2)
              
    let compWeightGuessPercent = Math.floor((((realWeight - compGuessWeight) / realWeight) * 100))


    if(compGuessWeight> realWeight) {
        displayMessageComp = "The Computer over guessed the Weight!  Negative Points!!!"
        computerScore -=20
        computerScoreEl.innerText = computerScore
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
    }
    if (compWeightGuessPercent >.001  &&  compWeightGuessPercent <= 5) {
        computerScore += 35
        computerScoreEl.innerText = computerScore 
        displayMessageComp = "The computer weight guess was " + compGuessWeight + "lbs. The computer recieved 35 points!"
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
    }
    
    if (compWeightGuessPercent >5  &&  compWeightGuessPercent <= 10) {
        computerScore += 20
        displayMessageComp = "The computer weight guess was " + compGuessWeight + "lbs. The computer recieved 20 points!"
        computerScoreEl.innerText = computerScore 
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
    }
    if (compWeightGuessPercent >10  &&  compWeightGuessPercent <= 20) {
        computerScore += 10
        displayMessageComp = "The computer weight guess was " + compGuessWeight + "lbs. The computer recieved 10 points!"
        computerScoreEl.innerText = computerScore 
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
    }
    if (compWeightGuessPercent >20  &&  compWeightGuessPercent <= 30) {
        computerScore += 5
        displayMessageComp = "The computer weight guess was " + compGuessWeight + "lbs. The computer recieved 5 points!"
        computerScoreEl.innerText = computerScore 
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
    }
    if (compWeightGuessPercent >30  &&  compWeightGuessPercent <= 45) {
        computerScore += 1
        displayMessageComp = "The computer weight guess was " + compGuessWeight + "lbs. The computer recieved 1 points!"
        computerScoreEl.innerText = computerScore 
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
    }
    if (compWeightGuessPercent > 45) {
        computerScore += 0
        displayMessageComp = "The computer weight guess was " + compGuessWeight + "lbs. They gotta do better than that!!!"
        computerScoreEl.innerText = computerScore 
        displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
        
    }
        else if (compGuessWeight== realWeight) {
            computerScore += 55
            displayMessageComp = "The computer price guess was spot on at " + compGuessWeight+ ". The computer recieved 55 points!  Yowza!!"
            computerScoreEl.innerText = computerScore 
            displayScoresWeight(realWeight, displayMessageUser, displayMessageComp);
        }



};//END of compGuessWeight Function
    
function displayScoresWeight(realWeight, displayMessageUser, displayMessageComp) {
    if(currentRound < 3){
        modalDivEl.style.display = "block";
        modalUserScore.innerText = "Your Score: " + playerScore;
        modalCompScore.innerText = "Computer Score: " + computerScore;
        modalActualValue.innerText = "The Actual weight of this item is: " + realWeight + "lbs.";
        modalUserGuess.innerText = displayMessageUser;
        modalCompGuess.innerText = displayMessageComp;
        modalNextRound.innerText = "You ready for another one? Lezzz go!!!"
        modalCloseBtn.innerText = "NEW ROUND!"
        modalSpan.onclick = () => {
            modalDivEl.style.display = "none";
            nextRound();
        }
    }


    if(currentRound == 3) {
        modalDivEl.style.display = "block";
        modalUserScore.style.display = "none";
        modalCompScore.style.display = "none";
        modalUserGuess.innerText = displayMessageUser;
        modalCompGuess.innerText = displayMessageComp;
        modalActualValue.innerText = "The Actual weight of this item is: " + realWeight + "lbs.";
        // modalActualValue.style.border-bottom = "solid black";
        modalNextRound.innerText = "That concludes our third round! To see who won, click below";
        modalCloseBtn.innerText = "GET GAME RESULTS"
        modalSpan.onclick = () => {
            modalDivEl.style.display = "none";
            endGame();
        }
    }
        
}



/////////////////////////////////////////////////End Conditionals here////////////////////////////////////
/////////////////////////////////////////////////End Conditionals here////////////////////////////////////


function nextRound() {
    currentRound = (currentRound + 1)

    console.log(currentRound)
    initializeGame ();

};

function endGame (){

    modalDivEl.style.display = "block";
    modalUserScore.innerText = "Your Final Score: " + playerScore;
    modalCompScore.innerText = "Computer Final Score: " + computerScore;
    modalUserGuess.style.display = "none";
    modalCompGuess.style.display = "none";

    if(playerScore > computerScore) {
        modalActualValue.innerText = "YOU WON!!! CELEBRATE! You beat the computer by " + (playerScore - computerScore) + " points!  NiceWork!"; 
    }else if(computerScore > playerScore) {
        modalActualValue.innerText = "Boo Hoo. You lost! by " + (computerScore - playerScore) + " points.  Better Luck next time."; 
    }else if (computerScore == playerScore) {
        modalActualValue.innerText = "Wow.  Its a tie.  Thats mathematically VERY unlikely with this game.  Go play some lottery or something."; 
    }   
   
    modalNextRound.innerText = "You ready play another game?  Click Below!!!"
    modalCloseBtn.innerText = "NEW GAME!"
    modalSpan.onclick = () => {
        modalDivEl.style.display = "none";
        resetGame();
    }

};///End of endGame Funcion here
    

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    modalUserScore.style.display = "block";
    modalCompScore.style.display = "block";
    modalActualValue.style.display = "block";
    modalUserGuess.style.display = "block";
    modalCompGuess.style.display = "block";
    modalNextRound.style.display = "block";
    modalDivEl.style.display = "none";
    
    initializeGame();

}


    
    // let userRatingGuessPercent = (((realRating - userGuessRating) / realRating) * 100)
    
    
    // let userWeightGuessPercent = (((realWeight - userGuessWeight) / realWeight) * 100)





/////Evaluate Answers Function Bracket here/////





    // compGuessPercent = (((realPrice - compGuessPrice.value) / realPrice) * 100)  
    //     if (compGuessPercent <= 5) {
    //             computerScore =+ 35
    //             computerScoreEl.innerText(computerScore.Value)
    //             checkWin();
    //             //(strech goal)run nextRound Function 
    //         }
        
        

// checkWin function 

//     if playerScore.value > computerScore.value {
//         userWinEl.classlist.remove("hidden")
        

//    }else{
//        compWinEl.classlist.remove("hidden")
//   }


//   displayWinner function 
  
  
  
  //(Strech Goal) nextRound Function 
  
      // Checks current round with condtional statment to see if to end game
     //     if(round.value < 4){
     //         run displayWinner function
            
      //     }else{
  
     //         Checks playerScore Value vs. Computer score value
     //         playerScoreEl.innerText(playerScore.value)
      //         computerScoreEl.innerText(computerScore.value)
     //         round.value++
     //         run next round function
  
     //     }