var captionLength = 0;
var isTag;
var isBreak = true;
var char,twoChar;
var caption = "<br><span class='greeting'>I'm Chandranshu Rao</span><hr id ='headDivider' class='dontGrow'><br><span class ='subgreeting'>Computer Science Student</span>";
var terminalClicked = false;
var brokenString = "<br><span class='greeting'>I'm Chandranshu Rao</span><hr id ='headDivider' class='dontGrow'>"
var switchString = "<br><span class='greeting'>I'm Chandranshu Rao</span><hr id ='headDivider' class='dontGrow'><br>"
var fullCaption = "<br><span class='greeting'>I'm Chandranshu Rao</span><hr id ='headDivider' class='grow'><br><span class ='subgreeting'>Computer Science Student</span>";

$(document).ready(function(){
  setInterval("animateCursor()",500);
  animateBreak();
  type();
});

function type(){
  $(document).click(function(){
    terminalClicked = true;
  });

  if(terminalClicked){
    document.getElementById('caption').innerHTML = fullCaption;
		$('#caption').addClass('captionIsDone');
    return;
  };

  var currentString = caption.slice(0,++captionLength);
  if(currentString === caption){
		$('#caption').addClass('captionIsDone');
		return;
	}

  if(currentString === brokenString){
    setTimeout("animateBreak()",180);
    setTimeout("changeCursor()",100);
  }

  if(currentString === switchString){
    caption = fullCaption;
  }

  document.getElementById('caption').innerHTML = currentString;

  char = currentString.slice(-1);
  twoChar = currentString.slice(-3,-1);

  if(char === '<') isTag = true;
  if(char === '>') isTag = false;

  if(twoChar != 'br') isBreak = false;
  else isBreak = true;

  if(isTag) return type();
  if(captionLength <= caption.length && isBreak){
    setTimeout("type()",900);
  }
  else if(captionLength <= caption.length && !isBreak){
    setTimeout("type()",90);
  }

};

function animateCursor() {
  $("#cursor").animate({opacity: 0},"slow","swing").animate({opacity: 1},"slow","swing");
};

function animateBreak() {
  $('#headDivider').removeClass('dontGrow');
  $('#headDivider').addClass('grow');
};

function changeCursor(){
  $("#cursor").addClass('cursorFontSize');
}

var myArrow = setInterval("showArrow()",1000);

function showArrow(){
	$(document).ready(function(){
		if($('#caption').hasClass('captionIsDone')){
			$('#arrow').removeClass('dont-show-arrow');
			$('#arrow').addClass('showArrow');
			clearInterval(myArrow);
		}
	});
}
