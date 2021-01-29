
'use strict';

const w = $(window).width();
const spwidth = 767;
const tabletwidth = 1025;

{
	const openMenu = document.getElementById('menu_open');
	const Nav = document.querySelector('header nav');
	const body = document.querySelector('body');
	const header = document.querySelector('header');

	openMenu.addEventListener('click', function () {
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
		body.classList.toggle('active');
		header.classList.toggle('open');
	});
}


$(function () {
	// JQueryの範囲

	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$('.header_in').addClass('active');
		}else{
			$('.header_in').removeClass('active');
		}
	});
	
	// フェードイン
	$('.fadein, .fadein02, .fadein03, .fadedown01, .fadedown02, .fadedown03, .fadedown04, .fadedown05, .fadedown06, .fadeleft, .faderight, .deco, .deco02, .view').on('inview',function(){
		$(this).addClass('active');
	});
	
	
	
	
	$("body").removeClass("preload");

});