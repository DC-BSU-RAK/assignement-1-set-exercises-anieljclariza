// Get references to the input fields and output element
const priceInput = document.getElementById("pricePerLiter");
const litersInput = document.getElementById("litersPurchased");
const calculateBtn = document.getElementById("calculateBtn");
const totalCostDisplay = document.getElementById("totalCost");

// Function to calculate total cost
function calculateTotalCost() {
  // Parse input values as floats
  const price = parseFloat(priceInput.value);
  const liters = parseFloat(litersInput.value);

  // Calculate total
  const total = price * liters;

  // Display the result formatted to 2 decimal places
  totalCostDisplay.textContent = `Total Cost: £${total.toFixed(2)}`;
}

// Event listener for the button click
calculateBtn.addEventListener("click", calculateTotalCost);
