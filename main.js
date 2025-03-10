// This file contains the JavaScript code for the video player functionality.

const video = document.querySelector('video');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const volumeControl = document.getElementById('volume');

playButton.addEventListener('click', () => {
    video.play();
});

pauseButton.addEventListener('click', () => {
    video.pause();
});

volumeControl.addEventListener('input', (event) => {
    video.volume = event.target.value;
});
