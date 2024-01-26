const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const songs = ['song1.mp3', 'song2.mp3','song3.mp3','song4.mp3', 'song5.mp3','song6.mp3','song7.mp3','song8.mp3'];  // Add more songs as needed
let currentSongIndex = 0;

function loadSong() {
  audio.src = `music/${songs[currentSongIndex]}`;
}

function playSong() {
  audio.play();
  playBtn.innerHTML = '<i class="fas fa-pause"></i> Pause';
}

function pauseSong() {
  audio.pause();
  playBtn.innerHTML = '<i class="fas fa-play"></i> Play';
}

function togglePlay() {
  if (audio.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong();
  playSong();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong();
  playSong();
}

loadSong();  // Load the first song by default
