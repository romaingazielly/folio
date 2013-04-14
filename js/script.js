/*----------------------------------
*							
*	Version: 1.0				  
*	Date: 30/03/2013			  
*	Author: Romain GAZIELLY	  
*	Mail: romain.gazielly@gmail.com
*	Website: www.romaingazielly.com
*								  
*----------------------------------*/

/*-------------------
	Code
-------------------*/
var $window = $(window),
	$windowHeight = $window.height(),
	$windowWidth = $window.width(),
	$worksIsOpen = false;

$(function() {
	loading();
	positionWorks();

	$(".mini-works1").click(function() { openServicePage(1); });
	$(".mini-works2").click(function() { openServicePage(2); });


	$(".button-back").click(function() {
		toggleBackButton();
		$worksIsOpen = false;
		for(var i = 6; i > 0; i--) {
	   		$(".mini-works" + i).animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
	  	}
	  	$(".works-detail").animate({left: $windowWidth}, {queue: false, duration:700, easing:"easeInOutQuart"});
	});

	$('nav ul#menu li a').on('click', function(e) {
		e.preventDefault();
		$this = $(this);
		
		page = $this.attr('href');
		$.scrollTo( page, 800 );
	});

});

function openServicePage(index) {
	$worksIsOpen = true;
	toggleBackButton();
	
	for(var i = 2; i > 0; i--) {
		$(".mini-works" + i).animate({left: -$windowWidth}, {queue: false, duration:700, easing:"easeInOutQuart"});
	}
	$(".works-detail").css("left", $windowWidth);

	$(".works-detail-content").css("opacity", 0).hide();
	
	$(".works-detail" + index).show().css("opacity", 1);
	$(".works-detail").animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
}

function loading() {
	$('aside').animate({ 'width':'100%' }, 2000, function(){
		$('aside p').animate({ opacity:1 }, 800);
		$('header nav').animate({ opacity:1 }, 800);
		$('#container').animate({ opacity:1}, 800);
	});
}

function positionWorks() {
	if($worksIsOpen == true) {
		$(".mini-works").css("left", -$windowWidth + "px");
		$(".works-detail").css("left", 0);
	} else {
		$(".mini-works").css("left", "0px");
		$(".works-detail").css("left", -$windowWidth + "px");
	}
}

function toggleBackButton() {
	if($(".button-back").css("marginLeft") == "-90px") {
		$(".button-back").stop().delay(1100).animate({marginLeft:0}, {queue: true, duration:300, easing:"easeOutQuad"});
	} else {
		$(".button-back").stop().animate({marginLeft:-90}, {queue: false, duration:300, easing:"easeOutQuad"});
	}
}