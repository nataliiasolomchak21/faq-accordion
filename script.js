document.addEventListener('click', function(event) {
    const question = event.target.closest('.accordion-box h2');
    if (!question) return;
  
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
  
  document.addEventListener('keydown', function(event) {
    const arrowKeys = ['ArrowUp', 'ArrowDown', 'Enter'];
    const question = event.target.closest('.accordion-box h2');
    if (!question) return;
  
    const questions = Array.from(document.querySelectorAll('.accordion-box h2'));
    const currentIndex = questions.indexOf(question);
  
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
  