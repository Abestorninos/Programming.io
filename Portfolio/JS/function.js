
const elements = document.querySelectorAll('*');
const observerOptions = {
  root: null,
  threshold: 1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

elements.forEach((element) => observer.observe(element));