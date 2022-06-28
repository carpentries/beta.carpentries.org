$( document ).ready(function() {
    $('.section').each(function(){
        $('#table-of-contents').append('<li><a onclick="checkMobile()" class="contents-link link nav-link" id="section-link-' + this.id + '" href="#'+this.id+'">'+$(this).children('h2').first().html()+'</a></li>');
    });

  var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#table-of-contents',
    offset: 100
  })

  window.addEventListener('activate.bs.scrollspy', function () {
    document.querySelectorAll('#table-of-contents .nav-link .current-page-label')?.forEach( elem => elem.remove() );

    $('#table-of-contents .nav-link.active').prepend('<span class="current-page-label visually-hidden">Current Section</span> ');
  } )

});

function checkMobile() {
    if($(window).width() < 775){
        $('.sidebar').removeClass('show');
        $('#puller').removeClass('show');
        $('.offcanvas-backdrop').removeClass('show');
    }
}
