<div class="">
	<h1 class="product-top-title"><%= name %></h1>
	<div class="jk-grids container">
		<div class="product-gallery jk-unit-8-12 jk-unit-md-12-12 J-gallery">
			<div class="product-wrapper">
				<img class="J-detailImg product-md-img" src="<%= gallery[0].mdImgUrl %>"  alt="">
			</div>
			<div class="J-scrollWrapper">
				<ul class="thumbnail-wrapper J-galleryWrapper">
					<% _.each(gallery, function(item) { %>
					<li class="thumbnail-item J-galleryItem">
						<a href="javascript:;"><img src="<%= item.smImgUrl %>" alt=""></a>
					</li>
					<% }) %>
				</ul>
				<div class="widget-indicator">
					<ul class="indicator-list">
						<% if (gallery.length > 1) { %>
							<% _.each(gallery, function(item, index) { %>
							<li class="indicator-item J-indicator">
								<i></i>
							</li>
							<% }) %>
						<% } %>
					</ul>
				</div>
			</div>
		</div>
		<div class="jk-unit-4-12 jk-unit-md-12-12 product-info">
			<h1 class="product-title"><%= name %></h1>
			<dl class="product-config">
				<dt>Description:</dt>
				<dd><%= desc %></dd>
				<dd class="gap"></dd>
				<dt>Dimensions:</dt>
				<% if(category == 'clamshell' || category == 'tray') { %>
				<dd>
					<label for="">Length:</label><span><%= dimensions.length %></span><br>
					<label for="">Width:</label><span><%= dimensions.width %></span><br>
					<label for="">Height:</label><span><%= dimensions.height %></span>
				</dd>
				<% } else { %>
				<dd>
					<label for="">Height:</label><span><%= dimensions.height %></span><br>
					<label for="">Diameter:</label><span><%= dimensions.diameter %></span><br>
				</dd>
				<% } %>
				<dd class="gap"></dd>
				<% if(QTY && QTY.length) { %>
				<dt>QTY:</dt>
				<dd>
					<% _.each(QTY, function(item, index) { %>
					<p><%= item %></p>
					<% }) %>
				</dd>
				<% } %>
				<dd class="gap"></dd>
				<dt>Material:</dt>
				<dd><i class="i-pet"><%= material %></dd>
			</dl>
		</div>
	</div>
</div>