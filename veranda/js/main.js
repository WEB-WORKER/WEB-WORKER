$(document).ready(function(){
	//sliders

$(document).ready(function()
		{
			$(".slider").each(function ()
			{
				var obj = $(this);
				$(obj).append("<div class='nav'></div>");

				$(obj).find("li").each(function ()
				{
					$(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>");
					$(this).addClass("slider"+$(this).index());
				});

				$(obj).find("span").first().addClass("on");
			});
		});

	function sliderJS (obj, sl) // slider function
	{
		var ul = $(sl).find("ul");
		var bl = $(sl).find("li.slider"+obj);
		var step = $(bl).width();
		$(ul).animate({marginLeft: "-"+step*obj}, 500);
	}

	$(document).on("click", ".slider .nav span", function() // slider click navigate
	{
		var sl = $(this).closest(".slider");
		$(sl).find("span").removeClass("on");
		$(this).addClass("on");
		var obj = $(this).attr("rel");
		sliderJS(obj, sl);
		return false;
	});





	// $(".slider").each(function() {

	// 			var repeats = 5, // кількість повторювань автоматичного прокручування
	// 					interval = 3, // інтервал в секундах
	// 					repeat = false, // чи треба автоматично прокручувати (true/false)
	// 					slider = $(this),
	// 					repeatCount = 0,
	// 					elements = $(slider).find(".li").length;

	// 			$(slider)
	// 				.append("<div class='nav'></div>")
	// 				.find(".li").each(function() {
	// 					$(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
	// 					$(this).attr("data-slide", $(this).index());
	// 				})
	// 				.end()
	// 				.find("span").first().addClass("on");

	// 			// add timeout

	// 			if (repeat) {
	// 				repeat = setInterval(function() {
	// 					if (repeatCount >= repeats - 1) {
	// 						window.clearInterval(repeat);
	// 					}

	// 					var index = $(slider).find('.on').data("slide"),
	// 							nextIndex = index + 1 < elements ? index + 1 : 0;

	// 					sliderJS(nextIndex, slider);

	// 					repeatCount += 1;
	// 				}, interval * 1000);
	// 			}

	// 		});
		

	// function sliderJS(index, slider) { // slide
	// 	var ul = $(slider).find(".ul"),
	// 			bl = $(slider).find("li[data-slide=" + index + "]"),
	// 			step = $(bl).width();

	// 	$('.slider')
	// 		.find("span").removeClass("on")
	// 		.end()
	// 		.find("span[data-slide=" + index + "]").addClass("on");

	// 	$('.ul').animate({
	// 		marginLeft: "-" + step * index
	// 	}, 500);
	// }

	// $(document).on("click", ".slider .nav span", function() { // slider click navigate
	// 	var slider = $(this).closest(".slider"),
	// 			index = $(this).data("slide");

	// 	sliderJS(index, slider);
	// });
















	// $('.sect1__slider').slick({
	// 			dots: true,
	// 			autoplay: false
	// 		});
	// $('.sect1__slider-item').css({display: 'block'});
	$('.sect2__slider').slick({
				dots: false,
				autoplay: false,
				slidesToShow: 5, 
				slidesToScroll: 1
			});
	$('.sect2__slider-item').css({display: 'block'});

	//sect2__slider rating
	$('#rating_1').rating({
    fx: 'full',
    image: 'img/rating/stars.svg',
    // loader: 'img/rating/ajax-loader.gif',
    // url: 'rating.php',
    // callback: function(responce){
    //     this.vote_success.fadeOut(2000);
    // }
});


	$('.sect2__cart').on('click', function(){
		$('.sect0').show();
	});

//video

// var vid = document.getElementById("video");
// function playVid() { 
//     vid.play(); 
// } 

// function pauseVid() { 
//     vid.pause(); 
// }

var video = document.getElementById('video'),
        timeBlock = $('.time'),
        progress = $('.progress');

 $('.play').on('click', function(e){
        e.preventDefault();

        var playBtn = $(this);

        if (video.paused) {
            video.play();
            playBtn.text('||');
            playBtn.css('color', '#fff');
            playBtn.css('background-color', '#3ab3f8');
            playBtn.css('padding', '7px 8px 7px 7px');
            playBtn.css('width', '10px');
            playBtn.css('border-radius', '2px');
        } else {
            video.pause();
            playBtn.text('>');
        }

        playBtn.css('bottom', '19px');
        playBtn.css('left', '35px');

        $('.timeline, .time').show();
        
        $('.controls').css('background', '#ceecfd');
        $('.controls').css('border', '1px solid #09a0f6');

    });

  $(video).on({
  		timeupdate : function() {
            var
                currentTime = video.currentTime,
                duration = video.duration,
                elapsedTime = currentTime;

            setTime(elapsedTime);

            var progression = Math.floor(currentTime / duration * 100);

            progress.css({
               width : progression + '%'
            });
        },

        canplay : function () {
            var duration = video.duration;
            setTime(duration);
        }

  });

  function setTime(time){
        var
            minutes = Math.floor(time / 60),
            seconds = Math.floor(time - (minutes * 60)),
            timeString = minutes + ':' + seconds;

        timeBlock.text(timeString);
    }

 $('.timeline').on('click', function(e) {

        var $this = $(this),
            position = e.pageX - $this.offset().left,
            width = $this.width(),
            percents = position / width * 100,
            trackPosition = video.duration / 100 * percents;

        video.currentTime = trackPosition;
    });

});
//end jQuery







    
