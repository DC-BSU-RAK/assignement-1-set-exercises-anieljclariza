const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const fileName = button.getAttribute("button-sound");
    const audio = new Audio(`audio/${fileName}.mp3`);
    audio.play();
  });
});
