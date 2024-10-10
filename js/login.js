document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check credentials
    if (username === "roshan_gupta" && password === "12345678") {
        // Redirect to social media page
        window.location.href = "index.html"; // Change this to your social media page
    } else {
        // Display error message
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Invalid username or password. Please try again.";
        errorMessage.style.display = "block";
    }
});
