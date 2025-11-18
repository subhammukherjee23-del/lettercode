function openLetter() {
    // Hide the icon
    document.getElementById('letter-icon').style.display = 'none';
    
    // Show the letter content
    document.getElementById('letter-content').style.display = 'block';
}

function respond(choice) {
    const messageElement = document.getElementById('response-message');
    
    if (choice === 'Yes') {
        messageElement.innerHTML = '✨ *Response Accepted!* This makes my heart soar. Now let the celebration begin!';
        messageElement.style.color = '#c2185b';
    } else {
        messageElement.innerHTML = '😔 *Response Received.* That is okay, my love will still be here waiting.';
        messageElement.style.color = '#555';
    }
    
    // Disable buttons after selection
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.disabled = true);
}