const colorCard = document.getElementById('colorCard');
const randomColorGenerator = document.getElementById('randomColorGenerator');
const hexInput = document.getElementById('hexInput');
const generate = document.getElementById('generate');
const shadesCard = document.getElementById('shadesCard');
const copy = document.getElementById('copy');
let randomColor = Math.floor(Math.random()*16777215).toString(16);

//Shade and tints calculation
const calc = () =>{
    for(let i = 0 ; i<11; i++){
        let shadeid = "shade" + i;
        let tintid = "tint" + i;
        document.getElementsByClassName("tintBox")[i].setAttribute("id", shadeid);
        document.getElementsByClassName("shadeBox")[i].setAttribute("id", tintid);

        const box1 = document.getElementById(shadeid)
        const box2 = document.getElementById(tintid)

        const alteredHex = lightenColor(hexInput.value, i);
        const alteredHex1 = darkenColor(hexInput.value, i);
        
        box1.style.backgroundColor = alteredHex;
        box1.innerText = alteredHex;
        
        box2.style.backgroundColor = alteredHex1;
        box2.innerText = alteredHex1;
        box1.addEventListener('click', () =>{
            copy.style.display="block";
            CopyToClipboard(box1);
            copy.innerText = `Copied : ${alteredHex}`;
            setTimeout(function(){copy.style.display="none"; }, 3000);

        })
        box2.addEventListener('click', () =>{
            copy.style.display="block";
            CopyToClipboard(box2);
            copy.innerText = `Copied : ${alteredHex1}`;
            setTimeout(function(){copy.style.display="none"; }, 3000);

        })
    }
}
//On document content load
document.addEventListener('DOMContentLoaded', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    colorCard.style.backgroundColor = `${randomColor}`;
    hexInput.value = `#${randomColor}`;
    calc();
   
})

generate.addEventListener('click',() =>{
 
   calc();
})
// Button to generate randon color or color codes
randomColorGenerator.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorCard.style.backgroundColor = `${randomColor}`;
    hexInput.value = `#${randomColor}`;
   
})

//hex color input
hexInput.addEventListener('keyup', () => {
    const hex = hexInput.value
    if(!isValidHex(hex)) return;
    colorCard.style.backgroundColor = `${hex}`;
    let strippedHex = hex.replace('#', '')
    if(strippedHex.length === 3){
        strippedHex = strippedHex[0] + strippedHex[0]
        + strippedHex[1] + strippedHex[1]
        + strippedHex[2] + strippedHex[2];
    }
})

//Checking for valid hex value
const isValidHex = (hex) => {
    if(!hex) return false;
       
    const strippedHex = hex.replace('#', '')
    return strippedHex.length === 3 || strippedHex.length === 6 
    }

//HEXtoRGB metthod
const convertHextoRGB = (hex) => {
    if(!isValidHex(hex)) return null; 

    let strippedHex = hex.replace('#', '')
    if(strippedHex.length === 3){
        strippedHex = strippedHex[0] + strippedHex[0]
                    + strippedHex[1] + strippedHex[1]
                    + strippedHex[2] + strippedHex[2];
    }

    const r = parseInt(strippedHex.substring(0,2), 16)
    const g = parseInt(strippedHex.substring(2,4), 16)
    const b = parseInt(strippedHex.substring(4,6), 16)
    return {r,g,b};
}

//RGBtoHex method
const convertRGBtoHex = (r,g,b) =>{
    const first = ("0" + r.toString(16)).slice(-2);
    const second = ("0" + g.toString(16)).slice(-2);
    const third = ("0" + b.toString(16)).slice(-2);
    const hex = "#" + first + second + third;
    return hex;
}

//Color alteration
const lightenColor = (hex, percentage) =>{
    const {r,g,b} = convertHextoRGB(hex);
    const newR = Math.floor(r + ((255 - r) * (percentage*0.1)));
    const newG = Math.floor(g + ((255 - g) * (percentage*0.1)));
    const newB = Math.floor(b + ((255 - b) * (percentage*0.1)));
    return convertRGBtoHex(newR, newG, newB)
}

const darkenColor = (hex, percentage) =>{
    const {r,g,b} = convertHextoRGB(hex);
    const newR = Math.floor(r  * (1- (percentage*0.1)));
    const newG = Math.floor(g  * (1- (percentage*0.1)));
    const newB = Math.floor(b  * (1- (percentage*0.1)));
    return convertRGBtoHex(newR, newG, newB)
}
//method to copy the text from the DOM
const CopyToClipboard = (id) => {
    let r = document.createRange();
    r.selectNode(id);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    return r;
}
