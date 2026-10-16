//RESUELVE LOS EJERCICIOS AQUÍ

//1

const numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = (array) => {
    return array.map((n) => n ** n);
};

const resultado = elevados(numbers);
console.log(resultado);

//2

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const resultado2 = foodList.map((comida) => {
    if (comida === 'Pizza') {
        return 'Como soy de Italia, amo comer Pizza';
    } else if (comida === 'Ramen') {
        return 'Como soy de Japón, amo comer Ramen';
    } else if (comida === 'Paella') {
        return 'Como soy de Valencia, amo comer Paella';
    } else {
        return 'Aunque no como carne, el ' + comida + ' es sabroso';
    }
});

console.log(resultado2)