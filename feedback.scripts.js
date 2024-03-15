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
