//Smooth Scrolling when links are clicked
$(document).ready(function(){
var menuHeight = $('.navbar').height();
$(".navbar a,.term a").on('click', 	function(event) {
	if (this.hash !== "") {
		event.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top - menuHeight
		}, 700, function(){
		window.location.hash = hash;
		});
	}
	else if (this.hash === "") {
		var hash = this.hash
		$('html, body').animate({
			scrollTop: 0
		}, 700, function(){
		window.location.hash = hash;
		});
	}
});
});

//Indicate which section is active on menu
$(document).scroll(function() {
	var menuHeight = $('#menu').height();
  var scroll_top = $(document).scrollTop();
  var div_one_top = $('#introduction').position().top - menuHeight;
  var div_two_top = $('#portfolio').position().top - menuHeight;
  var div_three_top = $('#social').position().top - menuHeight;

  if(scroll_top > div_one_top && scroll_top < div_two_top) {
    $("#list a").removeClass("active");
    $("#list a[href='#introduction']").addClass('active');
  } else if( scroll_top > div_two_top && scroll_top < div_three_top) {
    $("#list a").removeClass('active');
    $("#list a[href='#portfolio']").addClass('active');;
  } else if(scroll_top > div_three_top){
    $("#list a").removeClass('active');
    $("#list a[href='#social']").addClass('active');
  }
  else{
    $("#list a").removeClass('active');
  }
});
