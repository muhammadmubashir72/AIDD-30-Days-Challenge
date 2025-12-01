document.addEventListener("DOMContentLoaded", () => {
  const display = document.querySelector(".display");
  const buttons = document.querySelector(".buttons");

  let expression = "";

  function updateDisplay() {
    display.textContent = expression || "0";
  }

  function evaluateExpression(expr) {
    try {
      return Function("return " + expr)().toString();
    } catch {
      return "Error";
    }
  }

  buttons.addEventListener("click", (event) => {
    if (!event.target.matches("button")) return;

    const btn = event.target;
    const value = btn.textContent;

    // AC
    if (btn.classList.contains("clear")) {
      expression = "";
      updateDisplay();
      return;
    }

    // DEL
    if (btn.classList.contains("backspace")) {
      expression = expression.slice(0, -1);
      updateDisplay();
      return;
    }

   

    // =
    if (btn.classList.contains("equals")) {
      if (expression.trim() === "") return;
      expression = evaluateExpression(expression);
      updateDisplay();
      return;
    }

    // % percentage
    if (value === "%") {
      const match = expression.match(/-?\d+(\.\d+)?$/);
      if (match) {
        const num = parseFloat(match[0]) / 100;
        expression = expression.replace(/-?\d+(\.\d+)?$/, num.toString());
      }
      updateDisplay();
      return;
    }

    // operators
    if (btn.classList.contains("operator")) {
      const lastChar = expression.slice(-1);
      if ("+-*/".includes(lastChar)) {
        expression = expression.slice(0, -1) + value;
      } else {
        expression += value;
      }
      updateDisplay();
      return;
    }

    // decimal
    if (btn.classList.contains("decimal")) {
      const lastNumber = expression.split(/[-+*/]/).pop();
      if (!lastNumber.includes(".")) expression += ".";
      updateDisplay();
      return;
    }

    // number
    expression += value;
    updateDisplay();
  });

  updateDisplay();
});
