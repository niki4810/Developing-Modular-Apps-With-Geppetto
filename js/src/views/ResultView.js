define([
	"jquery", 
	"underscore", 
	"backbone", 
	"marionette",
	"geppetto", 
	"text!src/templates/ResultViewTemplate.html"
	],
 function(
 	$, 
 	_, 
 	Backbone, 
 	Marionette,
 	Geppetto, 
 	ResultViewTemplate) {
	var ResultView = Marionette.ItemView.extend({
		template: ResultViewTemplate,
		className : "well span6 clearfix",
		bindings : {
				"title" : '[name = "title"]',
				"year" : '[name = "year"]',
				"rated" : '[name = "rated"]',
				"rating" :'[name ="rating"]',
				"poster" :{selector: '[name=poster]',  elAttribute: 'src'}
		},
		initialize : function() {
			  _.bindAll(this);
				//on view initialize, initialize _modelBinder
			this._modelBinder = new Backbone.ModelBinder();
			//save the passed in context locally  such that
			// we can dispatch or listen to events on this context
			this.context = this.options.context;
			this.context.listen(this, "loadResultsSuccessEvent"/*event name*/, 
								this.handleSearchResultsLoaded/*event listener*/);
			this.context.listen(this, "loadResultsErrorEvent"/*event name*/, 
								this.handleSearchResultsLoadError/*event listener*/);
		},		
		close : function() {
			//when view closes, unbind Model bindings
			this._modelBinder.unbind();
		},
		onRender : function() {
			
			this._modelBinder.bind(this.model/*the model to bind*/, 
								   this.el/*root element*/, 
								   this.bindings /*bindings*/ );
								   
						   
		},
		handleSearchResultsLoaded : function(data){
			this.model.clear();
			this.model.set(data);
		},
		handleSearchResultsLoadError : function(){
			this.model.clear();
			alert('Opps...something went wrong, try searching again');
		}
	});

	return ResultView;

})
