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
    containers.length === 13 &&
    smallImages.length === 13
  ) {
    switch (slide) {
      case 0:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        containers[slide + 7].classList.add("d-none");
        containers[slide + 8].classList.add("d-none");
        containers[slide + 9].classList.add("d-none");
        containers[slide + 10].classList.add("d-none");
        containers[slide + 11].classList.add("d-none");
        containers[slide + 12].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        smallImages[slide + 7].classList.add("d-none");
        smallImages[slide + 8].classList.add("d-none");
        smallImages[slide + 9].classList.add("d-none");
        smallImages[slide + 10].classList.add("d-none");
        smallImages[slide + 11].classList.add("d-none");
        smallImages[slide + 12].classList.add("d-none");
        break;
      case 1:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        containers[slide + 7].classList.add("d-none");
        containers[slide + 8].classList.add("d-none");
        containers[slide + 9].classList.add("d-none");
        containers[slide + 10].classList.add("d-none");
        containers[slide + 11].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        smallImages[slide + 7].classList.add("d-none");
        smallImages[slide + 8].classList.add("d-none");
        smallImages[slide + 9].classList.add("d-none");
        smallImages[slide + 10].classList.add("d-none");
        smallImages[slide + 11].classList.add("d-none");
        break;
      case 2:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        containers[slide + 7].classList.add("d-none");
        containers[slide + 8].classList.add("d-none");
        containers[slide + 9].classList.add("d-none");
        containers[slide + 10].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        smallImages[slide + 7].classList.add("d-none");
        smallImages[slide + 8].classList.add("d-none");
        smallImages[slide + 9].classList.add("d-none");
        smallImages[slide + 10].classList.add("d-none");
        break;
      case 3:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        containers[slide + 7].classList.add("d-none");
        containers[slide + 8].classList.add("d-none");
        containers[slide + 9].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        smallImages[slide + 7].classList.add("d-none");
        smallImages[slide + 8].classList.add("d-none");
        smallImages[slide + 9].classList.add("d-none");
        break;
      case 4:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        containers[slide + 7].classList.add("d-none");
        containers[slide + 8].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        smallImages[slide + 7].classList.add("d-none");
        smallImages[slide + 8].classList.add("d-none");
        break;
      case 5:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        containers[slide + 7].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        smallImages[slide + 7].classList.add("d-none");
        break;
      case 6:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        containers[slide + 6].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        smallImages[slide + 6].classList.add("d-none");
        break;
      case 7:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 7].classList.add("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        containers[slide + 5].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 7].classList.add("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        smallImages[slide + 5].classList.add("d-none");
        break;
      case 8:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 8].classList.add("d-none");
        containers[slide - 7].classList.add("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        containers[slide + 4].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 8].classList.add("d-none");
        smallImages[slide - 7].classList.add("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        smallImages[slide + 4].classList.add("d-none");
        break;
      case 9:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 9].classList.add("d-none");
        containers[slide - 8].classList.add("d-none");
        containers[slide - 7].classList.add("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        containers[slide + 3].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 9].classList.add("d-none");
        smallImages[slide - 8].classList.add("d-none");
        smallImages[slide - 7].classList.add("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        smallImages[slide + 3].classList.add("d-none");
        break;
      case 10:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 10].classList.add("d-none");
        containers[slide - 9].classList.add("d-none");
        containers[slide - 8].classList.add("d-none");
        containers[slide - 7].classList.add("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        containers[slide + 2].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 10].classList.add("d-none");
        smallImages[slide - 9].classList.add("d-none");
        smallImages[slide - 8].classList.add("d-none");
        smallImages[slide - 7].classList.add("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        smallImages[slide + 2].classList.add("d-none");
        break;
      case 11:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 11].classList.add("d-none");
        containers[slide - 10].classList.add("d-none");
        containers[slide - 9].classList.add("d-none");
        containers[slide - 8].classList.add("d-none");
        containers[slide - 7].classList.add("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        containers[slide + 1].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 11].classList.add("d-none");
        smallImages[slide - 10].classList.add("d-none");
        smallImages[slide - 9].classList.add("d-none");
        smallImages[slide - 8].classList.add("d-none");
        smallImages[slide - 7].classList.add("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        smallImages[slide + 1].classList.add("d-none");
        break;
      case 12:
        bannerTitle.innerText = smallImages[slide].getAttribute("alt");
        containers[slide].classList.remove("d-none");
        containers[slide - 12].classList.add("d-none");
        containers[slide - 11].classList.add("d-none");
        containers[slide - 10].classList.add("d-none");
        containers[slide - 9].classList.add("d-none");
        containers[slide - 8].classList.add("d-none");
        containers[slide - 7].classList.add("d-none");
        containers[slide - 6].classList.add("d-none");
        containers[slide - 5].classList.add("d-none");
        containers[slide - 4].classList.add("d-none");
        containers[slide - 3].classList.add("d-none");
        containers[slide - 2].classList.add("d-none");
        containers[slide - 1].classList.add("d-none");
        smallImages[slide].classList.remove("d-none");
        smallImages[slide - 12].classList.add("d-none");
        smallImages[slide - 11].classList.add("d-none");
        smallImages[slide - 10].classList.add("d-none");
        smallImages[slide - 9].classList.add("d-none");
        smallImages[slide - 8].classList.add("d-none");
        smallImages[slide - 7].classList.add("d-none");
        smallImages[slide - 6].classList.add("d-none");
        smallImages[slide - 5].classList.add("d-none");
        smallImages[slide - 4].classList.add("d-none");
        smallImages[slide - 3].classList.add("d-none");
        smallImages[slide - 2].classList.add("d-none");
        smallImages[slide - 1].classList.add("d-none");
        break;
      default:
        break;
    }
  }
};
