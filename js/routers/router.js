var app = app || {};

app.ExpenseRouter = Backbone.Router.extend({
    routes:{
        '': 'home',
        'add': 'add'
    },

    initialize:function(options){
        this.expenses = options.expenses;

    	this.navbarView = new app.NavbarView();
    	$('body').prepend(this.navbarView.render().el);

        this.$content = $('#main-content');
    },

    'home':function(param){
    	this.navbarView.setActive('home');

        app.homeView = new app.AppView({
            expenses: this.expenses
        });
		app.homeView.render();

        //this.expenses.reset();
        //this.expenses.fetch();

        this.$content.html(app.homeView.el);
	},

	add:function(param){
        this.navbarView.setActive('add');

        app.addView = new app.FormView({
            expenses: this.expenses
        });
        app.addView.render();

		this.$content.html(app.addView.el);
	}
});

