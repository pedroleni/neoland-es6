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

//---------------------------------------------------------------------------------------------------------
//------------------------------------**Iteración #3: Spread Operator**-----------------------------------
//---------------------------------------------------------------------------------------------------------

/*3.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList2 = [32, 54, 21, 64, 75, 43]

const copia = [...pointsList2];
console.log(copia)

/*3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copia2 = {...toy2};
console.log(copia2)

/*3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
spread operatos.*/
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const copia3 = [...pointsList, ...pointsLis2]
console.log(copia3)

/*3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
con spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const copia4 ={
    ...toy,
    ...toyUpdate
}

console.log(copia4)


/*3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

function eliminar(array, indice) {
    var resultado = []
    for (var i = 0; i < array.length; i++) {
      if (i !== indice) {
        resultado.push(array[i]);
      }
    }
    return resultado;
  }

const copia5 = [...colors];
let finalcopia= eliminar (copia5, 2)
console.log(finalcopia)



//---------------------------------------------------------------------------------------------------------
//------------------------------------**Iteración #4: Map**- ----------------------------------------------
//---------------------------------------------------------------------------------------------------------
/*4.1 Dado el siguiente array, devuelve un array con sus nombres
utilizando .map().*/
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const userss = users.map( users => users.name);
console.log(userss)

/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
empiece por 'A'.*/

const users1 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const usersss = users1.map( users => 
    (users.name));
let copiaModificada=[]
usersss.forEach((element)=>{
    if(element.toLowerCase().charAt(0)=='a'){
        element='Anacleto'
        copiaModificada.push(element)
    }else{copiaModificada.push(element)}

})
console.log(copiaModificada)


/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores
de la propiedad .name y añade al valor de .name el string ' (Visitado)'
cuando el valor de la propiedad isVisited = true.*/
const cities = [
	{isVisited:true, name: 'Tokyo'},
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'},
	{isVisited:false, name: 'Seul'}
];

const nameCity = cities.map( cities => 
    (cities.name));

const inVisited = cities.map(cities =>(cities.isVisited))

inVisited.forEach((element, index)=>{
    if (element == true ){
        nameCity [index] += ' (Visitado)'
    }
})
console.log(nameCity)









