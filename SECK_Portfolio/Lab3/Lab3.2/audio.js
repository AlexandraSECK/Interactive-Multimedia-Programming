var audioTrack = document.getElementById("audiotrack");
var volume = document.getElementById("volume");


function play() {
  if (audioTrack.paused) {
    audioTrack.play();
  }
}

function pause() {
  if (!audioTrack.paused) {
    audioTrack.pause();
  }
}

volume.addEventListener("input", function () {
  audioTrack.volume = volume.value;
  document.getElementById("volumeValue").innerHTML = "Volume: " + volume.value;
});
