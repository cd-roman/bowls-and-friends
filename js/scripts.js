const overlayContainerId = "overlay-container";

// Function to show the overlay with the full-size image
function showImageOverlay(imageSrc) {
  const overlay = document.getElementById(overlayContainerId);
  const img = document.getElementById("overlay-image");
  img.src = imageSrc;

  // Toggle the overlay visibility by adding/removing the class
  overlay.classList.add("overlay-open");

  // Remove overlay on click
  overlay.addEventListener("click", function () {
    overlay.classList.remove("overlay-open");
  });
}

// Get all images in the gallery
const images = document.querySelectorAll(".gallery-image");

// Add click event to each image
images.forEach((image) => {
  image.addEventListener("click", function () {
    showImageOverlay(image.src);
  });
});

const body = document.body;
const mobileMenu = document.getElementById("mobileMenu");

// Function to open the mobile menu
function openMenu() {
  mobileMenu.classList.add("mobile-menu-open"); // Slide in from the right
  body.classList.add("no-scroll");
}

// Function to close the mobile menu
function closeMenu() {
  mobileMenu.classList.remove("mobile-menu-open"); // Revert to initial state to slide out to the right
  body.classList.remove("no-scroll");
}

document
  .querySelector(".open-mobile-menu-icon")
  .addEventListener("click", openMenu);
document
  .querySelector(".close-mobile-menu-icon")
  .addEventListener("click", closeMenu);
