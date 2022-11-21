const playerBox = document.querySelector(".container"),
trackImage = playerBox.querySelector(".imageBox img"),
musicTitle = playerBox.querySelector(".songDetails .songTitle"),
artists = playerBox.querySelector(".songDetails .artist-e"),
song = playerBox.querySelector("#activeSong"),
playBtn = playerBox.querySelector(".listen .play"),
pauseBtn = playerBox.querySelector(".listen .pause"),
nextBtn = playerBox.querySelector("#nextSong"),
previousBtn = playerBox.querySelector("#prevSong"),
songProgress = playerBox.querySelector(".progressBar"),
navigateSong = playerBox.querySelector(".listen");

let musicIndex = 1;

window.addEventListener("load", () => {
    loadSongs(musicIndex);
})

function loadSongs(indexNumber){
    musicTitle.innerText = musicFolder[indexNumber - 1].name;
    artists.innerText = musicFolder[indexNumber - 1].artist;
    trackImage.src = `./images/${musicFolder[indexNumber - 1].image}.png`;
    song.src = `./songs/${musicFolder[indexNumber - 1].source}.mp3`;
}

function playSong (){
    playerBox.classList.add("paused");
    playBtn.classList.add("hideBtn");
    pauseBtn.classList.remove("pause");
    pauseBtn.classList.add("showBtn");
    song.play();
}

function pauseSong (){
    playerBox.classList.add("paused");
    pauseBtn.classList.add("pause");
    playBtn.classList.remove("hideBtn")
    playBtn.classList.add("showBtn");
    song.pause();
}

function nextSong(){
  musicIndex++;
  musicIndex > musicFolder.length ? musicIndex = 1 : musicIndex = musicIndex;
  loadSongs(musicIndex);
  playSong();
}

function previousSong(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = musicFolder.length : musicIndex = musicIndex;
    loadSongs(musicIndex);
    playSong();
}

function seekSong (){
    const isMusicPaused = playerBox.classList.contains("paused");
    isMusicPaused ? pauseSong() : playSong();
}


navigateSong.addEventListener("click", seekSong);
nextBtn.addEventListener("click", nextSong);
previousBtn.addEventListener("click", previousSong);
song.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progress = (currentTime / duration) * 100;
    songProgress.style.width = `${progress}%`;

    //updating total song duration
    let aciveMusicTime = playerBox.querySelector(".currentTime"),
    activeMusicDuration = playerBox.querySelector("fullDuration");
    song.addEventListener("loadeddata", () => {
     let activeDuration = song.duration;
     let totalMinutes = Math.floor(activeDuration / 60);
     let totalSeconds = Math.floor(activeDuration % 60);

     if (totalSeconds > 10) {
        totalSeconds = `0${totalSeconds}`;
     }

     activeMusicDuration.innerText = `${totalMinutes}:${totalSeconds}`;
    })
 });