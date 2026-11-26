
const valorCompra = 200;
let total;

if (valorCompra >= 200) {
  total = valorCompra * 0.90;
} else {
  total = valorCompra;
}

console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
