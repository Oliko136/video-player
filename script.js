const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

function playPause() {
    if (video.paused) {
        video.play();
        
    } else {
        video.pause();
    }
}

function updateIcon() {
    if (video.paused) {
        playBtn.querySelector('i.fa').classList.remove('fa-pause');
        playBtn.querySelector('i.fa').classList.add('fa-play');
    } else {
        playBtn.querySelector('i.fa').classList.remove('fa-play');
        playBtn.querySelector('i.fa').classList.add('fa-pause');
    }
}

function stop() {
    video.pause();
    video.currentTime = 0;
}

// Update and set progress
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    // Get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

    timestamp.innerText = `${minutes}:${seconds}`;
}

function setProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', stop);
progress.addEventListener('click', setProgress);