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
		$other = $(this).attr('data-other');
		$($target).find('.the-image').css('transform', 'scale(1.3)');
		$($other).find('.the-image').css('opacity', '0.6');
	});
	$(document).on('mouseout', '.cta', function(e) {
		$target = $(this).attr('data-hover-target');
		$other = $(this).attr('data-other');
		$($target).find('.the-image').css('transform', 'scale(1)');
		$($other).find('.the-image').css('opacity', '1');
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
	
	// hireme links
	$('.hireme, .hireme-top').attr('href', 'https://form.jotform.me/61095966810462').attr('target', '_blank')
	
	// images hr links
	if ($('body *').hasClass('single-port')) {
		$('.single-port').each(function() {
			$arr = $(this).find('img').attr('src').split('/');
			$newLocation = $arr[0] + '/' + $arr[1] + '/' + $arr[3];
			$(this).attr('data-featherlight', $newLocation);
		}).featherlightGallery({
			previousIcon: '<i class="fa fa-angle-left"></i>',     /* Code that is used as previous icon */
			nextIcon: '<i class="fa fa-angle-right"></i>',
			openSpeed: 300,
			beforeOpen: function(e) {
				$('body').append('<div class="featherlight-overlay"></div>').addClass('feather-open');
			},
			beforeClose: function() {
				$('body').removeClass('feather-open');
				$('.featherlight-overlay').remove();
			}
		});
		$.featherlightGallery.prototype.afterContent = function() {
			// var caption = this.$currentTarget.find('img').attr('alt');
			var caption = this.$currentTarget.attr('data-softwares');
			var title = this.$currentTarget.attr('data-title');
			this.$instance.find('.caption').remove();
			this.$instance.find('.title').remove();
			
			this.$instance.find('.featherlight-close-icon').after(
				'<div class="title">' + title + '</div>' +
				'<div class="caption">Tools: ' + caption + '</div>'
				);
			
			// $('<div class="title">').text(title).appendTo(this.$instance.find('.featherlight-content'));
			// $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
		};
	}
	if ($('body *').hasClass('img-wrapper')) {
		
		$('.single-port-wrap').find('img').each(function() {
			if (!$(this).parent('a').hasClass('img-link')) {
				$img = $(this).attr('src');
				$(this).wrap('<a href="' + $img + '" class="img-link"></a>');
			}
		});

		$('.img-wrapper .img-link').featherlightGallery({
			previousIcon: '<i class="fa fa-angle-left"></i>',     /* Code that is used as previous icon */
			nextIcon: '<i class="fa fa-angle-right"></i>',
			openSpeed: 300,
			beforeOpen: function(e) {
				$('body').append('<div class="featherlight-overlay"></div>').addClass('feather-open');
			},
			beforeClose: function() {
				$('body').removeClass('feather-open');
				$('.featherlight-overlay').remove();
			}
		});
	}
	
	$(document).on('click', '.featherlight-overlay', function() {
		var current = $.featherlight.current();
		current.close();
	})
	
	if ($('body *').hasClass('page-title-crumb')) {
		$pageTitle = $(document).find('title').text().split('-');
		$('.page-title-crumb').text($pageTitle[0].trim());
	}
	
	$(window).resize(function() {
		console.log('resized!');
		setHeightWindow($('.split-section'));
		centerify($('.main-text'), $(window), 'padding-top');
		$('.about-section').css('margin-top', $(window).height());
		
		if ($('body *').hasClass('masonry-w')) {
			$('.masonry-w').wookmark();
			$designMasonry = setTimeout(function() {
				$('.masonry-d').wookmark({
				autoResize: true,
				resizeDelay: 100,
				outerOffset: 10
			});
			}, 500);
			$designMasonry;
		}
	});
	
	$(window).load(function() {
		$('.full-loader').animate({'opacity': 0}, 500, function() {
			$(this).remove();
		});
	});
});

// masonry layout
(function() {
	// $('.port-wrap').hide();
	function getWindowWidth() {
		return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	}
	var wookmark;
	if ($('body *').hasClass('masonry-w')) {
		$('.masonry-w').imagesLoaded(function() {
			console.log('images loaded');
			wookmark = new Wookmark('.masonry-w', {
				autoResize: true,
				resizeDelay: 100,
				outerOffset: 10
			});
			$('.masonry-w').css('opacity', 1);
			$('.loader').hide();
		});
	}
	
	var wookmark_des;
	if ($('body *').hasClass('masonry-d')) {
		$('.masonry-d').imagesLoaded(function() {
			console.log('images loaded');
			wookmark_des = new Wookmark('.masonry-d', {
				autoResize: true,
				resizeDelay: 100,
				outerOffset: 15
			});
			$('.masonry-d').css('opacity', 1);
			$('.loader').hide();
		});
	}
})();