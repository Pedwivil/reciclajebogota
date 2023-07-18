/***************************
 *                         *
 *   FUNCIONES GENERALES   *
 *                         *
 ***************************/

/**
 * Función flecha que obtiene los elementos del DOM que estén entre la etiqueta
 * **img** o **a** y evita que estos sean arrastrados por el usuario.
 */
const preventDrag = () => {
  Array.from(document.getElementsByTagName("img")).forEach((item) => {
    item.addEventListener("dragstart", (event) => event.preventDefault());
  });
  Array.from(document.getElementsByTagName("a")).forEach((item) => {
    item.addEventListener("dragstart", (event) => event.preventDefault());
  });
};

function switchSlide(slide, totalSlides, containers, smallImages, bannerTitle) {
  bannerTitle.innerText = smallImages[slide].getAttribute("alt");
  for (let i = 0; i < totalSlides; i++) {
    if (i === slide) {
      containers[i].classList.remove("d-none");
      smallImages[i].classList.remove("d-none");
    } else {
      containers[i].classList.add("d-none");
      smallImages[i].classList.add("d-none");
    }
  }
}

/**
 * Función flecha que recibe como parámetro una variable de tipo **Event** que
 * contiene la información sobre el estado de las diapositivas. **(Documentación
 * sobre los eventos incorporados en el carrusel de Bootstrap:
 * {@link https://getbootstrap.com/docs/5.2/components/carousel/#events})** La
 * finalidad es capturar la diapositiva que se encuentra activa en el momento y
 * mostrar la información correspondiente. Tenemos el índice 0 para **IMC**, 1 para
 * **CRUD** y 2 para **JSON**.
 * @param {Event} event Evento **slide.bs.carousel** del carrusel que provee
 * información sobre el estado de la presentación.
 */
const detectSlideChange = (event) => {
  const slide = event.to;
  const bannerTitle = document.querySelector(".banner__title");
  const containers = document.querySelectorAll(".main-content--container");
  const smallImages = document.querySelectorAll(".main-content__image");
  if (
    bannerTitle !== null &&
    containers.length === 22 &&
    smallImages.length === 22
  ) {
    switchSlide(slide, 22, containers, smallImages, bannerTitle);
  }
};
