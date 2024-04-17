const btns = document.querySelectorAll('.answer-btn');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    if (answer.style.display === 'none') {
      answer.style.display = 'block';
      btn.textContent = 'Hide Answer';
    } else {
      answer.style.display = 'none';
      btn.textContent = 'Show Answer';
    }
  });
});