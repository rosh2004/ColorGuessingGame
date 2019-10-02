
var numberOfSquares = 6;
var colors= generateRandomColors(numberOfSquares);
var pickedColor = pickColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document .getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();



function init(){
	for (var i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			if (this.textContent=== "EASY"){
				numberOfSquares = 3;
			}else{
				numberOfSquares = 6;
			}

			resetGame();
		});
	}
	
	resetButton.addEventListener("click", resetGame);

	for (var i = 0; i < colors.length; i++) {
		//add initial colors to squares

		squares[i].style.backgroundColor = colors[i];

		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of picked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "CORRECT!";
				resetButton.textContent= "Play Again";
				changeColorsAll(pickedColor);
				h1.style.backgroundColor = pickedColor;
			}
			else{
				//fade color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

}






function changeColorsAll(color){
	//loop throough squares
	for (var i = 0; i < squares.length; i++) {
		//change square color to the argument passed
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colos to array
	for (var i = 0; i < num; i++) {
		//get random color and push to array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red 0 to 255
	var red = Math.floor(Math.random() * 256);
	//pick green 0 to 255
	var green = Math.floor(Math.random() * 256);
	//pick blue 0 to 255
	var blue = Math.floor(Math.random() * 256);
	//return one string of color
	return "rgb(" + red+ ", " + green + ", " + blue + ")";
}

 function resetGame(){
	//generate all new colors
	colors = generateRandomColors(numberOfSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	//change color of squares
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = "#232323";
}
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.backgroundColor= colors[i];
	}
	h1.style.backgroundColor = "steelblue"
	messageDisplay.textContent="";
	resetButton.textContent="New Color";
}