"use strict";

const listKittens = document.querySelector(".js-list");
const kittenOne = `<li class="card"> 
<article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description">${kittenOneDesc}
                
              </p>
            </article>
          </li>`;

const kittenTwo = `<li class="card">     

            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">${kittenTwoDesc}
              
            </p>
          </li>`;

const kittenThree = ` <li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description"> ${kittenThreeDesc}
              
            </p>
          </li> `;

// listKittens.innerHTML = kittenOne + kittenTwo + kittenThree;


// const buttonMenu = document.querySelector(".js-btn-add");
// const addCat = document.querySelector(".new-form");
// const buttonCancel = document.querySelector(".button-cancel")



// buttonMenu.addEventListener("click", (ev) => {
//   ev.preventDefault();
//   addCat.classList.remove('collapsed');



// })
// buttonCancel.addEventListener("click", () => {
//   addCat.classList.add('collapsed');
// }
// )

// const searchButton = document.querySelector(".js_button-search");

// searchButton.addEventListener("click", (ev) => {
//   ev.preventDefault();
//   const searchB = js_in_search_desc.value;
//   console.log(has hecho click);
//   //¿por qué no funciona?
// }
// )


//Mostrar el menú cuando la usuaria haga click
//tiene que mostrar el menú
//seleccionar el botón del menú

// const buttonM = document.querySelector(".js-btn-add");
// const addC = document.querySelector(".new-form");

// function showNewCatForm() {
//   addC.classList.remove("collapsed");
// }
// function hideNewCatForm() {
//   addC.classList.add("collapsed");
// }
// function handleClickNewCatForm() {
//   if showNewCatForm();
//   else hideNewCatForm();
// }

// buttonM.addEventListener("click", handleClickNewCatForm);




const search = document.querySelector(".js_button-search");
const desc = document.querySelector("js_in_search_desc");

search.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descSearchText = desc.value;
  console.log("has hecho click");
  console.log("Texto de búsqueda:", descSearchText);

}); /*
¿que falta?
 */

const kittenOneDesc =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente." 

const kittenTwoDesc = "Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo."


const kittenThreeDesc = "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta."
