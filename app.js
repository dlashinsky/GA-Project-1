console.log("FIRE AWAY, IM READDDY TO GO!")


//State Variables 


    // let realPrice = null;
    // let realReview = null;
    // let realWeight = null;
    // let guessPrice = null;
    // let guessReview = null;
    // let guessWeight = null;
    // let playerScore = 0;
    // let computerScore = 0;
    // let currentRound = null;
    // let guessDiffPerc = null;
    



// Point System (based on guesses)  Stored as Variables with Conditional Statements?
    // guess value === real value ---> 55pts
    // 5% or less distance to real value ---> 35 pts
    // > 5.1% || < 10% distance to real value ---> 20 pts
    // > 10.1% || < 20% distance to real value ---> 10 pts
    // > 20.1% || < 30% distance to real value ---> 5 pts
    // > 30.1% || < 45% distance to real value ---> 1 pt
    // < 45.1% distance to real value ---> 0pts




// DOM Variables
    // let prodImgEl = document.querySelector(".prod-img");
    // let prodTitleEl = document.querySelector(".prod-title");
    // let prodDescEl = document.querySelector(".prod-description");
    // let prodCategoryEl = document.querySelector(".prod-category")
    // let computerScoreEl = document.querySelector("#comp-score")
    // let playerScoreEl = document.querySelector("#player-score")
    // let gameRoundEl = document.querySelector("#game-round")
    // let guessPriceEl = document.querySelector("#guess-price-txt")
    // let guessReviewEl = document.querySelector("#guess-review-txt")
    // let guessWeightEl = document.querySelector("#guess-weight-txt")
    // let guessButtonEl = document.querySelector("#guess-button")
    // let userWinEl = document.querySelector("#user-win-msg")
    // let compWinEl = document.querySelector("comp-win-msg")


// Product Array
    //const randomProduct = [
        //instantPot {
            //Title: "Instant Pot Max"
            //Description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT"
            //Price: 100
            //Rating: 4.7
            //Weight: 14.2
    //     }
    // ]



//Event Listeners
    //Button on page that only becomes active after all three fields are satisfied
    //Price Guess Input Text Field 
    //Rating Guess Input Text Field
    //Weight Guess Input Text Field



//Game Initialization 
    //function initializeGame (){};
    //Step 1:
    // Selecting a random product from the Array entering into the state variable associated with product 

    //Step 2: 
    // Inputting all the data from the product (eg. Price, etc) into state variables.  


//Guess Callback function 
    // Event listeners on the "play" button
    // check user guess vs. real values and run Evaluate function
    
    
//Evaluate Entry Function
    //Calculations based on Textfield.Values & Computer Generated Values
    //Evaluate Guess Value and Computer Random Value based on the mathematical distance between the guessed value 
        //and real value of the variable in question. 

    //Award computer and user points based on that distance, with more points awarded being closer to the realValue, and less points
        //being awarded further away from the realValue.  Based on a teir system of percentages with conditional statements
            
            // guessDiffPerc = (((realPrice - guessPrice.value) / realPrice) x 100)  
           // (example: if(guessDiffPerc <= 5) {
                //playerScore =+ 35
                //run checkWin Function 
          // }
        

        

// checkWin Function 

    //Checks current round with condtional statment
        //if(round.value < 4){r
            //run displayWinner function
          
        //}else{

            //Checks playerScore Value vs. Computer score value
            //playerScoreEl.innerText(playerScore.value)
            //computerScoreEl.innerText(computerScore.value)
            //run next round function

        //}



// displayWinner function 
    //

