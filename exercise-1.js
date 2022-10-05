/* Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios
que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima
a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:". */
const users = [
    {name: "Abel", years: 43},
    {name: "Maria", years: 18},
    {name: "Pedro", years: 14},
    {name: "Samantha", years: 32},
    {name: "Raquel", years: 16}
];

let underAge = []
let overAge = []

for (const user of users) {
    if (user.years < 18) {
        underAge.push(user.name)
    } else {
        overAge.push(user.name)
    }
}

console.log("Usuarios de menores edades:", ...underAge);
console.log("Usuarios de mayores edades:", ...overAge);