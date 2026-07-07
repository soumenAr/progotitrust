jQuery(document).ready(function ($) {
	if($('.event-counter').length) {
		$('.event-counter').each(function () {

			var $el = $(this);
			var start = 0;
			var end = parseInt($el.data('end'), 10);
			var duration = parseInt($el.data('duration'), 10) || 3000;
		
			if (isNaN(end) || end === 0) {
			  return;
			}
		
			var range = end - start;
			var increment = end > start ? 1 : -1;
			var step = Math.abs(Math.floor(duration / range));
			var current = start;
		
			var timer = setInterval(function () {
			  current += increment;
			  $el.text(current);
		
			  if (current === end) {
				clearInterval(timer);
			  }
			}, step);
		
		});
	}

	

	$(".custom_accessbility").attr("aria-haspopup", "true");
	$(".caution_notice").attr("aria-label", "Caution Notice - new window");
	$("button.tbm-button").attr("aria-label", "Hamburger");

	$("#newsletter-form > div > div > div > div > div.subscribe_box > div.captcha.captcha-type-challenge--image").hide();
	$('#edit-email--2').on('input', function () {
		var email = $(this).val().trim();
		if (email !== '') {

			$('.captcha').slideDown(); // Show the additional text box
		} else {
			$('.captcha').slideUp(); // Hide the additional text box
		}
	});
	$('#edit-subemail').on('input', function () {
		var email = $(this).val().trim();
		if (email !== '') {

			$('.captcha').slideDown(); // Show the additional text box
		} else {
			$('.captcha').slideUp(); // Hide the additional text box
		}
	});

	//Animation
	$(window).on('load', function () {
		AOS.refresh();
	});

	AOS.init({
		duration: 1000,
		offset: -60,
	});

	$(window).on("scroll", function () {
		AOS.init();
	});

	//Sticky header

	/* $(window).scroll(function() {
			if ($(window).scrollTop() >= 60) {
					$('header').addClass('sticky');
			} else {
					$('header').removeClass('sticky');
			}
	}); */

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})


	if ($(window).width() > 991) {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 100 && !$('.gtranslate_wrapper .gt_black_overlay').is(':visible')) {
				$('.rf-desk header.hideInmob').addClass('fixed');
			} else {
				$('.rf-desk header.hideInmob').removeClass('fixed');
			}
		});
		$('.gtranslate_wrapper .glink').on('click', function() {
			$('.rf-desk header.hideInmob').removeClass('fixed');
		})
	}

	if ($(window).width() < 992) {
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 80) {
				$('.rf-desk header.hideIndesk').addClass('freeze');
			} else {
				$('.rf-desk header.hideIndesk').removeClass('freeze');
			}
		});
	}
	AOS.refresh();
	//On menu click body scroll hidden
	$(".custom-toggler").click(function () {
		$("body").toggleClass("overflow-hidden");
		$("header").toggleClass("menu-open");
	});

	//Header Search
	$(".search-btn").click(function () {
		$(".search-btn").toggleClass("active");
		$(".search-bar").toggleClass("active");
	});

	// Footer accodian
	$('.footer-link h2').click(function () {
		$(this).parent().parent().siblings().find('ul').slideUp(250);
		$(this).next('ul').slideToggle(250);
		$(this).parent().parent().siblings().find('h2').removeClass('child-open');
		$(this).toggleClass('child-open');
	});

	//On click scroll bottom to top
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 250) {
			$('.bootom-fixed').addClass('active');
		} else {
			$('.bootom-fixed').removeClass('active');
		}
	});

	const stats = document.querySelectorAll(".counter");

	stats.forEach(stat => {

		const patt = /(\D+)?(\d+)(\D+)?(\d+)?(\D+)?(\d+)?(\D+)?(\d+)?/;
		const time = 1000;
		let result = [...patt.exec(stat.textContent)];
		let fresh = true;
		let ticks;
		result.shift();
		result = result.filter(res => res != null);

		while (stat.firstChild) {
			stat.removeChild(stat.firstChild);
		}

		for (let res of result) {
			if (isNaN(res)) {
				stat.insertAdjacentHTML("beforeend", `<span>${res}</span>`);
			} else {
				for (let i = 0; i < res.length; i++) {
					stat.insertAdjacentHTML(
						"beforeend",
						`<span data-value="${res[i]}" aria-hidden="true">
						<span></span>
						${Array(parseInt(res[i]) + 1)
							.join(0)
							.split(0)
							.map(
								(x, j) => `
							<span aria-hidden="true">${j}</span>
						`
							)
							.join("")}
					</span>`
					);
				}
			}
		}

		ticks = [...stat.querySelectorAll("span[data-value]")];

		let activate = () => {
			let top = stat.getBoundingClientRect().top;
			let offset = window.innerHeight * 0.9;

			setTimeout(() => {
				fresh = false;
			}, time);

			if (top < offset) {
				setTimeout(() => {
					for (let tick of ticks) {
						let dist = parseInt(tick.getAttribute("data-value")) + 1;
						tick.style.transform = `translateY(-${dist * 100}%)`;
					}
				}, fresh ? time : 0);
				window.removeEventListener("scroll", activate);
			}
		};
		window.addEventListener("scroll", activate);
		activate();
	});



	function disableVideoControls() {
		var video = document.getElementById("videoPlayer");
		video.removeAttribute("controls");
	};

	// Accodian tap to top

	$('.collapse').on('shown.bs.collapse', function (e) {
		var $card = $(this).closest('.accordion-item');
		var $open = $($(this).data('parent')).find('.collapse.show');

		var additionalOffset = 0;
		if ($card.prevAll().filter($open.closest('.accordion-item')).length !== 0) {
			additionalOffset = $open.height();
		}
		$('html,body').animate({
			scrollTop: $card.offset().top - additionalOffset
		}, 500);
	});

	// Aria label

	$('.footer_menu li:nth-child(1) a.ql-1').attr('aria-label', 'Reliance Industries Limited (Opens in a new tab)').attr("role", "button");
	$('.footer_menu li:nth-child(2) a.ql-1').attr('aria-label', 'Reliance Foundation Scholarships (Opens in a new tab)').attr("role", "button");
	$('.footer_menu li:nth-child(3) a.ql-1').attr('aria-label', 'Reliance Foundation Youth Sports (Opens in a new tab)').attr("role", "button");
	$('.footer_menu li:nth-child(4) a.ql-1').attr('aria-label', 'Reliance Foundation Hospital (Opens in a new tab)').attr("role", "button");
	$('.footer_menu li:nth-child(5) a.ql-1').attr('aria-label', 'Reliance Foundation Skilling Academy (Opens in a new tab)').attr("role", "button");

	$('article[data-history-node-id="146"]').attr("role", "main");

	$(function () {
		$('.subscribe-btn, .btn_scroll').on('click', function () {
			$('html, body').animate({ scrollTop: $("#newsletter-form").offset().top - 130 }, 1000);
			return false;
		});
	});


	$(document).on("mouseenter", ".testimonial_img", function (e) {
		$(this).find(".testimonial_content .hide-cont").slideDown(300);
	});
	$(document).on("mouseleave", ".testimonial_img", function (e) {
		$(this).find(".testimonial_content .hide-cont").slideUp(300);
	});

	// Event Slider
	if ($('.event-carousel').length > 0) {
		$('.event-carousel').owlCarousel({
			loop: true,
			margin: 15,
			nav: true,
			dots: true,
			items: 1.2
		});
	}


	//Sticky Video Menu
	$(window).scroll(function () {
		if ($(window).scrollTop() >= 200) {
			$('.video-icon').addClass('sticky');
		} else {
			$('.video-icon').removeClass('sticky');
		}
	});

	//Sticky Education Tabs
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			$('.edu_warp').addClass('stickyTab');
		} else {
			$('.edu_warp').removeClass('stickyTab');
		}
	});


	$('ul.store>li').click(function () {
		AOS.refresh();
		var tab_id = $(this).attr('data-tab');

		$('ul.store>li').removeClass('current');
		$('.store-content .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})


	$('ul.job_list>li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('ul.job_list>li').removeClass('current');
		$('.job_openings .tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})

	// Show the first tab and hide the rest
	$('.tabs-nav li:first-child').addClass('active');
	$('.tab-content').hide();
	$('.tab-content:first').show();

	// Click function
	$('.tabs-nav li').click(function () {
		$('.tabs-nav li').removeClass('active');
		$(this).addClass('active');
		$('.tab-content').hide();
		$('html, body').animate({ scrollTop: $(".awards_block").offset().top - 185 }, 800);
		var activeTab = $(this).find('a').attr('href');
		$(activeTab).fadeIn();
		return false;

	});

	// Areas of Focus Slider
	if ($('.focusareas_slider').length > 0) {
		$('.focusareas_slider').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			dots: false,
			items: 1,
		});

	}

	$('ul.criteria_list>li').click(function () {
		var tab_id = $(this).attr('data-tab');
		$('ul.criteria_list>li').removeClass('current');
		$('.criteria_block .tab-content').removeClass('current');
		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})


	// Speakers Slider
	if ($('.speakers_slider').length > 0) {
		$('.speakers_slider').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}

	// Gallery Slider
	if ($('.gallery_slider').length > 0) {
		$('.gallery_slider').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}

	// Testimonial carousel
	if ($('.testimonial_carousel').length > 0) {
		$('.testimonial_carousel').owlCarousel({
			loop: false,
			margin: 30,
			nav: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}

	// Testimonial Slider
	if ($('.testimonial_slider').length > 0) {
		$('.testimonial_slider').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			dots: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}


	// Responders Slider
	if ($('.responders_slider').length > 0) {
		$('.responders_slider').owlCarousel({
			loop: false,
			margin: 20,
			nav: true,
			dots: false,
			items: 1,
		});
	}

	// Publications Slider
	if ($('.publications_block').length > 0) {
		$('.publications_block').owlCarousel({
			loop: false,
			margin: 10,
			nav: true,
			dots: false,
			items: 1
		});
	}

	// Scholarship Slider
	if ($('.scholarship_block').length > 0) {
		$('.scholarship_block').owlCarousel({
			loop: false,
			margin: 10,
			nav: true,
			dots: false,
			items: 1
		});
	}

	// Story Slider
	if ($('.story_slider').length > 0) {
		$('.story_slider').owlCarousel({
			loop: false,
			margin: 9,
			nav: false,
			autoplay: true,
			autoplayTimeout: 3000,
			dots: true,
			responsive: {
				0: {
					items: 3,
				},
				575: {
					items: 4,
				},
				768: {
					items: 5,
				},
				992: {
					items: 8,
					autoplay: false,
				},
				1200: {
					items: 9,
					autoplay: false,
				},
			}
		});
	}

	// Founder Chairperson Slider
	if ($('.rf_founder_slider').length > 0) {
		var videoSlider = $('.rf_founder_slider');
		videoSlider.owlCarousel({
			loop: false,
			margin: 10,
			nav: true,
			dots: true,
			video: true,
			lazyLoad: true,
			items: 1,
			autoHeight: true

		});
		videoSlider.on('translate.owl.carousel', function (e) {
			$('.owl-item .item video').each(function () {
				// pause playing video - after sliding
				$(this).get(0).pause();
			});
		});

		videoSlider.on('translated.owl.carousel', function (e) {
			// check: does the slide have a video?
			if ($('.owl-item.active').find('video').length !== 0) {
				// play video in active slide
				$('.owl-item.active .item video').get(0).play();
			}
		});
	}

	$(function () {
		$('.videos_modal').on('hidden.bs.modal', function (e) {
			$iframe = $(this).find("iframe");
			$iframe.attr("src", $iframe.attr("src"));
		});
	});

	$('.story_modal').on('show.bs.modal', function (e) {
		$('body').addClass('story-backdrop');
	}).on('hidden.bs.modal', function (e) {
		// 'hide.bs.modal' or 'hidden.bs.modal', depends on your needs.
		$('body').removeClass('story-backdrop');
	});


	// Story Slider

	$(".story_modal").on('show.bs.modal', function () {
		setTimeout(function () {
			var swiper = new Swiper('.story_container', {
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
				autoplay: {
					delay: 7000,
					disableOnInteraction: false
				},
				loop: true,
				watchSlidesProgress: true,

			});
		}, 200);
	});

	// Modal Video Stop
	$(".videos_modal").on("hide.bs.modal", function (e) {
		$('video').trigger('pause');
	});

	$(".js-form-item-sort-order label[for=edit-sort-order]").text("Sort by:");


	$('.tbm-subnav li a').mouseover(function () {
		var $this = $(this);
		var id = $this.attr('rel');
		$(this).parent().siblings().children().removeClass("active");
		$(this).addClass("active");
		var $currentWidget = $('#' + id);
		$currentWidget.show().siblings('.menudesc').hide();
	});

	// Nav Search Toggle

	$(".serachbtnToggle").click(function (e) {
		e.preventDefault();
		var container = $(e.target).closest('.search-wrapper-cs');
		if (!container.hasClass('active')) {
			container.addClass('active');

		} else if (container.hasClass('active') && $(e.target).closest('.input-holder').length == 0) {
			container.removeClass('active');
			// clear input
			container.find('.form-text').val('');
		}

	});

	if ($(window).width() < 992) {
		$(".btn_scroll").click(function () {
			$(".hideIndesk").removeClass('menu-open');
			$("#navbarText").removeClass('show');
			$(".navbar-toggler").attr('aria-expanded', 'false');
		});
	}


});


/* Education tab start */
jQuery('.edu_tabs a').on('click', function () {
	var scrollAnchor = jQuery(this).attr('data-scroll'),
		scrollPoint = jQuery('section[data-anchor="' + scrollAnchor + '"]').offset().top - 180;
	jQuery('body,html').animate({
		scrollTop: scrollPoint
	}, 500);
	return false;
})

jQuery(function () {
	setTimeout(function () {
		jQuery('.contact_form .success').fadeOut('500');
	}, 25000);
});

jQuery('.form-item-captcha-response input[type=text]').attr("placeholder", "Captcha")

jQuery(window).scroll(function () {

	/* if ($(this).scrollTop() < $('section[data-anchor="top"]').offset().top - 200) {
			$('.edu_tabs a').removeClass('active');
	} */

	if (jQuery('.edu_tabs a').length > 0) {

		if (jQuery('section[data-anchor="top"]').length > 0) {
			if (jQuery(this).scrollTop() >= jQuery('section[data-anchor="top"]').offset().top - 200) {
				jQuery('.edu_tabs a').removeClass('active');
				jQuery('.edu_tabs a:eq(0)').addClass('active');
			}
		}

		if (jQuery('section[data-anchor="news"]').length > 0) {
			if (jQuery(this).scrollTop() >= jQuery('section[data-anchor="news"]').offset().top - 200) {
				jQuery('.edu_tabs a').removeClass('active');
				jQuery('.edu_tabs a:eq(1)').addClass('active');
			}
		}
	}

});
window.FALSE = false;
/* Education tab end */

