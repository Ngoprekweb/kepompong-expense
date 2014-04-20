app.AppView = Backbone.View.extend({
	initialize:function(options){
		this.expenses = options.expenses;

		this.expenses.bind('add', this.addOne, this);

		console.log('initialize appView');
		//console.log(this.expenses);

		this.$content = this.$('tbody');
	},
	template: _.template($('#tpl-table').html()),
	render:function(){
		this.$el.html(this.template());

		this.$content.empty(); // make sure the content is empty before re-populate
		_this = this;

        this.expenses.forEach(function (expense) {
            _this.addOne(expense);
        });

		return this;
	},
	addOne:function( expense ){
		var rowView = new app.RowView({model:expense});
		this.$('tbody').append(rowView.render().el);
	}
});