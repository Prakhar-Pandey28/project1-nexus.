document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const username = form.querySelector('input[type="text"]').value;
        const password = form.querySelector('input[type="password"]').value;

        // Basic validation - checking if fields are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // If all validations pass, you can proceed with other actions like form submission
        // For example: form.submit(); (if you want to submit the form)
    });
});
