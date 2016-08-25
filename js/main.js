//Module for counters
(function() {
	var $document        = document,
	decrementButton1 = $document.getElementById("btnMinus1"),
	decrementButton1 = $document.getElementById("btnMinus2"),
	incrementButton1 = $document.getElementById("btnPlus1"),
	incrementButton2 = $document.getElementById("btnPlus2"),
	counter1         = $document.getElementById("counter1"),
	counter2         = $document.getElementById("counter2");

	decrementButton1.onclick = function(e) {
		decrement(e, counter1);
	};

	decrementButton2.onclick = function(e) {
		decrement(e, counter2);
	};

	incrementButton1.onclick = function(e) {
		increment(e, counter1);
	};

	incrementButton2.onclick = function(e) {
		increment(e, counter2);
	};

	function decrement(e, counter) {
		e.preventDefault();

		var count = counter.innerHTML;
		if(count > 0) {
			count--;
		}
		counter.innerHTML = count;
	}

	function increment(e, counter) {
		e.preventDefault();

		var count = counter.innerHTML;
		count++;
		counter.innerHTML = count;
	}
}());

//Module for menu
(function() {
	var $document   = document,
		menuButton  = $document.getElementById("menu"),
		crossButton = $document.getElementById("cross"),
		menuList    = $document.getElementsByClassName("navigation__list")[0];

	menuButton.onclick = function(e) {
		e.preventDefault();

		menuButton.style.display = "none";
		menuList.style.top = "0";
	};

	crossButton.onclick = function(e) {
		e.preventDefault();

		menuButton.style.display = "block";
		menuList.style.top = "-130px";
	};
}());