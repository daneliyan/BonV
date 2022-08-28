$(document).ready(function () {

	$('.cat-inf').on('click', function () {
		$(this).toggleClass('active');
		$(this).next('.cart-bg').toggleClass('active');
	});

	// -------------------- header --------------------------

	// $(window).scroll(function () {

	// 	if ($(this).scrollTop() > 1) {
	// 		$('header').addClass('sticky');

	// 	}
	// 	else {
	// 		$('header').removeClass('sticky');

	// 	}
	// });


	//--------------- fancybox -----------
	$('[data-fancybox-popup]').fancybox({
		closeExisting: true,
		smallBtn: false,
		toolbar: false,
		autoFocus: false,
		hash: false,
		touch: false
	});


	// FANCYBOX CERTIFICATE
	// ====================

	$('[data-fancybox-certificate]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.cert-item',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				ZOOM: 'Увеличить',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"zoom",
			"fullScreen",
			"close"
		]
	});

	$('[data-fancybox-gallery]').fancybox({
		transitionEffect: 'fade',
		animationEffect: false,
		clickContent: false,
		touch: true,
		loop: true,
		selector: '.gal-img',
		backFocus: false,
		lang: 'ru',
		hideScrollbar: false,
		i18n: {
			ru: {
				CLOSE: 'Закрыть',
				NEXT: 'Впёред',
				PREV: 'Назад',
				FULL_SCREEN: 'На весь экран',
			}
		},
		buttons: [
			"fullScreen",
			"close"
		]
	});


	// -------------------- svg--------------------------
	function svg() {
		$('img[src$=".svg"]').each(function () {
			var $img = $(this);
			var imgURL = $img.attr('src');
			var attributes = $img.prop('attributes');
			if ($img.hasClass('svg')) {
				$.get(imgURL, function (data) {
					var $svg = jQuery(data).find('svg');
					$svg = $svg.removeAttr('xmlns:a');
					$.each(attributes, function () {
						$svg.attr(this.name, this.value);
					});
					$img.removeClass('svg').replaceWith($svg);
				}, 'xml');
			}
		});
	}
	svg();


	// -------------------- Slick -------------------------

	// $(".bus-slider").slick({
	// 	centerMode: true,
	// 	centerPadding: "0px",
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	focusOnSelect: true,
	// 	arrows: false
	// });

	$('.bus-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		centerMode: true,
		variableWidth: true,
		infinite: true,
		focusOnSelect: true,
		cssEase: 'linear',
		touchMove: true,

		//         responsive: [                        
		//             {
		//               breakpoint: 576,
		//               settings: {
		//                 centerMode: false,
		//                 variableWidth: false,
		//               }
		//             },
		//         ]
	});

	var imgs = $('.bus-slider img');
	imgs.each(function () {
		var item = $(this).closest('.item');
		item.css({
			'background-image': 'url(' + $(this).attr('src') + ')',
			'background-position': 'center',
			'-webkit-background-size': 'cover',
			'background-size': 'cover',
		});
		$(this).hide();
	});


	$('.news-slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		arrows: true,

		responsive: [
			{
			  	breakpoint: 1024,
			  	settings: {
				 	slidesToShow: 2,
				 	autoplay: false,
			  }
			},
			{
			  	breakpoint: 576,
			  	settings: {
						slidesToShow: 1,
						arrows: false,
			  }
			},
		]
	});

	$('.slick-prev').html($('.slick-prev').html().replace('Previous', ''));
	$('.slick-next').html($('.slick-next').html().replace('Next', ''));


	// ----------------- carousel ----------------------


	$('.gt').owlCarousel({
		loop: true,
		nav: false,
		navText: ['', ''],
		dots: true,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		items: 1
	});




	$('.mng').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 2
			},
			678: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.ctg').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			678: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1220: {
				items: 2,
			}
		}
	});


	$('.pts').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			410: {
				items: 2,
			},
			678: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1220: {
				items: 4,
			}
		}
	});


	$('.crti').owlCarousel({
		loop: true,
		nav: true,
		navText: ['', ''],
		dots: false,
		autoplay: false,
		autoplayTimeout: 3000,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			410: {
				items: 2,
			},
			678: {
				items: 2,
			},
			768: {
				items: 3,
			},
			1220: {
				items: 4,
			}
		}
	});



	// -------------------- Scroll -------------------------

	$(".srolls").on("click", "a", function (event) {
		// исключаем стандартную реакцию браузера
		event.preventDefault();

		// получем идентификатор блока из атрибута href
		var id = $(this).attr('href'),

			// находим высоту, на которой расположен блок
			top = $(id).offset().top - 50;

		// анимируем переход к блоку, время: 800 мс
		$('body,html').animate({ scrollTop: top }, 800);
	});


	// -------------------------modal----------------------

	$('.to-state').on('click', function (event) {
		event.preventDefault();
		$('div').removeClass('active');
		$('.state').removeClass('active');
		var state = $(this).attr('data-state');
		$('.state[data-state=' + state + ']').addClass('active');
	});

	$('.close').on('click', function (event) {
		$(this).parents().removeClass('active');
	});

	jQuery(function ($) {
		$(document).mouseup(function (e) { // событие клика по веб-документу
			var div = $(".state-box"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
				&& div.has(e.target).length === 0) { // и не по его дочерним элементам

				div.parents().removeClass('active'); // скрываем его
				$('body').removeClass('modal-open');
			}
		});
	});






	//end
});


	// -------------------------burger----------------------

(function () {
	const burger = document?.querySelector('[data-burger]');
	const menu = document?.querySelector('[data-menu]');
	const menuItems = document?.querySelectorAll('[data-menu-item]');
	const overlay = document?.querySelector('[data-menu-overlay]');

	burger?.addEventListener('click', (e) => {
		burger?.classList.toggle('burger--active');
		menu?.classList.toggle('menu--active');

		if (menu?.classList.contains('menu--active')) {
			burger?.setAttribute('aria-expanded', 'true');
			burger?.setAttribute('aria-label', 'Закрыть меню');
		} else {
			burger?.setAttribute('aria-expanded', 'false');
			burger?.setAttribute('aria-label', 'Открыть меню');
		}
	});

	overlay?.addEventListener('click', () => {
		burger?.setAttribute('aria-expanded', 'false');
		burger?.setAttribute('aria-label', 'Открыть меню');
		burger.classList.remove('burger--active');
		menu.classList.remove('menu--active');
	});

	menuItems?.forEach(el => {
		el.addEventListener('click', () => {
			burger?.setAttribute('aria-expanded', 'false');
			burger?.setAttribute('aria-label', 'Открыть меню');
			burger.classList.remove('burger--active');
			menu.classList.remove('menu--active');
		});
	});
})();

