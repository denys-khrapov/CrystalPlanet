jQuery(document).ready(function ($) {
	testWebPFunction();
	initAccordion();
});

function testWebPFunction() {
	//Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	})
}




function initAccordion() {
	// const $accordion_a_w_no_hover = 6;
	// const $accordion_a = $('.accordion-link');
	// const $accordion_a_w_hover = 100 - $accordion_a_w_no_hover * $accordion_a.length + '%';
	// const $accordion_a_w = 6;

	// $accordion_a.css('width', $accordion_a_w + '%');

	// $accordion_a.hover(function () {
	// 	if (!$(this).hasClass('active')) { // Check if the element does not have the 'active' class
	// 		$(this).addClass('active');
	// 		$accordion_a.not(this).removeClass('active');

	// 		$accordion_a.css('width', $accordion_a_w_no_hover + '%');
	// 		$(this).css('width', $accordion_a_w_hover);
	// 	}
	// }, function () {
	// 	$accordion_a.css('width', $accordion_a_w + '%');
	// });



	// const $accordion_a_w_no_hover = 6;
	// const $accordion_a = $('.accordion-link');
	// const $accordion_a_w_hover = 100 - $accordion_a_w_no_hover * $accordion_a.length + '%';
	// const $accordion_a_w = 6;

	// function updateAccordionStyles() {
	// 	const windowWidth = $(window).width();
	// 	if (windowWidth >= 1200) {
	// 		$accordion_a.css('width', $accordion_a_w + '%');
	// 		$accordion_a.off('hover'); // Remove the previous hover event handler
	// 		$accordion_a.hover(function () {
	// 			if (!$(this).hasClass('active')) {
	// 				$(this).addClass('active');
	// 				$accordion_a.not(this).removeClass('active');
	// 				$accordion_a.css('width', $accordion_a_w_no_hover + '%');
	// 				$(this).css('width', $accordion_a_w_hover);
	// 			}
	// 		}, function () {
	// 			$accordion_a.css('width', $accordion_a_w + '%');
	// 		});
	// 	} else {
	// 		// If the window width is less than 1200px, remove the hover effect and reset width
	// 		$accordion_a.off('mouseenter mouseleave'); // Remove the hover event handler
	// 		$accordion_a.css('width', ''); // Remove the width style to restore default
	// 	}
	// }

	// // Call the function on page load
	// updateAccordionStyles();

	// // Call the function whenever the window is resized
	// $(window).resize(function () {
	// 	updateAccordionStyles();
	// });

	// const $accordion_a_w_no_hover = 6;
	// const $accordion_a = $('.accordion-link');
	// const $accordion_a_w_hover = 100 - $accordion_a_w_no_hover * $accordion_a.length + '%';
	// const $accordion_a_w = 6;

	// function updateAccordionStyles() {
	// 	const windowWidth = $(window).width();
	// 	if (windowWidth >= 1200) {
	// 		// Code for screens 1200px and larger
	// 		$accordion_a.css('width', $accordion_a_w + '%');
	// 		$accordion_a.off('click'); // Remove the previous click event handler
	// 		$accordion_a.hover(function () {
	// 			if (!$(this).hasClass('active')) {
	// 				$(this).addClass('active');
	// 				$accordion_a.not(this).removeClass('active');
	// 				$accordion_a.css('width', $accordion_a_w_no_hover + '%');
	// 				$(this).css('width', $accordion_a_w_hover);
	// 			}
	// 		}, function () {
	// 			$accordion_a.css('width', $accordion_a_w + '%');
	// 		});
	// 	} else {
	// 		// Code for screens less than 1200px
	// 		$accordion_a.off('mouseenter mouseleave'); // Remove the hover event handler
	// 		$accordion_a.css('width', ''); // Remove the width style to restore default

	// 		$accordion_a.off('click'); // Remove the previous click event handler
	// 		$accordion_a.on('click', function (e) {
	// 			e.preventDefault();
	// 			if (!$(this).hasClass('active')) {
	// 				$accordion_a.removeClass('active');
	// 				$(this).addClass('active');
	// 			} else {
	// 				$(this).removeClass('active');
	// 			}
	// 		});
	// 	}
	// }

	// // Call the function on page load
	// updateAccordionStyles();

	// // Call the function whenever the window is resized
	// $(window).resize(function () {
	// 	updateAccordionStyles();
	// });

	const $accordion_a_w_no_hover = 6;
	const $accordion_a = $('.accordion-link');
	const $accordion_a_w_hover = 100 - $accordion_a_w_no_hover * $accordion_a.length + '%';
	const $accordion_a_w = 6;

	function updateAccordionStyles() {
		const windowWidth = $(window).width();
		if (windowWidth >= 1200) {
			// Code for screens 1200px and larger
			$accordion_a.css('width', $accordion_a_w + '%');
			$accordion_a.off('click'); // Remove the previous click event handler
			$accordion_a.hover(function () {
				if (!$(this).hasClass('active')) {
					$(this).addClass('active');
					$accordion_a.not(this).removeClass('active');
					$accordion_a.css('width', $accordion_a_w_no_hover + '%');
					$(this).css('width', $accordion_a_w_hover);
				}
			}, function () {
				$accordion_a.css('width', $accordion_a_w + '%');
			});
		} else {
			// Code for screens less than 1200px
			$accordion_a.off('mouseenter mouseleave'); // Remove the hover event handler
			$accordion_a.css('width', ''); // Remove the width style to restore default

			$accordion_a.off('click'); // Remove the previous click event handler
			$accordion_a.on('click', function () {
				if (!$(this).hasClass('active')) {
					$accordion_a.removeClass('active');
					$(this).addClass('active');
				}
			});

			// Ensure that at least one accordion-link has the active class on load
			const $activeAccordionLink = $accordion_a.filter('.active');
			if ($activeAccordionLink.length === 0) {
				$accordion_a.first().addClass('active');
			}
		}
	}

	// Call the function on page load
	updateAccordionStyles();

	// Call the function whenever the window is resized
	$(window).resize(function () {
		updateAccordionStyles();
	});


}