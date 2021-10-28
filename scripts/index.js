let navbar_toggle = document.getElementById("navbar-toggle");
let menu = document.getElementById("menu");

// fucntion to toggle the nav menu
navbar_toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

//method to copy the text from the DOM
const CopyToClipboard = (id) => {
  navigator.clipboard.writeText(id);
  alert(`Copied : ${id.innerText}`);
};

//Checking for valid hex value
const isValidHex = (hex) => {
  if (!hex) return false;

  const strippedHex = hex.replace("#", "");
  return strippedHex.length === 3 || strippedHex.length === 6;
};

// Random Color Generator function
function randomColorFunc() {
  return Math.floor(Math.random() * 16777215).toString(16);
}
//HEXtoRGB metthod
const convertHextoRGB = (hex) => {
  if (!isValidHex(hex)) return null;

  let strippedHex = strippedHexFunc(hex);
  const r = parseInt(strippedHex.substring(0, 2), 16);
  const g = parseInt(strippedHex.substring(2, 4), 16);
  const b = parseInt(strippedHex.substring(4, 6), 16);
  return { r, g, b };
};

//RGBtoHex method
const convertRGBtoHex = (r, g, b) => {
  const first = ("0" + r.toString(16)).slice(-2);
  const second = ("0" + g.toString(16)).slice(-2);
  const third = ("0" + b.toString(16)).slice(-2);
  const hex = "#" + first + second + third;
  return hex;
};

//RGBtoHSl method
const convertRGBtoHSL = (r, g, b) => {
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = Math.floor(s + s * 100);
  l = Math.floor(l + l * 100);

  return "hsl(" + h + "," + s + "%," + l + "%)";
};

function strippedHexFunc(hex) {
  let strippedHex = hex.replace("#", "");
  if (strippedHex.length === 3) {
    strippedHex =
      strippedHex[0] +
      strippedHex[0] +
      strippedHex[1] +
      strippedHex[1] +
      strippedHex[2] +
      strippedHex[2];
  }
  return strippedHex;
}
