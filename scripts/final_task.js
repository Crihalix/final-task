
function tabs(){

	var tabs = document.getElementsByClassName("tab-item"),
		pages = document.getElementsByClassName("tab-item-cnt"),
		current = 0;

	[].forEach.call(tabs, function(tab, index){
		tab.addEventListener("click", function(event){
			tabs[current].classList.remove("active");
			pages[current].classList.remove("active");
			tabs[index].classList.add("active");
			pages[index].classList.add("active");
			current = index;					
		});
	});
};
tabs();