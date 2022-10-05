
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const menu = document.querySelector('.menu');
const menuItem =document.querySelectorAll('.header-nav');


let state = 0;


getSlider();
getMenu();


function getSlider() {
  const activeSlide = index => {

    for (let slide of slides) {
      slide.classList.remove('open');
    }
    slides[index].classList.add('open');
  }


  const nextSlide = () => {
    if (state == slides.length - 1) {
      state = 0;
      activeSlide(state);
    }
    else {
      state++;
      activeSlide(state);
    }
  }

  for (let slide of slides) {
    slide.addEventListener('click', nextSlide)
  }

   next.addEventListener('click', nextSlide);
   let timerId = setInterval(() => nextSlide(), 2000);
}


function getMenu(){

  menu.addEventListener('click',()=>{
    for(item of menuItem){
      item.classList.toggle('close')
    }
  })

}





