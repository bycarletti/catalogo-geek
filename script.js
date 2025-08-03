// Animação das seções ao entrarem na tela
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visivel');
    }
  });
}, {
  threshold: 0.2
});

// Observa todas as seções com a classe .catalogo
document.querySelectorAll('.catalogo').forEach(section => {
  observer.observe(section);
});
