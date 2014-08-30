
function tabs(){

	var tabs = document.getElementsByClassName('tab-item'),
		pages = document.getElementsByClassName('tab-item-cnt'),
		current = 0;

	[].forEach.call(tabs, function(tab, index){
		tab.addEventListener('click', function(){
			tabs[current].classList.remove('active');
			pages[current].classList.remove('active');
			tabs[index].classList.add('active');
			pages[index].classList.add('active');
			current = index;					
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