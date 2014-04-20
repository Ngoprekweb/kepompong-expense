var app = app || {};

app.NavbarView = Backbone.View.extend({
	template: _.template( $('#tpl-navbar').html() ),
	render:function(){
		this.$el.html(this.template);
		return this;
	},
	setActive:function(link){
		this.$('ul.navbar-nav li').removeClass('active');
		this.$('li[rel="'+link+'"]').addClass('active');
	}
});