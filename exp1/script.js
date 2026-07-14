// This file contains the external JavaScript logic
console.log("External script loaded successfully.");

// Function to handle the welcome message logic
function displayWelcome() {
    // Prompt the user for their name
    const userName = prompt("Please enter your name:");
    
    // Check if the user entered a name or canceled
    if (userName) {
        // Find the welcome element and update its text
        document.getElementById("welcome-message").textContent = `Welcome to the site, ${userName}!`;
        console.info(`User successfully logged in as: ${userName}`);
    } else {
        console.warn("User declined to enter a name.");
    }
}
