document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.mypastwork');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('.is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }); 

  fadeElements.forEach(element => {
    observer.observe(element);
  });
});