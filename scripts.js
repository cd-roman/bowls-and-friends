// Function to create the overlay and show the full-size image
function showImageOverlay(imageSrc) {
  const overlay = document.createElement('div');
  overlay.id = 'image-overlay';

  const img = document.createElement('img');
  img.src = imageSrc;

  overlay.appendChild(img);

  // Remove overlay on click
  overlay.addEventListener('click', function() {
    overlay.remove();
  });

  document.body.appendChild(overlay);
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
    mobileMenu.style.right = '0';
    body.style.overflow = 'hidden'; // Prevent scrolling
});

closeMenuBtn.addEventListener('click', function() {
    mobileMenu.style.right = '-100%';
    body.style.overflow = ''; // Re-enable scrolling
});


function adjustText() {
  document.querySelectorAll('.menu-item-description').forEach(function(element) {
    // Store the original text if it's not already stored
    if (!element.hasAttribute('data-original-text')) {
      element.setAttribute('data-original-text', element.textContent);
    }

    const originalText = element.getAttribute('data-original-text');

    if (window.innerWidth <= 600) {
      // Truncate the text if the window width is 600px or less
      if (originalText.length > 85) {
        element.textContent = originalText.substring(0, 85) + '...';
      }
    } else {
      // Restore the original text if the window is wider than 600px
      element.textContent = originalText;
    }
  });
}

// Run the function on initial load and whenever the window is resized
adjustText();
window.addEventListener('resize', adjustText);  

  
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = document.querySelectorAll('.menu-item-container');

  menuItems.forEach(item => {
      item.addEventListener('click', function() {
          // Populate overlay
          document.querySelector('.overlay-item-title').textContent = item.querySelector('.menu-item-title').textContent;
          document.querySelector('.overlay-item-description').textContent = item.querySelector('.menu-item-description').textContent;
          document.querySelector('.overlay-item-price').textContent = item.querySelector('.menu-item-price').textContent;
          
          const imgSrc = item.querySelector('.menu-item-image img').src;
          const overlayImage = document.querySelector('.overlay-item-image');
          overlayImage.innerHTML = `<img src="${imgSrc}" alt="" style="width:100%;">`;

          // Show overlay
          document.getElementById('menuOverlay').style.display = 'block';
      });
  });

  // Close the overlay when the cross icon is clicked
  document.querySelector('.close').addEventListener('click', function() {
      document.getElementById('menuOverlay').style.display = 'none';
  });

  document.getElementById('menuOverlay').addEventListener('click', function(event) {
    // Check if the clicked element is the overlay itself, not its child elements
    if (event.target === this) {
        document.getElementById('menuOverlay').style.display = 'none';
    }
});
});

