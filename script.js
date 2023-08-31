//variable diclaration
var inputString = ["Hello, World!","Hello, Next!"];
let idx = 0;

var interval = 200;
var currentIndex = 0;
var outputDiv = document.getElementById("output");
var forward = true;

//function
function displayCharacter(){
    if(forward){
        if(currentIndex < inputString[idx].length){
            outputDiv.innerHTML += inputString[idx][currentIndex];
            currentIndex++;
        }else{
            forward = false;
            currentIndex -= 2;
        }
    }else{
        if(currentIndex = 0){
            outputDiv.innerHTML = inputString[idx].slice(0, currentIndex + 1);
            currentIndex--;
        }else{
        outputDiv.innerHTML = "";

            idx = (idx + 1)  % inputString.length;
            currentIndex = 0;
            forward = true;
                    
        }
    }
}


var intervalId = setInterval(displayCharacter, interval);