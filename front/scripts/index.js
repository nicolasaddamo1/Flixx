
const Url="http://localhost:3000/movies" 
const createMovie = require('./createMovie.js');
const cardGenerator = require('./renderCards.js');
const axios = require('axios');


const getData = async()=> {
try { const {data}= await axios.get(Url);
data.map(movie=>cardGenerator(movie))
} catch ({message}) {
  alert(message);
}
  
}

document.addEventListener("DOMContentLoaded", () =>{

    getData();
    const submit = document.getElementById("movieForm");
    submit?.addEventListener("submit", createMovie);
    console.log("hola");
  })