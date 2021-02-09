console.log("FIRE AWAY, IM READDDY TO GO!")


var testArr = ["Dog", "Cat", "bird", "snake", "moose", "wolf",]

let testRando = Math.floor(Math.random () * testArr.length);

console.log(testArr[testRando])
console.log(testRando)



//State Variables 


    // let realPrice = null;
    // let realReview = null;
    // let realWeight = null;
    // let userGuessPrice = null;
    // let userGuessReview = null;
    // let userGuessWeight = null;
    // let playerScore = 0;
    // let compGuessPrice = null;
    // let compGuessReview = null;
    // let compGuessWeight = null;
    // let computerScore = 0;
    // let currentRound = null;
    // let userGuessPercent = null;
    // let compGuessPercent = null;
    // let randomProductIndex = null;
    



// Point System (based on guesses)  Stored as Variables with Conditional Statements?
    // guess value === real value ---> 55pts
    // 5% or less distance to real value ---> 35 pts
    // > 5.1% || < 10% distance to real value ---> 20 pts
    // > 10.1% || < 20% distance to real value ---> 10 pts
    // > 20.1% || < 30% distance to real value ---> 5 pts
    // > 30.1% || < 45% distance to real value ---> 1 pt
    // < 45.1% distance to real value ---> 0pts




// DOM Variables
    // let prodImgEl = document.querySelector("#prod-img");
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
    //const products = [
        //instantPot {
            //title: "Instant Pot Max"
            //description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT"
            //category: "Home & Kitchen"
            //price: 100
            //rating: 4.7
            //weight: 14.2
            //image: "imgs/instant-pot.png"
    //     }
    // ]
  //////NOTE:  Should create a class for the new product Objects///////


//Event Listeners
    //Button on page that only becomes active after all three fields are satisfied
    //Price Guess Input Text Field 
    //Rating Guess Input Text Field
    //Weight Guess Input Text Field



//Game Initialization 
    //function initializeGame () {
   // //Step 1: Selecting a random product from the Array and DOM into page

        // //random index generator
            // randomProductIndex = Math.floor(Math.random() * products.length) 


        // DOM insert into page
            // //Replace/Insert product image
                //prodImgEl.img.src = products[randomProductIndex].image

            // //Insert Product Title
                //prodTitleEl.innerText = products[randomProductIndex].title

            // //Insert Product Description
                //prodTitleEl.innerText = products[randomProductIndex].description

            // //Insert Product Category
                //prodCategoryEl.innerText= products[randomProductIndex].category

                
    
    //Step 2: 
    // Inputting all the data from the product (eg. Price, etc) into state variables.  
    
        //realPrice = products[randomProductIndex].price
        //realReview = products[randomProductIndex].review
        //realWeight = products[randomProductIndex].weight


    //Step 3: 
    // Inputting the game score values onto the page.  (and for strech goal the current round)

        //computerScoreEl.innerText = computerScore.value
        //playerScoreEl.innerText = playerScore.value

        // // currentRoundEl.innerText = currentRound




//};


                
//Guess Callback function 
    // Event listeners on the "play" button


    // check user guess vs. real values and run Evaluate function
    // Randomizes computer's guess for the values 
    
    
//Evaluate Entry Function
    //Calculations based on Textfield.Values & Computer Generated Values
    //Evaluate Guess Value and Computer Random Value based on the mathematical distance between the guessed value 
        //and real value of the variable in question. 

    //Award computer and user points based on that distance, with more points awarded being closer to the realValue, and less points
        //being awarded further away from the realValue.  Based on a teir system of percentages with conditional statements
            
            // userGuessPercent = (((realPrice - guessPrice.value) / realPrice) x 100)  
                // (example: if(userGuessPercent <= 5) {
                        //playerScore =+ 35
                        //playerScoreEl.innerText(playerScore.Value)
                        //checkWin function
                
                // //(strech goal)run nextRound Function 
          // }
            // compGuessPercent = (((realPrice - compPrice.value) / realPrice) x 100)  
                // (example: if(compGuessPercent <= 5) {
                        //computerScore =+ 35
                        //computerScoreEl.innerText(computerScore.Value)
                        //checkWin function
                        
                // //(strech goal)run nextRound Function 
          // }
        

        

// checkWin function 

    // if playerScore.value > computerScore.value {
        //userWinEl.classlist.remove("hidden")
        //

   // }else{
       //compWinEl.classlist.remove("hidden")
  // }


  // displayWinner function 
  // 
  
  
  // //(Strech Goal) nextRound Function 
  
      // // Checks current round with condtional statment to see if to end game
     // //     if(round.value < 4){
     // //         run displayWinner function
            
      // //     }else{
  
     // //         Checks playerScore Value vs. Computer score value
     // //         playerScoreEl.innerText(playerScore.value)
      // //         computerScoreEl.innerText(computerScore.value)
     // //         round.value++
     // //         run next round function
  
     // //     }