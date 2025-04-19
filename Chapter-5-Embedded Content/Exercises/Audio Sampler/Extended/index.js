// Event listener for the speak button (Text-to-Speech functionality)
document.getElementById("speak-btn").addEventListener("click", () => {
  const text = document.getElementById("tts-input").value; // Get the text input value
  const utterance = new SpeechSynthesisUtterance(text); // Create a speech utterance with the text
  speechSynthesis.speak(utterance); // Trigger speech synthesis to speak the text
});

// Event listeners for the sound buttons
document.querySelectorAll("button[button-sound]").forEach((button) => {
  button.addEventListener("click", () => {
    const soundName = button.getAttribute("button-sound"); // Get the sound name from the button attribute

    // Create a new Audio object with the path to the sound file
    const audio = new Audio(`../Audio/${soundName}.mp3`);
    audio.play(); // Play the sound
  });
});
