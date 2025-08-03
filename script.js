html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background-color: #121212;
  color: #fff;
}

header {
  background-color: #ff3860;
  text-align: center;
  padding: 30px 15px;
}

.logo {
  width: 180px;
  margin-bottom: 10px;
}

.slogan {
  font-size: 1.2em;
  color: #ffe57f;
  margin-top: 10px;
}

/* Menu */
.menu {
  background-color: #1f1f1f;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: 0 2px 6px rgba(0,0,0,0.5);
}

.menu ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
}

.menu li {
  margin: 8px 12px;
}

.menu a {
  color: #ffdd57;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.menu a:hover {
  color: #ff3860;
}

/* Carrossel de destaques */
.carrossel-destaque {
  padding: 40px 15px;
  background-color: #1e1e1e;
  text-align: center;
}

.carrossel-destaque h2 {
  color: #ff3860;
  margin-bottom: 25px;
}

.carrossel {
  display: flex;
  overflow: hidden;
  max-width: 320px;
  margin: auto;
  position: relative;
}

.item {
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
  text-align: center;
  display: none;
}

.item.ativo {
  display: block;
}

.item img {
  width: 100%;
  border-radius: 8px;
}

.item h3 {
  margin: 15px 0 10px;
  color: #ffdd57;
}

.item a {
  display: inline-block;
  background-color: #ff3860;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
}

/* Catálogo */
.catalogo {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  padding: 40px 15px;
}

.catalogo.visivel {
  opacity: 1;
  transform: translateY(0);
}

.catalogo h2 {
  font-size: 2em;
  margin-bottom: 30px;
  text-align: center;
  color: #ff3860;
}

/* Produto */
.camiseta {
  background-color: #2c2c2c;
  border-radius: 8px;
  margin: 15px auto;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  padding: 20px;
  transition: transform 0.3s;
}

.camiseta:hover {
  transform: scale(1.04);
}

.camiseta img {
  width: 100%;
  border-radius: 6px;
}

.camiseta h3 {
  margin: 15px 0 10px;
  font-size: 1.1em;
  color: #ffdd57;
}

.botao {
  display: inline-block;
  background-color: #ff3860;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  transition: background 0.3s;
}

.botao:hover {
  background-color: #e03e4f;
}

/* Rodapé */
footer {
  background-color: #1f1f1f;
  color: #ccc;
  text-align: center;
  padding: 20px;
  font-size: 0.9em;
}
