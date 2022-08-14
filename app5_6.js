/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
los streamers que incluyan la palabra introducida en el input. De esta forma, si
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

 /// index5_6.html 


const myInput = document.querySelector("#toFilterStreamers");
const search = () => {
    const filteredGamer = streamers3.filter((gamer) =>
    //Esta es la condicion que filtra
      gamer.name.toLowerCase().includes(myInput.value.toLowerCase())
    );
    console.log("filtered:", filteredGamer)
    
};

