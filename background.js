chrome.commands.onCommand.addListener((command) => {
    console.log("Command received:", command); // Log the command
    if (command === "navigate-away") {
        navigateAway();
    }
});

// Listen for clicks on the browser action (toolbar button)
chrome.browserAction.onClicked.addListener(() => {
    console.log("Browser action clicked."); // Log when the button is clicked
    navigateAway();
});

// Function to handle the navigation away logic
function navigateAway() {
    console.log("Navigating away..."); // Log when navigating away
    const url = "https://bbc.co.uk/weather"; // Default URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        if (tabs.length > 0) {
            // Update the URL of the current tab
            chrome.tabs.update(tabs[0].id, { url: url });
        }
    });
}


