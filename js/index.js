const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");
//const $volume_off = document.querySelector("#volume_off");
//const $volume_up = document.querySelector("#volume_up");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

$forward.addEventListener("click", handleForward);
$backward.addEventListener("click", handleBackward);

function handleForward() {
  $video.currentTime += 10;
}

function handleBackward() {
  $video.currentTime -= 10;
}

$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
}

/*
$volume_off.addEventListener("click", soundOff);
$volume_up.addEventListener("click", soundUP);

function soundOff() {
  $volume_up.hidden = false;
  $volume_off.hidden = true;
  $video.muted = false;
}
function soundUP() {
  $volume_up.hidden = true;
  $volume_off.hidden = false;
  $video.muted = true;
}
*/