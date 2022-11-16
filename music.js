const playerBox = document.querySelector(".container"),
trackImage = playerBox.querySelector(".imageBox img"),
musicTitle = playerBox.querySelector(".songDetails .songTitle"),
artists = playerBox.querySelector(".songDetails .artist-e"),
song = playerBox.querySelector("#activeSong"),
playBtn = playerBox.querySelector(".listen .play"),
pauseBtn = playerBox.querySelector(".listen .pause"),
nextBtn = playerBox.querySelector("#nextSong"),
previousBtn = playerBox.querySelector("#prevSong"),
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

}

function previousSong(){
    
}

navigateSong.addEventListener("click", () => {
    const isMusicPaused = playerBox.classList.contains("paused");
    isMusicPaused ? pauseSong() : playSong();
}) 

nextBtn.addEventListener("click", nextSong);
previousBtn.addEventListener("click", previousSong);