var template = require('./template/content.tpl');

$.extend(exports, {
		
	init: function () {

		this.loadData($.proxy(function (data) {
			this.initVariables(data);
			this.populateUI(data);
			this.setupGallery();
		}, this));
	},

	setupGallery: function () {

		if (this.isMobile()) {
			this.initMoblieGallery();
		} else {
			this.initPCGallery();
		}
	},

	initPCGallery: function () {
		var self = this;
		var $gallery = self.$('.J-gallery');
		var $detailImg = $gallery.find('.J-detailImg');
		var $galleryList = self.$('.J-galleryWrapper');

		$galleryList.on('click', '.J-galleryItem', function () {
			var $this = $(this);

			if ($this.hasClass('curr')) {
				return;
			} else {
				$this.addClass('curr').siblings().removeClass('curr');
			}

			var thumbnailUrl = $this.find('img').attr('src');
			var detailUrl = thumbnailUrl.replace('product-360x240', 'product-720x480');

			$detailImg.attr('src', detailUrl);
		});

		$detailImg.eq(0).addClass('curr');
	},

	initMoblieGallery: function () {
		var self = this;
		var $win = $(window);
		var $galleryList = self.$('.J-galleryWrapper');
		var $galleryItems = self.$('.J-galleryItem');
		var $indicators = self.$('.J-indicator');

		var galleryScroller = new IScroll('.J-scrollWrapper', {
			scrollX: true,
			scrollY: false,
			snap: true,
			snapSpeed: 600,
		});
		var len = $galleryItems.length, cur = 0;
		var autoTimer;

		$win.on('resize.gallery', function () {
			var itemWidth = $win.width();
			
			$galleryList.width(itemWidth * len);
			$galleryItems.width(itemWidth).css({ 'display': 'inline-block' });

			setTimeout(function () {
				galleryScroller.refresh();
			}, 100);
		}).trigger('resize');

		galleryScroller.on('scrollEnd', function (index) {
			cur = galleryScroller.currentPage.pageX;
			$indicators.removeClass('active').eq(cur).addClass('active');				
		});

		$indicators.eq(0).addClass('active')
	},

	isMobile: function () {
		var na = navigator.userAgent.toLowerCase();
		var mobiles = ['iphone', 'android', 'windows phone'];

		for(var i = 0; i < mobiles.length; i++) {
			if (na.indexOf(mobiles[i]) != -1) {
				return true;
			}
		}
		return false;
	},

	initVariables: function (data) {
		this.catalog = data;
		this.productId = this.getQuery('product');
		this.product = this.catalog[this.productId] || null;

		this.$root = $('.J-content');

		console.log(this.product);
	},

	populateUI: function () {

		if (this.product) {
			this.renderBreadcrumb();
			this.renderDetail();
		}
	},

	renderDetail: function () {
		var self = this;
		var $detail = this.$('.J-detail');

		// $detail.html(M.render(template, $.extend(self.product, {
		// 	showQTY: function () {
		// 		return self.product.QTY && self.product.QTY.length;
		// 	}
		// })));

		$detail.html(_.template(template)(self.product));

	},

	renderBreadcrumb: function () {
		var $breadcrumb = $('.J-breadcrumb');
		var home = '<a href="/">Home</a>';
		var gap = '<span>/</span>';
		var category = '<a href="/product/' + this.product.category.toLowerCase() + '/">' + this.product.category + '</a>';
		var product = '<a href="">' + this.product.name + '</a>';
		var snippets = '';

		snippets += home;
		snippets += gap;
		snippets += category;
		snippets += gap;
		snippets += product;

		$breadcrumb.html(snippets);
	},

	loadData: function (cb) {
		var catalog = G_catalog;

		if (Array.isArray(catalog)) {
			catalog = _.indexBy(G_catalog, 'id');
		}

		cb(catalog);

		// $.ajax('../../assets/product/clamshell.json')
		// .done(function (data) {
		// 	console.log(data);
		// 	cb(data);
		// })
		// .fail(function () {
		// 	cb(null);
		// });
	},

	getQuery: (function () {
		var query = location.search.slice(1).split('&');
		var queryMap;

		for(var i = 0; i< query.length; i++) {
			var pair = query[i].split('=');

			query[i] = {
				name: decodeURIComponent(pair[0]),
				value: pair.length == 2 ? decodeURIComponent(pair[1]) : ''
			};
		}

		queryMap = _.indexBy(query, 'name');

		return function (name) {
			return queryMap[name].value;
		}

	})(),

	on: function () {
		this.$root.on.apply(this.$root, arguments);	
	},

	$: function (selector) {
		return this.$root.find(selector);
	}
});

exports.init();
