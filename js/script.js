$(function () {
  /*===== Filter for works =====*/
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();

    // Toggle for filter buttons
    $(this).siblings().removeClass('works__nav-link_active');
    $(this).addClass('works__nav-link_active');

    // Toggle for works
    let cat = $(this).data('filter');
    if (cat === 'all') {
      $("[data-cat]").removeClass("unselected-portfolio");
    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data('cat');

        if (workCat !== cat) {
          $(this).addClass('unselected-portfolio');
        } else {
          $(this).removeClass('unselected-portfolio');
        }
      });
    }
  });

  /*===== Animation on scroll =====*/
  // let $window = $(window);
  // let object = document.getElementsByClassName('intro__photo')[0];
  // let objectCoords = object.getBoundingClientRect();
  // console.log(objectCoords)
  // $window.on('scroll load', function() {
  //   console.log($window.scrollTop());
  //   if ($window.scrollTop() < (objectCoords.bottom + 300)) {
  //     object.classList.add('right-apperance');
  //   } else {
  //     object.classList.remove('right-apperance');
  //   }
  // });
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


  /* Modal
  ==================*/

  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('show');
    $("body").addClass('no-scroll');

    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0)" //"scale(1)"
      });
    }, 200);

    worksSlider.slick('setPosition');
  });

  modalClose.on("click", function (event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });

    setTimeout(function () {
      modalParent.removeClass('show');
      $('body').removeClass('no-scroll');
    }, 200);
  });

  $(".modal").on("click", function (event) {
    event.preventDefault();
    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)" //"scale(1)"
    });

    setTimeout(function () {
      $this.removeClass('show');
      $("body").removeClass('no-scroll');
    }, 200);
  })

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  })



  const worksSlider = $('[data-slider="slick"]');
  /* Slider: https://kenwheeler.github.io/slick/
  =================*/

  worksSlider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    dots: true
  });

  $('.slickPrev').on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickPrev");
  });

  $('.slickNext').on("click", function (event) {
    event.preventDefault();

    let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

    currentSlider.slick("slickNext");
  });



  /* Mobile nav
  ==================== */

  const navToggle = $("#navToggle");
  const nav = $("#nav");

  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");
  });



});