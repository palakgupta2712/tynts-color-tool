const colorCard = document.getElementById("colorCard");
const colorCode = document.getElementById("colorCode");
const RGBcolorCode = document.getElementById("RGBcolorCode");
const HSLcolorCode = document.getElementById("HSLcolorCode");
const randomColorGenerator = document.getElementById("randomColorGenerator");
const hexInput = document.getElementById("hexInput");

const complementColor = document.getElementById("complementColor");
const splitColor1 = document.getElementById("splitColor1");
const splitColor2 = document.getElementById("splitColor2");
const triadColor1 = document.getElementById("triadColor1");
const triadColor2 = document.getElementById("triadColor2");
const tetradColor1 = document.getElementById("tetradColor1");
const tetradColor2 = document.getElementById("tetradColor2");
const analogousColor1 = document.getElementById("analogousColor1");
const analogousColor2 = document.getElementById("analogousColor2");
const analogousColor3 = document.getElementById("analogousColor3");

document.addEventListener("DOMContentLoaded", () => {
  let randomColor = randomColorFunc();
  hexInput.value = `#${randomColor}`;
  hslCodeGen(randomColor);
});

// Button to generate randon color or color codes
randomColorGenerator.addEventListener("click", () => {
  let randomColor = randomColorFunc();
  hexInput.value = `#${randomColor}`;
  hslCodeGen(randomColor);
});

//hex color input
hexInput.addEventListener("keyup", () => {
  const hex = hexInput.value;
  if (!isValidHex(hex)) return;
  hslCodeGen(hex);
});

function hslCodeGen(color) {
  colorCard.style.backgroundColor = `${color}`;
  const { r, g, b } = convertHextoRGB(color);
  const hslcode = convertRGBtoHSL(r, g, b);
  compute(hslcode);
}
//HSLtoHex
const HSLToHex = (h, s, l) => {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Having obtained RGB, convert channels to hex
  r = Math.round((r + m) * 255).toString(16);
  g = Math.round((g + m) * 255).toString(16);
  b = Math.round((b + m) * 255).toString(16);

  // Prepend 0s, if necessary
  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

const parseHSL = (str) => {
  var hsl, h, s, l;
  hsl = str.replace(/[^\d,]/g, "").split(","); // strip non digits ('%')
  h = Number(hsl[0]); // convert to number
  s = Number(hsl[1]);
  l = Number(hsl[2]);
  return [h, s, l];
};

function harmonize(color, start, end, interval) {
  const colors = [color];
  const [h, s, l] = parseHSL(color);

  for (let i = start; i <= end; i += interval) {
    const h1 = (h + i) % 360;
    const c1 = `hsl(${h1}, ${s}%, ${l}%)`;
    colors.push(c1);
  }

  return colors;
}

const compute = (hslcode) => {
  const complement1 = harmonize(hslcode, 180, 180, 1);
  const complement = parseHSL(harmonize(hslcode, 180, 180, 1)[1]);
  const split1 = parseHSL(harmonize(hslcode, 150, 210, 60)[1]);
  const split2 = parseHSL(harmonize(hslcode, 150, 210, 60)[2]);
  const triad1 = parseHSL(harmonize(hslcode, 120, 240, 120)[1]);
  const triad2 = parseHSL(harmonize(hslcode, 120, 240, 120)[2]);

  const tetrad1 = parseHSL(harmonize(hslcode, 90, 270, 90)[1]);
  const tetrad2 = parseHSL(harmonize(hslcode, 90, 270, 90)[2]);

  const analogous1 = parseHSL(harmonize(hslcode, 30, 90, 30)[1]);
  const analogous2 = parseHSL(harmonize(hslcode, 30, 90, 30)[2]);
  const analogous3 = parseHSL(harmonize(hslcode, 30, 90, 30)[3]);

  //complementColor.innerText = `${complement1[0]}`;
  complementColor.style.backgroundColor = HSLToHex(
    complement[0],
    complement[1],
    complement[2]
  );
  splitColor1.style.backgroundColor = HSLToHex(split1[0], split1[1], split1[2]);
  splitColor2.style.backgroundColor = HSLToHex(split2[0], split2[1], split2[2]);
  triadColor1.style.backgroundColor = HSLToHex(triad1[0], triad1[1], triad1[2]);
  triadColor2.style.backgroundColor = HSLToHex(triad2[0], triad2[1], triad2[2]);
  tetradColor1.style.backgroundColor = HSLToHex(
    tetrad1[0],
    tetrad1[1],
    tetrad1[2]
  );
  tetradColor2.style.backgroundColor = HSLToHex(
    tetrad2[0],
    tetrad2[1],
    tetrad2[2]
  );
  analogousColor1.style.backgroundColor = HSLToHex(
    analogous1[0],
    analogous1[1],
    analogous1[2]
  );
  analogousColor2.style.backgroundColor = HSLToHex(
    analogous2[0],
    analogous2[1],
    analogous2[2]
  );
  analogousColor3.style.backgroundColor = HSLToHex(
    analogous3[0],
    analogous3[1],
    analogous3[2]
  );
  console.log(analogous1);
  console.log(hslcode);
};
