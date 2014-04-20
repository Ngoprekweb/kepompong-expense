var app = app || {};

app.RowView = Backbone.View.extend({
	initialize:function(options){
		this.listenTo(this.model, 'destroy', this.remove);
	},
	tagName: 'tr',
	render:function(){
		this.$el.append('<td>'+moment(this.model.get('date')).format('DD-MMM-YYYY')+'</td>');
		this.$el.append('<td>'+this.model.get('name')+'</td>');
		this.$el.append('<td>'+this.model.get('vendor')+'</td>');
		this.$el.append('<td>'+this.model.get('price')+'</td>');
		this.$el.append('<td><button type="button" class="btn btn-primary destroy">delete</button></td>');
		return this;
	},
	events:{
		'click .destroy':'delete'
	},
	delete:function(){
		console.log('delete');
		if(confirm('Are you sure'))
			this.model.destroy();
	}
});