var app = app || {};

app.Expense = Backbone.Model.extend({
	defaults:{
		name: '',
		date: new Date(),
		price: 0,
		vendor: ''
	}
});