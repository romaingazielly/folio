/*----------------------------------
*							
*	Version: 2.0				  
*	Date: 11/11/2015			  
*	Author: Romain GAZIELLY	  
*	Mail: romain.gazielly@gmail.com
*	Website: www.romaingazielly.com
*								  
*----------------------------------*/

/*-------------------
	Code
-------------------*/
var $window = $(window),
	$h = $window.height(),
	$w = $window.width(),
	$worksIsOpen = false;

$(function() {

	$nbProject = $('.mini-works').length;
	$heightProject = $(".contentwrapper").height();


	// Redimentionne la home
	resizeHome();
	$(window).resize(function(){ 
		resizeHome();
		positionWorks();
	}); 
	positionWorks();


	$(".mini-works").on('click', function() { 
		var workIdNumber = $(this).attr("id").substr(10);
		openServicePage(workIdNumber); 
	});

	$(".button-back").on('touchend click', function() {
		toggleBackButton();
		$worksIsOpen = false;
		for(var i = $nbProject; i > 0; i--) {
	   		$("#mini-works" + i).animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
	  	}
	  	$(".works-detail").animate({left: $w}, {queue: false, duration:700, easing:"easeInOutQuart"});
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
	
	for(var i = $nbProject; i > 0; i--) {
		$("#mini-works" + i).animate({left: -$w}, {queue: false, duration:700, easing:"easeInOutQuart"});
	}
	$(".works-detail").css("left", $w);

	$(".works-detail-content").css("opacity", 0).hide();
	
	$("#works-detail" + index).show().css("opacity", 1);
	$(".works-detail").animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});

	projectHeight = $("#works-detail" + index).height();
	$(".contentwrapper").animate({height: projectHeight + 75}, {queue: false, duration:700, easing:"easeInOutQuart"});

	if($w > 720){
		$.scrollTo( $("#works-detail" + index), 800 );
	}else{
		$.scrollTo( $("#works-detail" + index), 0 );
	}

}

function positionWorks() {
	if($worksIsOpen == true) {
		$(".mini-works").css("left", -$w + "px");
		$(".works-detail").css("left", 0);
	} else {
		$(".mini-works").css("left", "0px");
		$(".works-detail").css("left", -$w + "px");
	}
}

function toggleBackButton() {
	if($(".button-back").css("marginLeft") == "-90px") {
		$(".button-back").stop().delay(1100).animate({marginLeft:0}, {queue: true, duration:300, easing:"easeOutQuad"});
	} else {
		$(".button-back").stop().animate({marginLeft:-90}, {queue: false, duration:300, easing:"easeOutQuad"});
		$(".contentwrapper").animate({height: $heightProject}, {queue: false, duration:700, easing:"easeInOutQuart"});
	}
}

function resizeHome() {
	if (document.all) {
		$h=document.body.clientHeight;
		$w=document.body.clientWidth;
	} else {
		$w=window.innerWidth;
		$h=window.innerHeight;
	}
	//$('#container section').css({ 'height': $h +'px' });
	if($w > 720){
		$('#home').css({ 'height': $h - 80 + 'px' }); // Header

		// Texte
		$('#home-title').css({'marginTop':($h/2)-80 });
	}
}