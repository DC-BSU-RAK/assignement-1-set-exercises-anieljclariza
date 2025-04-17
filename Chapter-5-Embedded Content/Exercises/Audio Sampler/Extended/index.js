// Find all buttons inside any element with the button-section class
const buttons = document.querySelectorAll(".button-section button");

// Loop through each of those buttons
buttons.forEach((button) => {
  // Listens for a button click
  button.addEventListener("click", () => {
    // Reads button-sound to get name of sound
    const sound = button.getAttribute("button-sound");
    // Creates a new Audio object from file and plays it
    const audio = new Audio(`../audio/${sound}.mp3`);
    audio.play();
  });
});

// Get speak button and input field by their id
const speakBtn = document.getElementById("speak-btn");
const ttsInput = document.getElementById("tts-input");

// When speak button is clicked, grab typed text value from input field/box, create built-in web API for tts named SpeechSynthesisUtterance

// Then speechSynthesis.speak(utterance) tells the browser to speak the text out loud.
speakBtn.addEventListener("click", () => {
  const text = ttsInput.value;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});
