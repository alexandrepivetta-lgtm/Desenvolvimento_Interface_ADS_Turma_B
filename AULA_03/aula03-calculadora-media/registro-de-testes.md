# Registro de testes — Aula 3

Aplicação: Calculadora de Média (`index.html`, `estilo.css`, `script.js`).
Regra de classificação: Aprovado (média ≥ 7), Recuperação (5 ≤ média < 7), Reprovado (média < 5).

Os casos foram executados no Google Chrome, preenchendo os campos e clicando em **Calcular média**. O console (F12) foi acompanhado e não apresentou erros em nenhum caso.

## Casos obrigatórios

| Caso | Dados de entrada | Esperado | Obtido | Status |
|---|---|---|---|---|
| 1 | Nome vazio; 8, 7, 9 | Preencha todos os campos. | Preencha todos os campos. | Passou |
| 1b | Nome "Ana"; 8, (vazia), 9 | Preencha todos os campos. | Preencha todos os campos. | Passou |
| 2 | Nota não numérica ("abc", com o campo temporariamente em `type="text"`) | Use notas entre 0 e 10. | Use notas entre 0 e 10. | Passou |
| 3 | -1, 7, 9 | Use notas entre 0 e 10. | Use notas entre 0 e 10. | Passou |
| 3b | 11, 7, 9 | Use notas entre 0 e 10. | Use notas entre 0 e 10. | Passou |
| 4 | 5, 5, 5 | Média 5.0; Recuperação | Ana: média 5.0. Situação: Recuperação. | Passou |
| 5 | 7, 7, 7 | Média 7.0; Aprovado | Ana: média 7.0. Situação: Aprovado. | Passou |
| 6 | 4, 4, 4 | Média 4.0; Reprovado | Ana: média 4.0. Situação: Reprovado. | Passou |

## Casos adicionais

| Caso | Dados de entrada | Esperado | Obtido | Status |
|---|---|---|---|---|
| A | Mariana; 8, 7, 9 (caso válido da aula) | Mariana: média 8.0. Situação: Aprovado. | Mariana: média 8.0. Situação: Aprovado. | Passou |
| B | Ana; 6, 6, 6 | Média 6.0; Recuperação | Ana: média 6.0. Situação: Recuperação. | Passou |
| C | Ana; 10, 10, 10 | Média 10.0; Aprovado | Ana: média 10.0. Situação: Aprovado. | Passou |
| D | Ana; 0, 0, 0 | Média 0.0; Reprovado | Ana: média 0.0. Situação: Reprovado. | Passou |
| E | Nome só com espaços; 8, 7, 9 | Preencha todos os campos. | Preencha todos os campos. | Passou |

Teste de funções no console: `calcularMedia(8, 7, 9)` retornou `8` e `classificar(8)` retornou `Aprovado`.

## Resultado

13 casos executados, 13 aprovados. As imagens de evidência estão em `../Evidencias/`.
