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
  const icon = this.paused ? "▶️" : "⏸️";
  toggle.textContent = icon;
}

function skips() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeFunc() {
  video[this.name] = this.value;
}

// Last but not least, Hook up the event-listeners..
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);

skipButtons.forEach((btn) => btn.addEventListener("click", skips));

ranges.forEach((range) => range.addEventListener("change", handleRangeFunc));
ranges.forEach((range) => range.addEventListener("mousemove", handleRangeFunc));
