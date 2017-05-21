!(function () {

	/**
	 *  Navigation Header
	 */
	var Header = function () {

	};

	$.extend(Header.prototype, {
		
		init: function () {
			this.initVariables();
			this.bindEvents();
		},

		initVariables: function () {
			this.$root = $('.J-navbar');
		},

		bindEvents: function () {
			var self = this;
			
			self.on('click', '.J-navbarToggle', function () {
				self.$('.J-navbarMenu').toggleClass('active');
			});
		},

		on: function () {
			this.$root.on.apply(this.$root, arguments);	
		},

		$: function (selector) {
			return this.$root.find(selector);
		}
	});

	var header = new Header();

	header.init();

} ());