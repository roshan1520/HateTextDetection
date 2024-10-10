const offensiveWords = ["offensiveWord1", "offensiveWord2", "offensiveWord3","b**i","love is like ch**"]; // Add your offensive words here

document.getElementById("postButton").addEventListener("click", function() {
    const postContent = document.getElementById("postContent").value;

    // Check for offensive content
    const containsOffensiveContent = offensiveWords.some(word => postContent.includes(word));

    if (containsOffensiveContent) {
        alert("You can't upload the post. There is offensive content.");
        return; // Stop the post from being submitted
    }

    // Create a new post if no offensive content is found
    const postsContainer = document.getElementById("postsContainer");
    const newPost = document.createElement("div");
    newPost.className = "post";
    newPost.innerHTML = `
        <div class="post-header">
            <h4>Your Name <span>@yourusername</span></h4>
            <p>Just now</p>
        </div>
        <p>${postContent}</p>
        <div class="post-actions">
            <button>Like</button>
            <button>Comment</button>
        </div>
    `;
    postsContainer.prepend(newPost); // Add new post at the top of the feed

    // Clear the textarea after posting
    document.getElementById("postContent").value = '';
});
