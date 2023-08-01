// Function to calculate the total
function calculateTotal() {
    const amountInput = document.getElementById('amt');
    const personInput = document.getElementById('prn');
    const totalInput = document.getElementById('ttl');
    const warningElement1 = document.getElementById("warning1");
    const warningElement2 = document.getElementById("warning2");
    const resultElement = document.getElementById('result');

    const amount = parseFloat(amountInput.value);
    const person = parseInt(personInput.value);

    if (isNaN(amount) || isNaN(person) || person <= 0) {
        totalInput.value = "Invalid input";
        warningElement1.textContent = "Please enter a valid amount.";
        return;
    }else {
        warningElement1.textContent = "";
    }
    // Check if the number of people is greater than one
    if (isNaN(person) || person <= 1) {
        warningElement2.textContent = "No need to split the bill.";
        return;
    } else {
        warningElement2.textContent = "";
    }

    const perPersonAmount = amount / person;
    totalInput.value = perPersonAmount.toFixed(2); // Display the result in the input field
    resultElement.textContent = `Total amount per person: Rs${perPersonAmount.toFixed(2)}`; // Display the result as a text paragraph
}

// Add event listener to the Calculate button
const calculateButton = document.getElementById('cal');
calculateButton.addEventListener('click', calculateTotal);