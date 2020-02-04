$(window).on('load', function () {
	
});

$(window).scroll(function(){
	
});

$(window).bind("load resize", function () {
	if ($(window).width() >= 768) {
		
	} else {
		
	}
});

$(document).ready(function(){
	$('.nav-item').click(function(){
		$(".nav-item").removeClass('active');
		$(this).toggleClass('active');
	});
	$('.navbar-toggler').on('click', function() {
		$(this).toggleClass('is-active');
	});
});

function sentForm() {
	$('.form-started').submit(function() {
		alert('форма успешно отправлена!');
	}); 
}