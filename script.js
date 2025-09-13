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

video.addEventListener('click', playPause);
video.addEventListener('play', updateIcon);
video.addEventListener('pause', updateIcon);
playBtn.addEventListener('click', playPause);
stopBtn.addEventListener('click', stop);