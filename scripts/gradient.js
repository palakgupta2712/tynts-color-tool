const primaryButton = document.getElementById("primaryButton");
const secondaryButton = document.getElementById("secondaryButton");
const gradientColorCard = document.getElementById("gradientColorCard");
const hexInputPrimary = document.getElementById("hexInputPrimary");
const hexInputSecondary = document.getElementById("hexInputSecondary");
const linear = document.getElementById("linear");
const radial = document.getElementById("radial");
const code = document.getElementById("code");
let primaryColor, secondaryColor;

document.addEventListener("DOMContentLoaded", () => {
  primaryColor = randomColorFunc();
  secondaryColor = randomColorFunc();
  primaryColorCard.style.backgroundColor = `#${primaryColor}`;
  secondaryColorCard.style.backgroundColor = `#${secondaryColor}`;
  hexInputPrimary.value = `#${primaryColor}`;
  hexInputSecondary.value = `#${secondaryColor}`;
  if (radial.checked == true) {
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
  } else {
    gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
  }
});

primaryButton.addEventListener("click", () => {
  primaryColor = randomColorFunc();
  primaryColorCard.style.backgroundColor = `#${primaryColor}`;
  hexInputPrimary.value = `#${primaryColor}`;

  if (radial.checked == true) {
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
  } else {
    gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
  }
});

secondaryButton.addEventListener("click", () => {
  secondaryColor = randomColorFunc();
  secondaryColorCard.style.backgroundColor = `#${secondaryColor}`;
  hexInputSecondary.value = `#${secondaryColor}`;

  if (radial.checked == true) {
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
  } else {
    gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
  }
});

hexInputPrimary.addEventListener("keyup", () => {
  const hex = hexInputPrimary.value;
  if (!isValidHex(hex)) return;
  primaryColorCard.style.backgroundColor = `${hex}`;
  primaryColor = hex.replace("#", "");
  if (primaryColor.length === 3) {
    primaryColor =
      primaryColor[0] +
      primaryColor[0] +
      primaryColor[1] +
      primaryColor[1] +
      primaryColor[2] +
      primaryColor[2];
  }

  if (radial.checked == true) {
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
  } else {
    gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
  }
});

hexInputSecondary.addEventListener("keyup", () => {
  const hex = hexInputSecondary.value;
  if (!isValidHex(hex)) return;
  secondaryColorCard.style.backgroundColor = `${hex}`;
  secondaryColor = hex.replace("#", "");
  if (secondaryColor.length === 3) {
    secondaryColor =
      secondaryColor[0] +
      secondaryColor[0] +
      secondaryColor[1] +
      secondaryColor[1] +
      secondaryColor[2] +
      secondaryColor[2];
  }

  if (radial.checked == true) {
    gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: radial-gradient(#${primaryColor},#${secondaryColor})`;
  } else {
    gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
    code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
  }
});

radial.addEventListener("click", () => {
  gradientColorCard.style.background = `radial-gradient(#${primaryColor},#${secondaryColor})`;
  code.innerHTML = `background:  radial-gradient(#${primaryColor},#${secondaryColor})`;
});

linear.addEventListener("click", () => {
  gradientColorCard.style.background = `linear-gradient(#${primaryColor},#${secondaryColor})`;
  code.innerHTML = `background: linear-gradient(#${primaryColor},#${secondaryColor})`;
});

code.addEventListener("click", () => {
  CopyToClipboard(code);
  alert(`${code.innerText}`);
});
