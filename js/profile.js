document.getElementById("editProfileForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const bio = document.getElementById("bio").value;
    const updateStatus = document.getElementById("updateStatus");

    // Simulate updating the profile (in a real app, this would involve an API call)
    setTimeout(() => {
        // Update profile information on the page
        document.getElementById("userName").textContent = name;
        document.getElementById("userEmail").textContent = email;
        document.getElementById("userBio").textContent = bio;

        // Show success message
        updateStatus.textContent = "Profile updated successfully!";
        updateStatus.style.display = "block";

        // Clear the form
        document.getElementById("name").value = '';
        document.getElementById("email").value = '';
        document.getElementById("bio").value = '';

        // Hide the status message after 3 seconds
        setTimeout(() => {
            updateStatus.style.display = "none";
        }, 3000);
    }, 1000); // Simulating a delay for update
});
