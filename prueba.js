/*
Agrega la clase js-list a la seccion de datos
Guardar el elemento en una variable
Copia el código de cada li del html dentro de una variable.

*/

// const list = document.querySelector(".js-list");
// const kittenOne = ` <li class="card">
//     <article>
//         <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
//         <h3 class="card_title">Anastacio</h3>
//         <h4 class="card_race">Siamés</h4>
//         <p class="card_description">
//             Porte elegante, su patrón de color tan característico y sus ojos
//             de un azul intenso, pero su historia se remonta a Asía al menos
//             hace 500 años, donde tuvo su origen muy posiblemente.
//         </p>
//     </article>
// </li>`;
// const kittenTwo = `<li class="card">
//                     <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
//                     <h3 class="card_title">Fiona</h3>
//                     <h4 class="card_race">Sphynx</h4>
//                     <p class="card_description">
//                         Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
//                         hasta con pinta de alienígena han llegado a definir a esta raza
//                         gatuna que se caracteriza por la «ausencia» de pelo.
//                     </p>
//                 </li>`;
// const kittenThree = `<li class="card">
//                     <img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
//                     <h3 class="card_title">Cielo</h3>
//                     <h4 class="card_race">Maine Coon</h4>
//                     <p class="card_description">
//                         Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
//                         bella mirada se ha convertido en una de sus señas de identidad.
//                         Sus ojos son grandes y las orejas resultan largas y en punta.
//                     </p>
//                 </li>`;

// list.innerHTML = kittenOne + kittenTwo + kittenThree;



//EJERCICIO 2 ADAKITTEN

/*
En este ejercicio vamos a mostrar u ocultar el formulario una vez el usuario haya hecho click en el boton de +
Busca el elemento + y agrégale la clase js-btn-add.
Busca el elemento html y guarda el elemento en una variable utilizando el document.querySelector(".js-btn-add").
Agrega un evento click a este botón.
*/


const button = document.querySelector(".js-btn-add");
const list1 = document.querySelector(".new-form");
button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("has hecho click");
    const form = document.querySelector(".js-new-form");
    form.classList.remove("collapsed");
})

//EJERCICIO 3 FILTRAR

const buttonS = document.querySelector(".js_button-search");
const inputDesc = document.querySelector(".js_in_search_desc");

buttonS.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("ha hecho click");
    const desc = inputDesc.value;
    console.log(desc);
    //solo se nos ve en la consola, que falta????

})
//EJERCICIO 4
const kittenImage1 = "https://dev.adalab.es/gato-siames.webp";
const kittenName1 = "Anastacio";
const kittenDesc1 =
    " Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenRace1 = "Siamés";

const kittenImage2 = "https://dev.adalab.es/sphynx-gato.webp";
const kittenName2 = "Fiona";
const kittenDesc2 = ""
" Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRace2 = "Sphynx";

const kittenImage3 = "https://dev.adalab.es/maine-coon-cat.webp"
const kittenName3 = "Cielo";
const kittenDesc3 =
    " Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta..";
const kittenRace3 = "Maine Coon";


const list = document.querySelector (".js-list")
   list.innerHTML += ` <li class="card">
    <article>
        <img class="card_img" src=${kittenImage1} alt="siames-cat" />
        <h3 class="card_title">${kittenName1}</h3>
        <h4 class="card_race">${kittenRace1}</h4>
        <p class="card_description">
            ${kittenDesc1}
        </p>
    </article>
        </li>`;
    list.innerHTML += `<li class="card">
                    <img class="card_img" src=${kittenImage2} alt="sphynx-cat" />
                    <h3 class="card_title">${kittenName2}</h3>
                    <h4 class="card_race">${kittenRace2}</h4>
                    <p class="card_description">
                        ${kittenDesc2}
                    </p>
                </li>`;
    list.innerHTML += `<li class="card">
                    <img class="card_img" src=${kittenImage3} alt="maine-coon-cat" />
                    <h3 class="card_title">${kittenName3}</h3>
                    <h4 class="card_race">${kittenRace3}</h4>
                    <p class="card_description">
                       ${kittenDesc3}
                    </p>
                </li>`;


//EJERCICIO 5




//EJERCICIO 6




