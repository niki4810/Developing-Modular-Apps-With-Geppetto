define([
	'backbone', 
	'geppetto',
	'src/commands/SearchMoviesCommand'], 
function(
	Backbone,
	Geppetto, 
	SearchMoviesCommand) {

	//return a geppetto context
	return Geppetto.Context.extend({
		//setup an initialize function
		initialize : function() {
			// map commands 
			//when ever a "performSearchEvent" is dispatch on this command
			//the context delegates that call to the SearchMoviesCommand
			this.mapCommand( "performSearchEvent"/*event name*/, SearchMoviesCommand );
		}
	});
})
