var app = app || {};

app.Expense = Backbone.Model.extend({
	defaults:{
		name: '',
		price: 0,
		vendor: ''
	}
});