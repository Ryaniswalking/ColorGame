var numOfSquares = 6;
var colors = [];
var pickedColor;

var boxes = document.getElementsByClassName("square");

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode")

initialize();

function initialize(){
    setupModeButtons();
    setupBoxes();
    reset();
}

function setupModeButtons(){
    //mode button and event listeners
    for (var i=0; i<modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares =6;
            reset();
        });
    }   
}

function setupBoxes(){
    for(var i=0; i<boxes.length; i++){
        //add clickListeners to each square
        boxes[i].addEventListener("click", function(){
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            }else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    }
}



function reset(){
     //generate all new colors
    colors = generateRandomColors(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";

    //change the colors of squares
    for(var i=0; i<boxes.length; i++){
        if(colors[i]){
            boxes[i].style.display = "block";
            boxes[i].style.backgroundColor = colors[i];
        }else{
            boxes[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelBlue";

}


resetButton.addEventListener("click", function(){
    reset();
});




function changeColors(color){
    //loop through all squares
    for(var i=0; i<colors.length; i++){
        //change each color to the given colors
        boxes[i].style.backgroundColor = color;
    }
    
}

function pickColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    
    var arr = [];

    for(var i=0; i<num; i++){
        arr[i] = "rgb(" + randomColor() + ", " + randomColor() + ", " + randomColor() + ")";
    }
    return arr;
}

function randomColor(){
   var random = Math.floor(Math.random() * 256);
   return random;
}