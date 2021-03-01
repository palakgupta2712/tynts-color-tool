const colorCard = document.getElementById('colorCard');
const colorCode = document.getElementById('colorCode');
const RGBcolorCode = document.getElementById('RGBcolorCode');
const HSLcolorCode = document.getElementById('HSLcolorCode');
const randomColorGenerator = document.getElementById('randomColorGenerator');
const hexInput = document.getElementById('hexInput');
const alteredColorCard = document.getElementById('alteredColorCard');
const slider = document.getElementById('slider');
const sliderText = document.getElementById('sliderText');
const lighten = document.getElementById('lighten');
const darken = document.getElementById('darken');
const alteredColorText = document.getElementById('alteredColorText');
const alteredcodes = document.getElementById('alteredcodes');
const alteredcolorCode = document.getElementById('alteredcolorCode');
const alteredRGBcolorCode = document.getElementById('alteredRGBcolorCode');
const alteredHSLcolorCode = document.getElementById('alteredHSLcolorCode');
let randomColor = Math.floor(Math.random()*16777215).toString(16);

//On document content load
document.addEventListener('DOMContentLoaded', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16)
    colorCard.style.backgroundColor = `${randomColor}`;
    colorCode.innerText = `#${randomColor}`;
    hexInput.value = `#${randomColor}`;
    const {r,g,b} = convertHextoRGB(randomColor);
    const hslcode = convertRGBtoHSL(r,g,b);
    RGBcolorCode.innerText = `rbg(${r},${g},${b})`;
    HSLcolorCode.innerText = hslcode;
    if(lighten.checked==true){
      
        const alteredHex = lightenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
        alteredcolorCode.innerHTML = alteredHex;
        const {r,g,b} = convertHextoRGB(alteredHex);
        const hslcode = convertRGBtoHSL(r,g,b);
        alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
        alteredHSLcolorCode.innerText = hslcode;
    }
    else{
        const alteredHex = darkenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
        alteredcolorCode.innerHTML = alteredHex;
        const {r,g,b} = convertHextoRGB(alteredHex);
        const hslcode = convertRGBtoHSL(r,g,b);
        alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
        alteredHSLcolorCode.innerText = hslcode;
    }
    
})

// Button to generate randon color or color codes
randomColorGenerator.addEventListener("click", () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorCard.style.backgroundColor = `${randomColor}`;
    colorCode.innerText = `#${randomColor}`;
    hexInput.value = `#${randomColor}`;
    const {r,g,b} = convertHextoRGB(randomColor);
    const hslcode = convertRGBtoHSL(r,g,b);
    RGBcolorCode.innerText = `rbg(${r},${g},${b})`;
    HSLcolorCode.innerText = hslcode;
    if(lighten.checked==true){
        const alteredHex = lightenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
        alteredcolorCode.innerHTML = alteredHex;
        const {r,g,b} = convertHextoRGB(alteredHex);
        const hslcode = convertRGBtoHSL(r,g,b);
        alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
        alteredHSLcolorCode.innerText = hslcode;
    }
    if(darken.checked==true){
        const alteredHex = darkenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
        alteredcolorCode.innerHTML = alteredHex;
        const {r,g,b} = convertHextoRGB(alteredHex);
        const hslcode = convertRGBtoHSL(r,g,b);
        alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
        alteredHSLcolorCode.innerText = hslcode;
    }
    
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
    colorCode.innerText = `#${strippedHex}`;
    const {r,g,b} = convertHextoRGB(hex);
    const hslcode = convertRGBtoHSL(r,g,b);
    RGBcolorCode.innerText = `rbg(${r},${g},${b})`;
    HSLcolorCode.innerText = hslcode;
    if(lighten.checked==true){
        const alteredHex = lightenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
    }
    else{
        const alteredHex = darkenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
    }
    
})

lighten.addEventListener('click',() =>{
    slider.value=20;
    sliderText.textContent = `${slider.value}%`
    const alteredHex = lightenColor(hexInput.value, slider.value);
    alteredColorCard.style.backgroundColor = alteredHex;
    alteredcolorCode.innerHTML = alteredHex;
    const {r,g,b} = convertHextoRGB(alteredHex);
    const hslcode = convertRGBtoHSL(r,g,b);
    alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
    alteredHSLcolorCode.innerText = hslcode;
})
darken.addEventListener('click',() =>{
    slider.value=20;
    sliderText.textContent = `${slider.value}%`
    const alteredHex = darkenColor(hexInput.value, slider.value);
    alteredColorCard.style.backgroundColor = alteredHex;
    alteredcolorCode.innerHTML = alteredHex;
    const {r,g,b} = convertHextoRGB(alteredHex);
    const hslcode = convertRGBtoHSL(r,g,b);
    alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
    alteredHSLcolorCode.innerText = hslcode;
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

//RGBtoHSl method
const convertRGBtoHSL =  (r,g,b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = Math.floor(s +(s * 100));
    l = Math.floor(l+(l * 100));
  
    return "hsl(" + h + "," + s + "%," + l + "%)";
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

//to copy hex code
colorCode.addEventListener('click', () =>{
    CopyToClipboard(colorCode);
    alert(`Copied : ${colorCode.innerText}`);
})

// to copy RGB 
RGBcolorCode.addEventListener('click', () =>{
    CopyToClipboard(RGBcolorCode);
    alert(`Copied : ${RGBcolorCode.innerText}`);
})

//to copy HSL
HSLcolorCode.addEventListener('click', () =>{
    CopyToClipboard(HSLcolorCode);
    alert(`Copied : ${HSLcolorCode.innerText}`);
})
//to copy new hex code
alteredcolorCode.addEventListener('click', () =>{
    CopyToClipboard(alteredcolorCode);
    alert(`Copied : ${alteredcolorCode.innerText}`);
})

// to copy new RGB 
alteredRGBcolorCode.addEventListener('click', () =>{
    CopyToClipboard(alteredRGBcolorCode);
    alert(`Copied : ${alteredRGBcolorCode.innerText}`);
})

//to copy new HSL
alteredHSLcolorCode.addEventListener('click', () =>{
    CopyToClipboard(alteredHSLcolorCode);
    alert(`Copied : ${alteredHSLcolorCode.innerText}`);
})


//Slider
slider.addEventListener('input', () => {
    // sliderText.textContent = slider.value;
    if(!isValidHex(hexInput.value)) return;
    sliderText.textContent = `${slider.value}%`
    if(lighten.checked==true){
      
        const alteredHex = lightenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
        alteredcolorCode.innerHTML = alteredHex;
        const {r,g,b} = convertHextoRGB(alteredHex);
        const hslcode = convertRGBtoHSL(r,g,b);
        alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
        alteredHSLcolorCode.innerText = hslcode;
    }
    else{
        const alteredHex = darkenColor(hexInput.value, slider.value);
        alteredColorCard.style.backgroundColor = alteredHex;
        alteredcolorCode.innerText = alteredHex;
        const {r,g,b} = convertHextoRGB(alteredHex);
        const hslcode = convertRGBtoHSL(r,g,b);
        alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
        alteredHSLcolorCode.innerText = hslcode;
    }
    
    //alteredColorText.innerText = `Altered Color ${alteredHex}`

})
//Color alteration
const lightenColor = (hex, percentage) =>{
    const {r,g,b} = convertHextoRGB(hex);
    const newR = Math.floor(r + ((255 - r) * (percentage/100)));
    const newG = Math.floor(g + ((255 - g) * (percentage/100)));
    const newB = Math.floor(b + ((255 - b) * (percentage/100)));
    return convertRGBtoHex(newR, newG, newB)
}

const darkenColor = (hex, percentage) =>{
    const {r,g,b} = convertHextoRGB(hex);
    const newR = Math.floor(r  * (1- (percentage/100)));
    const newG = Math.floor(g  * (1- (percentage/100)));
    const newB = Math.floor(b  * (1- (percentage/100)));
    return convertRGBtoHex(newR, newG, newB)
}