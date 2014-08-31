
var current = 0;

function tabs(){

	var tabs = document.getElementsByClassName('tab-item'),
		pages = document.getElementsByClassName('tab-item-cnt');

	[].forEach.call(tabs, function(tab, index){
		tab.addEventListener('click', function(){

			tabs[current].classList.remove('active');
			pages[current].classList.remove('active');
			tabs[index].classList.add('active');
			pages[index].classList.add('active');
			current = index;

			if (current === 0) {
				thumbElem.style.left = 0 + 'px';
			} else if (current === 1) {
				thumbElem.style.left = 370 + 'px';
			} else {
				thumbElem.style.left = 680 + 'px';
			}					
		});
	});
};
tabs();



function libra(){
	var leftCup = document.getElementsByClassName('discript-left-cup'),
		rightCup = document.getElementsByClassName('discript-right-cup'),
		libra = document.getElementsByClassName('cups-block');

	leftCup[0].addEventListener('click', function(event){
		libra[0].classList.add('outweighed-left');
		libra[0].classList.remove('outweighed-right');
	});
	rightCup[0].addEventListener('click', function(event){
		libra[0].classList.add('outweighed-right');
		libra[0].classList.remove('outweighed-left');
	});

};
libra();




var tabsSwipe = document.getElementsByClassName('tab-item'),
	pagesSwipe = document.getElementsByClassName('tab-item-cnt');

var sliderElem = document.getElementById('swipe');
var thumbElem = sliderElem.children[0];

thumbElem.ondragstart = function() { return false; };
thumbElem.onmousedown = function(e) {
  e = fixEvent(e);
  var thumbCoords = getCoords(thumbElem);
  var shiftX = e.pageX - thumbCoords.left;
  var sliderCoords = getCoords(sliderElem);

  document.onmousemove = function(e) {
    e = fixEvent(e);

    var newLeft = e.pageX - shiftX - sliderCoords.left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumbElem.style.left = newLeft + 'px';

    if (newLeft > 175) {
		tabsSwipe[0].classList.remove('active');
		pagesSwipe[0].classList.remove('active');
		tabsSwipe[2].classList.remove('active');
		pagesSwipe[2].classList.remove('active');
		tabsSwipe[1].classList.add('active');
		pagesSwipe[1].classList.add('active');

		current = 1;
    }
    if (newLeft > 600){
		tabsSwipe[1].classList.remove('active');
		pagesSwipe[1].classList.remove('active');
		tabsSwipe[2].classList.add('active');
		pagesSwipe[2].classList.add('active');

		current = 2;
    } 
    if (newLeft < 175) {
		tabsSwipe[1].classList.remove('active');
		pagesSwipe[1].classList.remove('active');
		tabsSwipe[0].classList.add('active');
		pagesSwipe[0].classList.add('active');

		current = 0;
    }

  }

  document.onmouseup = function() {
    document.onmousemove = document.onmouseup = null;
  };
  return false; 
};

function fixEvent(e) {
  e = e || window.event;
  if (!e.target) e.target = e.srcElement;
  if (e.pageX == null && e.clientX != null ) {
    var html = document.documentElement;
    var body = document.body;
    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;
  }
  if (!e.which && e.button) {
    e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : ( e.button & 4 ? 2 : 0 ) )
  }
  return e;
}

function getCoords(elem) {

    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var left = box.left + scrollLeft - clientLeft;
    return { top: Math.round(top), left: Math.round(left) };
}