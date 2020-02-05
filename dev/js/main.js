$(document).ready(function(){
	/*------------------Попапы--------------------*/
	$('.fancybox').fancybox({
		maxWidth: 460,
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
	/*--------------------------------------------*/
	/*----------------Мобильное меню-------------*/
	$('.menu-toggle').click(function(){
		$('.overlay').toggleClass('overlay-active');
		$(".mobile-menu").toggleClass('mobile-menu-active');
	});
	$('.mobile-menu__close').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
	});
	$('.overlay').click(function(){
		$('.overlay').removeClass('overlay-active');
		$(".mobile-menu").removeClass('mobile-menu-active');
	});
	$(document).on('click', '.toggle-close', function () {
		$(this).removeClass('toggle-close').addClass('toggle-open');
		$(this).next('.mobile-dropdown').hide(300);
	});
	$(document).on('click', '.toggle-open', function() {
		$(this).removeClass('toggle-open').addClass('toggle-close');
		$(this).next('.mobile-dropdown').show(300);
	});
	/*------------------------------------------------*/
	/*----------------Слайдер на главной-------------*/
	$('.banners-slider').owlCarousel({
		items: 1,
		dots: false,
		nav: true,
		loop: true
	});
	mobileSlider();
	$(window).resize(function() {
		mobileSlider();
	});
	function mobileSlider () {
		if (window.innerWidth < 768) {
			$('.mobile-slider').addClass('owl-carousel');
			$('.mobile-slider').owlCarousel({
				items: 1,
				dots: false,
				nav: true,
				loop: true
			});
		} else {
			$('.mobile-slider').removeClass('owl-carousel');
			$('.mobile-slider').trigger('destroy.owl.carousel');
		}
	}
	/*-----------------------------------------------*/
	/*--------Развертка каталога на главной----------*/ 
	$('.show-toggler button').click(function() {
		$(this).parent().nextAll('.hide-toggle').show(400);
		$(this).parent().hide();
		$(this).parent().nextAll('.hide-toggler').show();
	});
	$('.hide-toggler button').click(function() {
		$(this).parent().prevAll('.hide-toggle').hide(400);
		$(this).parent().hide();
		$(this).parent().prevAll('.show-toggler').show();
	});
	/*------------------------------------------------*/ 
	/*-----------------Табы в карточке----------------*/ 
	$('.item-tab').click(function () {
		$('.item-tab').removeClass('item-tab-active');
		$(this).addClass('item-tab-active');
		$('.item-tab-content').removeClass('item-tab-content-active').eq($(this).index()).addClass('item-tab-content-active');	
	});
	/*------------------------------------------------*/ 
});