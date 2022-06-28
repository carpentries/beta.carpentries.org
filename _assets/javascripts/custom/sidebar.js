$( document ).ready(function() {
	let shown = false;
	$('#puller').keydown(function(e){
		if(e.which === 13 || e.which === 32){
			$(this).click();
		}
	});
	$('#puller').click(function(){
		if(!shown) {
			$('.sidebar').addClass('show');
			$(this).addClass('show');
			shown = true;
		} else {
			$('.sidebar').removeClass('show');
			$(this).removeClass('show');
			shown = false;
		}
	});
});