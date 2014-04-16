var app = app || {};

app.AppView = Backbone.View.extend({
	el:'#main-table',
	render:function(){
		//this.$el.html('<table></table>');
		this.$main = this.$('table');


		return this;
	},
	initialize:function(){
		this.listenTo(app.Expenses, 'add', this.addOne);
		app.Expenses.fetch();
	},
	addOne:function( expense ){
		this.$el.append(new app.ExpenseView({model: expense}).render().el);
	},
	events:{
		'click button.btn':function(){
			alert('telo');
		}
	}
});