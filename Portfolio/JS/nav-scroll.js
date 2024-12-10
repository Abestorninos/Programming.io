
const navLinks = document.querySelectorAll('.nav-item a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const pixelPositions = {
      '#home': 0,
      '#about': 500,
      '#skills': 1300,
      '#services': 1900
    };

    window.scrollTo({ 
      top: pixelPositions[targetId], 
      behavior: 'smooth' 
    });

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
