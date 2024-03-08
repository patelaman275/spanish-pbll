
function generateTimelineSlideshow() {
    const timelineContainer = document.getElementById('timeline-container');
    const years = ['1492', '1519', '1533', '1565', '1821']; 
    let slideshowHTML = '<div class="slideshow">';
    years.forEach(year => {
        slideshowHTML += `<div class="slide"><h3>${year}</h3><p>Description of events in ${year}</p></div>`;
    });
    slideshowHTML += '</div>';

    timelineContainer.innerHTML = slideshowHTML;

    
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, 5000);
}

window.onload = function() {
    generateTimelineSlideshow();
};
