// TODO(you): Add your own positive messages if you'd like!
const POSITIVE_MESSAGES = [
  'You are worthy.',
  'You are enough.',
  'Be kind and forgiving to yourself.',
  'You are amazing.',
  'It\'s okay not to be okay.',
  'It\'s enough to just breathe.',
  'You are loved.',
  'I believe in you.',
  'You can do it!',
  'You are not a failure.',
  'You matter.',
  'Your life matters.'
];

const cursor_image = chrome.runtime.getURL('images/rose-cursor.gif');
const backgorund_image = chrome.runtime.getURL('images/sparkle.gif');
chrome.runtime.onConnect.addListener(function(port) {
  port.onMessage.addListener(onMessage);
});

function startGardening(){
	
}

function stopGardening(){
	
	
}

function onMessage(gardeningInProgress) {
  // TODO(you): Implement this function for extra credit! Add helper functions
  // as needed.

  if (gardeningInProgress) {
    startGardening();
  }
  else{
    stopGardening();
  }
  // NOTE: This extension is EXTRA CREDIT and is not required for HW2.

  // If `gardeningInProgress` is true, that means "Start Gardening" was clicked.
  // If `gardeningInProgress` is false, that means "Stop Gardening" was clicked.
}
