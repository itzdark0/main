// JavaScript for handling the login logic

document.addEventListener('DOMContentLoaded', function () {
  // Get references to modal, form, and elements
  const modal = document.getElementById('loginModal');
  const mainContent = document.getElementById('mainContent');
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('error-message');

  // Event listener for form submission
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials
    if (username === 'admin' && password === 'itz_darkx') {
      // Correct credentials: Hide the login modal and show the main content
      modal.style.display = 'none';
      mainContent.style.display = 'block';
    } else {
      // Incorrect credentials: Show error message
      errorMessage.textContent = 'Incorrect username or password. Please try again.';
    }
  });
});
