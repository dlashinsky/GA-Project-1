
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
    


// Point System (based on guesses)  Written as Conditional Statements
    // guess value === real value ---> 55pts
    // 5% or less distance to real value ---> 35 pts
    // > 5.1% || < 10% distance to real value ---> 20 pts
    // > 10.1% || < 20% distance to real value ---> 10 pts
    // > 20.1% || < 30% distance to real value ---> 5 pts
    // > 30.1% || < 45% distance to real value ---> 1 pt
    // < 45.1% distance to real value ---> 0pts




// DOM Variables
    let prodImgEl = document.querySelector("#prod-img");
    let prodTitleEl = document.querySelector(".prod-title");
    let prodDescEl = document.querySelector(".prod-description");
    let prodCategoryEl = document.querySelector(".prod-category")
    let computerScoreEl = document.querySelector("#comp-score")
    let playerScoreEl = document.querySelector("#player-score")
    let gameRoundEl = document.querySelector("#game-round")
    let guessPriceEl = document.querySelector("#guess-price-txt")
    let guessratingEl = document.querySelector("#guess-rating-txt")
    let guessWeightEl = document.querySelector("#guess-weight-txt")
    let priceInputDiv = document.querySelector(".price-input-div")    
    let guessPriceButtonEl = document.querySelector("#price-guess-button")
    let ratingInputDiv = document.querySelector(".rating-input-div")
    let guessRatingButtonEl = document.querySelector("#rating-guess-button")    
    let guessWeightButtonEl = document.querySelector("#weight-guess-button") 
    let weightInputDiv = document.querySelector(".weight-input-div")   
    let userWinEl = document.querySelector("#user-win-msg")
    let compWinEl = document.querySelector("comp-win-msg")
    
    
// Product Array
    const products = [
        instantPot = {
            title: "Instant Pot Max",
            description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
            category: "Home & Kitchen",
            price: 100,
            rating: 4.7,
            weight: 14.2,
            image: "imgs/instant-pot.png"
        // },
        // instantPot2 = {
        //     title: "Instant Pot Max",
        //     description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
        //     category: "Home & Kitchen",
        //     price: 90,
        //     rating: 2.6,
        //     weight: 55,
        //     image: "imgs/instant-pot.png"
        // },
        // instantPot2 = {
        //     title: "Instant Pot Max",
        //     description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
        //     category: "Home & Kitchen",
        //     price: 80,
        //     rating: 3.7,
        //     weight: 6,
        //     image: "imgs/instant-pot.png"
        // },
        // instantPot2 = {
        //     title: "Instant Pot Max",
        //     description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
        //     category: "Home & Kitchen",
        //     price: 70,
        //     rating: 4.1,
        //     weight: 30,
        //     image: "imgs/instant-pot.png"
        // },
        // instantPot2 = {
        //     title: "Instant Pot Max",
        //     description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
        //     category: "Home & Kitchen",
        //     price: 60,
        //     rating: 4.4,
        //     weight: 4,
        //     image: "imgs/instant-pot.png"
        // },
        // instantPot2 = {
        //     title: "Instant Pot Max",
        //     description: "Pressure Cooker, 9 in 1 Best for Canning with 15PSI and serilizer, 6QT",
        //     category: "Home & Kitchen",
        //     price: 50,
        //     rating: 4.1,
        //     weight: 18,
        //     image: "imgs/instant-pot.png"
        }
        
    ]
    ////NOTE:  Should create a class for the new product Objects///////
    
    

// Event Listeners
    document.addEventListener('DOMContentLoaded', initializeGame)
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

          
  //Activating the game button to start on price & Console logging the actual price of products for coding purposes DELETE when done

  
    realPrice = products[randomProductIndex].price;
        console.log("This is the actual price " + realPrice)
    realRating = products[randomProductIndex].rating
        console.log("This is the actual rating " + realRating)
    realWeight = products[randomProductIndex].weight
        console.log("This is the actual weight " + realWeight)

    guessPriceButtonEl.addEventListener('click', evalPlayerPriceGuess);




    // Step 3: 
    // Inputting the game score values onto the page. 
    computerScoreEl.innerText = computerScore
    playerScoreEl.innerText = playerScore
            
    //Step 4: Inputting what game round it is (Further rounds strech goal)
    gameRoundEl.innerText = currentRound
            
};  /////END intializeGame Func Here////
        
function evalPlayerPriceGuess () {

///////////PRICE EVALUATIONS!!!!!////////////////

    userGuessPrice = guessPriceEl.value;

    realPrice = products[randomProductIndex].price;
        console.log("This is the second " + realPrice)

    let userPriceGuessPercent = Math.floor((((realPrice - userGuessPrice) / realPrice) * 100))

        console.log(userPriceGuessPercent)


        ///////////////CONDITIONALS FOR HOW CLOSE THE USER GETS TO THE PRICEANSWER//////////

        if(userGuessPrice > realPrice) {
            console.log("You over bid!  Negative Points!!!")
            playerScore -=20;
            playerScoreEl.innerText = playerScore;
            runCompPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >.001  &&  userPriceGuessPercent <= 5) {
            playerScore += 35;
            playerScoreEl.innerText = playerScore;
            console.log("the 35pt conditional is working")
            runCompPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >5  &&  userPriceGuessPercent <= 10) {
            playerScore += 20;
            console.log("the 20pt conditional is working")
            playerScoreEl.innerText = playerScore;
            runCompPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >10  &&  userPriceGuessPercent <= 20) {
            playerScore += 10;
            console.log("the 10pt conditional is working");
            playerScoreEl.innerText = playerScore;
            runCompPriceGuess(realPrice); 
        }
        if (userPriceGuessPercent >20  &&  userPriceGuessPercent <= 30) {
            playerScore += 5;
            console.log("the 5pt conditional is working");
            playerScoreEl.innerText = playerScore;
            runCompPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >30  &&  userPriceGuessPercent <= 45) {
            playerScore += 1;
            console.log("the 1 pt conditional is working");
            playerScoreEl.innerText = playerScore; 
            runCompPriceGuess(realPrice);
        }
        if (userPriceGuessPercent > 45) {
            playerScore += 0;
            console.log("the 0 pt conditional is working");
            playerScoreEl.innerText = playerScore;
            runCompPriceGuess(realPrice); 
        }
            else if (userGuessPrice == realPrice) {
                playerScore += 55;
                console.log("the 55pt conditional is working")
                playerScoreEl.innerText = playerScore;
                runCompPriceGuess(realPrice);
            }

} /////END evalPlayerPriceGuess Func here



function runCompPriceGuess (realPrice) {
    ////////////RANDOMIZATION OF COMPUTER GUESS////////////

    let adjustedRealPrice =  realPrice * 1.10
        console.log("The adjusted Real Price is " + adjustedRealPrice)

    compGuessPrice = Math.floor(Math.random() * (adjustedRealPrice/2)) + (realPrice / 2)
        console.log("the computer guessed " + compGuessPrice)
            
            
    let compPriceGuessPercent = Math.floor((((realPrice - compGuessPrice) / realPrice) * 100))
        console.log("The computer price guess is " + compPriceGuessPercent + " percent.")
    
        //////////CONDITIONALS FOR COMP GUESS//////////////

        if(compGuessPrice > realPrice) {
            console.log("The Computer over bid!  Negative Points!!!")
            computerScore -=20
            computerScoreEl.innerText = computerScore
            evalPlayerRatingGuess();
        }
        if (compPriceGuessPercent >.001  &&  compPriceGuessPercent <= 5) {
            computerScore += 35
            computerScoreEl.innerText = computerScore 
            console.log("the computer 35pt conditional is working")
            evalPlayerRatingGuess();
        }
        
        if (compPriceGuessPercent >5  &&  compPriceGuessPercent <= 10) {
            computerScore += 20
            console.log("the computer 20pt conditional is working")
            computerScoreEl.innerText = computerScore 
            evalPlayerRatingGuess();
        }
        if (compPriceGuessPercent >10  &&  compPriceGuessPercent <= 20) {
            computerScore += 10
            console.log("the computer 10pt conditional is working")
            computerScoreEl.innerText = computerScore 
            evalPlayerRatingGuess();
        }
        if (compPriceGuessPercent >20  &&  compPriceGuessPercent <= 30) {
            computerScore += 5
            console.log("the computer 5pt conditional is working")
            computerScoreEl.innerText = computerScore 
            evalPlayerRatingGuess();
        }
        if (compPriceGuessPercent >30  &&  compPriceGuessPercent <= 45) {
            computerScore += 1
            console.log("the computer 1pt conditional is working")
            computerScoreEl.innerText = computerScore 
            evalPlayerRatingGuess();
        }
        if (compPriceGuessPercent > 45) {
            computerScore += 0
            console.log("the computer 0pt conditional is working")
            computerScoreEl.innerText = computerScore 
            evalPlayerRatingGuess();
            
        }
        
            else if (compGuessPrice == realPrice) {
                computerScore += 55
                console.log("the computer 55pt conditional is working")
                computerScoreEl.innerText = computerScore 
                evalPlayerRatingGuess();
            }

} /////End runCompPriceGuess 


function evalPlayerRatingGuess() {
    
    priceInputDiv.setAttribute("style", "display: none;");
    guessPriceButtonEl.setAttribute("style", "display: none;");

    ratingInputDiv.removeAttribute("id");
    guessRatingButtonEl.removeAttribute("id")
    

    
    
    userGuessRating = guessratingEl.value;


    



}/////END evalPlayerRatingGuess func
        



        // userGuessWeight = guessWeightEl.value;
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