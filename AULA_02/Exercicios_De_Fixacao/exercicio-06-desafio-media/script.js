const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  if (t1 === "") {
    saida.textContent = "Erro: o campo Nota 1 está vazio.";
    return;
  }
  if (t2 === "") {
    saida.textContent = "Erro: o campo Nota 2 está vazio.";
    return;
  }
  if (t3 === "") {
    saida.textContent = "Erro: o campo Nota 3 está vazio.";
    return;
  }

  const n1 = Number(t1);
  const n2 = Number(t2);
  const n3 = Number(t3);

  if (!Number.isFinite(n1) || n1 < 0 || n1 > 10) {
    saida.textContent = "Erro: Nota 1 inválida (informe um valor entre 0 e 10).";
    return;
  }
  if (!Number.isFinite(n2) || n2 < 0 || n2 > 10) {
    saida.textContent = "Erro: Nota 2 inválida (informe um valor entre 0 e 10).";
    return;
  }
  if (!Number.isFinite(n3) || n3 < 0 || n3 > 10) {
    saida.textContent = "Erro: Nota 3 inválida (informe um valor entre 0 e 10).";
    return;
  }

  const media = (n1 + n2 + n3) / 3;
  const situacao = media >= 6 ? "Aprovado" : "Recuperação";

  saida.textContent = `Média ${media.toFixed(2)} - ${situacao}`;
});
