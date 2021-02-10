
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
    let guessRatingEl = document.querySelector("#guess-rating-txt")
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
            price: 99.99,
            rating: 4.7,
            weight: 14.2,
            image: "imgs/instant-pot.png"
        },
        seniorWallDecal = {
            title: "Wallmonkey Decal: Senior Woman with Asthma",
            description: "Hang anywhere in your house!  Wall paint-safe; 48in x 41in decal; senior woman with asthma",
            category: "Appliances > Refridgerators, Freezers & Ice Makers",
            price: 49.99,
            rating: 5,
            weight: 1.5,
            image: "imgs/senior-wall-decal.png"
        },
        fingerPuppets = {
            title: "Tiny Hand Finger Puppets",
            description: "Pack of 12, instead of the usual 10!  Halloween hand prop accessories; dishwasher safe",
            category: "Toys & Games",
            price: 10.97,
            rating: 4.7,
            weight: .25,
            image: "imgs/tinyhands.png"
        },
        catTissueHolder = {
            title: "Catt Butt Tissue Holder",
            description: "Orange Tabby Cat. Fits square tissue box. Made from molded resin. Microwave Safe",
            category: "Home & Kitchen > Bath > Bathroom Accessories > Holders & Dispensers > Tissue Holders",
            price: 39.95,
            rating: 4.7,
            weight: 30,
            image: "imgs/cat-tissue-holder.png"
        },
        karaokeHorn = {
            title: "Karaoke Horn",
            description: "Take your voice where ever you go! Ultra Heat safe silicone up to 550F, for the HOT voices out there.  Machine wash cold; tumble dry",
            category: "None",
            price: 69.36,
            rating: 3.5,
            weight: .58,
            image: "imgs/karaoke-horn.png"
        },
        fingerCovers = {
            title: "Finger Covers",
            description: "Keep your fingers CLEAN with these finger food covers.  Enjoy your cheetos with peace.  3ct, red.  Washable, reusable, dishwasher safe.",
            category: "Home & Kitchen > Kitchen & Dining > Kitchen Utensils & Gadgets",
            price: 18.99,
            rating: 4.4,
            weight: .4,
            image: "imgs/finger-covers.png"
        },
        desktopFridge = {
            title: "desktop Fridge",
            description: "Keep your beverage cold with this USB powered Minifridge.  Single can capacity - 24cu Inches.  Red plastic.",
            category: "Appliances > Refridgerators, Freezers & Ice Makers",
            price: 23.97,
            rating: 3.4,
            weight: 1.41,
            image: "imgs/desktop-fridge.png"
        },
        roastBeefSandSalt = {
            title: "Bath Salts: Roast Beef Sandwich",
            description: "Amber bath salts: Luxury.  Best gifts for best friends, significant other.  Au jus french dip.",
            category: "Bath & Bathing Accessories > Bath > Minerals & Salts",
            price: 14.95,
            rating: 4.7,
            weight: 1.5,
            image: "imgs/roast-beef-bath.png"
        },
        nicCagePillow = {
            title: "Nicolas Cage Sequin Pillow",
            description: "Get to sleep right next to Nic Cage every night!  Magic sequin pillow case and pillow from red to Nic Cage.",
            category: "Bedding > Decorative Pillows, Inserts & Covers > Throw Pillows",
            price: 18.99,
            rating: 4.5,
            weight: 1.5,
            image: "imgs/nic-cage-pillow.png"
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

        if(currentRound > 1) {
        weightInputDiv.setAttribute("id", "weight-hidden");
        guessWeightButtonEl.setAttribute("id", "weight-guess-button");
        
        }else if(currentRound > 3){
            endGame();
        }

        priceInputDiv.removeAttribute("id");
        guessPriceButtonEl.removeAttribute("id")
        guessPriceButtonEl.addEventListener('click', userPriceGuess);




    // Step 3: 
    // Inputting the game score values onto the page. 
    computerScoreEl.innerText = computerScore
    playerScoreEl.innerText = playerScore
            
    //Step 4: Inputting what game round it is (Further rounds strech goal)
    gameRoundEl.innerText = currentRound
            
};  /////END intializeGame Func Here////



//////////////////////////////////////GUESS PRICE FUNCTIONALITY AND CONDITIONALS HERE////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        
function userPriceGuess () {
    

    userGuessPrice = guessPriceEl.value;
    realPrice = products[randomProductIndex].price;
    let userPriceGuessPercent = Math.floor((((realPrice - userGuessPrice) / realPrice) * 100))

        if(userGuessPrice > realPrice) {
            console.log("You over bid!  Negative Points!!!")
            playerScore -=20;
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >.001  &&  userPriceGuessPercent <= 5) {
            playerScore += 35;
            playerScoreEl.innerText = playerScore;
            console.log("Your price guess was " + userGuessPrice + " you got 35 points!");
            compPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >5  &&  userPriceGuessPercent <= 10) {
            playerScore += 20;
            console.log("Your price guess was " + userGuessPrice + " you got 20 points!");
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >10  &&  userPriceGuessPercent <= 20) {
            playerScore += 10;
            console.log("Your price guess was " + userGuessPrice + " you got 10 points!");
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice); 
        }
        if (userPriceGuessPercent >20  &&  userPriceGuessPercent <= 30) {
            playerScore += 5;
            console.log("Your price guess was " + userGuessPrice + " you got 5 points!");
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice);
        }
        if (userPriceGuessPercent >30  &&  userPriceGuessPercent <= 45) {
            playerScore += 1;
            console.log("Your price guess was " + userGuessPrice + " you got 1 points!");
            playerScoreEl.innerText = playerScore; 
            compPriceGuess(realPrice);
        }
        if (userPriceGuessPercent > 45) {
            playerScore += 0;
            console.log("Your price guess was " + userGuessPrice + ". Sorry!  Guess Better next time!");
            playerScoreEl.innerText = playerScore;
            compPriceGuess(realPrice); 
        }
            else if (userGuessPrice == realPrice) {
                playerScore += 55;
                console.log("Your price guess was spot on at" + userGuessPrice + ".  Nice work, you got 55 points!!!");
                playerScoreEl.innerText = playerScore;
                compPriceGuess(realPrice);
            }

} /////END evalPlayerPriceGuess Func here



function compPriceGuess (realPrice) {


    let adjustedRealPrice =  realPrice * 1.10
        compGuessPrice = Math.floor(Math.random() * (adjustedRealPrice/2)) + (realPrice / 2)
              
    let compPriceGuessPercent = Math.floor((((realPrice - compGuessPrice) / realPrice) * 100))
    
    
                                            //////////CONDITIONALS FOR COMP PRICE GUESS//////////////
                                    //////////////////////////////////////////////////////////////////

        if(compGuessPrice > realPrice) {
            console.log("The Computer over bid!  Negative Points!!!")
            computerScore -=20
            computerScoreEl.innerText = computerScore
            userRatingGuess();
        }
        if (compPriceGuessPercent >.001  &&  compPriceGuessPercent <= 5) {
            computerScore += 35
            computerScoreEl.innerText = computerScore 
            console.log("The computer price guess was " + compGuessPrice + " the computer recieved 35 points!");
            userRatingGuess();
        }
        
        if (compPriceGuessPercent >5  &&  compPriceGuessPercent <= 10) {
            computerScore += 20
            console.log("The computer price guess was " + compGuessPrice + " the computer recieved 20 points!");
            computerScoreEl.innerText = computerScore 
            userRatingGuess();
        }
        if (compPriceGuessPercent >10  &&  compPriceGuessPercent <= 20) {
            computerScore += 10
            console.log("The computer price guess was " + compGuessPrice + " the computer recieved 10 points!");
            computerScoreEl.innerText = computerScore 
            userRatingGuess();
        }
        if (compPriceGuessPercent >20  &&  compPriceGuessPercent <= 30) {
            computerScore += 5
            console.log("The computer price guess was " + compGuessPrice + " the computer recieved 5 points!");
            computerScoreEl.innerText = computerScore 
            userRatingGuess();
        }
        if (compPriceGuessPercent >30  &&  compPriceGuessPercent <= 45) {
            computerScore += 1
            console.log("The computer price guess was " + compGuessPrice + " the computer recieved 1 points!");
            computerScoreEl.innerText = computerScore 
            userRatingGuess();
        }
        if (compPriceGuessPercent > 45) {
            computerScore += 0
            console.log("The computer price guess was " + userGuessPrice + ". They gotta do better than that!!!");
            computerScoreEl.innerText = computerScore 
            userRatingGuess();
            
        }
            else if (compGuessPrice == realPrice) {
                computerScore += 55
                console.log("The computer price guess was spot on at " + compGuessPrice + " the computer recieved 55 points!  Yowza!!");
                computerScoreEl.innerText = computerScore 
                userRatingGuess();
            }

} /////END compPriceGuess



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
                console.log("You over shot your rating guess!!!  Negative Points!!!")
                playerScore -=5;
                playerScoreEl.innerText = playerScore;
                compRatingGuess(realRating);
            }
            if (userRatingGuessPercent >.001  &&  userRatingGuessPercent <= 3) {
                playerScore += 20;
                playerScoreEl.innerText = playerScore;
                console.log("Your rating guess was " + userGuessRating + " you got 20 points!");
                compRatingGuess(realRating);
            }
            if (userRatingGuessPercent >3  &&  userRatingGuessPercent <= 5) {
                playerScore += 15;
                console.log("Your rating guess was " + userGuessRating + " you got 15 points!");
                playerScoreEl.innerText = playerScore;
                compRatingGuess(realRating);
            }
            if (userRatingGuessPercent >5  &&  userRatingGuessPercent <= 7) {
                playerScore += 5;
                console.log("Your rating guess was " + userGuessRating + " you got 15 points!");
                playerScoreEl.innerText = playerScore;
                compRatingGuess(realRating); 
            }
            if (userRatingGuessPercent >7  &&  userRatingGuessPercent <= 10) {
                playerScore += 1;
                console.log("Your rating guess was " + userGuessRating + " you got 1 points!");
                playerScoreEl.innerText = playerScore;
                compRatingGuess(realRating);
            }
            if (userRatingGuessPercent > 11) {
                playerScore += 0;
                console.log("Your rating guess was " + userGuessRating + " Sorry! 0 points! Guess Better!");
                playerScoreEl.innerText = playerScore;
                compRatingGuess(realPrice); 
            }
                else if (userGuessRating == realRating) {
                    playerScore += 35;
                    console.log("Your rating guess was " + userGuessRating + " you got 35 points!");
                    playerScoreEl.innerText = playerScore;
                    compRatingGuess(realRating);
                }
            
    })/// End Button click Callback func
            
            
}/////END beginRatingGuess func
        

                                            //////////CONDITIONALS FOR COMP RATING GUESS//////////////
                                    //////////////////////////////////////////////////////////////////


function compRatingGuess (realRating) {
        
    let adjustedRealRating =  realRating * 1.10

    compGuessRating = Math.floor(Math.random() * (adjustedRealRating/2)) + (realRating - 2)
        
    let compRatingGuessPercent = Math.floor((((realRating - compGuessRating) / realRating) * 100))

    console.log("this is the real rating " + realRating)
    console.log("this is the computers rating Guess " + compGuessRating)
    console.log("this is the computers guess rating percent from real " + compRatingGuessPercent)


        if(compGuessRating > realRating) {
            console.log("The computer over shot their rating guess!!!  Negative Points!!!")
            computerScore -=5;
            computerScoreEl.innerText = computerScore;
            userWeightGuess();
        }
        if (compRatingGuessPercent >.001  &&  compRatingGuessPercent <= 3) {
            computerScore += 20;
            computerScoreEl.innerText = computerScore;
            console.log("the computer's rating guess was " + compGuessRating + " they got 20 points!");
            userWeightGuess();
        }
        if (compRatingGuessPercent >3  &&  compRatingGuessPercent <= 5) {
            computerScore += 15;
            console.log("the computer's rating guess was " + compGuessRating + " they got 15 points!");
            computerScoreEl.innerText = computerScore;
            userWeightGuess();
        }
        if (compRatingGuessPercent >5  &&  compRatingGuessPercent <= 7) {
            computerScore += 5;
            console.log("the computer's rating guess was " + compGuessRating + " they got 5 points!");
            computerScoreEl.innerText = computerScore;
            userWeightGuess(); 
        }
        if (compRatingGuessPercent >7  &&  compRatingGuessPercent <= 10) {
            computerScore += 1;
            console.log("the computer's rating guess was " + compGuessRating + " they got 1 point!");
            computerScoreEl.innerText = computerScore;
            userWeightGuess();
        }
        if (compRatingGuessPercent > 11) {
            computerScore += 0;
            console.log("The Computer's rating guess was " + compGuessRating + " Big fat doughnut!  They gots ta do bettah!!!");
            computerScoreEl.innerText = computerScore;
            userWeightGuess(); 
        }
            else if (compGuessRating == realRating) {
                computerScore += 35;
                console.log("the computer's rating guess was " + compGuessRating + " they got 35 points!");
                computerScoreEl.innerText = computerScore;
                userWeightGuess();
            }

}//////END compRatingGuess Func//////

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
                console.log("You over guessed the Weight!  Negative Points!!!")
                playerScore -=20;
                playerScoreEl.innerText = playerScore;
                compWeightGuess(realWeight);
            }
            if (userWeightGuessPercent >.001  &&  userWeightGuessPercent <= 5) {
                playerScore += 35;
                playerScoreEl.innerText = playerScore;
                console.log("Your price guess was " + userGuessWeight + " you got 35 points!");
                compWeightGuess(realWeight);
            }
            if (userWeightGuessPercent >5  &&  userWeightGuessPercent <= 10) {
                playerScore += 20;
                console.log("Your price guess was " + userGuessWeight + " you got 20 points!");
                playerScoreEl.innerText = playerScore;
                compWeightGuess(realWeight);
            }
            if (userWeightGuessPercent >10  &&  userWeightGuessPercent <= 20) {
                playerScore += 10;
                console.log("Your price guess was " + userGuessWeight + " you got 10 points!");
                playerScoreEl.innerText = playerScore;
                compWeightGuess(realWeight); 
            }
            if (userWeightGuessPercent >20  &&  userWeightGuessPercent <= 30) {
                playerScore += 5;
                console.log("Your price guess was " + userGuessWeight + " you got 5 points!");
                playerScoreEl.innerText = playerScore;
                compWeightGuess(realWeight);
            }
            if (userWeightGuessPercent >30  &&  userWeightGuessPercent <= 45) {
                playerScore += 1;
                console.log("Your price guess was " + userGuessWeight + " you got 1 points!");
                playerScoreEl.innerText = playerScore; 
                compWeightGuess(realWeight);
            }
            if (userWeightGuessPercent > 45) {
                playerScore += 0;
                console.log("Your price guess was " + userGuessWeight + ". Sorry!  Guess Better next time!");
                playerScoreEl.innerText = playerScore;
                compWeightGuess(realWeight); 
            }
                else if (userGuessWeight == realWeight) {
                    playerScore += 55;
                    console.log("Your price guess was spot on at" + userGuessWeight + ".  Nice work, you got 55 points!!!");
                    playerScoreEl.innerText = playerScore;
                    compWeightGuess(realWeight);
                }


        });/////END Weight guess button Click Call back Function 




};//////END userWeight Guess


function compWeightGuess(realWeight) {

    let adjustedRealWeight =  realWeight * 1.10
        compGuessWeight= Math.floor(Math.random() * (adjustedRealWeight/2)) + (realWeight / 2)
              
    let compWeightGuessPercent = Math.floor((((realWeight - compGuessWeight) / realWeight) * 100))


    if(compGuessWeight> realWeight) {
        console.log("The Computer over guessed the Weight!  Negative Points!!!")
        computerScore -=20
        computerScoreEl.innerText = computerScore
        nextRound();
    }
    if (compWeightGuessPercent >.001  &&  compWeightGuessPercent <= 5) {
        computerScore += 35
        computerScoreEl.innerText = computerScore 
        console.log("The computer weight guess was " + compGuessWeight+ " the computer recieved 35 points!");
        nextRound();
    }
    
    if (compWeightGuessPercent >5  &&  compWeightGuessPercent <= 10) {
        computerScore += 20
        console.log("The computer weight guess was " + compGuessWeight+ " the computer recieved 20 points!");
        computerScoreEl.innerText = computerScore 
        nextRound();
    }
    if (compWeightGuessPercent >10  &&  compWeightGuessPercent <= 20) {
        computerScore += 10
        console.log("The computer weight guess was " + compGuessWeight+ " the computer recieved 10 points!");
        computerScoreEl.innerText = computerScore 
        nextRound();
    }
    if (compWeightGuessPercent >20  &&  compWeightGuessPercent <= 30) {
        computerScore += 5
        console.log("The computer weight guess was " + compGuessWeight+ " the computer recieved 5 points!");
        computerScoreEl.innerText = computerScore 
        nextRound();
    }
    if (compWeightGuessPercent >30  &&  compWeightGuessPercent <= 45) {
        computerScore += 1
        console.log("The computer weight guess was " + compGuessWeight+ " the computer recieved 1 points!");
        computerScoreEl.innerText = computerScore 
        nextRound();
    }
    if (compWeightGuessPercent > 45) {
        computerScore += 0
        console.log("The computer weight guess was " + userGuessPrice + ". They gotta do better than that!!!");
        computerScoreEl.innerText = computerScore 
        nextRound();
        
    }
        else if (compGuessWeight== realWeight) {
            computerScore += 55
            console.log("The computer price guess was spot on at " + compGuessWeight+ " the computer recieved 55 points!  Yowza!!");
            computerScoreEl.innerText = computerScore 
            nextRound();
        }



};//END of compGuessWeight Function
    

function nextRound() {
    currentRound++
    initializeGame ();

};


function endGame (){};
    

    
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