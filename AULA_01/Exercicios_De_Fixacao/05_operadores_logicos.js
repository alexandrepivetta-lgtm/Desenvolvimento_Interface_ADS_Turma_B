// 5. Operadores lógicos
const idade = 22;
const possuiCadastro = true;
const contaAtiva = true;

console.log("=== 5. Operadores Lógicos ===");
console.log("Idade mínima e cadastro:", idade >= 18 && possuiCadastro);
console.log("Conta ativa ou cadastro:", contaAtiva || possuiCadastro);
console.log("Conta não ativa:", !contaAtiva);
