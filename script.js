const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const additionalText = document.querySelector("#additionalText");
const contactLink = document.querySelector("#contactLink");
const mainImage = document.createElement("img");
mainImage.style.position = "fixed";
mainImage.style.top = "0";
mainImage.style.left = "0";
mainImage.style.width = "100%";
mainImage.style.height = "100%";
mainImage.style.objectFit = "cover";
mainImage.style.zIndex = "-1";
body.appendChild(mainImage);

const MIN_DISTANCE = 100;
let lastMousePosition = { x: null, y: null };
let distanceSinceLastChange = 0;
let businessCardVisible = true;

const imagesDesktop = [
  "images/desktop/Maria_Candanoza_Desktop_web51.webp",
  "images/desktop/Maria_Candanoza_Desktop_web54.webp",
  "images/desktop/Maria_Candanoza_Desktop_web52.webp",
  "images/desktop/editing_desktop.gif",
  "images/desktop/Maria_Candanoza_Desktop_web103.webp",
  "images/desktop/Maria_Candanoza_Desktop_web101.png",
  "images/desktop/Maria_Candanoza_Desktop_web102.png",
  "images/desktop/Maria_Candanoza_Desktop_web100.png",
  "images/desktop/Maria_Candanoza_Desktop_web99.png",
  "images/desktop/Maria_Candanoza_Desktop_web97.webp",
  "images/desktop/Maria_Candanoza_Desktop_web98.png",
  "images/desktop/Maria_Candanoza_Desktop_web96.webp",
  "images/desktop/Maria_Candanoza_Desktop_web95.webp",
  "images/desktop/Maria_Candanoza_Desktop_web94.webp",
  "images/desktop/Maria_Candanoza_Desktop_web93.webp",
  "images/desktop/Maria_Candanoza_Desktop_web92.webp",
  "images/desktop/Maria_Candanoza_Desktop_web91.webp",
  "images/desktop/Maria_Candanoza_Desktop_web89.webp",
  "images/desktop/Maria_Candanoza_Desktop_web90.webp",
  "images/desktop/Maria_Candanoza_Desktop_web88.webp",
  "images/desktop/Maria_Candanoza_Desktop_web87.webp",
  "images/desktop/Maria_Candanoza_Desktop_web85.webp",
  "images/desktop/Maria_Candanoza_Desktop_web86.webp",
  "images/desktop/Maria_Candanoza_Desktop_web83.webp",
  "images/desktop/Maria_Candanoza_Desktop_web84.webp",
  "images/desktop/Maria_Candanoza_Desktop_web81.webp",
  "images/desktop/Maria_Candanoza_Desktop_web82.webp",
  "images/desktop/Maria_Candanoza_Desktop_web79.webp",
  "images/desktop/Maria_Candanoza_Desktop_web80.webp",
  "images/desktop/Maria_Candanoza_Desktop_web77.webp",
  "images/desktop/Maria_Candanoza_Desktop_web78.webp",
  "images/desktop/Maria_Candanoza_Desktop_web76.webp",
  "images/desktop/Maria_Candanoza_Desktop_web75.webp",
  "images/desktop/Maria_Candanoza_Desktop_web73.webp",
  "images/desktop/Maria_Candanoza_Desktop_web74.webp",
  "images/desktop/Maria_Candanoza_Desktop_web72.webp",
  "images/desktop/Maria_Candanoza_Desktop_web71.webp",
  "images/desktop/Maria_Candanoza_Desktop_web69.webp",
  "images/desktop/Maria_Candanoza_Desktop_web70.webp",
  "images/desktop/Maria_Candanoza_Desktop_web67.webp",
  "images/desktop/Maria_Candanoza_Desktop_web68.webp",
  "images/desktop/Maria_Candanoza_Desktop_web65.webp",
  "images/desktop/Maria_Candanoza_Desktop_web66.webp",
  "images/desktop/Maria_Candanoza_Desktop_web63.webp",
  "images/desktop/Maria_Candanoza_Desktop_web64.webp",
  "images/desktop/Maria_Candanoza_Desktop_web61.webp",
  "images/desktop/Maria_Candanoza_Desktop_web62.webp",
  "images/desktop/Maria_Candanoza_Desktop_web60.webp",
  "images/desktop/Maria_Candanoza_Desktop_web59.webp",
  "images/desktop/Maria_Candanoza_Desktop_web57.webp",
  "images/desktop/Maria_Candanoza_Desktop_web58.webp",
  "images/desktop/Maria_Candanoza_Desktop_web56.webp",
  "images/desktop/Maria_Candanoza_Desktop_web55.webp",
  "images/desktop/Maria_Candanoza_Desktop_web53.webp",
  "images/desktop/Maria_Candanoza_Desktop_web49.webp",
  "images/desktop/Maria_Candanoza_Desktop_web50.webp",
  "images/desktop/Maria_Candanoza_Desktop_web48.webp",
  "images/desktop/Maria_Candanoza_Desktop_web47.webp",
  "images/desktop/Maria_Candanoza_Desktop_web45.webp",
  "images/desktop/Maria_Candanoza_Desktop_web46.webp",
  "images/desktop/Maria_Candanoza_Desktop_web43.webp",
  "images/desktop/Maria_Candanoza_Desktop_web44.webp",
  "images/desktop/Maria_Candanoza_Desktop_web41.webp",
  "images/desktop/Maria_Candanoza_Desktop_web42.webp",
  "images/desktop/Maria_Candanoza_Desktop_web40.webp",
  "images/desktop/Maria_Candanoza_Desktop_web39.webp",
  "images/desktop/Maria_Candanoza_Desktop_web37.webp",
  "images/desktop/Maria_Candanoza_Desktop_web38.webp",
  "images/desktop/Maria_Candanoza_Desktop_web35.webp",
  "images/desktop/Maria_Candanoza_Desktop_web36.webp",
  "images/desktop/Maria_Candanoza_Desktop_web33.webp",
  "images/desktop/Maria_Candanoza_Desktop_web34.webp",
  "images/desktop/Maria_Candanoza_Desktop_web32.webp",
  "images/desktop/Maria_Candanoza_Desktop_web31.webp",
  "images/desktop/Maria_Candanoza_Desktop_web30.webp",
  "images/desktop/Maria_Candanoza_Desktop_web29.webp",
  "images/desktop/Maria_Candanoza_Desktop_web28.webp",
  "images/desktop/Maria_Candanoza_Desktop_web27.webp",
  "images/desktop/Maria_Candanoza_Desktop_web26.webp",
  "images/desktop/Maria_Candanoza_Desktop_web25.webp",
  "images/desktop/Maria_Candanoza_Desktop_web24.webp",
  "images/desktop/Maria_Candanoza_Desktop_web23.webp",
  "images/desktop/Maria_Candanoza_Desktop_web22.webp",
  "images/desktop/Maria_Candanoza_Desktop_web21.webp",
  "images/desktop/Maria_Candanoza_Desktop_web20.webp",
  "images/desktop/Maria_Candanoza_Desktop_web19.webp",
  "images/desktop/Maria_Candanoza_Desktop_web17.webp",
  "images/desktop/Maria_Candanoza_Desktop_web18.webp",
  "images/desktop/Maria_Candanoza_Desktop_web15.webp",
  "images/desktop/Maria_Candanoza_Desktop_web16.webp",
  "images/desktop/Maria_Candanoza_Desktop_web14.webp",
  "images/desktop/Maria_Candanoza_Desktop_web13.webp",
  "images/desktop/Maria_Candanoza_Desktop_web11.webp",
  "images/desktop/Maria_Candanoza_Desktop_web12.webp",
  "images/desktop/Maria_Candanoza_Desktop_web9.webp",
  "images/desktop/Maria_Candanoza_Desktop_web10.webp",
  "images/desktop/Maria_Candanoza_Desktop_web8.webp",
  "images/desktop/Maria_Candanoza_Desktop_web7.webp",
  "images/desktop/Maria_Candanoza_Desktop_web6.webp",
  "images/desktop/Maria_Candanoza_Desktop_web5.webp",
  "images/desktop/Maria_Candanoza_Desktop_web3.webp",
  "images/desktop/Maria_Candanoza_Desktop_web4.webp",
  "images/desktop/Maria_Candanoza_Desktop_web1.webp",
  "images/desktop/Maria_Candanoza_Desktop_web2.webp",
  "images/desktop/printed-things-2_desktop.gif",
  "images/desktop/stones.gif",
  "images/desktop/websites.gif",
  "images/desktop/Storr-3.gif",
  "images/desktop/Storr-1.gif",
  "images/desktop/Storr-2.gif"
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

const businessCardImage = "images/business_card_desktop.webp"; // Business card image path

// Choose the appropriate image set based on screen width
const images = window.innerWidth <= 480 ? imagesMobile : imagesDesktop;
let shuffledImages = shuffleArray(images.slice());
let currentIndex = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(src);
    img.onerror = reject;
  });
}

async function changeBackgroundImage() {
  if (businessCardVisible) return;

  if (currentIndex >= shuffledImages.length) {
    shuffledImages = shuffleArray(images.slice());
    currentIndex = 0;
  }

  const nextImage = shuffledImages[currentIndex];
  currentIndex++;

  try {
    await preloadImage(nextImage);
    mainImage.src = nextImage;
    changeTextColor(nextImage);
  } catch (error) {
    console.error("Failed to load image:", error);
  }
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

document.addEventListener("click", (e) => {
  changeBackgroundImage(); // Ensure images change immediately on click for mobile
});

h1.addEventListener("click", () => {
  additionalText.classList.toggle("hidden");
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  businessCardVisible = true;
  mainImage.src = businessCardImage;
  mainImage.style.display = "block";
  additionalText.classList.remove("hidden");
  window.location.href = "mailto:maria.l.candanoza@gmail.com"; // Open email link
});

document.addEventListener("click", (e) => {
  if (businessCardVisible) {
    businessCardVisible = false;
    changeBackgroundImage();
  }
});

// Initial background image setup
window.onload = () => {
  mainImage.src = businessCardImage;
  mainImage.style.display = "block"; // Ensure the business card is visible initially
  h1.style.display = "block"; // Ensure name is visible initially
  additionalText.classList.add("hidden"); // Hide bio initially
  setTimeout(() => {
    businessCardVisible = false;
    changeBackgroundImage();
  }, 3000); // Show business card for 3 seconds
};
