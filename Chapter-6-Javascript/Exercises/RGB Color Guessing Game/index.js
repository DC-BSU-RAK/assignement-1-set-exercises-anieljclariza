// Get references to DOM elements for display and user interaction
const rgbDisp = document.getElementById("rgbDisplay");
const optionsContainer = document.getElementById("colorOptions");
const info = document.getElementById("gameInfo");
const livesDisp = document.getElementById("lives");
const scoreDisp = document.getElementById("score");
const restart = document.getElementById("restart");

// Initialize game variables
let correctColor;
let lives = 3;
let score = 0;

// Generate a random RGB color string
function randomRGB() {
  const r = Math.floor(Math.random() * 256); // Red component (0-255)
  const g = Math.floor(Math.random() * 256); // Green component (0-255)
  const b = Math.floor(Math.random() * 256); // Blue component (0-255)
  return `rgb(${r}, ${g}, ${b})`;
}

// Set up a new round of the game
function generateRound() {
  // Clear previous options and messages
  optionsContainer.innerHTML = "";
  info.textContent = "";

  // Generate and display the target RGB color (in uppercase)
  correctColor = randomRGB();
  rgbDisp.textContent = correctColor.toUpperCase();

  // Create an array of 3 unique color options (including the correct one)
  const options = [correctColor];
  while (options.length < 3) {
    const color = randomRGB();
    if (!options.includes(color)) {
      options.push(color);
    }
  }

  // Shuffle the color options
  options.sort(() => 0.5 - Math.random());

  // Create buttons for each color option
  options.forEach((color) => {
    const btn = document.createElement("button");
    btn.className = "color-btn";
    btn.style.backgroundColor = color;
    btn.addEventListener("click", () => handleGuess(color));
    optionsContainer.appendChild(btn);
  });
}

// Handle user's guess and update game state
function handleGuess(selectedColor) {
  if (selectedColor === correctColor) {
    score++; // Correct guess, increment score
    info.textContent = "Correct!";
    info.style.color = "green";
  } else {
    lives--; // Incorrect guess, decrement lives
    info.textContent = "Incorrect!";
    info.style.color = "red";
  }

  updateStats(); // Update displayed score and lives

  // Check game status
  if (lives > 0) {
    // Start next round after a short delay
    setTimeout(generateRound, 750);
  } else {
    // End game if no lives remain
    endGame();
  }
}

// Update score and lives display
function updateStats() {
  livesDisp.textContent = lives;
  scoreDisp.textContent = score;
}

// Show game over message and reveal restart button
function endGame() {
  info.textContent = `Well done! Your final score was: ${score}`;
  restart.classList.remove("hidden");
  optionsContainer.innerHTML = "";
}

// Restart the game when the restart button is clicked
restart.addEventListener("click", () => {
  lives = 3;
  score = 0;
  updateStats();
  restart.classList.add("hidden");
  generateRound();
});

// Start the first round when the page loads
generateRound();
