$(document).ready(function(){
	/* ---скрипт плавной прокрутки к якорю--- */  
  	$(".scroll").on("click", function(e){
			var anchor = $(this);
			if (window.innerWidth > 991) {
				$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 82
				}, 777);
			} else {
				$('html, body').stop().animate({
					scrollTop: $(anchor.attr('href')).offset().top - 68
				}, 777);
			}
			e.preventDefault();
			return false;
		});

		$(".mobile-tab").on("click", function(e){
			if($(this).hasClass('mobile-tab-active')) {
				return false;
			} else {
				var target = $(this);
				setTimeout(function() {
					$('html, body').stop().animate({
					scrollTop: $(target).offset().top - 68
					}, 777);
				}, 200);
			}
		});
	/*-----------------------------------------*/
	/*------------------Попапы--------------------*/
	$('.fancybox').fancybox({
		maxWidth: 400,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.politic').fancybox({
		maxWidth: 600,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	$('.map').fancybox({
		maxWidth: 900,
		padding: 0,
		helpers: {
			overlay: {
				closeClick: true,
				locked: false
			}
		}
	});
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.mobile-menu-btn').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu__wrap").toggleClass('show-menu');
	});
	$('.close-menu').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu__wrap").removeClass('show-menu');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu__wrap").removeClass('show-menu');
	});
	$('.mobile-menu__item a').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu__wrap").removeClass('show-menu');
	});
	/*--------------------------------------------*/
});