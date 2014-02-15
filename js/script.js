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
	$h = $window.height(),
	$w = $window.width(),
	$worksIsOpen = false;

$(function() {

	// Redimentionne la home
	resizeHome();
	$(window).resize(function(){ 
		resizeHome();
	}); 
	positionWorks();

	$(".mini-works").click(function() { 
		var workIdNumber = $(this).attr("id").substr(10);
		openServicePage(workIdNumber); 
	});

	$(".button-back").click(function() {
		toggleBackButton();
		$worksIsOpen = false;
		for(var i = 6; i > 0; i--) {
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
	var nbProject = $('.mini-works').length;
	toggleBackButton();
	
	for(var i = nbProject; i > 0; i--) {
		$("#mini-works" + i).animate({left: -$w}, {queue: false, duration:700, easing:"easeInOutQuart"});
	}
	$(".works-detail").css("left", $w);

	$(".works-detail-content").css("opacity", 0).hide();
	
	$("#works-detail" + index).show().css("opacity", 1);
	$(".works-detail").animate({left: 0}, {queue: false, duration:700, easing:"easeInOutQuart"});
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
	$('#container section').css({ 'height': $h +'px' });
	$('#home').css({ 'height': $h - 80 + 'px' });
	$('#bgHome').css({ 'width': $w + 'px' });

	//Centrer
	if ($w > 960) {
		$('#bgHome').css({ 'margin-left': - Math.round($w/2), left: '50%' });
	}
	else {
		$('#bgHome').css({ 'margin-left': 0, left: 0 });
	}
	console.log($w);
}