import ColorAndRandomColor from './RandomColor.js';

export default function colorSlide(body,txt,stop) {
    let colors = ["#22d676","#03cffc","#ad4498","#ba4769","#03f0fc","#618f91","#fae634","#eb8c34","#eb3434","#8f258a","#47e4fc","#ff0022","#55b54c","#616161","#1831f0","#ba35fc","#effc35","#512661","#b01e4f","#70ff70","#ffa480"];

    setTimeout(() => {
        txt.textContent = "Color Slide Show"
        body.style.backgroundColor = colors[0];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[0]);
    },0);

    setTimeout(() => {
        body.style.backgroundColor = colors[1];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[1]);
    },2000);

    setTimeout(() => {
        body.style.backgroundColor = colors[2];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[2]);
    },4000);

    setTimeout(() => {
        body.style.backgroundColor = colors[3];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[3]);
    },6000);

    setTimeout(() => {
        body.style.backgroundColor = colors[4];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[4]);
    },8000);

    setTimeout(() => {
        body.style.backgroundColor = colors[5];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[5]);
    },10000);

    setTimeout(() => {
        body.style.backgroundColor = colors[6];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[6]);
    },12000);

    setTimeout(() => {
        body.style.backgroundColor = colors[7];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[7]);
    },14000);

    setTimeout(() => {
        body.style.backgroundColor = colors[8];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[8]);
    },16000);

    setTimeout(() => {
        body.style.backgroundColor = colors[9];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[9]);
    },18000);

    setTimeout(() => {
        body.style.backgroundColor = colors[10];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[10]);
    },20000);

    setTimeout(() => {
        body.style.backgroundColor = colors[11];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[11]);
    },22000);

    setTimeout(() => {
        body.style.backgroundColor = colors[12];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[12]);
    },24000);

    setTimeout(() => {
        body.style.backgroundColor = colors[13];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[13]);
    },26000);

    setTimeout(() => {
        body.style.backgroundColor = colors[14];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[14]);
    },28000);

    setTimeout(() => {
        body.style.backgroundColor = colors[15];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[15]);
    },30000);

    setTimeout(() => {
        body.style.backgroundColor = colors[16];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[16]);
    },32000);

    setTimeout(() => {
        body.style.backgroundColor = colors[17];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[17]);
    },34000);

    setTimeout(() => {
        body.style.backgroundColor = colors[18];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[18]);
    },36000);

    setTimeout(() => {
        body.style.backgroundColor = colors[19];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[19]);
    },38000);

    setTimeout(() => {
        body.style.backgroundColor = colors[20];
        stop.style.color = new ColorAndRandomColor().btnColor(colors[20]);
    },40000);

    setTimeout(() => {
        txt.textContent = "Slide Show Has Ended";
        stop.style.color = "white";
        document.getElementById("change-color").classList.remove("active");
        document.getElementById("slide").classList.remove("active");
        document.getElementById("stop").classList.add("active");
    },41000)
}