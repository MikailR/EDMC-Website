var oldScrollPos = 0;
$(document).scroll(function(e){
    var scrollTop = $(this).scrollTop();
    if(scrollTop > 0){
        $('.navbar').removeClass('navbar-light')
        $('.navbar').addClass('navbar-dark')
        $('.navbar').addClass('bg-dark');
    }else{
        $('.navbar').addClass('navbar-light')
        $('.navbar').removeClass('navbar-dark')
        $('.navbar').removeClass('bg-dark');
    }

    if(oldScrollPos < scrollTop && scrollTop > ($(window).height() - $('.navbar').outerHeight())){
        // $('.navbar').css({"top" : $(window).height() - $('.navbar').outerHeight() - scrollTop})
        $('.navbar').css({"top" : -$('.navbar').outerHeight()})
    } else if (oldScrollPos > scrollTop) {
        $('.navbar').css({"top" : '0'})
    }
    oldScrollPos = scrollTop;
})

// Changes the menu from transparent to dark on dropdown
$('#menu').on('show.bs.collapse', function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop === 0) {
        $('.navbar').removeClass('navbar-light')
        $('.navbar').addClass('navbar-dark')
        $('.navbar').addClass('bg-dark');
    }
})

$('#menu').on('hide.bs.collapse', function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop === 0) {
        $('.navbar').addClass('navbar-light')
        $('.navbar').removeClass('navbar-dark')
        $('.navbar').removeClass('bg-dark');
    }
})

function scrollDown() {
    var scrollTop = $(this).scrollTop();
    var viewportHeight = $(window).height();
    
    var timeFromTop = 1000;
    var timing = ((viewportHeight-scrollTop)/viewportHeight) * timeFromTop;
    $('html, body').animate({scrollTop: viewportHeight }, timing);
}