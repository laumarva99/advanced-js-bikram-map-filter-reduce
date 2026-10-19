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

//3

const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

const result3 = staff.map((persona) => {
    return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});

console.log(result3);

//4

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((n) => n % 2 !== 0);

console.log(result4);

//5

const foodList2 = [
    {
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }];

const result5 = foodList2

    .filter((plato) => plato.isVeggie)
    .map((plato) => {
        if (plato.name.includes('burguer')) {
            return `Que rica ${plato.name} me voy a comer!`;
        } else {
            return `Que rico ${plato.name} me voy a comer!`;
        }
    });

console.log(result5);

//6


const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const result6 = inventory
    .filter((producto) => producto.price > 300)
    .map((producto) => producto.name);


console.log(result6);

//7

const numeros = [39, 2, 4, 25, 62];

const result7 = numeros.reduce((acc, n) => acc * n, 1);

console.log(result7);