// Select all <button> and store in buttons variable
const buttons = document.querySelectorAll("button");

// Loop through each button
buttons.forEach((button) => {
  // Listen for a click event
  button.addEventListener("click", () => {
    // Grab value from button-sound
    const fileName = button.getAttribute("button-sound");
    // Make new Audio object and point to file in audio directory
    const audio = new Audio(`audio/${fileName}.mp3`);
    // Play audio
    audio.play();
  });
});
