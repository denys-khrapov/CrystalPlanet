jQuery(document).ready(function ($) {
   testWebPFunction();
   if ($(".amenities-slider").length > 0) {
      initSwiper();
   }
   if (window.innerWidth >= 1200) {
      initScrollTo();
   }
   initMobileMenu();
   initAccordion();
   if (window.innerWidth <= 1199) {
      initReadMore();
   }
});

function testWebPFunction() {
   //Проверка поддержки webp
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   // Добавление класса _webp или _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? "webp" : "no-webp";
      document.documentElement.classList.add(className);
   });
}

function initMobileMenu() {
   const sidemenuBurger = $(".sidemenu__burger");
   const headerBurger = $(".header__burger");
   const headerMenu = $(".menu");
   const sidemenu = $(".sidemenu");
   const headerMenuLink = $(".menu__link");
   const menuClose = $(".menu__close");

   headerBurger.on("click", function () {
      headerBurger.toggleClass("active");
      headerMenu.toggleClass("active");
      sidemenu.toggleClass("active");
   });

   sidemenuBurger.on("click", function () {
      sidemenuBurger.toggleClass("active");
      headerMenu.toggleClass("active");
      sidemenu.toggleClass("active");
   });

   menuClose.on("click", function () {
      sidemenuBurger.removeClass("active");
      headerBurger.removeClass("active");
      headerMenu.removeClass("active");
      sidemenu.removeClass("active");
   });

   $('.menu__list li:has("ul")').children("ul").hide();
   headerMenuLink.on("click", function (event) {
      var $this = $(this);
      if ($this.attr("href") === "") {
         event.preventDefault();
         $('.menu__list li:has("ul")').each(function () {
            $(this).find(".menu__link").toggleClass("active");
            $(this).children("ul").slideToggle(150);
         });
      } else if ($this.attr("href") !== "" && window.innerWidth <= 1199) {
         headerMenu.removeClass("active");
         sidemenuBurger.removeClass("active");
         sidemenu.removeClass("active");
         headerBurger.removeClass("active");
      }
   });
}

function initAccordion() {
   const $accordion_a_w_no_hover = 6;
   const $accordion_a = $(".accordion-link");
   const $accordion_a_w_hover =
      100 - $accordion_a_w_no_hover * $accordion_a.length + "%";
   const $accordion_a_w = 6;

   function updateAccordionStyles() {
      const windowWidth = $(window).width();
      if (windowWidth >= 1200) {
         $accordion_a.css("width", $accordion_a_w + "%");
         $accordion_a.off("click");
         $accordion_a.hover(
            function () {
               if (!$(this).hasClass("active")) {
                  $(this).addClass("active");
                  $accordion_a.not(this).removeClass("active");
                  $accordion_a.css("width", $accordion_a_w_no_hover + "%");
                  $(this).css("width", $accordion_a_w_hover);
               }
            },
            function () {
               $accordion_a.css("width", $accordion_a_w + "%");
            }
         );
      } else {
         $accordion_a.off("mouseenter mouseleave");
         $accordion_a.css("width", "");

         $accordion_a.off("click");
         $accordion_a.on("click", function () {
            if (!$(this).hasClass("active")) {
               $accordion_a.removeClass("active");
               $(this).addClass("active");
            }
         });

         const $activeAccordionLink = $accordion_a.filter(".active");
         if ($activeAccordionLink.length === 0) {
            $accordion_a.first().addClass("active");
         }
      }
   }

   updateAccordionStyles();

   $(window).resize(function () {
      updateAccordionStyles();
   });
}

function initSwiper() {
   let swiperAmenities = new Swiper(".amenities-slider", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         320: {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 16,
         },
         1200: {
            slidesPerView: "3",
            spaceBetween: 16,
            loop: false,
            pagination: false,
         },
         1685: {
            slidesPerView: "5",
            spaceBetween: 16,
            loop: false,
            pagination: false,
         },
      },
   });

   let swiper = new Swiper(".slider-gallery-slider", {
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev",
      },
      watchSlidesProgress: true,

      breakpoints: {
         320: {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 16,
         },
         1200: {
            slidesPerView: "auto",
            spaceBetween: 24,
            loop: false,
            pagination: false,
         },
      },
   });

   if (window.innerWidth >= 1200) {
      swiper.snapGrid[swiper.snapGrid.length - 1] =
         swiper.slidesGrid[swiper.slidesGrid.length - 1];
   }

   let sliderGalleryNav = new Swiper(".sliderGalleryNav", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      // watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: "auto",
         },
         600: {
            slidesPerView: "7",
         },
         1200: {
            slidesPerView: "4",
         },
      },
   });
   let sliderGalleryFor = new Swiper(".sliderGalleryFor", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".button-next1",
         prevEl: ".button-prev1",
      },
      thumbs: {
         swiper: sliderGalleryNav,
      },
   });

   let sliderGalleryNav2 = new Swiper(".sliderGalleryNav2", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: "auto",
         },
         600: {
            slidesPerView: "7",
         },
         1200: {
            slidesPerView: "4",
         },
      },
   });
   let sliderGalleryFor2 = new Swiper(".sliderGalleryFor2", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".button-next2",
         prevEl: ".button-prev2",
      },
      thumbs: {
         swiper: sliderGalleryNav2,
      },
   });

   let sliderGalleryNav3 = new Swiper(".sliderGalleryNav3", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: "auto",
         },
         600: {
            slidesPerView: "7",
         },
         1200: {
            slidesPerView: "4",
         },
      },
   });
   let sliderGalleryFor3 = new Swiper(".sliderGalleryFor3", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".button-next3",
         prevEl: ".button-prev3",
      },
      thumbs: {
         swiper: sliderGalleryNav3,
      },
   });

   let sliderGalleryNav4 = new Swiper(".sliderGalleryNav4", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: "auto",
         },
         600: {
            slidesPerView: "7",
         },
         1200: {
            slidesPerView: "4",
         },
      },
   });
   let sliderGalleryFor4 = new Swiper(".sliderGalleryFor4", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".button-next4",
         prevEl: ".button-prev4",
      },
      thumbs: {
         swiper: sliderGalleryNav4,
      },
   });

   let sliderGalleryNav5 = new Swiper(".sliderGalleryNav5", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
      breakpoints: {
         320: {
            slidesPerView: "auto",
         },
         600: {
            slidesPerView: "7",
         },
         1200: {
            slidesPerView: "4",
         },
      },
   });
   let sliderGalleryFor5 = new Swiper(".sliderGalleryFor5", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".button-next5",
         prevEl: ".button-prev5",
      },
      thumbs: {
         swiper: sliderGalleryNav5,
      },
   });
   let sliderGalleryFor6 = new Swiper(".sliderGalleryFor6", {});
}

function initScrollTo() {
   $("a.scroll-to").click(function () {
      var target = $($(this).attr("href"));
      $("html, body").animate(
         {
            scrollTop: target.offset().top + "px",
         },
         {
            duration: 700,
            easing: "swing",
         }
      );
      return false;
   });
}
const items = document.querySelectorAll("section, footer");

function isLastSectionOrFooter(element) {
   return element === items[items.length - 1];
}

function updateScrollButtonText() {
   const button = document.getElementById("sidemenu-scroll");
   const buttonText = document.getElementById("sidemenu-scroll-text");
   const lastElement = items[items.length - 1];

   if (lastElement.getBoundingClientRect().top <= window.innerHeight) {
      buttonText.textContent = "Scroll Up";
      button.classList.add("active");
   } else {
      buttonText.textContent = "Scroll Down";
      button.classList.remove("active");
   }
}

function scrollToNextSectionOrFooter() {
   let nextElement = null;

   items.forEach((element, index) => {
      if (element.getBoundingClientRect().top > 0 && !nextElement) {
         nextElement = items[index];
      }
   });

   if (nextElement) {
      nextElement.scrollIntoView({ behavior: "smooth", block: "start" });
      updateScrollButtonText();
   }
}

// function initReadMore() {
//    const more = $(".read-more");

//    if (more) {
//       more.click(function (e) {
//          var currentMoreBtn = $(this);
//          var contentHolder = currentMoreBtn.closest(
//             ".slider-gallery-slide__inner"
//          );
//          var content = contentHolder.find(".content-inner");
//          var contentFull = contentHolder.find(".content-full");
//          var open = currentMoreBtn.hasClass("show");

//          if (open) {
//             content.removeAttr("style");
//             currentMoreBtn.removeClass("show");
//             currentMoreBtn.text("more"); // Изменяем текст кнопки на "more"
//          } else {
//             content.css("max-height", contentFull.height());
//             currentMoreBtn.addClass("show");
//             currentMoreBtn.text("roll up"); // Изменяем текст кнопки на "less"
//          }
//       });
//    }
// }

function initReadMore() {
   const more = $(".read-more");
   let currentOpenBtn = null;

   if (more) {
      more.click(function (e) {
         var currentMoreBtn = $(this);
         var contentHolder = currentMoreBtn.closest(
            ".slider-gallery-slide__inner"
         );
         var content = contentHolder.find(".content-inner");
         var contentFull = contentHolder.find(".content-full");
         var open = currentMoreBtn.hasClass("show");

         if (currentOpenBtn && currentOpenBtn !== currentMoreBtn) {
            // Закрываем предыдущий открытый отзыв
            var prevContentHolder = currentOpenBtn.closest(
               ".slider-gallery-slide__inner"
            );
            var prevContent = prevContentHolder.find(".content-inner");

            prevContent.removeAttr("style");
            currentOpenBtn.removeClass("show");
            currentOpenBtn.text("more");
         }

         if (open) {
            content.removeAttr("style");
            currentMoreBtn.removeClass("show");
            currentMoreBtn.text("more");
         } else {
            content.css("max-height", contentFull.height());
            currentMoreBtn.addClass("show");
            currentMoreBtn.text("roll up");
         }

         currentOpenBtn = open ? null : currentMoreBtn;
      });
   }
}

if ($("[data-fancybox]").length > 0) {
   $("[data-fancybox]").fancybox({
      touch: false,
      autoFocus: false,
   });
}

document
   .getElementById("sidemenu-scroll")
   .addEventListener("click", function () {
      const lastElement = items[items.length - 1];
      if (lastElement.getBoundingClientRect().top <= window.innerHeight) {
         window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
         scrollToNextSectionOrFooter();
      }
   });

document.addEventListener("scroll", updateScrollButtonText);
