//INITIALIZER FOR SIDENAV
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  //INITIALIZER FOR CAROUSEL
  // jQuery

    $(document).ready(function(){
      //Init Carousel
      $('.carousel').carousel();

    // Init Carousel Slider
    $('.carousel.carousel-slider').carousel({fullWidth:true});
    });

//collapsible
    $(document).ready(function(){
        $('.collapsible').collapsible();
      });
//tooltip
      $(document).ready(function(){
   $('.tooltipped').tooltip();
 });

 $('.dropdown-trigger').dropdown();

//MATERIAL BOX
 $(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  //Slider
  $(document).ready(function(){
    $('.slider').slider();
  });

  //modals
  $(document).ready(function(){
    $('.modal').modal();
  });

  //SIDE NAV
  $('.sidenav').sidenav();

  //swipeable tabs
   $('.tabs').tabs();
