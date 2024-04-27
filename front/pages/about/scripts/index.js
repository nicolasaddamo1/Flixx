console.log("Hola");

class Activity{
    constructor(id, title,descripcion,imgUrl){
        this.id = id;
        this.title = title;
        this.description = descripcion;
        this.imgUrl = imgUrl;
    }
}
const objeto_act = new Activity

class Repository {
    constructor() {
        this.activities = [];
        console.log(this.activities)
    }
    getAllActivities=()=>  this.activities; //sin llaves si es 1 sola linea 

    // getAllActivities() {
    //     return this.activities;

    // }
    createActivity(obj) {
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== activityId);
        // this activities es igual al filtrado, te muestra todos los id que sean diferente al id pasado por parametro
    }
}

const repository = new Repository();

//!creAMOS EL BOTON Y SUS EVENTOS
//se capturan partes del html con distintos tipos 
//uno con el nombre del tag y otro con el nombre asignado al id
const add=document.getElementById("add")
const body=document.getElementsByTagName("body")[0]

const cb= ()=>{

        //?catcheamos lo que hay dentro de los inputs:
        const inNombre=document.getElementById("in_titulo")
        const inDescripcion=document.getElementById("in_descripcion")
        const inImgurl=document.getElementById("in_imgurl")
        
        //?recuperamos lo que arroja cada input.:
        const nombre=inNombre.value
        const descripcion=inDescripcion.value
        const imgUrl=inImgurl.value
    
        objeto_act.nombre=nombre
        objeto_act.description=descripcion
        objeto_act.imgUrl=imgUrl
        objeto_act.id=()=>{objeto_act.id.lenght +1}
        //?creamos un tarjeta
        const cardDiv = document.createElement('div');
        const titleHeading = document.createElement('h3');
        const descriptionParagraph = document.createElement('p');
        const imageElement = document.createElement('img');
        const conten = document.getElementById("container");
        //clases para agregar al css
        cardDiv.classList.add("cardDiv")
        titleHeading.classList.add("cardH3")
        descriptionParagraph.classList.add("cardP")
        imageElement.classList.add("img")
        if (!nombre || !descripcion || !imgUrl){
            alert("debes llenar todos los campos")
            return
        }


        titleHeading.innerText=nombre
        descriptionParagraph.innerText=descripcion
        imageElement.src = imgUrl;
        //recuperamos el body y lo guardamos en una variable,
      

                // Agregar elementos a la tarjeta de actividad
        cardDiv.appendChild(titleHeading);
        cardDiv.appendChild(descriptionParagraph);
        cardDiv.appendChild(imageElement);

        body.appendChild(cardDiv)
        // Devolver la tarjeta de actividad finalizada
        //conten.appendChild(cardDiv)
        console.log(cardDiv)
        inNombre.value=""//se vacian
        inDescripcion.value=""//se vacian
        inImgurl.value=""//se vacian
        return cardDiv;

    }
add.addEventListener("click",cb)

module.exports={Activity,Repository};
/*function activityToHTML(activity) {
    // Extraer propiedades del objeto activity usando destructuring
    const { title, description, imageUrl } = activity;

    // Crear elementos HTML para la tarjeta de actividad
    const cardDiv = document.createElement('div');
    const titleHeading = document.createElement('h3');
    const descriptionParagraph = document.createElement('p');
    const imageElement = document.createElement('img');

    // Asignar valores a las propiedades correspondientes
    titleHeading.textContent = title;
    descriptionParagraph.textContent = description;
    imageElement.src = imageUrl;

    // Agregar clases CSS a los elementos
    cardDiv.classList.add('activity-card');
    titleHeading.classList.add('activity-title');
    descriptionParagraph.classList.add('activity-description');
    imageElement.classList.add('activity-image');

    // Agregar elementos a la tarjeta de actividad
    cardDiv.appendChild(titleHeading);
    cardDiv.appendChild(descriptionParagraph);
    cardDiv.appendChild(imageElement);

    // Devolver la tarjeta de actividad finalizada
    return cardDiv;
}

// Ejemplo de uso:
const myActivity = {
    title: 'Hacer ejercicio',
    description: 'Ir al gimnasio y hacer una rutina de ejercicios.',
    imageUrl: 'ejercicio.jpg'
};

// Convertir la instancia de Activity a un elemento HTML
const activityCard = activityToHTML(myActivity);

// Agregar la tarjeta de actividad al cuerpo del documento
document.body.appendChild(activityCard);
    */