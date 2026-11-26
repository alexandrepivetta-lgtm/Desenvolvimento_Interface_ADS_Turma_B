# Aula 3 — Exercícios passo a passo (respostas)

## Exercício 1 — Localização no DOM

1. `document.querySelector('#titulo')` retorna o elemento `<h1 id="titulo">Calculadora de Média</h1>`.
2. `document.querySelector('#resultado')` retorna o parágrafo `<p id="resultado">` onde as mensagens aparecem.
3. Para alterar o texto: `document.querySelector('#resultado').textContent = 'Teste do DOM';`
4. **Explicação:** `document.querySelector('#...')` é o comando que **seleciona** o elemento (o `#` indica busca por ID). A atribuição a `.textContent` é o que **altera** a página, trocando o texto visível sem mexer no arquivo HTML.

## Exercício 2 — Evento de clique

```html
<button id="teste" type="button">Teste</button>
```

```js
const botaoTeste = document.querySelector('#teste');
botaoTeste.addEventListener('click', () => {
 console.log('Clique detectado!');
});
```

A cada clique, o console mostra `Clique detectado!`. Ao terminar, o botão de teste e esse código são removidos (o projeto final não os contém).

## Exercício 3 — Conversão de tipos

1. `typeof '8'` → `"string"`.
2. `typeof Number('8')` → `"number"`.
3. `'8' + '7'` → `"87"` (concatenação de textos). `Number('8') + Number('7')` → `15` (soma numérica).
4. **Explicação:** `.value` de um campo sempre devolve texto. Sem converter com `Number()`, `a + b + c` concatenaria as notas ("879") em vez de somá-las, e a média ficaria errada.

## Exercício 4 — Validação

| Teste | Mensagem exibida | Condição `if` responsável |
|---|---|---|
| Nota 11 | Use notas entre 0 e 10. | `if (invalida)`, em que `nota > 10` é verdadeiro dentro do `some()` |
| Nota -1 | Use notas entre 0 e 10. | `if (invalida)`, em que `nota < 0` é verdadeiro dentro do `some()` |
| Nome vazio | Preencha todos os campos. | `if (!estudante || nota1.value === '' || nota2.value === '' || nota3.value === '')`, com `!estudante` verdadeiro |

## Exercício 5 — Limites da classificação

| Teste | Resultado |
|---|---|
| Média exatamente 5 (5, 5, 5) | média 5.0; **Recuperação** |
| Média exatamente 7 (7, 7, 7) | média 7.0; **Aprovado** |
| Média inferior a 5 (4, 4, 4) | média 4.0; **Reprovado** |

**Por que a ordem importa:** `classificar()` testa primeiro `media >= 7` e depois `media >= 5`. Como o `return` encerra a função no primeiro `if` verdadeiro, quem tem média 8 sai como Aprovado antes de chegar à segunda condição. Se `media >= 5` viesse primeiro, qualquer média a partir de 5 (inclusive 8 ou 10) seria classificada como Recuperação, e a faixa de Aprovado nunca seria alcançada.

## Exercício 6 — Melhoria da experiência

1. Foi acrescentada abaixo do título a instrução visível **"Digite notas entre 0 e 10."** em `index.html`.
2. A cor do botão (`#662c92`, texto branco) já tem bom contraste, então foi mantida. No hover, escurece para `#43054e`.
3. Com a tecla Tab, o foco passa por nome, nota 1, nota 2, nota 3 e botão, nessa ordem, com contorno rosa (`#ec0089`) visível em cada elemento.
4. A mensagem de resultado continua legível (texto escuro `#25202b` sobre fundo `#f5eff9`) e é anunciada por leitores de tela graças ao `aria-live="polite"`.

## Síntese do módulo — Reflexão

Linhas do projeto responsáveis por cada papel:

- **Entrada:** `const n1 = Number(nota1.value);` lê o texto digitado no campo e o converte em número.
- **Decisão:** `if (media >= 7) return 'Aprovado';` (dentro de `classificar`) decide a situação do estudante com base na média. A validação `if (invalida)` também é uma decisão: barra dados fora do intervalo.
- **Saída:** `resultado.textContent = ...` mostra na própria página a média e a situação.
