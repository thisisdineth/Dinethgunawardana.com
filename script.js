let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');

function openFullscreen(element) {
    const fullscreen = document.getElementById('fullscreen-view');
    const fullscreenImage = document.getElementById('fullscreen-image');
    const downloadLink = document.getElementById('download-link');

    fullscreen.style.display = 'flex';
    fullscreenImage.src = element.src;
    downloadLink.href = element.src;
    currentIndex = Array.from(galleryItems).indexOf(element);
}

function closeFullscreen() {
    document.getElementById('fullscreen-view').style.display = 'none';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateFullscreenImage();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateFullscreenImage();
}

function updateFullscreenImage() {
    const fullscreenImage = document.getElementById('fullscreen-image');
    const downloadLink = document.getElementById('download-link');

    fullscreenImage.src = galleryItems[currentIndex].src;
    downloadLink.href = galleryItems[currentIndex].src;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFullscreen();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    } else if (event.key === 'ArrowLeft') {
        prevSlide();
    }
});
