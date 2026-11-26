const campoNome = document.getElementById("nome");
const botao = document.getElementById("saudar");
const saida = document.getElementById("saida");

botao.addEventListener("click", function () {
  const nome = campoNome.value.trim();

  if (nome === "") {
    saida.textContent = "Por favor, preencha o seu nome.";
    return;
  }

  saida.textContent = `Olá, ${nome}!`;
});
