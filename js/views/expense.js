var app = app || {};

app.ExpenseView = Backbone.View.extend({
	tagName: '<tr>',
	template: $('#template').html(),
	render:function(){
		this.$el.append('<td>'+this.model.get('name')+'</td>');
		this.$el.append('<td>'+this.model.get('price')+'</td>');
		this.$el.append('<td>'+this.model.get('vendor')+'</td>');
		
		return this;
	},
	events:{
		'click button.btn':function(){
			alert('telo');
		}
	}
});
