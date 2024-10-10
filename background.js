chrome.commands.onCommand.addListener((command) => {
  if (command === "navigate-away") {
    chrome.tabs.create({ url: "https://www.bbc.co.uk/weather" });
  }
});
