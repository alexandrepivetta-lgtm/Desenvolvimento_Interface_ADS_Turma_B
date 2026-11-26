# Testes da aplicação final — Guia de evolução (Aula 3)

Projeto: `calculadora-media/` (`index.html`, `style.css`, `script.js`), exatamente o código da Aula 3 do guia, com uma única alteração (veja abaixo).

Todos os casos foram executados no Google Chrome, clicando em **Calcular média**. O console não apresentou erros.

## Casos do guia

| Entrada | Média | Esperado | Obtido | Status |
|---|---|---|---|---|
| Mariana; 8, 7 e 9 | 8,0 | Aprovado e mensagem verde | Média 8.0, Aprovado, classe `aprovado` (verde) | Passou |
| Carlos; 5, 6 e 6 | 5,7 | Recuperação e mensagem amarela | Média 5.7, Recuperação, classe `recuperacao` (amarela) | Passou |
| Ana; 3, 4 e 2 | 3,0 | Reprovado e mensagem vermelha | Média 3.0, Reprovado, classe `reprovado` (vermelha) | Passou |
| Nome vazio; 8, 7 e 9 | - | Solicitar o nome | Informe o nome do estudante. | Passou |
| Nota 12 (Ana; 12, 7 e 9) | - | Informar intervalo de 0 a 10 | As notas devem estar entre 0 e 10. | Passou |

## Casos adicionais

| Entrada | Esperado | Obtido | Status |
|---|---|---|---|
| Ana; 8, (vazia) e 9 | Preencha todas as notas. | Preencha todas as notas. | Passou |
| Ana; -1, 7 e 9 | As notas devem estar entre 0 e 10. | As notas devem estar entre 0 e 10. | Passou |
| Ana; 7, 7 e 7 | Média 7.0; Aprovado | Média 7.0; Aprovado | Passou |
| Nome só com espaços; 8, 7 e 9 | Informe o nome do estudante. | Informe o nome do estudante. | Passou |
| Botão **Limpar** depois de um cálculo | Volta a "O resultado será apresentado aqui." e foca o campo nome | Mensagem inicial restaurada, cor removida, foco no campo nome | Passou |

## Alteração feita no código do guia

Foi acrescentado `novalidate` na tag `<form>`. Sem ele, o Chrome bloqueia o envio por causa do atributo `max="10"` e mostra só o balão do próprio navegador: a validação em JavaScript nunca roda e a mensagem esperada para a nota 12 não aparece na página. Com `novalidate`, a validação do `script.js` assume, como o guia pede ("type number não substitui a validação em JavaScript").

## Resultado

10 casos, todos aprovados. Imagens em `Evidencias/` (arquivos `Evidencia_Guia_*.png`).

## Checklist final do guia

- [x] Os três arquivos estão na mesma pasta.
- [x] Os identificadores do HTML correspondem aos seletores do JavaScript.
- [x] As notas são convertidas para número.
- [x] Campos vazios e notas fora do intervalo são tratados.
- [x] As funções devolvem os resultados esperados.
- [x] O botão Calcular atualiza a página sem recarregá-la.
- [x] O botão Limpar restaura a mensagem inicial.
- [x] Todos os casos de teste foram executados.
