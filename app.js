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


//---------------------------------------------------------------------------------------------------------
//------------------------------------- **Iteración #5: Filter**-------------------------------------------
//---------------------------------------------------------------------------------------------------------


/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean mayor que 18*/

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const adultos = ages1.filter(function (numeros){
    return numeros >= 18;})

console.log(adultos)


/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.*/

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages.filter(function (numeros){
    return numeros % 2 == 0;})
 console.log(pares)


/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers1 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamerFilter = streamers1.filter(function (streamers1){
    return streamers1.gameMorePlayed == 'League of Legends';})

console.log(streamerFilter);


/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
usar la funcion .includes() para la comprobación.*/

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersFilter = streamers2.filter(function (gamer){
     if (gamer.name.includes('u')){
        return gamer.name;

    };})

console.log(streamersFilter)
 

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
.age sea mayor que 35.*/

const streamersFilter2 = streamers2.filter(function (gamer){
   
    if (gamer.gameMorePlayed.includes('Legends') ){
        if (gamer.age>35 ){gamer.gameMorePlayed = gamer.gameMorePlayed.toUpperCase() }
       return gamer;

   };})

console.log(streamersFilter2)


// 5_6 uy 5_7 esta en app y html por separado




//---------------------------------------------------------------------------------------------------------
//------------------------------------- **Iteración #6: Find**-------------------------------------------
//---------------------------------------------------------------------------------------------------------


//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];


const found = numbers.find(element => element == 100);

console.log(found);


//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const movieFound = movies.find(element => element.date == 2010);

console.log(movieFound);

/*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
lo queremos meter en la propiedad .mutation del objeto fusionado.*/
const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const alientFound = aliens.find(element => element.name == 'Cucushumushu');
const mutationFound = mutations.find(element => element.name == 'Porompompero');
const alienAll = { ...alientFound, mutuacion: {...mutationFound}}

console.log(alienAll)


//---------------------------------------------------------------------------------------------------------
//------------------------------------- **Iteración #7: Reduce**-------------------------------------------
//---------------------------------------------------------------------------------------------------------



/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acc, alumnos) => acc + alumnos.score, 0);

console.log(totalScore)

/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función .reduce().*/

const comprobar = (dato)=>{
    return dato>4? dato : 0
}
const totalScorePass = exams.reduce((acc, studens) => acc + comprobar(studens.score), 0)

console.log(totalScorePass)

console.log("-------")


/*7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/

const totalScoremedia = exams.reduce((acc, studens) => acc + studens.score, 0)
let media = totalScoremedia/exams.length
console.log(media)

//---------------------------------------------------------------------------------------------------------
//------------------------------------- **Iteración #8: Bonus**-------------------------------------------
//---------------------------------------------------------------------------------------------------------



/*6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
.filter() y usa .reduce() para conseguir la media de sus .score.
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
array .gender.*/

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]



const games = videogames.filter(function (gamer){  
    if (gamer.genders.includes('RPG') )return gamer;
   })
const totalScoremedia2 = games.reduce((acc, gamers) => acc + gamers.score, 0)
   let media2 = totalScoremedia2/games.length
   console.log(media2)




