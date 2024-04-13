const questions = document.querySelectorAll('.accordion-box h2');

questions.forEach(question => {
  question.addEventListener('click', function() {
    const icon = question.querySelector('.question');
    const answer = question.nextElementSibling;

    // Toggle active class on icon
    icon.classList.toggle('active');

    // Toggle answer visibility
    answer.classList.toggle('active');

    // Toggle plus and minus icons
    const plusIcon = 'assets/images/icon-plus.svg';
    const minusIcon = 'assets/images/icon-minus.svg';

    if (icon.getAttribute('src') === plusIcon) {
      icon.setAttribute('src', minusIcon);
    } else {
      icon.setAttribute('src', plusIcon);
    }
  });

  // Add keyboard event listeners
  question.addEventListener('keydown', function(event) {
    const arrowKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
    const currentIndex = Array.from(questions).indexOf(question);

    if (arrowKeys.includes(event.key)) {
      event.preventDefault();
      if (event.key === 'ArrowDown' && currentIndex < questions.length - 1) {
        questions[currentIndex + 1].focus();
      } else if (event.key === 'ArrowUp' && currentIndex > 0) {
        questions[currentIndex - 1].focus();
      } else if (event.key === 'Enter') {
        question.click();
      }
    }
  });
});
