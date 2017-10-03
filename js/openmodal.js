function openModal(selector){
  $(selector).fadeIn(300, function(){
    $(window).trigger("resize.twentytwenty");
  });
}
