"use strict";

require.config({
	paths : {
		"jquery" : "lib/jquery",
		"jqueryui" : "lib/jquery-ui",
		"underscore" : "lib/underscore",
		"backbone" : "lib/backbone",
		"marionette":'lib/backbone-marionette',
		"backbone.wreqr":'lib/backbone-wreqr',
		"backbone.babysitter":'lib/backbone-babysitter',
		"geppetto" : "lib/backbone-geppetto",
		"text" : "lib/text",
		"datatables" : "lib/datatables",
		"accounting" : "lib/accounting"

	},
	urlArgs: "bust=" + (new Date()).getTime(),
	shim : {
		jquery : {
			exports : "$"
		},
		jqueryui : {
			deps : ["jquery"]
		},
		underscore : {
			exports : "_"
		},
		backbone : {
			deps : ["underscore", "jquery"],
			exports : "Backbone"
		},
		datatable : {
			deps : ["jquery"]
			},
		accounting : {
			exports : "accounting"
		},
		"lib/backbone-modelbinder" :{
			deps : ["backbone"]
		}
	}

});

require([
	"jquery",
 	"jqueryui",
  	"underscore",
  	"backbone", 
  	"marionette",
   	"geppetto", 
   	"accounting", 
   	"src/views/ContainerView",
   	"lib/backbone-modelbinder"
   ], function(
   		$,
   	 	jqueryUI,
   	  	_,
   	   	Backbone,
   	   	Marionette,
   	    Geppetto, 
   	    accounting, 
   	    ContainerView) {

	$(function() {

		// expose context map as public property so that
		// we can monitor the number of contexts and events
		Geppetto.setDebug(true);

		var myContainerView  =  new ContainerView();
		myContainerView.render();
		$("body").append(myContainerView.$el);

	});
});
