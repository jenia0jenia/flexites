
/** *********** */
$(window).scroll(function(){
	var hiddenMenu = $('.hidden-menu'),
		scroll = $(window).scrollTop();
	if (scroll >= 222) 
		hiddenMenu.addClass('fix-menu')
	else hiddenMenu.removeClass('fix-menu');
});

$(document).ready(function() {
	$('.').click(function() {
		// console.log('text')
        $('.hidden-menu__nav').toggleClass('visible');
    });
});

