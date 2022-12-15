let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("clients__slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}



let slideIndexAsk = 1;
showAskSlides(slideIndexAsk);

// Thumbnail image controls
function currentSlide(n) {
  showAskSlides(slideIndexAsk = n);
}

function showAskSlides(n) {
  let i;
  let slides = document.getElementsByClassName("asking__slide ");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexAsk = 1}
  if (n < 1) {slideIndexAsk = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexAsk-1].style.display = "block";
  dots[slideIndexAsk-1].className += " active";
}

/*===== Animation on scroll =====*/
const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
  window.addEventListener('load scroll', animOnScroll);

  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.pageYOffset > (animItemOffset - animItemPoint)) && (window.pageYOffset < (animItemOffset + animItemHeight))) {
        console.log((window.pageYOffset > (animItemOffset - animItemPoint)));
        console.log((window.pageYOffset < (animItemOffset + animItemHeight)));
        console.log(window.pageYOffset);
        console.log(animItemOffset);
        console.log(animItemPoint);
        console.log(animItemOffset - animItemPoint);
        console.log(animItemHeight);
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-no-hide')) {
          animItem.classList.remove('_active');
        }
      }
    }
  }

  function offset(el) { 
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left +scrollLeft};
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}