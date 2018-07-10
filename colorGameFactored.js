var numSquares = 6;
var colors = [];
var color;

var squares = document.querySelectorAll(".square");
var h1ColorDisplay = document.getElementById("colorDisplay");
var statusDisplay = document.querySelector("#status");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init()

//everything that needs to run when the page loads
function init(){
	setUpModeButtons();
	setUpSquareButtons();
	reset();
}

function setUpModeButtons(){
	//click listeners for easy and hard buttons
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
				
			//figure out how many squares to show
			if (this.textContent === "Easy") {
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			//pick new colors
			//pick color from new colors for user to guess
			//populate squares with new colors
			reset();
		});
	}
}
function setUpSquareButtons(){
		for(var i=0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var selectedColor = this.style.backgroundColor;
			
			//compare color of clicked square to variable "color"
			if(selectedColor === color){
				statusDisplay.textContent = "Correct!!"
				correctColor();
				h1.style.backgroundColor = color;
				resetButton.textContent = "play again";
			}else{
				this.style.backgroundColor = "";
				statusDisplay.textContent = "Try again!!"
			}
		});
	}
}
function reset(){
	//generate array with new colors
	colors = randomColors(numSquares);
	//get new color for user to guess
	color = selectColor();
	//update display with new color
	h1ColorDisplay.textContent = color;
	//populate squares with color
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		}else{
			squares[i].style.display = "none";
		}
		
	}
	//reset h1 background
	h1.style.backgroundColor = "steelblue";
	//button text back to "new colors"
	resetButton.textContent = "new colors";
	//reset status display
	statusDisplay.textContent = ""; 
}
resetButton.addEventListener("click",function(){
	reset();
});
//function that populates all squares with the correct color
function correctColor(){
	for(var i = 0; i < squares.length; i++ ){
		squares[i].style.backgroundColor = color;
	}
}
//function that selects color for the user to guess from the array "colors"
function selectColor(){
	//randomly pick an index number for array "colors"
	var index = Math.floor(Math.random() * colors.length);
	//use the index number to extract the color
	return(colors[index]); 
}
//function that populates an array with random colors 
function randomColors(num){
	//use variable to create array
	var ary = [];
	//populate array with random colors
	for(var i = 0 ; i < num ; i++){
		ary[i] = generateRandomColor();		
	}
	//return array
	return ary;
}
//function that geneates a random color and returns a string of rgb color format
function generateRandomColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb(" +red +", " +green +", " +blue +")";

}
