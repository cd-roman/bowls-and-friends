document.addEventListener("DOMContentLoaded", function() {

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
    
  const menuItems = document.querySelectorAll('.menu-item-container');

  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      // Populate overlay
      document.querySelector('.overlay-item-title').textContent = item.querySelector('.menu-item-title').textContent;
      
      // Retrieve and use the original full text for the overlay description
      const originalDescription = item.querySelector('.menu-item-description').getAttribute('data-original-text') || item.querySelector('.menu-item-description').textContent;
      document.querySelector('.overlay-item-description').textContent = originalDescription;

      document.querySelector('.overlay-item-price').textContent = item.querySelector('.menu-item-price').textContent;
      
      const imgSrc = item.querySelector('.menu-item-image img').src;
      const overlayImage = document.querySelector('.overlay-item-image');
      overlayImage.innerHTML = `<img src="${imgSrc}" alt="" style="width:100%;">`;

      // Show overlay
      document.getElementById('menuOverlay').style.display = 'block';
    });
});

// Close the overlay when the cross icon is clicked
document.querySelector('.close-overlay').addEventListener('click', function() {
    document.getElementById('menuOverlay').style.display = 'none';
});

document.getElementById('menuOverlay').addEventListener('click', function(event) {
    // Check if the clicked element is the overlay itself, not its child elements
    if (event.target === this) {
        document.getElementById('menuOverlay').style.display = 'none';
    }
  });
});