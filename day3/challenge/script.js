const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseover: function () {
    title.style.color = colors[0];
    title.innerText = "The mouse is here!";
  },
  mousegone: function () {
    title.style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },
  rightclick: function () {
    title.style.color = colors[4];
    title.innerText = "That was a right click!";
  },
  resize: function () {
    title.style.color = colors[2];
    title.innerText = "You just resized!";
  },
};

title.addEventListener("mouseover", superEventHandler.mouseover);
title.addEventListener("mouseleave", superEventHandler.mousegone);
window.addEventListener("contextmenu", superEventHandler.rightclick);
window.addEventListener("resize", superEventHandler.resize);
