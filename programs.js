$('#programs_filter li a').on("click",function(){
  var ID = ($(this).attr("id"));
  var filter = ID.slice(9);
  if (filter == "all"){
    programs_show_all();
  }
  else{
    programs_show(filter);
  }
  return false;
});
$('#programs_filter_mobile').on("change",function(){
  var ID = ($(this).val());
  var filter = ID.slice(9);
  if (filter == "all"){
    programs_show_all();
  }
  else{
    programs_show(filter);
  }
  return false;
});
function programs_show_all(){
  $(".multiple-items").slick('slickUnfilter');
  $('.multiple-items').find('.slick-track').each(function() {
    $(this).parent().parent().parent().parent().parent().show();
  });
  $('.multiple-items').slick('refresh');
}
function programs_show(filter){
  programs_show_all();
  $(".multiple-items").slick('slickFilter', "." + filter );
  $('.multiple-items').find('.slick-track').each(function() {
    if($(this).children().length == 0){
      $(this).parent().parent().parent().parent().parent().hide();
    }
  });
}

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: '<a class="slick-custom-next"> <img src="https://fs.hubspotusercontent00.net/hubfs/8517951/Vector%208%20(1).svg" alt="next"> </a>',
  prevArrow: '<a class="slick-custom-prev"> <img src="https://fs.hubspotusercontent00.net/hubfs/8517951/Vector%207.svg" alt="preview"> </a>',
  autoplay: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

/*read more*/
$(".readmore-link").click( function(e) {
  // record if our text is expanded
  var isExpanded =  $(e.target).hasClass("expand");

  //close all open paragraphs
  $(".readmore.expand").removeClass("expand");
  $(".readmore-link.expand").removeClass("expand");

  // if target wasn't expand, then expand it
  if (!isExpanded){
    $( e.target ).parent( ".readmore" ).addClass( "expand" );
    $(e.target).addClass("expand");  
  } 
});
