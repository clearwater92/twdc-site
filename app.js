let slides = document.querySelector('.feature-boxes').children;
const nextSlide = document.querySelector(".feature-slider__right-slide");
const prevSlide = document.querySelector(".feature-slider__left-slide");
let totalSlides = slides.length;
let index = 0;

nextSlide.onclick = function () {
    next("next");
}
prevSlide.onclick = function () {
    next("prev");
}

function next(direction) {

    if (direction == "next") {
        index++;
        if (index == totalSlides) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = totalSlides - 1;
        } else {
            index--;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");

}

let modal = document.querySelector('.contact');

document.querySelector('#open').addEventListener('click', function(){
    modal.classList.remove('hidden');
});

document.querySelector('.close-modal').addEventListener('click',function(){
    modal.classList.add('hidden');
});

/*
const contactBtn = document.getElementById('open');
const modal = document.querySelector('.contact-form');
const overlay = modal.querySelector('.contact-form__overlay');
const closeBtn = modal.querySelector('.close-modal');
const openModal = () => {
    modal.classList.remove('hidden');
}
const closeModal = () => {
    modal.classList.add('hidden');
}
contactBtn.addEventListener('click', openModal);
overlay.addEventListener('click', closeModal);
closeBtn.addEventListener('click', closeModal);
*/
