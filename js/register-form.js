// Get form elements
const form = document.querySelector('.form-container');
const submitButton = document.querySelector('.submit-button');
const resetButton = document.querySelector('.reset-button');
const successMessage = document.getElementById('success-message');

// Add click event listener to submit button
submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    if (validateForm()) {
        // Display success message
        successMessage.textContent = 'Thank you for registering';
        successMessage.style.color = 'green';
        successMessage.style.textAlign = 'center';
    }
});

// Add click event listener to reset button
resetButton.addEventListener('click', function() {
    // Reset form fields and success message
    form.reset();
    successMessage.textContent = '';
});

// Function to validate form fields
function validateForm() {
    const requiredFields = form.querySelectorAll('.input-field[required]');
    
    for (const field of requiredFields) {
        if (!field.value.trim()) {
            // Display error message
            successMessage.textContent = 'Please fill in all required fields';
            successMessage.style.color = 'red';
            successMessage.style.textAlign = 'center';
            return false;
        }
    }

    return true;
}
