import changeFirstChar from './Modules/Helper.js'
import ColorAndRandomColor from './Modules/RandomColor.js';
import colorSlide from './Modules/ColorSlide.js';

let body = document.querySelector("body");
const btn = document.getElementById("change-color");
const slide = document.getElementById("slide");
const stop = document.getElementById("stop");
const txt  = document.querySelector("#c-name")

btn.addEventListener("click",(e) => {
    let backcolor = new ColorAndRandomColor().randomColor();
    let color = new ColorAndRandomColor().btnColor(backcolor);
    body.style.backgroundColor = backcolor;
    txt.textContent = changeFirstChar(backcolor);
    btn.style.color = color;
    slide.style.color = color;
});

slide.addEventListener("click",(e) => {
    colorSlide(body,txt,stop);
    stop.classList.remove("active");
    slide.classList.add("active");
    btn.classList.add("active");
});

stop.addEventListener("click",(e) => {
    location.reload();
});
