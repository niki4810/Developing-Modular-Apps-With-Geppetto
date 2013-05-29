define([
	"jquery",
	"underscore", 
	"backbone", 
	"marionette",
	"geppetto", 
	"src/controller/ApplicationContext", 
	"text!src/templates/ContainerTemplate.html", 
	"src/views/SearchView", 
	"src/views/ResultView"],
	function(
		$, 
		_, 
		Backbone, 
		Marionette,
		Geppetto, 
		ApplicationContext, 
		ContainerTemplate,
		SearchView, 
		ResultView) {

	//container view acts as plain layout view
	var ContainerView = Marionette.ItemView.extend({
		//set template
		template : ContainerTemplate,
		className : "container myContainer",
		initialize : function() {
			 _.bindAll(this);
			//create a Geppetto context
			Geppetto.bindContext({
				view : this,
				context : ApplicationContext
			});
		},
		onRender : function() {
			//when view is container view is rendered
			//construct the search view
			this.constructSearchView();
			//construct the result view
			this.constructResultView();
		},
		constructSearchView : function() {
			//instantiate an search view
			//notice that we are passig the context from the
			//current container view to the search view constructor
			var mySearchView = new SearchView({
				context : this.context,
				model : new Backbone.Model()
			});
			//render the view
			mySearchView.render();
			//append it the current container
		this.$el.append(mySearchView.$el);

		},
		constructResultView : function() {
			//instantiate an result view
			//notice that we are passig the context from the
			//current container view to the result view constructor
			var myResultView = new ResultView({
				context : this.context,
				model : new Backbone.Model()
			});
			//render the view
            myResultView.render()
			//append it the current container
			this.$el.append(myResultView.$el);
			

		}
	});
	return ContainerView;
});
