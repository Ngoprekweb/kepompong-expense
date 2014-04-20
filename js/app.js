var app = {
	models:{},
	views:{}
};



$(document).ready(function(){
	app.router = new app.ExpenseRouter({
		expenses: new app.ExpenseCollection()
	});

	//app.ExpenseRouter.expenses.fetch();
	app.router.expenses.fetch();

	Backbone.history.start();
});
