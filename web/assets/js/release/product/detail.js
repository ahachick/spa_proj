/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\t<h1 class=\"product-top-title\"><%= name %></h1>\n\t<div class=\"jk-grids container\">\n\t\t<div class=\"product-gallery jk-unit-8-12 jk-unit-md-12-12 J-gallery\">\n\t\t\t<div class=\"product-wrapper\">\n\t\t\t\t<img class=\"J-detailImg product-md-img\" src=\"<%= gallery[0].mdImgUrl %>\"  alt=\"\">\n\t\t\t</div>\n\t\t\t<div class=\"J-scrollWrapper\">\n\t\t\t\t<ul class=\"thumbnail-wrapper J-galleryWrapper\">\n\t\t\t\t\t<% _.each(gallery, function(item) { %>\n\t\t\t\t\t<li class=\"thumbnail-item J-galleryItem\">\n\t\t\t\t\t\t<a href=\"javascript:;\"><img src=\"<%= item.smImgUrl %>\" alt=\"\"></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<% }) %>\n\t\t\t\t</ul>\n\t\t\t\t<div class=\"widget-indicator\">\n\t\t\t\t\t<ul class=\"indicator-list\">\n\t\t\t\t\t\t<% if (gallery.length > 1) { %>\n\t\t\t\t\t\t\t<% _.each(gallery, function(item, index) { %>\n\t\t\t\t\t\t\t<li class=\"indicator-item J-indicator\">\n\t\t\t\t\t\t\t\t<i></i>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<% }) %>\n\t\t\t\t\t\t<% } %>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"jk-unit-4-12 jk-unit-md-12-12 product-info\">\n\t\t\t<h1 class=\"product-title\"><%= name %></h1>\n\t\t\t<dl class=\"product-config\">\n\t\t\t\t<dt>Description:</dt>\n\t\t\t\t<dd><%= desc %></dd>\n\t\t\t\t<dd class=\"gap\"></dd>\n\t\t\t\t<dt>Dimensions:</dt>\n\t\t\t\t<% if(category == 'clamshell' || category == 'tray') { %>\n\t\t\t\t<dd>\n\t\t\t\t\t<label for=\"\">Length:</label><span><%= dimensions.length %></span><br>\n\t\t\t\t\t<label for=\"\">Width:</label><span><%= dimensions.width %></span><br>\n\t\t\t\t\t<label for=\"\">Height:</label><span><%= dimensions.height %></span>\n\t\t\t\t</dd>\n\t\t\t\t<% } else { %>\n\t\t\t\t<dd>\n\t\t\t\t\t<label for=\"\">Height:</label><span><%= dimensions.height %></span><br>\n\t\t\t\t\t<label for=\"\">Diameter:</label><span><%= dimensions.diameter %></span><br>\n\t\t\t\t</dd>\n\t\t\t\t<% } %>\n\t\t\t\t<dd class=\"gap\"></dd>\n\t\t\t\t<% if(QTY && QTY.length) { %>\n\t\t\t\t<dt>QTY:</dt>\n\t\t\t\t<dd>\n\t\t\t\t\t<% _.each(QTY, function(item, index) { %>\n\t\t\t\t\t<p><%= item %></p>\n\t\t\t\t\t<% }) %>\n\t\t\t\t</dd>\n\t\t\t\t<% } %>\n\t\t\t\t<dd class=\"gap\"></dd>\n\t\t\t\t<dt>Material:</dt>\n\t\t\t\t<dd><i class=\"i-pet\"><%= material %></dd>\n\t\t\t</dl>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var template = __webpack_require__(0);

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


/***/ })
/******/ ]);