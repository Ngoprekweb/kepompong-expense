var app = app || {};

app.ExpenseCollection = Backbone.Collection.extend({
	model: app.Expense,
	localStorage: new Backbone.LocalStorage('expense-backbone'),
});