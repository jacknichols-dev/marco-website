//hero carousel

const slides = document.querySelectorAll(".carousel__slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const auto = true;
const intervalTime = 7000;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
};

// Button events
next.addEventListener("click", e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

//review carousel

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("review-carousel__slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}

/*
//set the slide and image variables

const carouselSlide = document.querySelector('.carousel__slide');
const carouselImages = document.querySelectorAll('.carousel__slide img');

//buttons

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
*/
//counter

/*let counter = 1;

//assign banner width to know how mych to slide

const size = carouselImages[0].clientWidth;

//To start on 1st image and not the duplicate

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

//button listeners 

prevBtn.addEventListener('click', ()=>{
    if (counter <=0) return;
    carouselSlide.style.transition = "transform 0.4s ease-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
})

nextBtn.addEventListener('click', ()=>{
    if (counter >= carouselImages.length -1 ) return;
    carouselSlide.style.transition = "transform 0.4s ease-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
})

carouselSlide.addEventListener('transitionend', ()=>{
    if (carouselImages[counter].id === 'lastClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length -2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }

    if (carouselImages[counter].id === 'firstClone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
})
*/
