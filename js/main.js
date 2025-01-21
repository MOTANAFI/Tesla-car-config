const topBar = document.querySelector("#top-bar");
const exteriorButtons = document.querySelector("#exterior-buttons");
const interiorButtons = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonsSection = document.querySelector("#wheel-buttons");
const performanceBtn = document.querySelector("#performance-btn");
const totalPriceElement = document.querySelector("#total-price");
const fullSelfDrivingCheckbox = document.querySelector(
  "#full-self-driving-checkbox"
);
const accessoryCheckboxes = document.querySelectorAll(
  ".accessory-form-checkbox"
);
const downPaymentElement = document.querySelector("#down-payment");
const monthlyPaymentElement = document.querySelector("#monthly-payment");
console.log(interiorImage)

const basePrice = 52490;
let currentPrice = basePrice;

let selectedColor = "Stealth Grey";
const selectedOptions = {
  "Performance Wheels": false,
  "Performance Package": false,
  "Full Self-Drving": false,
};

const pricing = {
  "Performance Wheels": 2500,
  "Performance Package": 5000,
  "Full Self-Driving": 8500,
  Accessories: {
    "Center Console Trays": 35,
    Sunshade: 105,
    "All-Weather Interior Liners": 225,
  },
};

// handle Tob Bar On Scroll

const handleScrol = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("vissable-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

// Imae Mapping
const exteriorImages = {
  "Stealth Grey": "./images/model-y-stealth-grey.jpg",
  "Pearl White": "./images/model-y-pearl-white.jpg",
  "Deep Blue": "./images/model-y-deep-blue-metallic.jpg",
  "Solid Black": "./images/model-y-solid-black.jpg",
  "Ultra Red": "./images/model-y-ultra-red.jpg",
  "Quicksilver": "./images/model-y-quicksilver.jpg",
};

const interiorImages = {
  Dark: "./images/model-y-interior-dark.jpg",
  Light: "./images/model-y-interior-light.jpg",
};

// Handle Color Selection
const  handleColorButtonClick = (event, section, imageElement, images) => {
  let button;
  if(event.target.tagName === "IMG"){
    button = event.target.closest("button");


} else if (event.target.tagName === "BUTTON"){
  button = event.target;
}
if(button) {
  const buttons = section.querySelectorAll("button");
  buttons.forEach((btn) => btn.classList.remove("btn-selected"));
  button.classList.add("btn-selected");

  const color = button.querySelector("img").alt;
  if(images[color]){
    imageElement.src = images[color];
    selectedColor = color;
  }  
    
}
}



// Event Listeners

window.addEventListener("scroll", () => requestAnimationFrame(handleScrol));
exteriorButtons.addEventListener("click", (event) =>
  handleColorButtonClick(event, exteriorButtons, exteriorImage, exteriorImages)
);

interiorButtons.addEventListener("click", (event) =>
  handleColorButtonClick(event, interiorButtons, interiorImage, interiorImages)
);

