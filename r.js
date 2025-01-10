const startBtn = document.getElementById('start-btn');
const truthBtn = document.getElementById('truth-btn');
const dareBtn = document.getElementById('dare-btn');
const nextBtn = document.getElementById('next-btn');
const messageBox = document.querySelector('.message-box');

// Truth and Dare content
const truths = [
    "What's your biggest fear?",
    "Have you ever cheated on a test?",
    "What's the most embarrassing thing you've ever done?",
    "Who is your secret crush?",
    "What is your deepest secret?",
    "If you could date anyone in the world, who would it be?",
    "What’s the biggest lie you’ve ever told?",
    "If you had to live in any city for the rest of your life, where would it be?",
    "Have you ever broken something valuable?"
];

const dares = [
    "Do 50 push-ups.",
            "Sing your favorite song loudly in opposite emotion.",
            "Do a silly dance for 30 seconds.",
            "Act like a monkey for 1 minute.",
            "roast your friend untill he slap you.",
            "irritate your friend for 2 hr.",
            "hide your friend mobile for one day .",
            "Call your crush up and say bad words",
            "roast your self"
];

// Helper function to get a random element and remove it from the list
function getRandomItem(arr) {
    if (arr.length === 0) return null; // Check if the array is empty
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    arr.splice(randomIndex, 1); // Remove the item from the array
    return item;
}

startBtn.addEventListener('click', startGame);
truthBtn.addEventListener('click', showTruth);
dareBtn.addEventListener('click', showDare);
nextBtn.addEventListener('click', nextTurn);

let gameStarted = false;

function startGame() {
    if (!gameStarted) {
        gameStarted = true;
        startBtn.style.display = 'none';
        messageBox.innerHTML = 'Truth or Dare?';
        truthBtn.style.display = 'inline-block';
        dareBtn.style.display = 'inline-block';
    }
}

function showTruth() {
    const truth = getRandomItem(truths); // Get a random truth
    if (truth) {
        messageBox.innerHTML = truth;
        showNextButton();
    } else {
        messageBox.innerHTML = "No more truths left! Click 'Next' to restart.";
        showNextButton();
    }
}

function showDare() {
    const dare = getRandomItem(dares); // Get a random dare
    if (dare) {
        messageBox.innerHTML = dare;
        showNextButton();
    } else {
        messageBox.innerHTML = "No more dares left! Click 'Next' to restart.";
        showNextButton();
    }
}

function showNextButton() {
    truthBtn.style.display = 'none';
    dareBtn.style.display = 'none';
    nextBtn.style.display = 'inline-block';
    nextBtn.classList.add('animated');
}

function nextTurn() {
    if (truths.length === 0 && dares.length === 0) {
        messageBox.innerHTML = "All truths and dares are used! Restarting game.";
        truths.push(...[
            "What's your biggest fear?",
            "Have you ever cheated on a test?",
            "What's the most embarrassing thing you've ever done?",
            "Who is your secret crush?",
            "What is your deepest secret?",
            "If you could date anyone in the world, who would it be?",
            "What’s the biggest lie you’ve ever told?",
            "If you had to live in any city for the rest of your life, where would it be?",
            "Have you ever broken something valuable?"
        ]);
        dares.push(...[
            "Do 50 push-ups.",
            "Sing your favorite song loudly in opposite emotion.",
            "Do a silly dance for 30 seconds.",
            "Act like a monkey for 1 minute.",
            "roast your friend untill he slap you.",
            "irritate your friend for 2 hr.",
            "hide your friend mobile for one day .",
            "Call your crush up and say bad words",
            "roast your self"
        ]);
    }



    // Example: Changing the footer name dynamically with JavaScript
const footerName = document.getElementById('footer-name');

// Dynamically changing the footer name after a specific action, e.g., on game restart
function updateFooterName(newName) {
    footerName.innerText = newName;
}

// Example usage: Change name after a certain event
updateFooterName("New Name Here");

    nextBtn.style.display = 'none';
    truthBtn.style.display = 'inline-block';
    dareBtn.style.display = 'inline-block';
    messageBox.innerHTML = 'Truth or Dare?';
}
