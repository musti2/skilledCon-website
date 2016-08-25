(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.modal-trigger').leanModal();
    $('.parallax').parallax();

    var tl = new TimelineMax({delay: 0.4});
    tl.staggerTo('.load', 1, {opacity: 1, ease: Power2.easeIn });
    tl.staggerTo('span.tween', 1, {left: 0, scale: 0.8, opacity: 1, ease: Bounce.easeOut}, 0.2);
    tl.to('.tagline', 1, { right: 0, opacity: 1, ease: Power2.easeOut }, 0.2);
    tl.to('#totop', 1.2, { delay: "+=0.4", y: "+=18px", yoyo:true,repeat:-1,ease: Power2.easeOut });

    // var stickyNav = document.querySelector('#sticky-nav');
    // $(stickyNav).sticky({topSpacing:0});
    $('#totop').click(function(){
        scrollTo('body');
    });
    $('#services, #servicesM').click(function (){
      scrollTo('#servicesDiv');
      $('.button-collapse').sideNav('hide');
    });
    $('#history, #historyM').click(function (){
      scrollTo('#historyDiv');
      $('.button-collapse').sideNav('hide');
    });
    $('#company, #companyM').click(function (){
      scrollTo('#companyDiv');
      $('.button-collapse').sideNav('hide');
    });
    $('#close').click(function(){ $('.button-collapse').sideNav('hide');});
    // helper function to scroll to div (elem);
    function scrollTo(elem, error){
      if(typeof elem==='string'){
        $('html, body').animate({
          scrollTop: $(elem).offset().top
        }, 800);
      } else {
        console.log('variable must be a string');
      }
    }

    //Check to see if the window is top if not then display scroll-to-top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#totop').fadeIn();
        } else {
            $('#totop').fadeOut();
        }
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space