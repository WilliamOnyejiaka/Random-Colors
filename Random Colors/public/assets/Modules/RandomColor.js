
export default function ColorAndRandomColor() {
    let colors = ["#22d676","#03cffc","#ad4498","#ba4769","#03f0fc","#618f91","#fae634","#eb8c34","#eb3434","#8f258a","#47e4fc","#ff0022","#55b54c","#616161","#1831f0","#ba35fc","#effc35","#512661","#b01e4f","#70ff70","#ffa480"];
    
    this.randomColor = () => {
        let randNum = Math.floor(Math.random() * colors.length);
        return colors[randNum];
    }

    function btnColors() {
        let btncolors = new Map();
        btncolors.set(colors[0],"black");
        btncolors.set(colors[1],"white");
        btncolors.set(colors[2],"black");
        btncolors.set(colors[3],"white");
        btncolors.set(colors[4],"black");
        btncolors.set(colors[5],"white");
        btncolors.set(colors[6],"black");
        btncolors.set(colors[7],"white");
        btncolors.set(colors[8],"white");
        btncolors.set(colors[9],"white");
        btncolors.set(colors[10],"black");
        btncolors.set(colors[11],"black");
        btncolors.set(colors[12],"black");
        btncolors.set(colors[13],"white");
        btncolors.set(colors[14],"white");
        btncolors.set(colors[15],"black");
        btncolors.set(colors[16],"black");
        btncolors.set(colors[17],"white");
        btncolors.set(colors[18],"white");
        btncolors.set(colors[19],"black");
        btncolors.set(colors[20],"black");
        return btncolors;
    }

    this.btnColor = (key) => {
        return btnColors().get(key);
    }
    
}