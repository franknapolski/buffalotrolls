chrome.extension.sendMessage({}, function(response) {

	var $body = $("body");
	$body.hide();

	var readyStateCheckInterval = setInterval(function() {
		console.log("Start");

	if (document.readyState === "complete"){

		clearInterval(readyStateCheckInterval);

		$("head").append("<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Slabo+13px' rel='stylesheet' type='text/css'><link href='http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' rel='stylesheet'><script src='http://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js' type='text/javascript'><link rel='stylesheet' href='http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/themes/smoothness/jquery-ui.css' /><script src='http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>");


		console.log("Inject");
		var $nav = $(".navItem .box.col50 li a");
		var $headline = $("#articleHeadline");
		var $article = $(".articleP");
		var $comments = $("#dsq-2");


		$body.html("<div id='container'></div>");
		$("<a id='article-button'><div id='icon'><span></span><span></span><span></span><span></span></div></a>").appendTo("body");

		$("<div id='headline'><span></span></div>").appendTo("#container");

		$headline.appendTo("#headline span");

		$("<a href='#dsq-2' class='but but-circle page-scroll'><i class='fa fa-angle-double-down animated'></i></a>").appendTo("#headline span");

		$("<div id='comments'><div id='disqus'></div></div>").appendTo("#container");
		$("<p id='about'>This browser extension developed by <a href='http://nplsk.info'>nplsk.info</a></p>").appendTo("#container");


		// $("<div id='links'></div>").appendTo("#container");

		// $("<h2>Other Articles</h2>").appendTo("#links");
		// $nav.each(function(){
		// 	if (!$(this).hasClass("rmred")) {
		// 		$(this).appendTo("#links");
		// 	}
		// });


		$("<div id='article'></div>").appendTo("body");
		$article.appendTo("#article");

		$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });

	    $('#article-button').bind('click', function(event) {
	        var $view = $("#container");
	     		$("#icon").toggleClass('open');
		    	value = $view.css('right') === '600px' ? 0 : '600px';
		      $view.animate({
		          right: value
		      });
	        event.preventDefault();
	    });
	    $('#container').bind('click', function(event){
				if ($("#icon").hasClass('open')) {
					value = $(this).css('right') === '600px' ? 0 : '600px';
 					$(this).animate({
						right: value
					});
					$("#icon").toggleClass('open');
				}
	    });


		});

		$comments.appendTo("#disqus");


		$body.delay(1000).fadeIn(1000);

	}
	}, 10);
});
