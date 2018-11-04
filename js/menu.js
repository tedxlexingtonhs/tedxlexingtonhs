window.onload = function() {
	var menu = document.getElementById("menu");
	//var About = document.getElementById("About");

	var placeholder = document.getElementById("placeholder");
	var top = placeholder.getBoundingClientRect().top;

	var mq;

	window.onscroll = function() {
		mq = window.matchMedia( "(max-width: 1000px)" );
		if (!mq.matches) {
			top = placeholder.getBoundingClientRect().top;

			if (top < 0){
				menu.className = "fixedTopMenu";
			}

			if (top >= 1){
				menu.className = "staticMenu";
			}
		}
	}

	window.onresize = function() {
		mq = window.matchMedia( "(max-width: 1000px)" );

		if (mq.matches) {

			menu.className = "fixedBottomMenu";
			About.style.marginTop = 0;
		} else {
			if ((top < 0)){
				menu.className = "fixedTopMenu";
			}
		}
		window.onscroll();
	}

		window.onresize();
}

