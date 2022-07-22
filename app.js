//---------------------------------------------------------------------------------------------------------
//---------------------------------**Iteración #1: Arrows**-------------------------------------------------
//---------------------------------------------------------------------------------------------------------
/*Crea una arrow function que tenga dos parametros a y b y
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
por consola la suma de los dos parametros.*/

const suma= (a = 10 , b =5)=>{
    let sum= a+b;
    return sum;
}

//1.1 Ejecuta esta función sin pasar ningún parametro

console.log(suma())

//1.2 Ejecuta esta función pasando un solo parametro

console.log(suma(11))


//1.3 Ejecuta esta función pasando dos parametros

console.log(suma(12,3))



//---------------------------------------------------------------------------------------------------------
//---------------------------------------**Iteración #2: Destructuring**-----------------------------------
//---------------------------------------------------------------------------------------------------------

/*2.1 En base al siguiente javascript, crea variables en base a las propiedades
del objeto usando object destructuring e imprimelas por consola. Cuidado,
no hace falta hacer destructuring del array, solo del objeto.*/

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}


const {title, gender, year} = game
console.log(title)
console.log(gender) 
console.log(year)

/*2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/


const fruits = ['Banana', 'Strawberry', 'Orange'];


const [fruit1 , fruit2, fruit3] = fruits;


console.log(fruit1)
console.log(fruit2)
console.log(fruit3)


/*2.3 En base al siguiente javascript, usa destructuring para crear 2
variables igualandolo a la función e imprimiendolo por consola.*/

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const variableUno= animalFunction().name

const variableDos= animalFunction().race

console.log(variableUno)
console.log(variableDos)


/*2.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const carFunction = () => {
    return {name: 'Mazda 6', itv: [2015, 2011, 2020]}
};

console.log(carFunction().name)
console.log(carFunction().itv)


const [var1 , var2, var3]= carFunction().itv
console.log(var1)

