for(var n = 0; n < 30; n++) {
	var number = n+32;
	$(".intro-numbers").append("<p>1</p>");
}
$(function() {
	$(".element").typeIt({
	            strings: ["This is a test.", "a what?", "a test.", "a what?", "oh a test."],
	            speed:100,
		breakLines: false,
			breakDelay: 100
	});
});
$(function() {
	$(".1").typeIt({
	            strings: ["I am trying to write"],
	            speed:100,
		breakLines: false,
			breakDelay: 100
	});
});
$(function() {
	$(".2").typeIt({
	            strings: [" this in one sentance."],
	            speed:100,
		breakLines: false,
			breakDelay: 100
	});
});