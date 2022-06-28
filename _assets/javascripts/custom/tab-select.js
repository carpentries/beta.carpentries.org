$( document ).ready(function() {
	var page = $('h1').first().html();
	$('.section-tabs a').each(function(){
		if($(this).html() == page){
			$(this).addClass('active');
		}
	});
});
