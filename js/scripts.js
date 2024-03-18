// Function to show the overlay with the full-size image
function showImageOverlay(imageSrc) {
  const overlay = document.getElementById('image-overlay');
  const img = document.getElementById('overlay-image');
  img.src = imageSrc;

  // Toggle the overlay visibility by adding/removing the class
  overlay.classList.add('overlay-open');

  // Remove overlay on click
  overlay.addEventListener('click', function() {
      overlay.classList.remove('overlay-open');
  });
}

// Get all images in the gallery
const images = document.querySelectorAll('.gallery-image');

// Add click event to each image
images.forEach(image => {
  image.addEventListener('click', function() {
      showImageOverlay(image.src);
  });
});


const body = document.body;
const mobileMenu = document.getElementById('mobileMenu');
const openMenuBtn = document.getElementById('openMenu');
const closeMenuBtn = document.getElementById('closeMenu');

openMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.add('mobile-menu-open'); // Open the mobile menu
  body.classList.add('no-scroll'); // Prevent body scrolling
});

closeMenuBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('mobile-menu-open'); // Close the mobile menu
  body.classList.remove('no-scroll'); // Re-enable body scrolling
});
