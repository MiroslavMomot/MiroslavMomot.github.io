// $(window).on('load',function(){
// 	var wWidth = $(window).width();
// 	if (wWidth > 992) {
// 		$('body').addClass('ready ovh')
// 		setTimeout(function(){
// 			$('header').addClass('close');
// 			$('.all .content').addClass('open');
// 			$('nav').removeClass('black');

// 		},6000);
// 		setTimeout(function(){
// 			$('body,html').animate({scrollTop: 20},1000);
// 			$('body').removeClass('ovh');
// 		},7000);
// 	}
// });
$(document).ready(function() {
	function randomInteger(min, max) {
	    var rand = min - 0.5 + Math.random() * (max - min + 1)
	    rand = Math.round(rand);
	    return rand;
	  };
	$('.tabs-showrooms .tab').click(function(){
		$(this).toggleClass('active').siblings().removeClass('active');
	});
	Pace.on('done',function(){
		$('body').addClass('ready');
		$('.preloader').removeClass('visible');
	});

	$('.plus-box').click(function(){
		$(this).toggleClass('open');
		$('.product-description').toggleClass('hidden');
		$('.product-cart-wrapper').toggleClass('huge');
	});
	$('.back-box').click(function(e){
		e.preventDefault();
		$('body').removeClass('ready');
		setTimeout(function(){
			history.back();
		},1000);return false;
	});
	$('.tabs .tab-links ul li').click(function(){
		var	tabAttr = $(this).attr('data-tab');
		$(this).addClass('active').siblings().removeClass('active');
		$('#'+ tabAttr).show('fast').siblings().hide();
	});
	$('.flex-box.country input[type="text"]').click(function(){
		$('.flex-box.country').find('.arrow').toggleClass('open');
		$('.flex-box.country').find('.dropdown').toggleClass('open');
		
	});

	$('.flex-box.country .dropdown a').click(function(e){
		e.preventDefault();
		var textThis = $(this).html();
		var inputValue = $('input#country').val();
		inputValue = textThis;
		$('.flex-box.country').find('.arrow').removeClass('open');
		$('.flex-box.country').find('.dropdown').removeClass('open');
	});
	$('.continue-payment').click(function(e){
		e.preventDefault();
		$('.payment-form').show('fast');
	});
	$('.delete-product a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().fadeTo(500, 0,function(){
			$(this).remove();
		});

	});
	$('.product-image').viewportChecker();
	$('.blog-box').viewportChecker();
	$('.content.blog-inside').viewportChecker();
	$('.page-buttons').viewportChecker();
	$('.content-first-top').viewportChecker();
	$('.slider-wrapper-blog').viewportChecker();
	$('.content-second').viewportChecker();
	$('.content-image-boxes').viewportChecker();
	$('.separate-box').viewportChecker();	
	$('.content.blog-inside.about .about-grid .text-box').viewportChecker();
	$('.content.blog-inside.about .about-grid .instagram-box').viewportChecker();
	$('.content.blog-inside.about .about-grid .instagram-text').viewportChecker();
	$('.adress-box').viewportChecker();
	$('.map-box').viewportChecker();
	$('.lookbook-grid a').viewportChecker();
	$('.register-box').viewportChecker();
	$('.login-box').viewportChecker();
	$('.register-page').viewportChecker();
	
	var product = $('.product-cart-wrapper .product-image');
	var counter = 0;	
	$('.image-down').click(function(i){	
	if (counter >= 0 && counter <= product.length-2) {	
		counter++;	

		var prodOffser = $(product[counter]).offset().top-200;
		$('body,html').animate({scrollTop: prodOffser});
		
		}
	});

	$('.image-up').click(function(i){	
		if (counter > 0 && counter <= product.length){
		counter--;

		var prodOffser = $(product[counter]).offset().top-200;
		$('body,html').animate({scrollTop: prodOffser});
			
		}
	});

	
	$('.relocate').on('click',function(){
		var href = $(this).attr('href');
		$('body').removeClass('ready');
		setTimeout('location=\"'+href+'\"',1000);
		return false;
	});

	var wWidth = $(window).width();
	if (wWidth < 992) {
		$('.product-wrapper').addClass('grid-style');
		$('.grid').addClass('active');
		$('.product-cart-wrapper').slick({
			dots: true
		});
		$('.thumbs-block').mCustomScrollbar({
			scrollInertia: 500,
			axis: 'x'
		});

	}
	else{
		$('.product-wrapper').addClass('grid-style-four');
		$('.grid-four').addClass('active');
	}
	$('a.popup').click(function(e){
		e.preventDefault();
		var dataModal = $(this).attr('data-modal');
		$('#'+ dataModal).addClass('active');		
	});
	$('.close').click(function(){
		$(this).parent().parent().removeClass('active');
	});
	$('.close-box-modal').click(function(){
		$(this).parent().removeClass('active');
	});
	$('.phone-box a.arrow').click(function(e){
		e.preventDefault();
		$('footer .phone-box a.arrow').toggleClass('overhide');
		$('footer .phone-box .phone-inner ul').toggleClass('overhide');		
		$('footer .mail-box').toggleClass('overhide');
		$('footer .social').toggleClass('overhide');
		$('footer .info').toggleClass('overhide');

	});
	$('.product-box').viewportChecker();
	$('.burger').click(function(){
		$(this).toggleClass('open');
		// $('.all').toggleClass('menu-open');
		// $('nav').toggleClass('menu-open');
		// $('.filter').toggleClass('menu-open');
		$('.hide').toggleClass('menu-open');
		$('.size-box').removeClass('open');
		$('.size-trigger').removeClass('active');
		// $('.bottom-nav').toggleClass('menu-open');
		$('.menu').toggleClass('open');
		$('body').toggleClass('ovh');
		// $('nav').toggleClass('blur');
		// $('.all').toggleClass('blur');
		if (!$('.bottom-nav').hasClass('hideNav')) {
			$('.bottom-nav').addClass('hideNav');
		}
		
	});
	$('.cart-counter').click(function(){
		$('.cart').toggleClass('open');
		// $('.filter').toggleClass('cart-open');
		// $('.all').toggleClass('cart-open');
		$('.hide').toggleClass('cart-open');
		$('.size-box').removeClass('open');
		$('.size-trigger').removeClass('active');
		// $('nav').toggleClass('cart-open');
		// $('.bottom-nav').toggleClass('cart-open');
		$('.content-cart ul li').toggleClass('visible');
		// $('nav').toggleClass('blur');
		// $('.all').toggleClass('blur');
		$('body').toggleClass('ovh');
		if (!$('.bottom-nav').hasClass('hideNav')) {
			$('.bottom-nav').addClass('hideNav');
		}
		
	});
	$('.grid.blog-trigger').click(function(){		
		$('.blog-grid').fadeTo(400,0);
		setTimeout(function(){
			$('.blog-grid').addClass('grid-two').removeClass('grid-four');
			$('body,html').animate({scrollTop: 0},0)
		},500);
		setTimeout(function(){
			$('.blog-grid').fadeTo(500,1);
		},550);
	
	});
	$('.grid-four.blog-trigger').click(function(){		
		$('.blog-grid').fadeTo(400,0);
		setTimeout(function(){
			$('.blog-grid').addClass('grid-four').removeClass('grid-two');
			$('body,html').animate({scrollTop: 0},0)
		},500);
		setTimeout(function(){
			$('.blog-grid').fadeTo(500,1);
		},550);

	});


	$('.list').click(function(){
		$(this).addClass('active');
		$('.grid').removeClass('active');
		$('.grid-four').removeClass('active');
		$('.product-wrapper').fadeTo(400,0);
		setTimeout(function(){
			$('.product-wrapper').removeClass('grid-style').removeClass('grid-style-four').addClass('list-style');
			$('body,html').animate({scrollTop: 0},0)
		},500);
		setTimeout(function(){
			$('.product-wrapper').fadeTo(500,1);
		},550)
		

	});
	$('.grid').click(function(){
		$(this).addClass('active');
		$('.list').removeClass('active');
		$('.grid-four').removeClass('active');
		$('.product-wrapper').fadeTo(400,0);
		setTimeout(function(){
			$('.product-wrapper').addClass('grid-style').removeClass('list-style').removeClass('grid-style-four');
			$('body,html').animate({scrollTop: 0},0)
		},500);
		setTimeout(function(){
			$('.product-wrapper').fadeTo(500,1);
		},550)
	});
	$('.grid-four').click(function(){
		$(this).addClass('active');
		$('.list').removeClass('active');
		$('.grid').removeClass('active');
		$('.product-wrapper').fadeTo(400,0);
		setTimeout(function(){
			$('.product-wrapper').addClass('grid-style-four').removeClass('list-style').removeClass('grid-style');
			$('body,html').animate({scrollTop: 0},0)
		},500);
		setTimeout(function(){
			$('.product-wrapper').fadeTo(500,1);
		},550)
	});
	$('.filter-trigger').click(function(){
		$('.filter').addClass('open');
		$('.filter .nav').addClass('open');
		$('body').toggleClass('ovh');
		$('.size-box').removeClass('open');
		$('.size-trigger').removeClass('active');
		// $('.all').toggleClass('blur');
	});
	$('.close').click(function(){
		$(this).parent().removeClass('open').removeClass('active').find('.nav').removeClass('open');
		$('body').removeClass('ovh');
		// $('.all').removeClass('blur');
	});
	$('.hide').click(function(){
			$('.cart').removeClass('open');
			// $('nav').removeClass('blur');
			// $('.all').removeClass('blur');
			$('.all').removeClass('menu-open').removeClass('cart-open');
			$('nav').removeClass('menu-open').removeClass('cart-open');
			$('.filter').removeClass('menu-open').removeClass('cart-open');
			$('.hide').removeClass('menu-open').removeClass('cart-open');
			$('.bottom-nav').removeClass('menu-open').removeClass('cart-open');
			$('.menu').removeClass('open').removeClass('cart-open');
			$('.burger').removeClass('open');
			$('.content-cart ul li').removeClass('visible');
			$('body').removeClass('ovh');
			$('.size-box').removeClass('open');
			$('.size-trigger').removeClass('active');
			if ($('.bottom-nav').hasClass('hideNav')) {
			$('.bottom-nav').removeClass('hideNav');			

		}
	});	
	$('.close-box').click(function(){
			$('.cart').removeClass('open');
			// $('.all').removeClass('blur');
			// $('nav').removeClass('blur');
			$('.all').removeClass('menu-open').removeClass('cart-open');
			$('nav').removeClass('menu-open').removeClass('cart-open');
			$('.filter').removeClass('menu-open').removeClass('cart-open');
			$('.hide').removeClass('menu-open').removeClass('cart-open');
			$('.bottom-nav').removeClass('menu-open').removeClass('cart-open');
			$('.menu').removeClass('open').removeClass('cart-open');
			$('.burger').removeClass('open');
			$('.content-cart ul li').removeClass('visible');
			$('body').removeClass('ovh');
			if ($('.bottom-nav').hasClass('hideNav')) {
			$('.bottom-nav').removeClass('hideNav');
			$('.size-box').removeClass('open');
			$('.size-trigger').removeClass('active');
		}
	});	
	$('.more-box').viewportChecker();
	$('.addToBag-button a').click(function(e){
		e.preventDefault();		
	});
	$('.size-trigger').click(function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.size-box').toggleClass('open');
		$('.hide').toggleClass('menu-open');
		$('body').toggleClass('ovh');
	});
	$('.size-box ul li a').click(function(e){
		e.preventDefault();
		$(this).addClass('cliked').parent().siblings().find('a').removeClass('cliked');
		var	textSize = $(this).html();
		$('.size-trigger a').html(textSize);
		$('.size-box').removeClass('open');
		$('.size-trigger').removeClass('active');
		$('.hide').removeClass('menu-open');
		$('body').removeClass('ovh');
		if($('.size-box ul li a').hasClass('cliked')){
			$('.addToBag-button').addClass('active');
		}else{
			$('.addToBag-button').removeClass('active');
		}

	});
var cardPage = $('#card').length;

if (wWidth > 992 && cardPage) { 
	$(function(){
	  
	    var $bl    = $(".thumbs-block"),
	        $th    = $(".thumbs"),
	        blW    = $bl.outerWidth(),
	        blSW   = $bl[0].scrollWidth,
	        wDiff  = (blSW/blW)-1,  // widths difference ratio
	        mPadd  = 50,  // Mousemove Padding
	        damp   = 50,  // Mousemove response softness
	        mX     = 0,   // Real mouse position
	        mX2    = 0,   // Modified mouse position
	        posX   = 0,
	        mmAA   = blW-(mPadd*2), // The mousemove available area
	        mmAAr  = (blW/mmAA);    // get available mousemove fidderence ratio

		$bl.mousemove(function(e) {
	        mX = e.pageX - this.offsetLeft;
	        mX2 = Math.min( Math.max(0, mX-mPadd), mmAA ) * mmAAr;
		});

		setInterval(function(){
			posX += (mX2 - posX) / damp; // zeno's paradox equation "catching delay"	
			$th.css({transform: 'translate3d(' + -posX*wDiff + 'px,0,0)' });
		}, 10);

	});
}
	
	if (cardPage && wWidth < 992) {
		$(document).scroll(function(){
			var	separate = $('.separate-box').offset().top-700;
			var mainScroll = window.pageYOffset;
			if (mainScroll > separate) {
				$('.bottom-nav').addClass('hideNav');
			}
			else if (!$('.product-cart-wrapper').hasClass('huge')){
				$('.bottom-nav').removeClass('hideNav');
			}
		});
	}
	var catalogPage = $('#catalog').length;
	if(catalogPage){
	$(document).scroll(function(){		
		var mainScroll = $(document).scrollTop();
		var	footerOffset = $('#footer').offset().top-800;
		
		if (mainScroll >= footerOffset){
			$('.bottom-nav').addClass('hideNav');
		}else{
			$('.bottom-nav').removeClass('hideNav');
		}
	});
	}

	if (cardPage && wWidth > 992) {
		$('.product-image').click(function(){
			$(this).parent().toggleClass('huge');
			$('.product-description').toggleClass('hidden');
		});
		$(document).scroll(function(){
			var	separate = $('.separate-box').offset().top-700;
			var mainScroll = window.pageYOffset;

			if (mainScroll > separate) {
				$('.product-description').addClass('hidden');
				$('.bottom-nav').addClass('hideNav');
			}
			else if (!$('.product-cart-wrapper').hasClass('huge')){
				$('.product-description').removeClass('hidden');
				$('.bottom-nav').removeClass('hideNav');
			}
		});
		$(document).ready(function(){
			var	separate = $('.separate-box').offset().top-700;
			var mainScroll = window.pageYOffset;
			if (mainScroll > separate) {
				$('.product-description').addClass('hidden');
				$('.bottom-nav').addClass('hideNav');
			}
			else{
				$('.product-description').removeClass('hidden');
				$('.bottom-nav').removeClass('hideNav');
			}
		});
	}

	function kolvoTovaroV(){
		var productArrayLength = $('.content-cart ul li').length;
		$('.cart-counter span').html(productArrayLength);
	}
	kolvoTovaroV();
	function schetovod(){
		var showBox = $('.cart .nav-cart .total-box .cost .summa span');
		var numbers = $('.cart .content-cart ul li .summa');
		var sum = 0;
		
		numbers.each(function() {
		    sum += parseInt($('span',this).html());
		});
		showBox.text(sum);
	}
	schetovod();

	
	$('.cart .content-cart ul li .product-nav .delete-box').click(function(){		
		$('.cart-counter span').addClass('change');	
		$(this).parent().parent().addClass('top').fadeTo(500, 0,function(){
			$(this).remove();
			$('.cart-counter span').removeClass('change');
			schetovod();
			kolvoTovaroV();
		});
		
	});
	

	$('li.dropdown a.drop').click(function(e){
		e.preventDefault();
		$(this).parent().toggleClass('active');
		$(this).siblings('ul').show(300);
		if ($(this).parent().hasClass('active')) {
			$(this).siblings('ul').show(300);
		}
		else{
			$(this).siblings('ul').hide(300);
		}

	});
	$('li.filter-drop a.drop').click(function(){
		$(this).parent().toggleClass('active');
		$(this).siblings('ul').show(300);
		// $(this).siblings().find('ul').hide(300);
		if ($(this).parent().hasClass('active')) {
			$(this).siblings('ul').show(300);
		}
		else{
			$(this).siblings('ul').hide(300);
		}
	});
	$('.filter li.filter-drop ul li a').click(function(e){
		e.preventDefault();
		$(this).toggleClass('cliked');
		if ($('li.filter-drop ul li a').hasClass('cliked')) {
			$('.apply').addClass('active');
		}
		else{
			$('.apply').removeClass('active');
		}
	});
	var mainPage = $('#main-page').length;
	if (mainPage) {
	$(document).scroll(function(){		
		var mainScroll = $(document).scrollTop();
		var aboutSection = $('section.about').offset().top-500;
		if (mainScroll >= aboutSection) {
			$('.bottom-nav').addClass('hideNav');
			$('section.about').addClass('visible')
		}
		else{
			$('.bottom-nav').removeClass('hideNav');
		}
	});



	$(document).scroll(function(){
		var mainScroll = $(document).scrollTop();
		var instaSection = $('section.instagram').offset().top-500;
		if (mainScroll >= instaSection) {
			$('section.instagram').addClass('visible');
		}
	});
}


	var array = $('section.instagram .slider.desktop a');
		var arrayLenght = array.length;
		var wrapper = '<div class="slide"></div>';
		var count = arrayLenght;
		var i=0;
		var newArrayLog = [];
		while (i<=count) {
		newArrayLog.push(array.slice(i,i+6));
		i+=6;
		}
		newArrayLog.forEach(function(item){
		item.wrapAll(wrapper);
		});

		$('.blog-inner-slider .slide').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled: true
			}
		});
		$('.about-inner-slider .slide').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled: true
			}
		});
		$('.content-image-boxes .image').magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery:{
				enabled: true
			}
		});
		var $sliderAbout = $('.about-inner-slider');
		var $progressBar = $('.progress');
		var $progressBarLabel = $( '.slider__label' );
		$sliderAbout.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
		$progressBar
		.css('background-size', calc + '% 100%')
		.attr('aria-valuenow', calc );
		});
		$sliderAbout.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			dots: false,
			useCSS: true,
			speed: 500,
			autoplay: false,
			autoplaySpeed: 4000,
			fade: false,
			draggable:true,
			lazyLoad: 'ondemand',
			prevArrow:"<button type='button' class='slick-prev'></button>",
			nextArrow:"<button type='button' class='slick-next'></button>",
			accessibility: false,
			centerMode: false,
			mobileFirst: false,
			adaptiveHeight: false
		});  
		var slickkTwoAbout = $('.about-inner-slider');
		$('.work-nav .slikk-prev-about').click(function(e){
		e.preventDefault();
		  slickkTwoAbout.slick('slickPrev');
		  console.log('blya')
		});

		$('.work-nav .slikk-next-about').click(function(e){
		e.preventDefault();
		  slickkTwoAbout.slick('slickNext');
		});


		var $slider = $('.blog-inner-slider');
		var $progressBar = $('.progress');
		var $progressBarLabel = $( '.slider__label' );
		$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
		var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
		$progressBar
		.css('background-size', calc + '% 100%')
		.attr('aria-valuenow', calc );
		});
		$slider.slick({
			slidesToShow: 3,
			slidesToScroll: 2,
			infinite: false,
			arrows: false,
			dots: false,
			useCSS: true,
			speed: 500,
			autoplay: false,
			autoplaySpeed: 4000,
			fade: false,
			draggable:true,
			lazyLoad: 'ondemand',
			prevArrow:"<button type='button' class='slick-prev'></button>",
			nextArrow:"<button type='button' class='slick-next'></button>",
			accessibility: false,
			centerMode: false,
			mobileFirst: false,
			adaptiveHeight: false
		});  
		var slickkTwo = $('.blog-inner-slider');
		$('.work-nav .slikk-prev').click(function(e){
		e.preventDefault();
		  slickkTwo.slick('slickPrev');
		  console.log('aloe')
		});

		$('.work-nav .slikk-next').click(function(e){
		e.preventDefault();
		  slickkTwo.slick('slickNext');
		});




	$('.slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			arrows: false,
			dots: false,
			useCSS: true,
			speed: 500,
			autoplay: false,
			autoplaySpeed: 4000,
			fade: false,
			draggable:true,
			lazyLoad: 'ondemand',
			prevArrow:"<button type='button' class='slick-prev'></button>",
			nextArrow:"<button type='button' class='slick-next'></button>",
			accessibility: false,
			mobileFirst: false,
			adaptiveHeight: false			 
		});

	var slickk = $('.slider');
	$('.slider-wrapper .nav .pagination .prev').click(function(e){
		e.preventDefault();
	      slickk.slick('slickPrev');
	  
	  });

	$('.slider-wrapper .nav .pagination .next').click(function(e){
		e.preventDefault();
	      slickk.slick('slickNext');
	  
	  });
	$('.menu-content').mCustomScrollbar({
		scrollInertia: 500
	});
	$('.filter .content').mCustomScrollbar({
		scrollInertia: 500
	});
	$('.content-cart').mCustomScrollbar({
		scrollInertia: 500
	});
	// $('.flex-box.country .dropdown').mCustomScrollbar();
	
});
