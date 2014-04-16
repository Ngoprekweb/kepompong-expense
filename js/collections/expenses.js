var app = app || {};

var ExpenseCollection = Backbone.Collection.extend({
	model: app.Expense,
	localStorage: new Backbone.LocalStorage('expense-backbone'),
});

app.Expenses = new ExpenseCollection();