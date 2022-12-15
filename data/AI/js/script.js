// Mobile menu
let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
let navList = document.querySelector('.nav-list')
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
	navList.classList.toggle('toggle');
});



// Slider
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  slidesPerGroup: 2,
  loop: true,
  // slideToClickedSlide: true, // with slidesPerGroup
	/* autoplay: {
		delay: 1000,
	}, */

  // pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    /* type: 'fraction', */
    clickable: true,
  },

  // navigation
  /* navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, */

  breakpoints: {
    630: {
      centeredSlides: false,
      slidesPerView: 2,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },
    1650: {
      slidesPerView: 5,
      slidesPerGroup: 5,
    }
  }
});

/* .swiper swiper-no-swiping --- for no swipe */



// svg-img => inline svg (jQuery)
let svgIcons = $('.footer__icons img')
                .add( $('img.footer__icon-contact') );
svgIcons.each(function() {
  let $img = $(this);
  let imgClass = $img.attr('class');
  let imgSrc = $img.attr('src');

  $.get(imgSrc, function (data) {
    let $svg = $(data).find('svg');
    if (typeof imgClass !== 'undefined') {
      $svg.attr('class', imgClass);
    }
    $svg.removeAttr('xmlns:a');
    $img.replaceWith($svg)
  });
});



// Animation on scroll
const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);

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

      if (window.pageYOffset > (animItemOffset - animItemPoint) && window.pageYOffset < (animItemOffset + animItemHeight)) {
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