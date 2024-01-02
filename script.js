document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Function to switch between login and signup forms
    function toggleForms() {
        loginForm.classList.toggle('active');
        signupForm.classList.toggle('active');
    }

    // Event listeners for form submissions
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validation and form handling for login form
        const username = loginForm.querySelector('input[type="text"]').value;
        const password = loginForm.querySelector('input[type="password"]').value;

        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // Example: Simulate form submission (replace with actual logic)
        alert('Login Successful!');
    });

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validation and form handling for signup form
        const username = signupForm.querySelectorAll('input')[0].value;
        const email = signupForm.querySelectorAll('input')[1].value;
        const password = signupForm.querySelectorAll('input')[2].value;
        const confirmPassword = signupForm.querySelectorAll('input')[3].value;

        if (
            username.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            confirmPassword.trim() === ''
        ) {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Example: Simulate form submission (replace with actual logic)
        alert('Signup Successful!');
    });

    signupForm.classList.remove('active');

});
