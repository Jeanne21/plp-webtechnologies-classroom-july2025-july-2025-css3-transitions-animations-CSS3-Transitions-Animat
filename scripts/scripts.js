// Demonstrates local vs global scope
let globalMultiplier = 2; // global variable

// Function with parameter & return value
function squareNumber(num) {
  // Local variable to show scope
  let result = num * num * globalMultiplier;
  return result;
}

// Function to trigger CSS animation
function animateBox() {
  const box = document.getElementById("animatedBox");
  box.classList.remove("animate"); // reset animation
  void box.offsetWidth; // reflow trick to restart animation
  box.classList.add("animate");
}

// Event listeners
document.getElementById("animateBtn").addEventListener("click", animateBox);

document.getElementById("calcBtn").addEventListener("click", function() {
  const num = parseFloat(document.getElementById("numberInput").value);
  const output = document.getElementById("result");

  if (isNaN(num)) {
    output.textContent = "❌ Please enter a valid number.";
    return;
  }

  const squared = squareNumber(num); // using function with parameter/return
  output.textContent = `✅ The square × globalMultiplier is: ${squared}`;
});
