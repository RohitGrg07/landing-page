document.querySelector('form.grid-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Clear previous error messages
    clearErrorMessages();

    // Retrieve form inputs
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    let isValid = true;

    // Form validation logic
    if (firstName === '') {
        showError('first-name', 'First name is required');
        isValid = false;
    }

    if (lastName === '') {
        showError('last-name', 'Last name is required');
        isValid = false;
    }

    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email');
        isValid = false;
    }
    
    if (password.length < 6) {
        showError('password', 'Password must be at least 6 characters long');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('confirm-password', 'Passwords do not match');
        isValid = false;
    }

    // If all fields are valid, log the form data
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        };

        console.log(formData); // Log form data as an object
        alert('Form submitted successfully!');
        // Optionally, you can submit the form via AJAX here
    }
});

function showError(inputId, message) {
    const inputField = document.getElementById(inputId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    inputField.parentNode.appendChild(errorDiv);
}

function clearErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (error) {
        error.remove(); // Remove all previous error messages
    });
}

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailPattern.test(email);
}
