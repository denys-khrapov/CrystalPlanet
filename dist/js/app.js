jQuery(document).ready(function ($) {
   testWebPFunction();
   if (window.innerWidth >= 1200) {
      initScrollTo();
   }
   initMobileMenu();
   initAccordion();
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
      nextElement.scrollIntoView({ behavior: "smooth" });
      updateScrollButtonText();
   }
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
