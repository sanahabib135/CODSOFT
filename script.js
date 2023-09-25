document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = "";
    
    // Function to update the display
    function updateDisplay() {
      display.textContent = currentInput;
    }
    
    // Add event listeners to number buttons
    const numberButtons = document.querySelectorAll(".btn:not(#equals)");
    numberButtons.forEach(button => {
      button.addEventListener("click", function() {
        currentInput += button.textContent;
        updateDisplay();
      });
    });
    
    // Add event listener to clear button
    document.getElementById("clear").addEventListener("click", function() {
      currentInput = "";
      updateDisplay();
    });
    
    // Add event listener to backspace button
    document.getElementById("backspace").addEventListener("click", function() {
      currentInput = currentInput.slice(0, -1);
      updateDisplay();
    });
    
    // Add event listener to equals button
    document.getElementById("equals").addEventListener("click", function() {
      try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
      } catch (error) {
        currentInput = "Error";
        updateDisplay();
      }
    });
  });