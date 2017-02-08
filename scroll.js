/******************************************************
SCROLL FUNCTION - USING jQuery Library
ADD .scrollme class to anchors that links to an element 

e.g  <a class="scrollme" href="#myDiv">Scroll</a>
     <div id="myDiv">Scroll To</div>

USEFULL FOR LONG LANDING PAGES -- I GUESS?!?
*****************************************************/
$(function() {
  $(".scrollme").on("click", function(e) {

    e.preventDefault();

    $("body, html").animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);

  });
});
