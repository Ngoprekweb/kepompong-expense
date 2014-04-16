var app = app || {};
var ENTER_KEY = 13;

$(function() {

	// Kick things off by creating the **App**.
	
	var v = new app.AppView();
	v.render();

	console.log(v.render().el);


});

$(document).ready(function(){
	$('#myModal').on('shown.bs.modal',function(e){
		$('.datepicker').pickadate();
	});
});