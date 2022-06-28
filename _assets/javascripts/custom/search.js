$( document ).ready(function() {
	var area = $('#blog_searchbox');
	if (area.addEventListener) {
		area.addEventListener('input', function() {
			$('#autocomplete').show();
		}, false);
	} else if (area.attachEvent) {
		area.attachEvent('onpropertychange', function() {
			$('#autocomplete').hide();
		});
	}
});