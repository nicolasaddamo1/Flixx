
function cardGenerator({title, year, director, duration, genre, rate, poster}){
    const cardContainer=document.getElementById('movie-section');
    const cardDiv=document.createElement('div');
    // const barra=document.createElement('hr');
    // barra.style="border: 1px solid white";
    // barra.style.boxShadow="1px 5px 10px red";
     cardDiv.classList.add('movie-container');
    // //!title
    // const titleElement=document.createElement('a');
    // titleElement.innerText=title;
    // titleElement.href='#pordefinir';
    // titleElement.style.fontSize="19px";
    // cardDiv.appendChild(titleElement);
    
    //     //!poster
    //     const posterElement=document.createElement('img');
    //     posterElement.classList.add('imagenes');
    //     posterElement.src=poster;
    //     cardDiv.appendChild(posterElement);

    // cardDiv.appendChild(barra);
    // //!year
    // const yearElement=document.createElement('h4');
    // yearElement.innerText=`Año: ${year}`;
    // yearElement.style.textAlign="left";    
    // cardDiv.appendChild(yearElement);

    // //!director
    // const directorElement=document.createElement('h4');
    // directorElement.innerText=`Director: ${director}`;
    // directorElement.style.textAlign="left";
    // cardDiv.appendChild(directorElement);
    
    // //!duration
    // const durationElement=document.createElement('h4');
    // durationElement.innerText=`Duracion: ${duration}`;
    // durationElement.style.textAlign="left";
    // cardDiv.appendChild(durationElement);

    // //!genre
    // const genreElement=document.createElement('h4');
    // const genres = genre.join(', ');
    // genreElement.innerText=`Genero: ${genres}`;
    // genreElement.style.textAlign="left";
    // cardDiv.appendChild(genreElement);
    
    // //!rate
    // const rateElement=document.createElement('h4');
    // rateElement.innerText=`Puncuacion: ${rate}/10`;
    // rateElement.style.textAlign="left";
    // cardDiv.appendChild(rateElement);
    
    //*refactorizado:
    cardDiv.innerHTML=`
    <img src="${poster}" class="imagenes"/>
    <hr style="border: 1px solid white;box-shadow: 1px 5px 10px red;">
    <h3><strong> <a href="#pordefinir">${title}</strong></a></h3>
    <h4><strong>Año: </strong>${year}</h4>
    <h4><strong>Director: </strong>${director}</h4>
    <h4><strong>Duracion: </strong>${duration}</h4>
    <h4><strong>Genero: </strong>${genre.join(', ')}</h4>
    <h4><strong>Puntuacion: </strong>${rate}/10</h4>
    `;
cardContainer?.appendChild(cardDiv)
}

module.exports = cardGenerator;