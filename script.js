const botoes = document.querySelectorAll('[data-filtro]');
const produtos = document.querySelectorAll('.camiseta');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const filtro = botao.getAttribute('data-filtro');
    produtos.forEach(produto => {
      const categoria = produto.getAttribute('data-categoria');
      produto.style.display = (filtro === 'todos' || categoria === filtro) ? 'block' : 'none';
    });
  });
});
