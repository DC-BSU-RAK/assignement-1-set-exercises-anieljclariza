// Function to calculate total
function calculateTotal() {
  // Get value of input field and convert into float and store in variable
  const costPerLiter = parseFloat(
    document.getElementById("costPerLiter").value
  );

  // Get value of input field and convert into float and store in variable
  const litersPurchased = parseFloat(
    document.getElementById("litersPurchased").value
  );

  // Make constant variable that calculates total product of costPerLiter and litersPurchased
  const total = costPerLiter * litersPurchased;

  // Display total cost
  document.getElementById(
    "totalCost"
  ).textContent = `Total Cost: $${total.toFixed(2)}`;
}

// Make script that plays an audio when calculate button is clicked
document.getElementById("clickButton").addEventListener("click", function () {
  document.getElementById("clickSound").play();
});
