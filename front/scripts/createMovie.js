//title year director duratior genre rate poster
const axios=require('axios');
function validateForm({title, year, director, duration, genre, rate, poster}){
    if(!title || !year || !director || !duration || !genre[0] || !rate || !poster){
        return "Todos los campos son obligatorios";
    }
    if(director.length<5 || director.length>50){
        return "El nombre del director debe ser mayor a 5 caracteres y menor a 50";
    }
    if (isNaN(rate) || rate<0 || rate>10){
        return "La puntuación debe ser un valor numerico entre 0 y 10";
    }    
    if (!poster.includes("https://") && !poster.includes("http://")){
        return "La URL de la imagen no es válida";
    }
    return null
    
    
 }    
function createMovie(event){
    event.preventDefault();
    console.log("hola2")
    const title=document.getElementById('title').value;
    const year=document.getElementById('year').value;
    const director=document.getElementById('director').value;
    const duration=document.getElementById('duration').value;
    const genre=document.getElementById('genre').value.split(' ');
    const rate=document.getElementById('rate').value;
    const poster=document.getElementById('poster').value;

    const newMovie={title, year, director, duration, genre, rate, poster}
    
    const error=validateForm(newMovie);

    if(error) return alert(error);
    //return alert ("todo correcto")
    axios
    .post("http://localhost:3000/movies", newMovie)
    .then(()=>alert("pelicula creada") )
    .catch(error => console.error("Error al crear la película:", error));

}
module.exports = createMovie; 
