function piramidBuild(rows) {
    let piramide = []
    for (let i = 1; i <= rows; i = i + 2) {
        let row = " ".repeat((rows - i) / 2) + "*".repeat(i);
        piramide.push(row)
    }
    console.log(piramide.join("\n"));
}

piramidBuild(7)

/* let piramide = '';
for (let i = 2; i <= 7; i++) {
    console.log(`Estoy en la vuelta ${i-1} del bucle exterior`);
  for (let j = 1; j < i; j++) {
    console.log(`    Estoy en la vuelta ${j} del bucle interior mi límite es ${i}`);
  }
}

  console.log(piramide); */