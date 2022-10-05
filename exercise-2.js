/* Usa un for para remplazar todas las comidas que no sean veganas con las comidas del
 array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante. */

const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
    {name: "Salad", isVegan: true},
    {name: "Salmon", isVegan: false},
    {name: "Tofu", isVegan: true},
    {name: "Burger", isVegan: false},
    {name: "Rice", isVegan: true},
    {name: "Pasta", isVegan: true}
    ];

for (const food of foodSchedule) {
    if (!food.isVegan) {
        food.isVegan = true
        food.name = fruits.splice(0,1)[0]
    }
}

console.log(foodSchedule);