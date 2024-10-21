"use strict";

const message_button = document.getElementById("message-button");
const speech_bubble = document.querySelector(".speech-bubble");

message_button.addEventListener("click", () => {
    speech_bubble.style = "opacity: 1";
});