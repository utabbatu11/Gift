const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I'll be sad...",
    "I'll be very sad...",
    "I'll be very very sad...",
    "Okay, I'll stop asking...",
    "Just kidding, PLEASE SAY YES! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    const audio = document.getElementById('valentineMusic');
    audio.currentTime = 145; // Set playback time to 2:25
    audio.play();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
}

function playMusic() {
    const audio = document.getElementById('valentineMusic');
    audio.play();
    document.getElementById('playButton').style.display = 'none'; // Hide the button after clicking
}
