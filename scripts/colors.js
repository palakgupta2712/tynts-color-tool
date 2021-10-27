const colorCard = document.getElementById("colorCard");
const colorCode = document.getElementById("colorCode");
const RGBcolorCode = document.getElementById("RGBcolorCode");
const HSLcolorCode = document.getElementById("HSLcolorCode");
const randomColorGenerator = document.getElementById("randomColorGenerator");
const hexInput = document.getElementById("hexInput");
const alteredColorCard = document.getElementById("alteredColorCard");
const slider = document.getElementById("slider");
const sliderText = document.getElementById("sliderText");
const lighten = document.getElementById("lighten");
const darken = document.getElementById("darken");
const alteredColorText = document.getElementById("alteredColorText");
const alteredcodes = document.getElementById("alteredcodes");
const alteredcolorCode = document.getElementById("alteredcolorCode");
const alteredRGBcolorCode = document.getElementById("alteredRGBcolorCode");
const alteredHSLcolorCode = document.getElementById("alteredHSLcolorCode");
let randomColor = randomColorFunc();
const VALUE = 20;

//On document content load
document.addEventListener("DOMContentLoaded", () => {
  let randomColor = randomColorFunc();
  colorCard.style.backgroundColor = `${randomColor}`;
  colorCode.innerText = `#${randomColor}`;
  hexInput.value = `#${randomColor}`;
  const { r, g, b } = convertHextoRGB(randomColor);
  RGBcolorCode.innerText = `rbg(${r},${g},${b})`;
  HSLcolorCode.innerText = convertRGBtoHSL(r, g, b);
  if (lighten.checked == true) {
    const alteredHex = lightenColor(hexInput.value, slider.value);
    alterColor(alteredHex);
  } else {
    const alteredHex = darkenColor(hexInput.value, slider.value);
    alterColor(alteredHex);
  }
});

// Button to generate randon color or color codes
randomColorGenerator.addEventListener("click", () => {
  let randomColor = randomColorFunc();
  colorCard.style.backgroundColor = `${randomColor}`;
  colorCode.innerText = `#${randomColor}`;
  hexInput.value = `#${randomColor}`;
  const { r, g, b } = convertHextoRGB(randomColor);
  RGBcolorCode.innerText = `rbg(${r},${g},${b})`;
  HSLcolorCode.innerText = convertRGBtoHSL(r, g, b);
  if (lighten.checked == true) {
    const alteredHex = lightenColor(hexInput.value, slider.value);
    alterColor(alteredHex);
  }
  if (darken.checked == true) {
    const alteredHex = darkenColor(hexInput.value, slider.value);
    alterColor(alteredHex);
  }
});

//hex color input
hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value;
  if (!isValidHex(hex)) return;
  //   hexInputFunc(hex);
  colorCard.style.backgroundColor = `${hex}`;
  let strippedHex = strippedHexFunc(hex);
  colorCode.innerText = `#${strippedHex}`;
  const { r, g, b } = convertHextoRGB(hex);
  RGBcolorCode.innerText = `rbg(${r},${g},${b})`;
  HSLcolorCode.innerText = convertRGBtoHSL(r, g, b);
  if (lighten.checked == true) {
    const alteredHex = lightenColor(hexInput.value, slider.value);
    alteredColorCard.style.backgroundColor = alteredHex;
  } else {
    const alteredHex = darkenColor(hexInput.value, slider.value);
    alteredColorCard.style.backgroundColor = alteredHex;
  }
});

lighten.addEventListener("click", () => {
  sliderText.textContent = `${VALUE}%`;
  const alteredHex = lightenColor(hexInput.value, slider.value);
  alterColor(alteredHex);
});

darken.addEventListener("click", () => {
  sliderText.textContent = `${VALUE}%`;
  const alteredHex = darkenColor(hexInput.value, slider.value);
  alterColor(alteredHex);
});

//to copy hex code
colorCode.addEventListener("click", () => {
  CopyToClipboard(colorCode);
});

// to copy RGB
RGBcolorCode.addEventListener("click", () => {
  CopyToClipboard(RGBcolorCode);
});

//to copy HSL
HSLcolorCode.addEventListener("click", () => {
  CopyToClipboard(HSLcolorCode);
});
//to copy new hex code
alteredcolorCode.addEventListener("click", () => {
  CopyToClipboard(alteredcolorCode);
});

// to copy new RGB
alteredRGBcolorCode.addEventListener("click", () => {
  CopyToClipboard(alteredRGBcolorCode);
});

//to copy new HSL
alteredHSLcolorCode.addEventListener("click", () => {
  CopyToClipboard(alteredHSLcolorCode);
});

//Slider
slider.addEventListener("input", () => {
  // sliderText.textContent = slider.value;
  if (!isValidHex(hexInput.value)) return;
  sliderText.textContent = `${slider.value}%`;
  if (lighten.checked == true) {
    const alteredHex = lightenColor(hexInput.value, slider.value);
    alterColor(alteredHex);
  } else {
    const alteredHex = darkenColor(hexInput.value, slider.value);
    alteredColorCard.style.backgroundColor = alteredHex;
    alterColor(alteredHex);
  }
});

//Color alteration
const lightenColor = (hex, percentage) => {
  const { r, g, b } = convertHextoRGB(hex);
  const newR = Math.floor(r + (255 - r) * (percentage / 100));
  const newG = Math.floor(g + (255 - g) * (percentage / 100));
  const newB = Math.floor(b + (255 - b) * (percentage / 100));
  return convertRGBtoHex(newR, newG, newB);
};

const darkenColor = (hex, percentage) => {
  const { r, g, b } = convertHextoRGB(hex);
  const newR = Math.floor(r * (1 - percentage / 100));
  const newG = Math.floor(g * (1 - percentage / 100));
  const newB = Math.floor(b * (1 - percentage / 100));
  return convertRGBtoHex(newR, newG, newB);
};

function alterColor(alteredHex) {
  alteredColorCard.style.backgroundColor = alteredHex;
  alteredcolorCode.innerHTML = alteredHex;
  const { r, g, b } = convertHextoRGB(alteredHex);
  alteredRGBcolorCode.innerText = `rbg(${r},${g},${b})`;
  alteredHSLcolorCode.innerText = convertRGBtoHSL(r, g, b);
}
