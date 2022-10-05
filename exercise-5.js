/* Usa un bucle para sumar el total de las ventas (`sellCount`) de todos los productos y mostrar por consola la media de ventas. */

const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Impar de zapatos', sellCount: 6}
];

let sellCount = 0;
for (const product of products) {
    sellCount += product.sellCount;
}
let mean = sellCount / products.length

console.log(mean);