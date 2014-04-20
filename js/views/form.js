app.FormView = Backbone.View.extend({
	initialize:function(options){
		this.expenses = options.expenses;

		this.on('render', this.onFinishRender);
	},
	template: _.template($('#tpl-form').html()),
	events:{
		'click .datepicker':'openPickadate'
	},
	render:function(){
		this.$el.html(this.template);
		this.trigger('render');

		return this;
	},
	onFinishRender:function(){
		console.log('finish render');

		var $form = this.$('form');
		var _this = this;
		$form.validate({
			rules:{
				'price':{
					required:true,
					number:true
				},
				'vendor':{
					required:true
				},
				'date':{
					required:true
				}
			},
			submitHandler:function(form){
				//console.log(_this.$datepicker.get('select','dd-mm-yyyy'));return;
				//console.log($form);
				var d = _this.$datepicker.get('select','dd-mm-yyyy').split('-');
				date=new Date(d[2],d[1]-1,d[0]);

				var name = $form.find('input[name="name"]').val();
				var vendor = $form.find('input[name="vendor"]').val();
				var price = $form.find('input[name="price"]').val();
				_this.expenses.create(new app.Expense({date:date,name:name,vendor:vendor,price:price}));
				// redirect back to the index
    			window.location.hash = "";
			}
		});

		var $input = this.$('form input.datepicker').pickadate({
			formatSubmit:'dd-mm-yyyy'
		});
		this.$datepicker = $input.pickadate('picker');
	},
	onSubmit:function(){
		console.log('form submit');
		
		
		return false;
	},
	openPickadate:function(event){
		
		event.stopPropagation();
	}
});