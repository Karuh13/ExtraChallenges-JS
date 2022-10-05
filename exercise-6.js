/* Usa un bucle para recorrer el array de productos (`products`) y añade al array
 `goodProducts` los que tengan más de 20 ventas (`sellCount`) y al array `badProducts`
 los que tengan menos. */

const goodProducts = [];
const badProducts = [];
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

for (const product of products) {
    product.sellCount >= 20 
        ? goodProducts.push(product.name) 
        : badProducts.push(product.name);
}

console.log(goodProducts.join(", ") +"\n" + badProducts.join(", "));