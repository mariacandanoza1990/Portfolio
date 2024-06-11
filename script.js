const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const additionalText = document.querySelector("#additionalText");
const contactLink = document.querySelector("#contactLink");
const MIN_DISTANCE = 100;
let lastMousePosition = { x: null, y: null };
let businessCardVisible = true;

const imagesDesktop = [
  "images/desktop/Maria_Candanoza_Desktop_web97.webp",
  "images/desktop/Maria_Candanoza_Desktop_web95.webp",
  "images/desktop/Maria_Candanoza_Desktop_web93.webp",
  "images/desktop/Maria_Candanoza_Desktop_web91.webp",
  "images/desktop/Maria_Candanoza_Desktop_web89.webp",
  "images/desktop/Maria_Candanoza_Desktop_web87.webp",
  "images/desktop/Maria_Candanoza_Desktop_web85.webp",
  "images/desktop/Maria_Candanoza_Desktop_web83.webp",
  "images/desktop/Maria_Candanoza_Desktop_web81.webp",
  "images/desktop/Maria_Candanoza_Desktop_web79.webp",
  "images/desktop/Maria_Candanoza_Desktop_web77.webp",
  "images/desktop/Maria_Candanoza_Desktop_web75.webp",
  "images/desktop/Maria_Candanoza_Desktop_web73.webp",
  "images/desktop/Maria_Candanoza_Desktop_web71.webp",
  "images/desktop/Maria_Candanoza_Desktop_web69.webp",
  "images/desktop/Maria_Candanoza_Desktop_web67.webp",
  "images/desktop/Maria_Candanoza_Desktop_web65.webp",
  "images/desktop/Maria_Candanoza_Desktop_web63.webp",
  "images/desktop/Maria_Candanoza_Desktop_web61.webp",
  "images/desktop/Maria_Candanoza_Desktop_web59.webp",
  "images/desktop/Maria_Candanoza_Desktop_web57.webp",
  "images/desktop/Maria_Candanoza_Desktop_web55.webp",
  "images/desktop/Maria_Candanoza_Desktop_web53.webp",
  "images/desktop/Maria_Candanoza_Desktop_web51.webp",
  "images/desktop/Maria_Candanoza_Desktop_web49.webp",
  "images/desktop/Maria_Candanoza_Desktop_web47.webp",
  "images/desktop/Maria_Candanoza_Desktop_web45.webp",
  "images/desktop/Maria_Candanoza_Desktop_web43.webp",
  "images/desktop/Maria_Candanoza_Desktop_web41.webp",
  "images/desktop/Maria_Candanoza_Desktop_web39.webp",
  "images/desktop/Maria_Candanoza_Desktop_web37.webp",
  "images/desktop/Maria_Candanoza_Desktop_web35.webp",
  "images/desktop/Maria_Candanoza_Desktop_web33.webp",
  "images/desktop/Maria_Candanoza_Desktop_web31.webp",
  "images/desktop/Maria_Candanoza_Desktop_web29.webp",
  "images/desktop/Maria_Candanoza_Desktop_web27.webp",
  "images/desktop/Maria_Candanoza_Desktop_web25.webp",
  "images/desktop/Maria_Candanoza_Desktop_web23.webp",
  "images/desktop/Maria_Candanoza_Desktop_web21.webp",
  "images/desktop/Maria_Candanoza_Desktop_web19.webp",
  "images/desktop/Maria_Candanoza_Desktop_web17.webp",
  "images/desktop/Maria_Candanoza_Desktop_web15.webp",
  "images/desktop/Maria_Candanoza_Desktop_web13.webp",
  "images/desktop/Maria_Candanoza_Desktop_web11.webp",
  "images/desktop/Maria_Candanoza_Desktop_web9.webp",
  "images/desktop/Maria_Candanoza_Desktop_web7.webp",
  "images/desktop/Maria_Candanoza_Desktop_web5.webp",
  "images/desktop/Maria_Candanoza_Desktop_web3.webp",
  "images/desktop/Maria_Candanoza_Desktop_web1.webp",
  "images/desktop/websites.gif",
  "images/desktop/websites2.gif"
];

const imagesMobile = [
  "images/mobile/Maria_Candanoza_Mobile_web91.webp",
  "images/mobile/Maria_Candanoza_Mobile_web1.webp",
  "images/mobile/Maria_Candanoza_Mobile_web2.webp",
  "images/mobile/Maria_Candanoza_Mobile_web3.webp",
  "images/mobile/Maria_Candanoza_Mobile_web4.webp",
  "images/mobile/Maria_Candanoza_Mobile_web5.webp",
  "images/mobile/Maria_Candanoza_Mobile_web6.webp",
  "images/mobile/Maria_Candanoza_Mobile_web7.webp",
  "images/mobile/Maria_Candanoza_Mobile_web8.webp",
  "images/mobile/Maria_Candanoza_Mobile_web9.webp",
  "images/mobile/Maria_Candanoza_Mobile_web10.webp",
  "images/mobile/Maria_Candanoza_Mobile_web11.webp",
  "images/mobile/Maria_Candanoza_Mobile_web12.webp",
  "images/mobile/Maria_Candanoza_Mobile_web13.webp",
  "images/mobile/Maria_Candanoza_Mobile_web14.webp",
  "images/mobile/Maria_Candanoza_Mobile_web15.webp",
  "images/mobile/Maria_Candanoza_Mobile_web16.webp",
  "images/mobile/Maria_Candanoza_Mobile_web17.webp",
  "images/mobile/Maria_Candanoza_Mobile_web18.webp",
  "images/mobile/Maria_Candanoza_Mobile_web19.webp",
  "images/mobile/Maria_Candanoza_Mobile_web20.webp",
  "images/mobile/Maria_Candanoza_Mobile_web21.webp",
  "images/mobile/Maria_Candanoza_Mobile_web22.webp",
  "images/mobile/Maria_Candanoza_Mobile_web23.webp",
  "images/mobile/Maria_Candanoza_Mobile_web24.webp",
  "images/mobile/Maria_Candanoza_Mobile_web25.webp",
  "images/mobile/Maria_Candanoza_Mobile_web26.webp",
  "images/mobile/Maria_Candanoza_Mobile_web27.webp",
  "images/mobile/Maria_Candanoza_Mobile_web28.webp",
  "images/mobile/Maria_Candanoza_Mobile_web29.webp",
  "images/mobile/Maria_Candanoza_Mobile_web30.webp",
  "images/mobile/Maria_Candanoza_Mobile_web31.webp",
  "images/mobile/Maria_Candanoza_Mobile_web32.webp",
  "images/mobile/Maria_Candanoza_Mobile_web33.webp",
  "images/mobile/Maria_Candanoza_Mobile_web34.webp",
  "images/mobile/Maria_Candanoza_Mobile_web35.webp",
  "images/mobile/Maria_Candanoza_Mobile_web36.webp",
  "images/mobile/Maria_Candanoza_Mobile_web37.webp",
  "images/mobile/Maria_Candanoza_Mobile_web38.webp",
  "images/mobile/Maria_Candanoza_Mobile_web39.webp",
  "images/mobile/Maria_Candanoza_Mobile_web40.webp",
  "images/mobile/Maria_Candanoza_Mobile_web41.webp",
  "images/mobile/Maria_Candanoza_Mobile_web42.webp",
  "images/mobile/Maria_Candanoza_Mobile_web43.webp",
  "images/mobile/Maria_Candanoza_Mobile_web44.webp",
  "images/mobile/Maria_Candanoza_Mobile_web45.webp",
  "images/mobile/Maria_Candanoza_Mobile_web46.webp",
  "images/mobile/Maria_Candanoza_Mobile_web47.webp",
  "images/mobile/Maria_Candanoza_Mobile_web48.webp",
  "images/mobile/Maria_Candanoza_Mobile_web49.webp",
  "images/mobile/Maria_Candanoza_Mobile_web50.webp",
  "images/mobile/Maria_Candanoza_Mobile_web51.webp",
  "images/mobile/Maria_Candanoza_Mobile_web52.webp",
  "images/mobile/Maria_Candanoza_Mobile_web53.webp",
  "images/mobile/Maria_Candanoza_Mobile_web54.webp",
  "images/mobile/Maria_Candanoza_Mobile_web55.webp",
  "images/mobile/Maria_Candanoza_Mobile_web56.webp",
  "images/mobile/Maria_Candanoza_Mobile_web57.webp",
  "images/mobile/Maria_Candanoza_Mobile_web58.webp",
  "images/mobile/Maria_Candanoza_Mobile_web59.webp",
  "images/mobile/Maria_Candanoza_Mobile_web60.webp",
  "images/mobile/Maria_Candanoza_Mobile_web61.webp",
  "images/mobile/Maria_Candanoza_Mobile_web62.webp",
  "images/mobile/Maria_Candanoza_Mobile_web63.webp",
  "images/mobile/Maria_Candanoza_Mobile_web64.webp",
  "images/mobile/Maria_Candanoza_Mobile_web65.webp",
  "images/mobile/Maria_Candanoza_Mobile_web66.webp",
  "images/mobile/Maria_Candanoza_Mobile_web67.webp",
  "images/mobile/Maria_Candanoza_Mobile_web68.webp",
  "images/mobile/Maria_Candanoza_Mobile_web69.webp",
  "images/mobile/Maria_Candanoza_Mobile_web70.webp",
  "images/mobile/Maria_Candanoza_Mobile_web71.webp",
  "images/mobile/Maria_Candanoza_Mobile_web72.webp",
  "images/mobile/Maria_Candanoza_Mobile_web73.webp",
  "images/mobile/Maria_Candanoza_Mobile_web74.webp",
  "images/mobile/Maria_Candanoza_Mobile_web75.webp",
  "images/mobile/Maria_Candanoza_Mobile_web76.webp",
  "images/mobile/Maria_Candanoza_Mobile_web77.webp",
  "images/mobile/Maria_Candanoza_Mobile_web78.webp",
  "images/mobile/Maria_Candanoza_Mobile_web79.webp",
  "images/mobile/Maria_Candanoza_Mobile_web80.webp",
  "images/mobile/Maria_Candanoza_Mobile_web81.webp",
  "images/mobile/Maria_Candanoza_Mobile_web82.webp",
  "images/mobile/Maria_Candanoza_Mobile_web83.webp",
  "images/mobile/Maria_Candanoza_Mobile_web84.webp",
  "images/mobile/Maria_Candanoza_Mobile_web85.webp",
  "images/mobile/Maria_Candanoza_Mobile_web86.webp",
  "images/mobile/Maria_Candanoza_Mobile_web87.webp",
  "images/mobile/Maria_Candanoza_Mobile_web88.webp",
  "images/mobile/Maria_Candanoza_Mobile_web89.webp",
  "images/mobile/Maria_Candanoza_Mobile_web90.webp",
  "images/mobile/Maria_Candanoza_Mobile_web91.webp",
  "images/mobile/Maria_Candanoza_Mobile_web92.webp",
  "images/mobile/Maria_Candanoza_Mobile_web93.webp",
  "images/mobile/Maria_Candanoza_Mobile_web94.webp",
  "images/mobile/Maria_Candanoza_Mobile_web95.webp",
  "images/mobile/Maria_Candanoza_Mobile_web96.webp",
  "images/mobile/printed-things_mobile.gif",
  "images/mobile/stones-(1).gif",
  "images/mobile/Storr-1.gif",
  "images/mobile/Storr-2.gif",
  "images/mobile/Storr-3.gif",
  "images/mobile/websites.gif",
  "images/mobile/editing_mobile.gif"
];

// Choose the appropriate image set based on screen width
const images = window.innerWidth <= 480 ? imagesMobile : imagesDesktop;

// Function to preload image
function preloadImage(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    callback(img);
  };
}

function changeBackgroundImage() {
  if (businessCardVisible) return; // Only change background if the business card is not visible
  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log("Selected image:", randomImage); // Log the selected image

  preloadImage(randomImage, (loadedImage) => {
    body.style.backgroundImage = `url(${loadedImage.src})`;
    changeTextColor(loadedImage.src);
  });
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

document.addEventListener("mousemove", (e) => {
  console.log("Mouse move detected"); // Log mouse move events
  if (businessCardVisible) {
    businessCardVisible = false;
  }
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
});

h1.addEventListener("click", () => {
  additionalText.classList.toggle("hidden");
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "mailto:maria.l.candanoza@gmail.com";
});

// Initial background image setup
window.onload = () => {
  body.style.backgroundImage = `url(images/business_card_desktop.webp)`;
  changeTextColor("images/business_card_desktop.webp");
  businessCardVisible = true;
};
