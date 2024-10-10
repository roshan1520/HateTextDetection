const offensiveWords = ["offensiveWord1", "offensiveWord2", "b**i","love is like ch**"]; // Add your offensive words here

document.getElementById("sendMessageButton").addEventListener("click", function() {
    const newMessageContent = document.getElementById("newMessageContent").value;
    const messagesContainer = document.getElementById("messagesContainer");
    const messageStatus = document.getElementById("messageStatus");

    // Validate message content
    if (newMessageContent.trim() === "") {
        messageStatus.textContent = "Please enter a message before sending.";
        messageStatus.style.color = "red";
        messageStatus.style.display = "block";
        return;
    }

    // Check for offensive content
    const containsOffensiveContent = offensiveWords.some(word => newMessageContent.includes(word));

    if (containsOffensiveContent) {
        messageStatus.textContent = "You can't send the message. There is offensive content.";
        messageStatus.style.color = "red";
        messageStatus.style.display = "block";
        return; // Stop the message from being sent
    }

    // Create new message element
    const newMessage = document.createElement("div");
    newMessage.className = "message";
    newMessage.innerHTML = `
        <div class="message-header">
            <strong>You</strong>
            <span>${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
        <p>${newMessageContent}</p>
    `;
    messagesContainer.appendChild(newMessage); // Add new message to the container

    // Clear the textarea after sending
    document.getElementById("newMessageContent").value = '';
    messageStatus.textContent = "Message sent successfully!";
    messageStatus.style.color = "green"; // Change status to green
    messageStatus.style.display = "block"; // Show status message

    // Hide status message after 3 seconds
    setTimeout(() => {
        messageStatus.style.display = "none";
    }, 3000);
});
