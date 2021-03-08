const track = document.querySelector('.carouselPhoto');

const slides = Array.from(track.children);

const moveRight = document.querySelector('.moveRight');
const moveLeft = document.querySelector('.moveLeft'); 

const slideWidth = slides[0].getBoundingClientReact().slideWidth;



const setSlidePosition = (slide, index) =>{

    slide.style.left = slideWidth * index + 'px';
};

slide.forEach(setSlidePosition);


nextButton.addEventListener('click', e => {

    const currentSlide = track.querySelector('.currentSlide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    //move to next slide

    track.style.transform = 'translateX(-' + amountToMove + ')'; 
    currentSlide.classList.remove('currentSlide');
    nextSlide.classList.add('currentSlide');
    })


