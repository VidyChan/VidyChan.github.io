$(document).ready(function() {
	function setHeightWindow(target) {
		$wh = $(window).height()
		target.height($wh);
	}
	function centerify(element, target, cssprop) {
		$elehe = element.height();
		$tarhe = target.height();
		$topval = ($tarhe - $elehe) / 2
		element.css(cssprop, $topval);
	}
	function changeURL(page, url) {
		if (typeof (history.pushState) != 'undefined') {
			var obj = { Page: page, Url: url };
			history.pushState(obj, obj.Page, obj.Url);
		} else {
			// do nothing let nature take its course
		}
	}
	
	setHeightWindow($('.split-section'));
	centerify($('.main-text'), $(window), 'padding-top');
	$('.about-section').css('margin-top', $(window).height());
	
	$(document).on('mouseover', '.cta', function(e) {
		$target = $(this).attr('data-hover-target');
		$($target).css('background-size', '120%');
	});
	$(document).on('mouseout', '.cta', function(e) {
		$target = $(this).attr('data-hover-target');
		$($target).css('background-size', '100%');
	});
	
	$(document).on('click', '.tran-link', function(e) {
		e.preventDefault();
		$target = $(this).attr('href');
		if ($target != '#top') {
			$scrollTo = $($target).offset().top;
			$('html, body').animate({scrollTop: $scrollTo}, 800);
		} else {
			$('html, body').animate({scrollTop: 0}, 800);
		}
	});
	
	$(window).resize(function() {
		setHeightWindow($('.split-section'));
		centerify($('.main-text'), $(window), 'padding-top');
		$('.about-section').css('margin-top', $(window).height());
	});
});