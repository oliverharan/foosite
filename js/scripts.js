$(document).ready(function(){ 
 
 $('.dropdown .dropdown-menu').on({
	"click":function(e){
      e.stopPropagation();
    }
});

$('body > header > div > div > div > div:nth-child(1) > div').click(function(){
  $('body > header > div > div > div > div:nth-child(1) > div > div.overlay > div:nth-child(1)').slideToggle("fast");
});
$('.col-md-4:nth-child(1) > div').hover(function() {
    //$('body > header > div > div > div > div:nth-child(1) > div > div.overlay > div:nth-child(1)').slideToggle(270);
  $('.col-md-4:nth-child(1) > div > div.overlay > div:nth-child(1)').toggle( "ease");
});
  $('.col-md-4:nth-child(2) > div').hover(function() {
    //$('body > header > div > div > div > div:nth-child(1) > div > div.overlay > div:nth-child(1)').slideToggle(270);
  $('.col-md-4:nth-child(2) > div > div.overlay > div:nth-child(1)').toggle( "ease");
});
 
});    
    
