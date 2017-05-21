!(function () {

	/**
	 *  Navigation Header
	 */
	var HomeApp = function () {

	};

	$.extend(HomeApp.prototype, {
		
		init: function () {
			this.initVariables();
			this.bindEvents();
		},

		initVariables: function () {
			this.$root = $('.J-content');

			// this.initBanner();
			if (this.isMobile()) {
				this.initBanner();
			} else {
				this.initPCBanner();
			}
		},

		bindEvents: function () {
			var self = this;
		},

		initPCBanner: function () {
			var self = this;
			var cfg = this.getBannerCfg();
			var $win = $(window);
			var $sectionBanner = self.$('.J-sectionBanner');
			var $bannerList = self.$('.J-bannerList');
			var $bannerItems = self.$('.J-bannerItem');
			var $indicators = self.$('.J-indicator');

			var len = $bannerItems.length, cur = 0;
			var autoTimer;

			$win.on('resize.banner', function () {
				var itemWidth = $win.width();
				$bannerList.width(itemWidth * len);
				$bannerItems.width(itemWidth);
			}).trigger('resize');

			function locate(dest) {
				$indicators.removeClass('active').eq(dest).addClass('active');
				
				$bannerItems.eq(dest).fadeIn('slow', function () {})
							.siblings().fadeOut('fast', function () {});
			}

			self.on('click', '.J-sectionBanner .J-indicator', function () {
				var $this = $(this);
				var cur = +$this.data('index');

				locate(cur);
			});

			$sectionBanner
			.on('mouseover', function () {
				if (cfg.autoplay && autoTimer) {
					clearInterval(autoTimer);
					autoTimer = null;
				}
			})
			.on('mouseleave', function () {
				if (cfg.autoplay) {
					autoTimer = setInterval(function () {
						cur = (cur + 1) % len;
						locate(cur);
					}, 5 * 1000);
				}
			})
			.trigger('mouseleave');
		},

		initBanner: function () {
			var self = this;
			var cfg = this.getBannerCfg();
			var $win = $(window);
			var $sectionBanner = self.$('.J-sectionBanner');
			var $bannerList = self.$('.J-bannerList');
			var $bannerItems = self.$('.J-bannerItem');
			var $indicators = self.$('.J-indicator');

			var bannerScroller = new IScroll('.J-scrollWrapper', {
				scrollX: true,
				scrollY: false,
				snap: true,
				snapSpeed: 600,
			});
			var len = $bannerItems.length, cur = 0;
			var autoTimer;

			$win.on('resize.banner', function () {
				var itemWidth = $win.width();
				
				$bannerList.width(itemWidth * len);
				$bannerItems.width(itemWidth).show();

				setTimeout(function () {
					bannerScroller.refresh();
				}, 100);
			}).trigger('resize');

			bannerScroller.on('scrollEnd', function (index) {
				cur = bannerScroller.currentPage.pageX;
				$indicators.removeClass('active').eq(cur).addClass('active');				
			});
		},

		getBannerCfg: function () {
			return {
				autoplay: !this.isMobile()
			}
		},

		isMobile: function () {
			var na = navigator.userAgent.toLowerCase();
			var mobiles = ['iphone', 'android', 'windows phone', 'ipad'];

			for(var i = 0; i < mobiles.length; i++) {
				if (na.indexOf(mobiles[i]) != -1) {
					return true;
				}
			}
			return false;
		},

		on: function () {
			this.$root.on.apply(this.$root, arguments);	
		},

		$: function (selector) {
			return this.$root.find(selector);
		}
	});

	var homeApp = new HomeApp();

	homeApp.init();

} ());