// Get our elements....
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");

// Build our functions...
function togglePlay() {
  video[video.paused ? "play" : "pause"]();
}

function updateButton() {
  toggle.textContent = this.paused ? "►" : "❚ ❚";
}

function skips() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeFunc() {
  video[this.name] = this.value;
}

function handleProgress() {
  progressBar.style.flexBasis = `${
    (video.currentTime / video.duration) * 100
  }%`;
}

function scrub(e) {
  video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

// Last but not least, Hook up the event-listeners..
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);

skipButtons.forEach((btn) => btn.addEventListener("click", skips));

ranges.forEach((range) => range.addEventListener("change", handleRangeFunc));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeFunc));
progress.addEventListener("click", scrub);
let mouseDown = true;
progress.addEventListener("mousemove", (e) => mouseDown && scrub(e));
progress.addEventListener("mousedown", (e) => (mouseDown = true));
progress.addEventListener("mouseup", (e) => (mouseDown = false));
