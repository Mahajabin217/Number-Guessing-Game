// Variables: 
let low = 1; 
let high;
let mid;
let attempts = 0;

// Given prompt for the range: 
function startGame() {
    high = parseInt(prompt("Enter the maximum number for the range (e.g., 100):"));
    document.getElementById("max-number").innerText = high;
    makeGuess();
}

// Using the Concept of Binary Search: 
function makeGuess() {

    //Step-1: Base case: If we guess unusual number:
    if (low > high) {
        document.getElementById("result").innerText =
            "Something Went Wrong!!!";
        return;
    }

    //Step-2: We'll find out the mid value between the given range:
    attempts++;
    mid = Math.floor((low + high) / 2);
    document.getElementById("current-guess").innerText = `Is it ${mid}?`;
}

//Step-3: If the user click on higher button, then we'll move to the right side:
document.getElementById("higher-btn").addEventListener("click", () => {
    low = mid + 1;
    makeGuess();
});

//Step-4: If the user click on lower button, then we'll move to the left side:
document.getElementById("lower-btn").addEventListener("click", () => {
    high = mid - 1;
    makeGuess();
});

// If the Guessing number is correct: 
document.getElementById("correct-btn").addEventListener("click", () => {
    document.getElementById("result").innerText = `I guessed your number ${mid} in ${attempts} attempts!`;
});

// Start the game
startGame();
