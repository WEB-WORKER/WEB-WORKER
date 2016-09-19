$(document).ready(function(){
	$('.sweet-cupcake__slider').slick({
				dots: true,
				autoplay: true
			});
	$('.sweet-cupcake__slider-item').css({display: 'block'});
	//questions
	//accordion
	$('.questions__desc-minhead.active').next().show();
	$('.questions__desc-minhead').click(function () {
		var
			minhead = $('.questions__desc-minhead'),
			desc = $('.questions__desc-minhead').next();
		
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$(this).parent().removeClass('parent_active');
			desc.slideUp();
		} 
		else { 
			minhead.removeClass('active');
			minhead.parent().removeClass('parent_active');
			desc.slideUp();
			$(this).addClass('active').next().slideDown();
			$(this).parent().addClass('parent_active');
		}
	});
	//team
	//tabs
	$('.tab').css({'display': 'none'});
	$('#tab1').css({'display': 'block'});
	$('.team__link').click(function(e){
		e.preventDefault();
		$(this).closest('.team__item').addClass("active");	
		$(this).closest('.team__item').siblings().removeClass("active");
		var tab = $(this).attr('href');
		console.log(tab);
		var nottab = $('.tab').siblings();
		nottab.css({'display': 'none'});
		$(tab).fadeIn(400);
	});
	//mask
	$(function(){
  		$("#phone").mask("8(999) 999-99-99");
	});	
});
//end jQuery







    
