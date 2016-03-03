(function(){

	var texts = $('h1[id^="content-"]').hide();
    var i = 0;

    (function cycle() { 
	    texts.eq(i).fadeIn(400)
	              .delay(2500)
	              .fadeOut(400, cycle);

	    i = ++i % texts.length;

	})();
 
})();