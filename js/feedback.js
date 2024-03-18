document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.rating-block').forEach((ratingBlock, blockIndex) => {
        const stars = ratingBlock.querySelectorAll('.star');
        const hiddenInput = blockIndex === 0 ? document.getElementById('foodBeveragesRating') : document.getElementById('servicesRating');

        stars.forEach((star, index) => {
            // Mouseenter event for hover effect
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, idx) => {
                    s.classList.toggle('hovered', idx <= index);
                });
            });

            // Click event for setting selected state and updating hidden input
            star.addEventListener('click', () => {
                // Remove hovered class and set selected class
                stars.forEach((s, idx) => {
                    s.classList.remove('hovered');
                    s.classList.toggle('selected', idx <= index);
                });

                // Update hidden input value to the selected rating
                hiddenInput.value = index + 1;
            });
        });

        // Mouseleave event to clear hover effect
        ratingBlock.addEventListener('mouseleave', () => {
            stars.forEach(star => {
                if (!star.classList.contains('selected')) {
                    star.classList.remove('hovered');
                }
            });
        });
    });

    // Form submission handling
    const form = document.getElementById('feedbackForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        const formData = new FormData(form);

        for (const [name, value] of formData.entries()) {
            console.log(`${name}: ${value}`);
        }

        // Show an alert message
        alert("Your feedback has been submitted. \nThank you!");

        // Clear form fields
        form.reset();

        // Reset rating blocks (remove 'selected' class from stars)
        const stars = document.querySelectorAll('.rating .star');
        stars.forEach(star => {
            star.classList.remove('selected', 'hovered');
        });
    });
});
