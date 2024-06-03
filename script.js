const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const additionalText = document.querySelector("#additionalText");
const MIN_DISTANCE = 100;
let lastMousePosition = { x: null, y: null };
let distanceSinceLastChange = 0;

const images = [
  "images/MLC_WEB13.jpg",
  "images/MLC_WEB95.jpg",
  "images/MLC_WEB94.jpg",
  "images/MLC_WEB93.jpg",
  "images/MLC_WEB92.jpg",
  "images/MLC_WEB91.jpg",
  "images/MLC_WEB90.jpg",
  "images/MLC_WEB89.jpg",
  "images/MLC_WEB88.jpg",
  "images/MLC_WEB84.jpg",
  "images/MLC_WEB83.jpg",
  "images/MLC_WEB82.jpg",
  "images/MLC_WEB81.jpg",
  "images/MLC_WEB80.jpg",
  "images/MLC_WEB79.jpg",
  "images/MLC_WEB78.jpg",
  "images/MLC_WEB77.jpg",
  "images/MLC_WEB76.jpg",
  "images/MLC_WEB72.jpg",
  "images/MLC_WEB70.jpg",
  "images/MLC_WEB69.jpg",
  "images/MLC_WEB68.jpg",
  "images/MLC_WEB67.jpg",
  "images/MLC_WEB66.jpg",
  "images/MLC_WEB65.jpg",
  "images/MLC_WEB64.jpg",
  "images/MLC_WEB63.jpg",
  "images/MLC_WEB62.jpg",
  "images/MLC_WEB61.jpg",
  "images/MLC_WEB60.jpg",
  "images/MLC_WEB59.jpg",
  "images/MLC_WEB58.jpg",
  "images/MLC_WEB57.jpg",
  "images/MLC_WEB56.jpg",
  "images/MLC_WEB55.jpg",
  "images/MLC_WEB54.jpg",
  "images/MLC_WEB53.jpg",
  "images/MLC_WEB52.jpg",
  "images/MLC_WEB51.jpg",
  "images/MLC_WEB50.jpg",
  "images/MLC_WEB49.jpg",
  "images/MLC_WEB48.jpg",
  "images/MLC_WEB47.jpg",
  "images/MLC_WEB46.jpg",
  "images/MLC_WEB45.jpg",
  "images/MLC_WEB44.jpg",
  "images/MLC_WEB40.jpg",
  "images/MLC_WEB39.jpg",
  "images/MLC_WEB38.jpg",
  "images/MLC_WEB37.jpg",
  "images/MLC_WEB35.jpg",
  "images/MLC_WEB34.jpg",
  "images/MLC_WEB33.jpg",
  "images/MLC_WEB32.jpg",
  "images/MLC_WEB31.jpg",
  "images/MLC_WEB30.jpg",
  "images/MLC_WEB29.jpg",
  "images/MLC_WEB28.jpg",
  "images/MLC_WEB27.jpg",
  "images/MLC_WEB26.jpg",
  "images/MLC_WEB25.jpg",
  "images/MLC_WEB24.jpg",
  "images/MLC_WEB23.jpg",
  "images/MLC_WEB22.jpg",
  "images/MLC_WEB21.jpg",
  "images/MLC_WEB20.jpg",
  "images/MLC_WEB19.jpg",
  "images/MLC_WEB18.jpg",
  "images/MLC_WEB17.jpg",
  "images/MLC_WEB16.jpg",
  "images/MLC_WEB15.jpg",
  "images/MLC_WEB14.jpg",
  "images/MLC_WEB12.jpg",
  "images/MLC_WEB11.jpg",
  "images/MLC_WEB10.jpg",
  "images/MLC_WEB9.jpg",
  "images/MLC_WEB8.jpg",
  "images/MLC_WEB7.jpg",
  "images/MLC_WEB6.jpg",
  "images/MLC_WEB5.jpg",
  "images/MLC_WEB4.jpg",
  "images/MLC_WEB3.jpg",
  "images/MLC_WEB2.jpg",
  "images/MLC_WEB1.jpg"
];

function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

function changeBackgroundImage() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = `url(${randomImage})`;
  changeTextColor(randomImage);
}

function changeTextColor(imageSrc) {
  const img = new Image();
  img.crossOrigin = "Anonymous";
  img.src = imageSrc;

  img.onload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const quadrantWidth = img.width / 2;
    const quadrantHeight = img.height / 2;
    canvas.width = quadrantWidth;
    canvas.height = quadrantHeight;

    context.drawImage(img, 0, 0, quadrantWidth, quadrantHeight, 0, 0, quadrantWidth, quadrantHeight);

    const imageData = context.getImageData(0, 0, quadrantWidth, quadrantHeight);
    const data = imageData.data;
    let r = 0, g = 0, b = 0, count = 0;

    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
      count++;
    }

    r = Math.floor(r / count);
    g = Math.floor(g / count);
    b = Math.floor(b / count);

    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    h1.style.color = brightness > 125 ? "black" : "white";
  };
}

document.addEventListener(
  "mousemove",
  debounce((e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    if (
      lastMousePosition.x === null ||
      lastMousePosition.y === null ||
      Math.abs(mouseX - lastMousePosition.x) > MIN_DISTANCE ||
      Math.abs(mouseY - lastMousePosition.y) > MIN_DISTANCE
    ) {
      changeBackgroundImage();
      lastMousePosition = { x: mouseX, y: mouseY };
    }
  }, 100)
);

// For mobile: change image on click
document.addEventListener("click", (e) => {
  changeBackgroundImage();
});

// Initial background image setup
changeBackgroundImage();

// Toggle visibility of additional text on click
h1.addEventListener("click", () => {
  additionalText.classList.toggle("hidden");
});
