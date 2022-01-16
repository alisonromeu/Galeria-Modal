const galeriaModal = document.querySelector('.galeria-modal');
const imageGaleria = document.querySelector('.galeria-modal img');

function closeGaleria() {
    galeriaModal.style.visibility = "hidden";
    imageGaleria.style.transform = 'scale(0)';
}

function openGaleria(src) {
    galeriaModal.style.visibility = 'visible';
    imageGaleria.style.transform = 'scale(1)';
    imageGaleria.src = src;
}