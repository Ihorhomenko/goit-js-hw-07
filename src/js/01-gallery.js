import { galleryItems } from "./gallery-items.js";
// Change code below this line

// preventDefault()

// console.log(galleryItems);

const galleryCards = createGalleryCards(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("afterbegin", galleryCards);

gallery.addEventListener("click", onGetUrlLaggeImgClick);

function createGalleryCards(gallery) {
  return gallery
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    )
    .join("");
}

function onGetUrlLaggeImgClick(evt) {
  evt.preventDefault();

  const galleryElLink = evt.target.classList.contains("gallery__image");
  if (!galleryElLink) {
    return;
  }

  const galleryLargeImgUrl = evt.target.parentNode.href;

  modalLigthBasic(galleryLargeImgUrl);
}

function modalLigthBasic(url) {
  const instance = basicLightbox.create(`
    <img src="${url}">
`);
  instance.show(() => gallery.addEventListener("keydown", onGalleryKeydown));
  function onGalleryKeydown(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
