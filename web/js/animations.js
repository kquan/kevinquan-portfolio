// Animate Condado stats in
$(window).scroll(function() {	
	var scrollTop = $(window).scrollTop() + $(window).height();
	var condadoStatsTop = $('#condado-stats').offset().top;
 
	if(scrollTop >= condadoStatsTop && !$('#condado-stats li:nth-child(1)').hasClass('condado-stat-visible')) {
		$('#condado-stats li:nth-child(1)').addClass('condado-stat-visible');
		$({countNum:0}).animate({countNum:30000}, {
			duration: 2000,
			easing: 'linear',
			step: function() {
				$('#condado-downloads').text(Math.floor(this.countNum)+"+");
			},
			complete: function() {
				$('#condado-downloads').text("30000+");
			}
		});
		setTimeout(function() {
			$('#condado-stats li:nth-child(2)').addClass('condado-stat-visible');
			$({countNum:0}).animate({countNum:47}, {
				duration: 1000,
				easing: 'linear',
				step: function() {
					$('#condado-rating').text(Math.floor(this.countNum)/10+"/5");
				},
				complete: function() {
					$('#condado-rating').text("4.7/5");
				}
			});
		}, 200);
		setTimeout(function() {
			$('#condado-stats li:nth-child(3)').addClass('condado-stat-visible');
			$({countNum:0}).animate({countNum:750}, {
				duration: 1500,
				easing: 'linear',
				step: function() {
					$('#condado-reviews').text(Math.floor(this.countNum)+"+");
				},
				complete: function() {
					$('#condado-reviews').text("750+");
				}
			});
		}, 400);
	}
});