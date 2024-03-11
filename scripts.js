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
  