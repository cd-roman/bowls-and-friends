document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.rating-block').forEach(ratingBlock => {
        const stars = ratingBlock.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.addEventListener('mouseenter', () => {
                stars.forEach((s, idx) => {
                    s.classList.toggle('hovered', idx <= index);
                });
            });

            star.addEventListener('click', () => {
                stars.forEach((s, idx) => {
                    s.classList.remove('hovered');
                    s.classList.toggle('selected', idx <= index);
                });
            });
        });

        ratingBlock.addEventListener('mouseleave', () => {
            stars.forEach(star => {
                if (!star.classList.contains('selected')) {
                    star.classList.remove('hovered');
                }
            });
        });
    });
});


document.querySelectorAll('.rating-block').forEach((ratingBlock, blockIndex) => {
    const stars = ratingBlock.querySelectorAll('.star');
    // Choose the correct hidden input based on the index of the rating block
    const hiddenInput = blockIndex === 0 ? document.getElementById('foodBeveragesRating') : document.getElementById('servicesRating');

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            hiddenInput.value = index + 1; // Update hidden input value to the selected rating
        });
    });
});








