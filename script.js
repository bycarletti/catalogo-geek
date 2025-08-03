const carrossel = document.querySelector('.carrossel');
const itens = document.querySelectorAll('.item');
let index = 0;

setInterval(() => {
  index = (index + 1) % itens.length;
  carrossel.scrollTo({
    left: itens[index].offsetLeft,
    behavior: 'smooth'
  });
}, 3000);
