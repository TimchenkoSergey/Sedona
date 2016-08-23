(function() {
	var doc      = document,
		minus1   = doc.getElementById("btnMinus1"),
		minus2   = doc.getElementById("btnMinus2"),
		plus1    = doc.getElementById("btnPlus1"),
		plus2    = doc.getElementById("btnPlus2"),
		counter1 = doc.getElementById("counter1"),
		counter2 = doc.getElementById("counter2");

	function minus(e, counter) {
		e.preventDefault();
		var count = counter.innerHTML;

		if(count > 0) {
			count--;
		}

		counter.innerHTML = count;
	}

	function plus(e, counter) {
		e.preventDefault();
		var count = counter.innerHTML;

		count++;

		counter.innerHTML = count;
	}

	minus1.onclick = function(e) {
		minus(e, counter1);
	};

	minus2.onclick = function(e) {
		minus(e, counter2);
	};

	plus1.onclick = function(e) {
		plus(e, counter1);
	};

	plus2.onclick = function(e) {
		plus(e, counter2);
	};
}());