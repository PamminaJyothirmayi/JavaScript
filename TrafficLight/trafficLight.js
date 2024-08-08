let stopLightEl = document.getElementById("stopLight");
let readyLightEl = document.getElementById("readyLight");
let goLightEl = document.getElementById("goLight");

let stopButtonEl = document.getElementById("stopButton");
let readyButtonEl = document.getElementById("readyButton");
let goButtonEl = document.getElementById("goButton");

function turnOnRed() {
    stopButtonEl.style.backgroundColor = "red";
    readyButtonEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "#4b5069";

    stopLightEl.style.backgroundColor = "red";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "#4b5069";
}

function turnOnYellow() {
    stopButtonEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "yellow";
    goButtonEl.style.backgroundColor = "#4b5069";

    stopLightEl.style.backgroundColor = "#4b5069";
    readyLightEl.style.backgroundColor = "yellow";
    goLightEl.style.backgroundColor = "#4b5069";
}

function turnOnGreen() {
    stopButtonEl.style.backgroundColor = "#4b5069";
    readyButtonEl.style.backgroundColor = "#4b5069";
    goButtonEl.style.backgroundColor = "green";

    stopLightEl.style.backgroundColor = "4b5069";
    readyLightEl.style.backgroundColor = "#4b5069";
    goLightEl.style.backgroundColor = "green";
}