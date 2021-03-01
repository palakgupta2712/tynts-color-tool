const primaryButton = document.getElementById('primaryButton');
const secondaryButton = document.getElementById('secondaryButton');
const gradientColorCard = document.getElementById('gradientColorCard');
const hexInputPrimary = document.getElementById('hexInputPrimary');
const hexInputSecondary = document.getElementById('hexInputSecondary');
const linear = document.getElementById('linear');
const radial = document.getElementById('radial');
const code = document.getElementById('code');
let primaryColor, secondaryColor;

document.addEventListener('DOMContentLoaded', () => {
    primaryColor = Math.floor(Math.random()*16777215).toString(16);
    secondaryColor = Math.floor(Math.random()*16777215).toString(16);
    primaryColorCard.style.backgroundColor = `#${primaryColor}`;
    secondaryColorCard.style.backgroundColor = `#${secondaryColor}`;
    hexInputPrimary.value = `#${primaryColor}`;
    hexInputSecondary.value = `#${secondaryColor}`;
    if(radial.checked==true){
        gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
        }
        else{
            gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
            code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
        }

 
})

primaryButton.addEventListener('click', () =>{
    primaryColor = Math.floor(Math.random()*16777215).toString(16);
   primaryColorCard.style.backgroundColor = `#${primaryColor}`;
   hexInputPrimary.value = `#${primaryColor}`;

   if(radial.checked==true){
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
    }
    else{
        gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
    }

}) 

secondaryButton.addEventListener('click', () =>{
    secondaryColor = Math.floor(Math.random()*16777215).toString(16);
    secondaryColorCard.style.backgroundColor = `#${secondaryColor}`;
    hexInputSecondary.value = `#${secondaryColor}`;

    if(radial.checked==true){
        gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
    }
    else{
        gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
    }
}) 

//Checking for valid hex value
const isValidHex = (hex) => {
    if(!hex) return false;
       
    const strippedHex = hex.replace('#', '')
    return strippedHex.length === 3 || strippedHex.length === 6 
    }

hexInputPrimary.addEventListener('keyup', () => {
    const hex = hexInputPrimary.value
    if(!isValidHex(hex)) return;
    primaryColorCard.style.backgroundColor = `${hex}`;
    primaryColor = hex.replace('#', '')
    if(primaryColor.length === 3){
        primaryColor = primaryColor[0] + primaryColor[0]
        + primaryColor[1] + primaryColor[1]
        + primaryColor[2] + primaryColor[2];
    }
  
    if(radial.checked==true){
        gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
    }
    else{
        gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
    }
})

hexInputSecondary.addEventListener('keyup', () => {
    const hex = hexInputSecondary.value
    if(!isValidHex(hex)) return;
    secondaryColorCard.style.backgroundColor = `${hex}`;
    secondaryColor = hex.replace('#', '')
    if(secondaryColor.length === 3){
        secondaryColor = secondaryColor[0] + secondaryColor[0]
        + secondaryColor[1] + secondaryColor[1]
        + secondaryColor[2] + secondaryColor[2];
    }
   
    if(radial.checked==true){
        gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
    }
    else{
        gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
    }
    
})

radial.addEventListener('click', () => {
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background:  radial-gradient(#${primaryColor},#${secondaryColor})`;
})

linear.addEventListener('click', () => {
     gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
        code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
    
})

const CopyToClipboard = (id) => {
    let r = document.createRange();
    r.selectNode(id);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    return r;
}
code.addEventListener('click', () =>{
    CopyToClipboard(code);
    alert(`${code.innerText}`);
})