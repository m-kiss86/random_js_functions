/******************************************************
SCROLL FUNCTION - USING jQuery Library
ADD .scrollme class to anchors that link to element
USEFULL FOR LONG LANDING PAGES -- I GUESS!?
*****************************************************/
$(function() {
  $(".scrollme").on("click", function(e) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);

  });
});
